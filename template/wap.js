/**
 * Created by ft521 on 2017/6/9.
 */
var jq = jQuery.noConflict();

Date.prototype.Format = function (fmt) { //author: meizz
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

//修正尺寸。
function set_chatScroll_height() {
    var winW = jq(window).width(),
        winH = jq(window).height();
    jq('html').css('fontSize', winW<750 ? winW : 750);
    jq('.chat-list-area').height(winH - jq('.editCtn').outerHeight());
    jq('.container').height(winH);
    console.log('修正尺寸函数执行了一次');
    console.log('屏幕高度'+winH)
    console.log('编辑高度'+jq('.editCtn').outerHeight())
}

set_chatScroll_height();
window.onresize = function(){
    console.log('尺寸变了');
    set_chatScroll_height();
}

jq(window).load(function(){

    console.log(1);

});

var formhash = jq('#formhash').val();

function sendMsg() {
    console.log('点击了发送');
    var inputMsg = jq('#textarea').val();
    //清空。
    jq('#textarea').val('');
    //填充聊天记录。
    var askHtml = '<div class="MN_ask"><div class="MN_khtime">'+new Date().Format("MM月dd日 hh:mm:ss")+'</div><div class="MN_khName">我</div><div class="MN_khCtn"><img class="MN_khImg" src="source/plugin/htt_robot/template/assets/user.png"><i class="MN_khTriangle1 MN_triangle"></i><i class="MN_khTriangle2 MN_triangle"></i>'+inputMsg+'</div></div>';
    jq('.chat-list-area').append(askHtml);

    //发送ajax请求。

    jq.ajax({
        url:'http://bbs32.aoyait.dev/plugin.php?id=htt_robot:robot',
        type:'get',
        data:{msg:inputMsg,formhash:formhash},
        success:function (data) {
            console.log('成功返回:'+data);
            var asHtml='<div class="MN_answer" aid="'+data.id+'" cluid="ce78865b-dd42-4cf1-bf91-450248ac453b"> <div class="MN_kftime">'+new Date().Format("MM月dd日 hh:mm:ss")+'</div><div class="MN_kfName">卡农社区客服</div><div class="MN_kfCtn"><img class="MN_kfImg" src="source/plugin/htt_robot/template/assets/robot.png"><i class="MN_kfTriangle1 MN_triangle"></i><i class="MN_kfTriangle2 MN_triangle"></i>'+data.msg+'<div class="MN_helpful"><span class="MN_yes" aid="'+data.id+'">满意</span><span class="MN_no" aid="'+data.id+'">不满意</span></div></div></div>';
            jq('.chat-list-area').append(asHtml);

        },
        error:function () {
            console.log('发生异常');

        },
        complete:function () {
            console.log('发送完成');
            //滚动条控制
            jq('.chat-list-area').scrollTop(jq('.chat-list-area')[0].scrollHeight);

            //这里才有效果。否则动态插入的没有点击事件。
            jq('span.MN_yes').click(function () {
                khyes(jq(this));
            })

            jq('span.MN_no').click(function () {
                khno(jq(this));
            })
        }

    });


}

function khyes(obj) {
    console.log('客户满意');
    console.log(obj);
    jq(obj).parent().html('谢谢您的支持哦~卡农社区客服会更努力哒!');
    var aid = jq(obj).attr('aid');
    console.log('满意id:'+aid);
    jq.ajax({
        url:'http://bbs32.aoyait.dev/plugin.php?id=htt_robot:robot&action=yes',
        type:'get',
        data:{aid:aid,formhash:formhash},
        success:function (data) {
            console.log('成功返回:'+data);
        },
        error:function () {
            console.log('发生异常');

        },
        complete:function () {
            console.log('发送完成');
        }
    });

}

function khno(obj) {
    console.log('客户不满意');
    jq(obj).parent().html('呜呜呜~不好意思啦,卡农社区客服会日夜刻苦学习,希望下次帮您排忧');
    var aid = jq(obj).attr('aid');
    jq.ajax({
        url:'http://bbs32.aoyait.dev/plugin.php?id=htt_robot:robot&action=no',
        type:'get',
        data:{aid:aid,formhash:formhash},
        success:function (data) {
            console.log('成功返回:'+data);
        },
        error:function () {
            console.log('发生异常');

        },
        complete:function () {
            console.log('发送完成');
        }
    });
}

function remindQuestion(obj) {
    //点击了提示
    console.log('点击了提示'+jq(obj).html());
    //发送消息。
    jq('#textarea').val(jq(obj).html());
    sendMsg()
    //关闭提示。
    jq('#remind').hide();
    //设置高度。
    set_chatScroll_height();
}

jq('#textarea').bind("input propertychange",function(){
    console.log(jq(this).val());



    //发送请求
    jq.ajax({
        url:'http://bbs32.aoyait.dev/plugin.php?id=htt_robot:robot&action=remind',
        type:'get',
        data:{msg:jq(this).val(),formhash:formhash},
        success:function (data) {
            console.log('成功返回:'+data);

            if (data == ''){
                console.log('无内容');
                jq('#remind').hide();
                //设置高度。
                set_chatScroll_height();
            }else{
                console.log('有内容');
                var lisstr = '';

                for (var k = 0, length = data.length; k < length; k++) {

                    lisstr += '<li class="remind-item">'+data[k].question+'</li>';
                }

                jq('#remind ol').html(lisstr);
                jq('#remind').show();
            }

            jq('.remind-item').click(function () {
                remindQuestion(jq(this));
            });
        },
        error:function () {
            console.log('发生异常');

        },
        complete:function () {
            console.log('发送完成');
        }
    });

});

jq('#sendBtn').click(function () {
    sendMsg();
});


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
        sendMsg();
    }
};


