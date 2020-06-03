// 显示弹窗
function gaodun(){
  $('.gaodun-mask').show();
};
// 证书名称
var ccieName = '';
// 去尾
var noTail = '';
// 选择证书
$('.ck li').click(function(){
  $(this).toggleClass('on');
  ccieName = '';
  // 赋值标题
  $('.ck li').each(function(){
    if($(this).hasClass('on')){
      ccieName += $(this).text() + '、';
    }
  });
  // 去掉尾部逗号
  noTail = ccieName.substr(0, ccieName.length - 1);
  $('#ccieVal').text(noTail);
});
// 点击提交按钮
$('#sb').click(function(){
  ccieName = '';
  $('.ck li').each(function(){
    if($(this).hasClass('on')){
      ccieName += $(this).text() + '、';
    }
  });
  noTail = ccieName.substr(0, ccieName.length - 1);
  $('#ccie').val(noTail);
});
// 隐藏弹窗
$('.gaodun-mask .close').click(function(){
  $('.gaodun-mask').hide();
});