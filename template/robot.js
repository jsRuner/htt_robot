/**
 * Created by Administrator on 2016/4/8.
 */
//jq = jQuery;


jq(window).load(function(){

    var robot_close =  jq('#robot_container_closed'); //聊天的容器
    //var close_btn =  jq('#close_btn'); //关闭按钮
    var close_btn =  jq('#robot_container_open .title .headBtn .zhichiClose'); //关闭按钮

    var robot_open =  jq('#robot_container_open');

    //var send_btn = jq('#send_button') //发送按钮
    var send_btn = jq('#sendBtn') //发送按钮

    var pull_btn = jq('#pullBtn') //点我按钮

    //var send_input = jq('.do_area input') //内容
    var send_input = jq('#inputMsg') //内容

    var msg_list = jq('.wechat') //聊天列表


    // var host = window.location.host; //域名
    var host = jq('#discuzurl').val(); //域名

    var robot_name = jq('#robot_container_open > div.title > span').text();

    //获取需要的文字。
    var close_text = jq('#close_text').val();
    var error_empty = jq('#error_empty').val();
    var mename = jq('#me').val();
    var robot_bug = jq('#robot_bug').val();
    var please_input = jq('#please_input').val();

    var formhashxx = jq('#formhash').val();

    var robot_status = getCookie('robot_status'); //状态。从cookie获取一次。1是开启，2是关闭。

    var robot_pointer_x = getCookie('robot_pointer_x'); //机器的人位置
    var robot_pointer_y = getCookie('robot_pointer_y'); //机器的人位置

    var win_h = window.innerHeight||document.documentElement.clientHeight;
    var win_w = window.innerWidth||document.documentElement.clientWidth;

    //console.log(win_w+'_'+win_h);
    //console.log(robot_pointer_x+'_'+robot_pointer_y);



    if(robot_pointer_x && robot_pointer_y && robot_pointer_x<=win_w && robot_pointer_y<=win_h){
        robot_close.attr('style','position:absolute;left:'+robot_pointer_x+'px;top:'+robot_pointer_y+'px;');
    }


    if(robot_status == 1){
        robot_open.show();
        robot_close.hide();
    }


    //关闭机器人。
    close_btn.bind('click',function(){

        // var xx = confirm(close_text)
        if (true) {
            robot_open.hide();
            robot_close.show();
            //设置cookie
            setCookie('robot_status',2)
        }

    })

    //点击输入框的时候。如果内容是初始化的内容。则清空一次。
    send_input.bind('focus',function(){
        if(send_input.val() == please_input ){
            send_input.val('')
        }
    })


    //执行聊天逻辑。
    function sendmsg (){
        var msg = send_input.val();



        if(msg ==''){
            alert(error_empty)
            return;
        }else{
            send_input.val('');
        }

        var sh = msg_list[0].scrollHeight;

        //构造一个li。插入到列表中。
        var me = ' <li class="me"> <span>'+mename+'</span> <div>'+msg+'</div></li>';
        msg_list.append(me);

        //ajax请求后台。
        jq.ajax({
            type: 'GET',
            url: host+'/plugin.php?id=htt_robot:robot',
            data: {msg:msg,formhash:formhashxx},
            success: function(data){

                //判断下返回类型。笑话。
                if(data.msg.indexOf("content") > 0 ){
                    var obj = eval('(' + data.msg + ')');
                    data.msg = obj.content;
                }
                //茉莉月老的求签接口
                if(data.msg.indexOf("type") > 0 ){
                    var obj = eval('(' + data.msg + ')');
                    if(obj.type==moli_datas[0]){
                        console.log(1);
                        data.msg = '['+moli_datas[3]+':]'+obj.qianyu+'\<br\>['+moli_datas[4]+':]'+obj.zhushi+'\<br\>['+moli_datas[5]+':]'+obj.jieqian+'\<br\>['+moli_datas[6]+':]'+obj.jieshuo;
                    }
                    if(obj.type==moli_datas[1]){
                        console.log(2);
                        data.msg = '['+moli_datas[3]+':]'+obj.shiyi+'\<br\>['+moli_datas[4]+':]'+obj.zhushi+'\<br\>['+moli_datas[5]+':]'+obj.jieqian+'\<br\>['+moli_datas[6]+':]'+obj.baihua;
                    }
                    if(obj.type==moli_datas[2]){
                        console.log(3);
                        data.msg = '['+moli_datas[3]+':]'+obj.qianyu+'\<br\>['+moli_datas[4]+':]'+obj.shiyi+'\<br\>['+moli_datas[5]+':]'+obj.jieqian;
                    }
                }
                var robot = ' <li class="robot"> <span>'+robot_name+'</span> <div>'+data.msg+'</div></li>';
                msg_list.append(robot);
                console.log(msg_list[0].scrollTop)
                console.log(msg_list[0].scrollHeight) //滚动条的高度。如果超出多少。则修改距离顶部
                var eh = msg_list[0].scrollHeight;
                msg_list[0].scrollTop = msg_list[0].scrollTop+(eh-sh);
            },
            dataType: 'json',
            error:function(XMLHttpRequest, textStatus, errorThrown){
                var robot = ' <li class="robot"> <span>'+robot_name+'</span> <div>'+robot_bug+'</div></li>';
                msg_list.append(robot);
                var eh = msg_list[0].scrollHeight;
                msg_list[0].scrollTop = msg_list[0].scrollTop+(eh-sh);

            },
            complete:function(XMLHttpRequest, textStatus){
                //请求完成后。开启按钮。
                send_btn.attr('disabled',false)
                var eh = msg_list[0].scrollHeight;
                msg_list[0].scrollTop = msg_list[0].scrollTop+(eh-sh);

            }
        });
    }



    //点击发送按钮事件。添加ul中。并等待结果。ajaj请求等待结果。
    send_btn.bind('click',sendmsg);

    pull_btn.bind('click',function(){
        send_input.val('click me');
        sendmsg();
    })

    document.onkeydown=function(event){
        var e = event || window.event || arguments.callee.caller.arguments[0];
        if(e && e.keyCode==27){ // 按 Esc
            //要做的事情
        }
        if(e && e.keyCode==113){ // 按 F2
            //要做的事情
        }
        if(e && e.keyCode==13){ // enter 键
            //要做的事情
            if(!robot_open.is(":hidden")){
                sendmsg();
            }
        }
    };




});