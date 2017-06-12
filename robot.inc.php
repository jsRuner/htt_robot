<?php
/**
 * Created by JetBrains PhpStorm.
 * User: 吴文付 hi_php@163.com
 * Blog: wuwenfu.cn
 * Date: 2016/4/8
 * Time: 16:51
 * description:
 *
 *
 */
//http://bbs.wuwenfu.cc/plugin.php?id=htt_robot:robot 访问该页面的url
if (!defined('IN_DISCUZ')) {
    exit('Access Denied');
}

if ($_GET['formhash']!= FORMHASH) {
    showmessage('undefined_action');
}

header("Content-Type: application/json; charset=".$_G['charset']);

function unicode_decode($unistr, $encoding = 'GBK', $prefix = '&#', $postfix = ';') {
    $arruni = explode($prefix, $unistr);
    $unistr = '';
    for($i = 1, $len = count($arruni); $i < $len; $i++) {
        if (strlen($postfix) > 0) {
            $arruni[$i] = substr($arruni[$i], 0, strlen($arruni[$i]) - strlen($postfix));
        }
        $temp = intval($arruni[$i]);
        $unistr .= ($temp < 256) ? chr(0) . chr($temp) : chr($temp / 256) . chr($temp % 256);
    }
    return iconv('UCS-2', $encoding, $unistr);
}

function curl_html($url)
{

    $curl = curl_init(); //开启curl
    curl_setopt($curl, CURLOPT_URL, $url); //设置请求地址
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);  //是否输出 1 or true 是不输出 0  or false输出
    $html = curl_exec($curl); //执行curl操作
    curl_close($curl);

    return $html;
}

function arrayToString($arr) {
    if (is_array($arr)){
        return implode(',', array_map('arrayToString', $arr));
    }
    return $arr;
}
//过滤掉图片
function filterImg($str){
//    $str=preg_replace('(((f|ht){1}tp://)[-a-zA-Z0-9@:%_/+.~#?&//=]+(.jpg|.png){1})','<img src="\0" />',$str);
    $str=preg_replace('(,{1}((f|ht){1}tp://)[-a-zA-Z0-9@:%_/+.~#?&//=]+(.jpg|.png){1})','',$str);
    return $str;
}

function linkAdd($content){
    //提取替换出所有A标签（统一标记<{link}>）
    preg_match_all('{<a.*?href=".*?".*?>.*?</a>}i',$content,$linkList);
    $linkList=$linkList[0];
    $str=preg_replace('{<a.*?href=".*?".*?>.*?</a>}i','<{link}>',$content);
    //提取替换出所有的IMG标签（统一标记<{img}>）
    preg_match_all('{<img[^>]+>}im',$content,$imgList);
    $imgList=$imgList[0];
    $str=preg_replace('{<img[^>]+>}im','<{img}>',$str);

    //提取替换标准的URL地址
    $str=preg_replace('(((f|ht){1}tp://)[-a-zA-Z0-9@:%_/+.~#?&//=]+[^(.jpg)|^(.png)])','<a href="\0" target="_blank">\0</a>',$str);


    //还原A统一标记为原来的A标签
    $arrLen=count($linkList);
    for($i=0;$i<$arrLen;$i++){
        $str=preg_replace('{<{link}>}',$linkList[$i],$str,1);
    }

    //还原IMG统一标记为原来的IMG标签
    $arrLen2=count($imgList);
    for($i=0;$i<$arrLen2;$i++){
        $str=preg_replace('{<{img}>}',$imgList[$i],$str,1);
    }

    return $str;
}

global $_G;

loadcache('plugin');
$var = $_G['cache']['plugin'];
$groupstr = $var['htt_robot']['groups']; //用户组。哪些用户组可以看到机器人。

$welcome_msg = $var['htt_robot']['welcome_msg']; //欢迎语

$robot_key = $var['htt_robot']['robot_key']; //key

$check = $var['htt_robot']['is_show'];  //1隐藏 2启用




//处理满意与不满意。以及输入的提醒。
$action = $_GET['action'];


if (!empty($action) && $action == 'remind'){

    $inputMsg  = trim($_GET['msg']);


    if (empty($inputMsg)){
        $questions = [];
    }else{

        $srchadd = "AND question like '%".daddslashes($inputMsg)."%'";
        $questions = C::t('#htt_robot#question')->fetch_all_by_search($srchadd, 0, 5);
    }
    echo json_encode($questions);
    exit();
}

if (!empty($action) && $action =='yes'){
    $data['assess'] = '1';
    $condition='id='.$_GET['aid'];
    DB::update("httrobot_message",$data,$condition);
    $data=[
        'msg'=>1
    ];
    echo json_encode($data);
    exit();
}

if (!empty($action) && $action =='no'){
    $data['assess'] = '2';
    $condition='id='.$_GET['aid'];
    DB::update("httrobot_message",$data,$condition);
    $data=[
        'msg'=>2
    ];
    echo json_encode($data);
    exit();
}




$info = trim($_GET['msg']);

//优先读取数据库的结果。如果存着不调用接口。
$srchadd = "AND question like '%".daddslashes($info)."%'";
$questions = C::t('#htt_robot#question')->fetch_all_by_search($srchadd, 0, 5);

if ($questions){

    $returnmsg = $questions[0]['answer'];

    if($_G['charset'] == 'gbk'){

        $info =   iconv("utf-8", "gbk",$info);
        $returnmsg =   iconv("utf-8", "gbk",$returnmsg);

    }

}else{



    $url = 'http://www.tuling123.com/openapi/api?key=' . $robot_key . '&info=' . urlencode($info);
    $replystr = dfsockopen($url);
    $replyarr = json_decode($replystr, true);
    $returnmsg = arrayToString($replyarr);
    $returnmsg = filterImg($returnmsg);
    $returnmsg = linkAdd($returnmsg);
    $returnmsg=preg_replace('((\d)+,{1})','',$returnmsg);



    if($_G['charset'] == 'gbk'){

        $info =   iconv("utf-8", "gbk",$info);
        $returnmsg =   iconv("utf-8", "gbk",$returnmsg);

    }
}




if(empty($_G['username'])){
    $username=lang('plugin/htt_robot', 'guest') ;
}else{
    $username = $_G['username'];
}

$insert_array = array(
    'uid'=>$_G['uid'],
    'username'=>$username,
    'ip'=> $_G['clientip'],
    'dateline'=>TIMESTAMP,
    'message'=>$info,
    'reply'=>$returnmsg,
);



//存到记录中去。
$id = DB::insert("httrobot_message",$insert_array,true);

//返回id。方便提交满意与不满意之分。

$data=[
    'id'=>$id,
    'msg'=>$returnmsg
];
echo json_encode($data);






