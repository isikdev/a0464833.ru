let modal = $(".popup-fade")
let close = $(".popup-close")

$(".call__btn-img").click(function(){
    modal.show(100);
});
close.click(function(){
    modal.hide(100);
});