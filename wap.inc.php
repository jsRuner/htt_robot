<?php
/**
 * Created by PhpStorm.
 * User: 付 hi_php@163.com
 * Date: 2017/6/7
 * Time: 下午10:13
 */

global $_G;

//获取插件的参数。
loadcache('plugin');
$var = $_G['cache']['plugin'];
$groupstr = $var['htt_robot']['groups']; //用户组。哪些用户组可以看到机器人。
$robot_name = $var['htt_robot']['robot_name']; //机器人的名字
$welcome_msg = $var['htt_robot']['welcome_msg']; //欢迎语

//对欢迎语增加链接支持。
$welcome_msg =preg_replace('(((f|ht){1}tp://)[-a-zA-Z0-9@:%_/+.~#?&//=]+)','<a href="\0" target="_blank">\0</a>', $welcome_msg );


$tuling_key= $var['htt_robot']['tuling_key']; //key
$check = $var['htt_robot']['is_show'];  //1可见 2不可见。
$other_people = $var['htt_robot']['other_people'];  //1可见 2不可见。

$site_url = $var['htt_robot']['site_url']; #站点域名。
//没设置则读取系统的域名
if (empty($site_url)) {
    $site_url = $_G['siteurl'];
}

$site_url = trim($site_url,'/');

//判断当前访问的用户组和版块。游客的显示。
$gids  = array_filter(unserialize($groupstr));

$t = time(); //时间戳。阻止js缓存。

$currenttime = date('m月d日 H:i:s');

//注意这里是取否。
if(!($check == '1') ){
    die('机器人在睡觉...');
}




if(!in_array($_G['groupid'],$gids)){
    die('机器人不想看到你...');
}

include_once template('htt_robot:wap');
