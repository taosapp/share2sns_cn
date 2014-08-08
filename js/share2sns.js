//Share2sns_cn Ver 1.0: share to Chinese sns services: weibo, t.qq.com, etc.
//Author: lta0 (weibo.com/westup/)
//Created 2011-07-27 Updated 2012-01-29 AT https://github.com/lta0/share2sns_cn

(function(){
	$(document).ready(function(){
		//html内自定义分享文字和图片，可选
		var share_title = $("#share2sns_cn_text").val(),//自定义分享文字,比如在html页面添加一个隐藏的<input id="share2sns_cn_text" value="自定义分享文字" type="hidden" />
			share_img = $("#share2sns_cn_img").val(); //自定义分享图片,比如在html页面添加一个隐藏的<input id="share2sns_cn_img" value="图片地址" type="hidden" />

		//分享默认文字和图片
		if(!share_title){
			share_title = "分享默认文字(default text for share) ";
		}
		if(!share_img){
			share_img =encodeURI("http://ww2.sinaimg.cn/mw600/61050a76gw1dpj74ng2tdj.jpg"); //分享默认图片
		}
		
		var share_titleVal = encodeURI(share_title),
			share_currentUrl = document.location;

		var tsinaVal = function(){
				var _shareUrl = "http://service.weibo.com/share/share.php?",
					_appkey = encodeURI(""),
					//share_img = encodeURI("../img/share2sns_cn.png"),
					_ralateUid = "1627720310"; //添加自己微博账号，显示为"(分享自 @userName)"
				var _u = _shareUrl+'&title='+share_titleVal+'&url='+share_currentUrl+'&appkey='+_appkey+'&pic='+share_img+'&ralateUid='+_ralateUid;
				return _u;
			},
			tqqVal = function(){
				var _shareUrl = "http://v.t.qq.com/share/share.php?",
					_appkey = encodeURI(""),
					//share_img = encodeURI(""),
					_site = '',// from 'site url'
					_assname = "";
				var _u = _shareUrl+'&title='+share_titleVal+'&url='+share_currentUrl+'&appkey='+_appkey+'&pic='+""+'&assname='+_assname;
				return _u;
			},
			qzoneVal = function(){
				var _shareUrl = "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?",
					//share_img = encodeURI("../img/share2sns_cn.png"),
					_summary = "";
				var _u = _shareUrl+'url='+share_currentUrl+'&title='+share_titleVal+'&pics='+share_img+'&summary='+_summary;
				return _u;
			},
			renrenVal = function(){
				var _shareUrl = "http://share.renren.com/share/buttonshare.do?";
				var _u = _shareUrl+'link='+share_currentUrl+'&title='+share_titleVal;
				return _u;
			},
			kaixin001Val = function(){
				var _shareUrl = "http://www.kaixin001.com/repaste/share.php?";
				var _u = _shareUrl+'rtitle='+share_titleVal+'&rurl='+share_currentUrl+'&rcontent='+share_titleVal+share_currentUrl;
				return _u;
			},
			t163Val = function(){
				var _shareUrl = "http://t.163.com/article/user/checkLogin.do?",
					//share_img = encodeURI("../img/share2sns_cn.png"),
					_source = ''//source site;
				var _u = _shareUrl+'source='+_source+'&info='+share_titleVal+'+'+share_currentUrl+'&images='+share_img;
				return _u;
			},
			tsohuVal = function(){
				var _shareUrl = "http://t.sohu.com/third/post.jsp?";
				//var share_img = encodeURI("../img/share2sns_cn.png");
				var _u = _shareUrl+'url='+share_currentUrl+'&title='+share_titleVal+'&content=utf-8&pic='+share_img;
				return _u;
			},
			txpengyouVal = function(){
				var _shareUrl = "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?to=pengyou";
				var _u = _shareUrl+'&url='+share_currentUrl;
				return _u;
			},
			doubanVal = function(){
				var _shareUrl = "http://shuo.douban.com/!service/share?";
				// var share_img = encodeURI("../img/share2sns_cn.png");
				var _u = _shareUrl+'image='+share_img+'&href='+share_currentUrl+'&name='+share_titleVal;
				return _u;
			},
			weixinVal = function(){
			    // 查找是否有自定义url，如果没有，则使用当前页url
			    var url = $("#share2sns_cn_url").val();
			    if (!url) {
			        url = window.location.pathname;
			    }
			    return 'page/weixin_share.html?url=' + url;
			};
		//console.log(tsinaVal());
		$("#share_tsina").attr("href",tsinaVal()).attr("target","_blank").attr("title","分享到新浪微博");
		$("#share_tqq").attr("href",tqqVal()).attr("target","_blank").attr("title","分享到新腾讯微博");
		$("#share_qzone").attr("href",qzoneVal()).attr("target","_blank").attr("title","分享到QQ空间");
		$("#share_renren").attr("href",renrenVal()).attr("target","_blank").attr("title","分享到新人人网");
		$("#share_kaixin001").attr("href",kaixin001Val()).attr("target","_blank").attr("title","分享到开心网");
		$("#share_t163").attr("href",t163Val()).attr("target","_blank").attr("title","分享到网易微博");
		$("#share_tsohu").attr("href",tsohuVal()).attr("target","_blank").attr("title","分享到搜狐微博");
		$("#share_txpengyou").attr("href",txpengyouVal()).attr("target","_blank").attr("title","分享到腾讯朋友");
		$("#share_douban").attr("href",doubanVal()).attr("target","_blank").attr("title","分享到豆瓣微博");
		$("#share_weixin").attr("href",weixinVal()).attr("target","_blank");
	});
	
})()
