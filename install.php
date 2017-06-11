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
runquery("
CREATE TABLE `pre_httrobot_message` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) NOT NULL COMMENT '用户Id',
  `username` varchar(125) NOT NULL COMMENT '用户姓名',
  `ip` varchar(125) NOT NULL COMMENT 'ip地址',
  `dateline` int(11) NOT NULL COMMENT '时间',
  `message` text NOT NULL COMMENT '用户的提问',
  `reply` text NOT NULL COMMENT '机器人的回答',
  `assess` tinyint(1) DEFAULT '0' COMMENT '0未评价1满意2不满意',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
");

runquery("
CREATE TABLE `pre_httrobot_question` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `question` varchar(125) NOT NULL DEFAULT '' COMMENT '问题的标题',
  `answer` varchar(1000) NOT NULL DEFAULT '' COMMENT '问题的答案',
  `dateline` datetime NOT NULL COMMENT '添加时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;
");



$finish = TRUE;