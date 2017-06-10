<?php


if(!defined('IN_DISCUZ') || !defined('IN_ADMINCP')) {
	exit('Access Denied');
}
showtips(lang('plugin/htt_robot', 'help_doc'));

include_once template('htt_robot:help');
?>