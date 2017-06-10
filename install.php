<?php
/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-04-24 15:14:57
 * @version $Id$
 */
if(!defined('IN_DISCUZ')) {
	exit('Access Denied');
}
runquery("CREATE TABLE IF NOT EXISTS `cdb_httrobot_message` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) NOT NULL COMMENT '用户Id',
  `username` varchar(125) NOT NULL COMMENT '用户姓名',
  `ip` varchar(125) NOT NULL COMMENT 'ip地址',
  `dateline` int(11) NOT NULL COMMENT '时间',
  `message` text NOT NULL COMMENT '用户的提问',
  `reply` text NOT NULL COMMENT '机器人的回答',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM;");



$finish = TRUE;