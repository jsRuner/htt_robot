<?php
/**
 *	 吴文付.
 *	Version: 1.0
 *	Date: 2016-4-2 15:35
 *  Descript:机器人
 */
//
if(!defined('IN_DISCUZ')) {
    exit('Access Denied');
}
class plugin_htt_robot{


    const DEBUG = 0;
    protected static $postReportAction = array('post_newthread_succeed', 'post_edit_succeed', 'post_reply_succeed',
        'post_newthread_mod_succeed', 'post_newthread_mod_succeed', 'post_reply_mod_succeed',
        'edit_reply_mod_succeed', 'edit_newthread_mod_succeed');
    //TODO - Insert your code here
    protected static $cloudAppService;
    protected static $securityService;
    protected static $securityStatus;

    public function __construct() {
        self::$cloudAppService = Cloud::loadClass('Service_App');
        self::$securityStatus = self::$cloudAppService->getCloudAppStatus('security');
        self::$securityService = Cloud::loadClass('Service_Security');
    }


    function global_footer(){
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

        //判断当前访问的用户组和版块。游客的显示。
        $gids  = array_filter(unserialize($groupstr));

        $t = time(); //时间戳。阻止js缓存。

        // $_G['groupid']; //当前用户组id
        //如果用户组符合要求。同时也设置了启用。则可以看到机器人。否则不可以。
        //1显示机器人2 隐藏机器人 .
        //手机端没有测试。隐藏机器人。
        //未注册的人没有groupid。这里判断如果未空，则说明是游客。

        //判断次序：
        /*
         * 1、是否手机端。是则返回空
         * 2、是否开启显示  。否则返回空
         * 3、路人是否可见。 是。则返回  机器人。其他的不用判断。
         * 4、路人不可见。则继续判断。用户组。
         * 5、不符合用户组。返回空。
         * 6、最后 返回内容。
         *
         * */
//        include_once template('htt_robot:robot');
//        return $robot_html;


        //注意这里是取否。
        if(!($check == '1') ){
            return '';
        }


        // if($other_people == 1){
        //     include_once template('htt_robot:robot');
        //     return $robot_html;
        // }

        if(!in_array($_G['groupid'],$gids)){
            return '';
        }

        include_once template('htt_robot:robot');
        return $robot_html;

    }
}

?>