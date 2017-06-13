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



$Plang = $scriptlang['htt_robot'];
/*
$Plang['username'] = '用户名';
$Plang['dateline'] = '请求时间';
$Plang['message'] = '请求内容';
$Plang['reply'] = '机器人回答';
$Plang['ip'] = '用户IP';

$Plang['show_action_succeed'] ='操作成功';

$Plang['del_many'] = '批量删除';

$Plang['search'] = '查询';

*/


if($_GET['op'] == 'add') {

}
elseif($_GET['op'] == 'del_many'){


    if(!submitcheck('submit')) {
//        选择日期 。删除这个日期时间段内的
        echo '<script type="text/javascript" src="static/js/calendar.js"></script>';
        showformheader('plugins&operation=config&do='.$pluginid.'&identifier=htt_robot&pmod=message&op=del_many', 'enctype');
        showtableheader();
        showsetting(lang('plugin/htt_robot', 'start_time'),'start_time', '', 'calendar','',0,'',1);
        showsetting(lang('plugin/htt_robot', 'end_time'),'end_time', '', 'calendar','',0,'',1);

        showsubmit('submit');
        showtablefooter();
        showformfooter();

    }else{


        DB::delete("httrobot_message",'dateline >'.strtotime($_GET['start_time']).' AND dateline <='.strtotime($_GET['end_time']));
        cpmsg(lang('plugin/htt_robot', 'show_action_succeed'), 'action=plugins&operation=config&do='.$pluginid.'&identifier=htt_robot&pmod=message', 'succeed');

    }
    exit();
}

elseif($_GET['op'] == 'delete') {
    //判断来源
    if ($_GET['formhash'] != FORMHASH) {
        showmessage('undefined_action');
    }
    C::t('#htt_robot#message')->delete_by_id(intval($_GET['id']));
    ajaxshowheader();
    echo $Plang['show_action_succeed'];
    ajaxshowfooter();
}

$ppp = 50;
$resultempty = FALSE;
$srchadd = $searchtext = $extra = $srchid = '';
$page = max(1, intval($_GET['page']));

//存在则追加参数。用户  分类  状态。
if(!empty($_GET['username'])){
//    $srchadd .= "AND username='".$_GET['username']."'";
//    $extra .= '&username='.$_GET['username'];
    $srchadd .= "AND username='".daddslashes($_GET['username'])."'";
    $extra .= '&username='.daddslashes($_GET['username']);





}



if($searchtext) {
    $searchtext = '<a href="'.ADMINSCRIPT.'?action=plugins&operation=config&do='.$pluginid.'&identifier=htt_robot&pmod=message">'.$Plang['search'].'</a>&nbsp'.$searchtext;
}

loadcache('usergroups');



showtableheader();
showformheader('plugins&operation=config&do='.$pluginid.'&identifier=htt_robot&pmod=message', 'repeatsubmit');
showsubmit('repeatsubmit', $Plang['search'], $lang['username'].': <input name="username" value="'.dhtmlspecialchars($_GET['username']).'" class="txt" />&nbsp;&nbsp;', $searchtext);
showformfooter();



echo '<tr class="header"><th>'.$Plang['username'].'</th><th>'.$lang['ip'].'</th><th>'.$Plang['dateline'].'</th><th>'.$Plang['message'].'</th><th>'.$Plang['reply'].'</th><th>满意/不满意</th><th></th></tr>';

if(!$resultempty) {

    $count = C::t('#htt_robot#message')->count_by_search($srchadd);
    $messages = C::t('#htt_robot#message')->fetch_all_by_search($srchadd, ($page - 1) * $ppp, $ppp);


    $i = 0;
    foreach($messages as $message) {

        switch ($message['assess']){
            case 1:
                $assess = '满意';
                break;
            case 2:
                $assess = '不满意';
                break;
            default:
                $assess='未评价';
                break;

        }



        $i++;
        echo '<tr>
<td>'.$message['username'].'</td>'.
            '<td>'.$message['ip'].'</td>'.
            '<td>'.date('Y-m-d H:i:s',$message['dateline']).'</td>'.
            '<td>'.$message['message'].'</td>'.
            '<td>'.$message['reply'].'</td>'.
            '<td>'.$assess.'</td>'.
            '<td><a id="p'.$i.'" onclick="ajaxget(this.href, this.id, \'\');return false" href="'.ADMINSCRIPT.'?action=plugins&operation=config&do='.$pluginid.'&identifier=htt_robot&formhash='.FORMHASH.'&pmod=message&id='.$message['id'].'&op=delete">['.$lang['delete'].']</a></td>
            </tr>';
    }
}


$del_many = '<input type="button" class="btn" onclick="location.href=\''.ADMINSCRIPT.'?action=plugins&operation=config&do='.$pluginid.'&identifier=htt_robot&pmod=message&op=del_many\'" value="'.$Plang['del_many'].'" />';

if($messages){
    showsubmit('', '', $del_many);

}

showtablefooter();

echo multi($count, $ppp, $page, ADMINSCRIPT."?action=plugins&operation=config&do=$pluginid&identifier=htt_robot&pmod=message$extra");

?>