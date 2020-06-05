var url = window.location.href;
// console.log(typeof url, 111);
console.log(url.toString('1'), 111);



if (typeof (nd_ntypeid) != 'undefined') {
  // 软文 一建
  if (nd_ntypeid === 58) {
    document.writeln("<div class=\"teachers1\">");
    document.writeln("  <div class=\"head\">");
    document.writeln("    <span class=\"h-l on\">百位名师集结免费直播 你喜欢的老师都在这</span>");
    document.writeln("    <span class=\"h-r\">仅限今日：一级建造师限时免费赠课</span>");
    document.writeln("  </div>");
    document.writeln("  <div class=\"cont\">");
    document.writeln("    <ul class=\"c-item on\">");
    document.writeln("      <li>");
    document.writeln("        <div class=\"i-n\">建筑-王树京</div>");
    document.writeln("        <img src=\"https://img.thea.cn/public/platform/thea/202006/hbj/thea-change/images/t_1.png\" alt=\"王树京\">");
    document.writeln("        <a href=\" javascript:; \">直播入口</a>");
    document.writeln("      </li>");
    document.writeln("      <li>");
    document.writeln("        <div class=\"i-n\">市政-陈明</div>");
    document.writeln("        <img src=\"https://img.thea.cn/public/platform/thea/202006/hbj/thea-change/images/t_2.png\" alt=\"陈明\">");
    document.writeln("        <a href=\" javascript:; \">直播入口</a>");
    document.writeln("      </li>");
    document.writeln("      <li>");
    document.writeln("        <div class=\"i-n\">管理-肖国祥</div>");
    document.writeln("        <img src=\"https://img.thea.cn/public/platform/thea/202006/hbj/thea-change/images/t_3.png\" alt=\"肖国祥\">");
    document.writeln("        <a href=\" javascript:; \">直播入口</a>");
    document.writeln("      </li>");
    document.writeln("      <li>");
    document.writeln("        <div class=\"i-n\">法规-王丽雪</div>");
    document.writeln("        <img src=\"https://img.thea.cn/public/platform/thea/202006/hbj/thea-change/images/t_4.png\" alt=\"王丽雪\">");
    document.writeln("        <a href=\" javascript:; \">直播入口</a>");
    document.writeln("      </li>");
    document.writeln("      <li>");
    document.writeln("        <div class=\"i-n\">经济-刘戈</div>");
    document.writeln("        <img src=\"https://img.thea.cn/public/platform/thea/202006/hbj/thea-change/images/t_5.png\" alt=\"刘戈\">");
    document.writeln("        <a href=\" javascript:; \">直播入口</a>");
    document.writeln("      </li>");
    document.writeln("    </ul>");
    document.writeln("    <ul class=\"c-item\">");
    document.writeln("      <li>");
    document.writeln("        <div class=\"i-t\">教材直播解析课</div>");
    document.writeln("        <div class=\"i-img\">");
    document.writeln("          <img src=\"https://img.thea.cn/public/platform/thea/202006/hbj/thea-change/images/c-sel_1.png\" alt=\" \"></img>");
    document.writeln("        </div>");
    document.writeln("        <a href=\" javascript:; \">直播入口</a>");
    document.writeln("      </li>");
    document.writeln("      <li>");
    document.writeln("        <div class=\"i-t\">历年真题礼包</div>");
    document.writeln("        <div class=\"i-img\">");
    document.writeln("          <img src=\"https://img.thea.cn/public/platform/thea/202006/hbj/thea-change/images/c-sel_2.png\" alt=\" \"></img>");
    document.writeln("        </div>");
    document.writeln("        <a href=\" javascript:; \">直播入口</a>");
    document.writeln("      </li>");
    document.writeln("      <li>");
    document.writeln("        <div class=\"i-t\">1v1直播课程</div>");
    document.writeln("        <div class=\"i-img\">");
    document.writeln("          <img src=\"https://img.thea.cn/public/platform/thea/202006/hbj/thea-change/images/c-sel_3.png\" alt=\" \"></img>");
    document.writeln("        </div>");
    document.writeln("        <a href=\" javascript:; \">直播入口</a>");
    document.writeln("      </li>");
    document.writeln("      <li>");
    document.writeln("        <div class=\"i-t\">快题库</div>");
    document.writeln("        <div class=\"i-img\">");
    document.writeln("          <img src=\"https://img.thea.cn/public/platform/thea/202006/hbj/thea-change/images/c-sel_4.png\" alt=\" \"></img>");
    document.writeln("        </div>");
    document.writeln("        <a href=\" javascript:; \">直播入口</a>");
    document.writeln("      </li>");
    document.writeln("      <li>");
    document.writeln("        <div class=\"i-t\">直播答疑课</div>");
    document.writeln("        <div class=\"i-img\">");
    document.writeln("          <img src=\"https://img.thea.cn/public/platform/thea/202006/hbj/thea-change/images/c-sel_5.png\" alt=\" \"></img>");
    document.writeln("        </div>");
    document.writeln("        <a href=\" javascript:; \">直播入口</a>");
    document.writeln("      </li>");
    document.writeln("    </ul>");
    document.writeln("  </div>");
    document.writeln("</div>");
  }else if (nd_ntypeid === 200) {
    document.writeln("软文二建");
  }
}

function clickHandle(btn, cont, classname) {
  $(btn).each(function (i) {
    var that = this;
    $(that).click(function () {
      $(that).addClass(classname).siblings().removeClass(classname);
      $($(cont)[i]).addClass(classname).siblings().removeClass(classname);
    })
  })
};
clickHandle('.head span', '.cont .c-item', 'on');