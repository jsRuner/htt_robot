<?php
if(!defined('IN_DISCUZ')) {
	exit('Access Denied');
}

runquery("
DROP TABLE IF EXISTS cdb_httrobot_message");

runquery("
DROP TABLE IF EXISTS cdb_httrobot_question");




$finish = TRUE;