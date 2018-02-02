$(".footerLi").click(function() {
    var li = $(".footerLi").index($(this))
    console.log(li)
    console.log($(".footerLi").eq(li).children().addClass("active").parent());
    $(".footerLi").eq(li).children().addClass("active").parent().siblings().children().removeClass("active");
})