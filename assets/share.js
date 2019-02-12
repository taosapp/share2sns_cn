/* Share2sns_cn Ver 2.0: Chinese SNS share script: wechat, weibo, douban, etc.
Author: Tao (taotaotao.tech) */

var isMobile = /iPad|iPod|iPhone|Android/.test(navigator.userAgent),
    isWeixin = /MicroMessenger/.test(navigator.userAgent),
    $window = $(window);

var winW = $window.width(),
    winH = $window.height();

var winRation = winW/winH;

//html内自定义分享文字和图片，可选
var shareTitle = "分享到中国社交媒体javascript（share2sm-cn）2019版",//分享标题
    shareDesc = "包括微信、微博、豆瓣和QQ空间",//分享长描述
    shareLink = location.href,//被分享页面的链接，默认为当前页面的链接
    shareImg = "http://ww2.sinaimg.cn/mw600/61050a76gw1dpj74ng2tdj.jpg"; //分享图片

var shareTitleEncode = encodeURIComponent(shareTitle),
    shareDescEncode = encodeURIComponent(shareDesc),
    shareLinkEncode = encodeURIComponent(shareLink);


/* 移动端、微信端和电脑端不同的处理方式 */
if(isMobile){
    if (isWeixin) {
        $("#share_weixin").on("touchstart", function(e){
            e.preventDefault();
            addWeixinTip();
        });
    }else{
        //因为移动端浏览器大都有分享功能，所以在非微信移动端可以隐藏分享
        $(".sharerow").addClass("hide");
    }
}else{
    var qr = new QRious({
        element: document.getElementById('qr'),
        value: location.href,
        size: 140
    });

    $("#share_weixin").on("click", function (e) {
        e.preventDefault();
        $(".qrcode").addClass("show");
    })
    $(".qrcode").on("click", function (e) {
        e.preventDefault();
        $(this).removeClass("show");
    });
}

$("#share_tsina").attr("href",tsinaVal());
$("#share_qzone").attr("href",qzoneVal());
$("#share_douban").attr("href",doubanVal());

/* $(".sharerow").on("click", "a", function (e) {
    e.preventDefault();
    var theId = $(this).attr("id");
    switch (theId) {
        case "share_tsina":
            tsinaVal();
            break;
        case "share_douban":
            doubanVal();
            break;
        case "share_qzone":
            qzoneVal();
            break;
        default:
            break;
    }
});
 */
// add weixin share tip
function addWeixinTip(){
    $('body').append("<div class='overlay-wxshare'><span class='wxmenu-tips'></span><div class='tips-text'><p>分享到微信朋友圈<br />or<br />发送给朋友</p></div></div>");
    $('.overlay-wxshare').on('click',function(){
        $(this).fadeOut('fast',function(){$(this).remove();});
    });
}

function tsinaVal() {
    var _shareApiUrl = "https://service.weibo.com/share/share.php?",
        _appkey = "", //微博AppKey，可选
        _ralateUid = "1627720310"; //微博id，显示为"(分享自 @微博名称)"
    var _u = _shareApiUrl+'&title=【'+shareTitleEncode+'】'+shareDescEncode+'&url='+shareLinkEncode+'&appkey='+_appkey+'&pic='+shareImg+'&ralateUid='+_ralateUid;
    return _u;
}

function doubanVal(){
    var _shareApiUrl = "http://shuo.douban.com/!service/share?";
    // var shareImg = encodeURI("../img/share2sns_cn.png");
    var _u = _shareApiUrl+'&name='+shareTitleEncode+'&text='+shareDescEncode+'&image='+shareImg+'&href='+shareLinkEncode;
    return _u;
}

function qzoneVal(){
    var _shareApiUrl = "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?";
        //shareImg = encodeURI("../img/share2sns_cn.png"),
    var _u = _shareApiUrl+"url="+shareLinkEncode+"&title="+shareTitleEncode+"&pics="+shareImg+"&summary="+shareDescEncode;
    return _u;
}