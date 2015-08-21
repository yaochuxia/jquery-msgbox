(function ($) {
    $.MsgBox = {
        //弹出提示框
        Alert: function (title, msg, callback) {
            GenerateHtml("alert", title, msg);
            btnOk(callback);  //alert只是弹出消息，因此没必要用到回调函数callback
            btnNo();
        },
        //弹出确认框
        Confirm: function (title, msg, callback) {
            GenerateHtml("confirm", title, msg);
            btnOk(callback);
            btnNo();
        },
        // 弹出输入框
        // Prompt: function(title, msg, callback){
        //     GenerateHtml("prompt", title, msg);
        //     btnOk(callback);
        //     btnNo();
        // }
    }

    //生成Html
    var GenerateHtml = function (type, title, msg) {

        var _html = "";

        _html += '<div id="mb_box"></div><div id="mb_con"><span id="mb_tit">' + title + '</span>';
        _html += '<a id="mb_ico">x</a><div id="mb_msg">' + msg + '</div><div id="mb_btnbox">';

        if (type == "alert") {
            _html += '<input id="mb_btn_ok" class="pageBtn" type="submit" value="确定" />';
        }
        if (type == "confirm") {
            _html += '<input id="mb_btn_ok" class="pageBtn" type="submit" value="确定" />';
            _html += '<input id="mb_btn_no" type="submit" value="取消" />';
        }
        if (type == "prompt") {
            _html += '<input type="text" size="25" id="popup_prompt" /><br>';
            _html += '<input id="mb_btn_ok" class="pageBtn" type="submit" value="确定" />';
            _html += '<input id="mb_btn_no" type="submit" value="取消" />';
            // $("#mb_btn_ok").click(function(){
            //     var val = $("#popup_prompt").val();
            //     $("#mb_box,#mb_con").remove();
            //     if( callback ) callback( val );
            // })
            //  $("#mb_btn_on").click(function(){
            //      $("#mb_box,#mb_con").remove();
            //      if( callback ) callback( null );
            //  })
        }
        _html += '</div></div>';

        //必须先将_html添加到body，再设置Css样式
        $("body").append(_html); GenerateCss();
    }

    //生成Css
    var GenerateCss = function () {

        $("#mb_box").css({ width: '100%', height: '100%', zIndex: '99999', position: 'fixed',
            filter: 'Alpha(opacity=30)', backgroundColor: 'black', top: '0', left: '0', opacity: '0.3'
        });

        $("#mb_con").css({ zIndex: '999999', width: '400px', position: 'fixed',
            backgroundColor: 'White', borderRadius: '15px'
        });

        $("#mb_tit").css({ display: 'block', fontSize: '14px', color: '#444', padding: '10px 15px',
            backgroundColor: '#DDD', borderRadius: '15px 15px 0 0',
            borderBottom: '3px solid #009BFE', fontWeight: 'bold'
        });

        $("#mb_msg").css({ padding: '20px', lineHeight: '20px',
            borderBottom: '1px dashed #DDD', fontSize: '13px'
        });

        $("#mb_ico").css({ display: 'block', position: 'absolute', right: '10px', top: '9px',
            border: '1px solid Gray', width: '18px', height: '18px', textAlign: 'center',
            lineHeight: '16px', cursor: 'pointer', borderRadius: '12px', fontFamily: '微软雅黑'
        });

        $("#mb_btnbox").css({ margin: '15px 0 10px 0', textAlign: 'center' });
        $("#mb_btn_ok,#mb_btn_no").css({ padding: '0 10px', height: '30px', color: 'white', border: 'none',lineHeight:'30px',borderRadius:'3px',fontSize:'14px' });
        $("#mb_btn_ok").css({ backgroundColor: '#168bbb' });
        $("#mb_btn_no").css({ backgroundColor: 'gray', marginLeft: '10px' });


        //右上角关闭按钮hover样式
        $("#mb_ico").hover(function () {
            $(this).css({ backgroundColor: 'Red', color: 'White' });
        }, function () {
            $(this).css({ backgroundColor: '#DDD', color: 'black' });
        });

        var _widht = document.body.clientWidth;  //网页可见区域宽
        var _height = document.body.clientHeight; //网页可见区域高
         console.log(_height)
        var boxWidth = $("#mb_con").width();
        var boxHeight = $("#mb_con").height();

        //让提示框居中
        $("#mb_con").css({ top: (_height - boxHeight) / 2 + "px", left: (_widht - boxWidth) / 2 + "px" });
    }


    //确定按钮事件
    var btnOk = function (callback) {
        $("#mb_btn_ok").click(function () {
            $("#mb_box,#mb_con").remove();
                if (typeof (callback) == 'function') {
                    callback();
                }
            // location.reload();
        });
    }

    //取消按钮事件
    var btnNo = function () {
        $("#mb_btn_no,#mb_ico").click(function () {
            $("#mb_box,#mb_con").remove();
        });
    }
})(jQuery);