$(function(){
  function  clickHandle(btn, cont, classname) {
    $(btn).each(function (i) {
      var that = this;
      $(that).click(function () {
        $(that).addClass(classname).siblings().removeClass(classname);
        $($(cont)[i]).addClass(classname).siblings().removeClass(classname);
      })
    })
  };

  clickHandle('.head span', '.cont .c-item', 'on');
});