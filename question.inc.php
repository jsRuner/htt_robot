<?php

/**
 *      [Discuz!] (C)2001-2099 Comsenz Inc.
 *      This is NOT a freeware, use is subject to license terms
 *
 *      $Id: admincp.inc.php 29364 2012-04-09 02:51:41Z monkey $
 */

if(!defined('IN_DISCUZ') || !defined('IN_ADMINCP')) {
    exit('Access Denied');
}

//phpinfo();
//exit();

$Plang = $scriptlang['htt_robot'];


if($_GET['op'] == 'add') {

    if(!submitcheck('submit')) {

        showformheader('plugins&operation=config&do='.$pluginid.'&identifier=htt_robot&pmod=question&op=add', 'enctype');
        showtableheader();
        showsetting('文件', 'questionfile', '', 'file');
//        showsetting('文件', 'questionfile', '', 'text');
        showsubmit('submit');
        showtablefooter();
        showformfooter();
        exit();

    }else{

        set_include_path('source/plugin/htt_robot/libs/');
        include 'PHPExcel/IOFactory.php';
//        $inputFileName = 'source/plugin/htt_robot/libs/11.xlsx';
        $inputFileName = $_FILES["questionfile"]["tmp_name"];
        echo 'Loading file ',pathinfo($inputFileName,PATHINFO_BASENAME),' using IOFactory to identify the format<br />';
        $objPHPExcel = PHPExcel_IOFactory::load($inputFileName);
        $sheetData = $objPHPExcel->getActiveSheet()->toArray(null,true,true,true);
        $questions = [];
        var_dump($sheetData);
        for($i = 3; i< count($sheetData) ; $i++){
            if (trim($sheetData[$i]['A']) == ''){
                continue;
            }
            $data = [
                'question'=>$sheetData[$i]['A'],
                'answer'=>$sheetData[$i]['B'],
                'dateline'=>time()
            ];

            DB::insert('httrobot_question',$data);
        }
//        $filename = 'source/plugin/htt_robot/libs/111.csv';
//
//        $handle = fopen($filename, 'r');
//        $result = input_csv($handle); //解析csv
//        $len_result = count($result);
//        if($len_result==0)
//        {
//            echo '没有任何数据！';
//            exit;
//        }
//
//        echo '111';
//
//        $currenttime = time();
//        for($i = 1; $i < $len_result; $i++) //循环获取各字段值
//        {
//            $question = iconv('gb2312', 'utf-8', $result[$i][0]); //中文转码
//            $answer = iconv('gb2312', 'utf-8', $result[$i][1]);
//            $dataline = $currenttime;
//            $data_values .= "('$question','$answer','$dataline'),";
//        }
//        $data_values = substr($data_values,0,-1); //去掉最后一个逗号
//
//        echo $data_values;
//        fclose($handle); //关闭指针
//        $query = DB::query("insert into httrobot_question (question,answer,dateline) values $data_values"); //批量插入数据表中
//        if($query)
//        {
//            echo '导入成功！';
//        }else{
//            echo '导入失败！';
//        }
//
//        exit();
        cpmsg('导入成功', 'action=plugins&operation=config&do='.$pluginid.'&identifier=htt_robot&pmod=question', 'succeed');

    }


}
elseif($_GET['op'] == 'del_many'){


    if(!submitcheck('submit')) {
//        选择日期 。删除这个日期时间段内的
        echo '<script type="text/javascript" src="static/js/calendar.js"></script>';
        showformheader('plugins&operation=config&do='.$pluginid.'&identifier=htt_robot&pmod=question&op=del_many', 'enctype');
        showtableheader();
        showsetting(lang('plugin/htt_robot', 'start_time'),'start_time', '', 'calendar','',0,'',1);
        showsetting(lang('plugin/htt_robot', 'end_time'),'end_time', '', 'calendar','',0,'',1);

        showsubmit('submit');
        showtablefooter();
        showformfooter();

    }else{


        DB::delete("httrobot_question",'dateline >'.strtotime($_GET['start_time']).' AND dateline <='.strtotime($_GET['end_time']));
        cpmsg(lang('plugin/htt_robot', 'show_action_succeed'), 'action=plugins&operation=config&do='.$pluginid.'&identifier=htt_robot&pmod=question', 'succeed');

    }
    exit();
}

