/*
 * Desc:Xiuno BBS 4.0 插件实例：Comlimi 清新简约主题 
 * Author: Comlimi
 * Blog: www.comlimi.com
 * Date: 2019-06-31
*/

$(function(){

	//搜索效果
	var scbar = $("#search_form");
	scbar.click(function(event){
		event.stopPropagation();
		$(this).addClass('active');
	});
	$(document).click(function(){
		if(scbar.hasClass('active')){
			scbar.removeClass('active');
		}
	})

});

//图文切换COOKIE保存
function changethreadthumb(){
	var jq=jQuery;
	var hide = 1;
	if ($('#threadthumb').hasClass("threadthumb_on")) {
		hide = 1;
	}else{
		hide = 0;
	}
	$('#threadthumb').removeClass();
	if (hide) {
		$('#threadthumb').addClass('threadthumb_off');
		$('#threadlisttableid .img').addClass('hide');
	}else{
		$('#threadthumb').addClass('threadthumb_on');
		$('#threadlisttableid .img').removeClass('hide');
	}
	setcookie('threadthumbhide', hide, 2592000);
}

$(function() {
    function a() {
        e.toggleClass(j),
        d.toggleClass(i),
        f.toggleClass(k),
        g.toggleClass(l)
    }
    function b() {
        e.addClass(j),
        d.animate({
            left: "0px"
        },
        n),
        f.animate({
            left: o
        },
        n),
        g.animate({
            left: o
        },
        n)
    }
    function c() {
        e.removeClass(j),
        d.animate({
            left: "-" + o
        },
        n),
        f.animate({
            left: "0px"
        },
        n),
        g.animate({
            left: "0px"
        },
        n)
    }
    var d = $(".sidebar"),
    e = $("body"),
    f = $("#offcanvas"),
    g = $(".slither"),
    h = $(".site-overlay"),
    i = "sidebar-left sidebar-open",
    j = "sidebar-active",
    k = "offcanvas-slither",
    l = "slither-slither",
    m = $(".navigation-drawer, .sidebar a"),
    n = 200,
    o = d.width() + "px";
    if (cssTransforms3d = function() {
        var a = document.createElement("p"),
        b = !1,
        c = {
            webkitTransform: "-webkit-transform",
            OTransform: "-o-transform",
            msTransform: "-ms-transform",
            MozTransform: "-moz-transform",
            transform: "transform"
        };
        document.body.insertBefore(a, null);
        for (var d in c) {
            void 0 !== a.style[d] && (a.style[d] = "translate3d(1px,1px,1px)", b = window.getComputedStyle(a).getPropertyValue(c[d]))
        }
        return document.body.removeChild(a),
        void 0 !== b && b.length > 0 && "none" !== b
    } ()) {
        m.click(function() {
            a()
        }),
        h.click(function() {
            a()
        })
    } else {
        d.css({
            left: "-" + o
        }),
        f.css({
            "overflow-x": "hidden"
        });
        var p = !0;
        m.click(function() {
            p ? (b(), p = !1) : (c(), p = !0)
        }),
        h.click(function() {
            p ? (b(), p = !1) : (c(), p = !0)
        })
    }
});