elseif($_GET['op'] == 'delete') {
    //判断来源
    if ($_GET['formhash'] != FORMHASH) {
        showquestion('undefined_action');
    }
    C::t('#htt_robot#question')->delete_by_id(intval($_GET['id']));
    ajaxshowheader();
    echo $Plang['show_action_succeed'];
    ajaxshowfooter();
}

$ppp = 50;
$resultempty = FALSE;
$srchadd = $searchtext = $extra = $srchid = '';
$page = max(1, intval($_GET['page']));

//存在则追加参数。用户  分类  状态。
if(!empty($_GET['question'])){
//    $srchadd .= "AND username='".$_GET['username']."'";
//    $extra .= '&username='.$_GET['username'];
    $srchadd .= "AND question='".daddslashes($_GET['question'])."'";
    $extra .= '&question='.daddslashes($_GET['question']);





}



if($searchtext) {
    $searchtext = '<a href="'.ADMINSCRIPT.'?action=plugins&operation=config&do='.$pluginid.'&identifier=htt_robot&pmod=question">'.$Plang['search'].'</a>&nbsp'.$searchtext;
}

loadcache('usergroups');

showtableheader();
showformheader('plugins&operation=config&do='.$pluginid.'&identifier=htt_robot&pmod=question', 'repeatsubmit');
showsubmit('repeatsubmit', $Plang['search'], '问题'.': <input name="question" value="'.dhtmlspecialchars($_GET['question']).'" class="txt" />&nbsp;&nbsp;', $searchtext);
showformfooter();



echo '<tr class="header"><th>添加时间</th><th>预设问题</th><th>预设回答</th><th></th></tr>';

if(!$resultempty) {

    $count = C::t('#htt_robot#question')->count_by_search($srchadd);
    $questions = C::t('#htt_robot#question')->fetch_all_by_search($srchadd, ($page - 1) * $ppp, $ppp);


    $i = 0;
    foreach($questions as $question) {





        $i++;
        echo '<tr>'.
            '<td>'.date('Y-m-d H:i:s',$question['dateline']).'</td>'.
            '<td>'.$question['question'].'</td>'.
            '<td>'.$question['answer'].'</td>'.
            '<td><a id="p'.$i.'" onclick="ajaxget(this.href, this.id, \'\');return false" href="'.ADMINSCRIPT.'?action=plugins&operation=config&do='.$pluginid.'&identifier=htt_robot&formhash='.FORMHASH.'&pmod=question&id='.$question['id'].'&op=delete">['.$lang['delete'].']</a></td>
            </tr>';
    }
}


$del_many = '<input type="button" class="btn" onclick="location.href=\''.ADMINSCRIPT.'?action=plugins&operation=config&do='.$pluginid.'&identifier=htt_robot&pmod=question&op=del_many\'" value="'.$Plang['del_many'].'" />';

$add_many = '<input type="button" class="btn" onclick="location.href=\''.ADMINSCRIPT.'?action=plugins&operation=config&do='.$pluginid.'&identifier=htt_robot&pmod=question&op=add\'" value="导入知识库" />';

if($questions){
//    showsubmit('', '', $del_many);
    showsubmit('', '', $del_many, $add_many);
}else{
    showsubmit('', '', 'td', $add_many);
}

showtablefooter();

echo multi($count, $ppp, $page, ADMINSCRIPT."?action=plugins&operation=config&do=$pluginid&identifier=htt_robot&pmod=question$extra");

?>