if(PublicSacrificeDay()){
  document.getElementsByTagName("html")[0].setAttribute("style","filter:gray !important;filter:grayscale(100%);-webkit-filter:grayscale(100%);-moz-filter:grayscale(100%);-ms-filter:grayscale(100%);-o-filter:grayscale(100%);");
}

function PublicSacrificeDay(){
    var PSFarr=new Array("0512","0707","0918","0930","1025","1213");
    //2020年4月4日 新冠肺炎哀悼日，清明节
    //2010年4月14日，青海玉树地震
    //2008年5月12日，四川汶川地震
    //1937年7月7日,七七事变 又称卢沟桥事变
    //2010年8月7日，甘肃舟曲特大泥石流
	  //8月14日，世界慰安妇纪念日
    //1976年9月9日，毛主席逝世
  	//1931年9月18日，九一八事变
  	//烈士纪念日为每年9月30日
    //1950年10月25日，抗美援朝纪念日
    //1937年12月13日，南京大屠杀
    var currentdate = new Date();
    var str = "";
    var mm = currentdate.getMonth()+1;
    if(currentdate.getMonth()>9){
      str += mm;
    }else{
      str += "0" + mm;
    }
    if(currentdate.getDate()>9){
      str += currentdate.getDate();
    }else{
      str += "0" + currentdate.getDate();
    }
    if(PSFarr.indexOf(str)>-1){
        return 1;
    }else{
        return 0;
    }
}

//动态标题
var OriginTitile = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        //离开当前页面时标签显示内容
        document.title = 'w(ﾟДﾟ)w 不要走！再看看嘛！';
        clearTimeout(titleTime);
    }
    else {
        //返回当前页面时标签显示内容
        document.title = '♪(^∇^*)欢迎回来！' + OriginTitile;
        //两秒后变回正常标题
        titleTime = setTimeout(function () {
            document.title = OriginTitile;
        }, 2000);
    }
});

function switchCommentBarrage(){
    let commentBarrage = document.querySelector('.comment-barrage');
    if(commentBarrage){
        $(commentBarrage).toggle()
    }
}

//历史上今天
if(document.getElementById('history-container')){
  function append(parent, text) {
      if (typeof text === 'string') {
          var temp = document.createElement('div');
          temp.innerHTML = text;
          // 防止元素太多 进行提速
          var frag = document.createDocumentFragment();
          while (temp.firstChild) {
              frag.appendChild(temp.firstChild);
          }
          parent.appendChild(frag);
      }
      else {
          parent.appendChild(text);
      }
  }

  function history_get_data(){
      var myDate = new Date();
      var myMonth = myDate.getMonth() + 1;
      if (myMonth < 10) {
          getMonth = "0" + String(myMonth);
      } else {
          getMonth = String(myMonth);
      }
      var getDate = String(myDate.getDate());
      if (getDate < 10) {
          getDate = "0" + String(getDate);
      } else {
          getDate = String(getDate);
      }
      var getMonthDate = "S" + getMonth + getDate;
      return ["https://cdn.jsdelivr.net/gh/Zfour/Butterfly-card-history@latest/baiduhistory/json/" + getMonth + ".json",getMonthDate]
  }
  var history_data = history_get_data()
  fetch(history_data[0]).then(data=>data.json()).then(data=>{
      console.log(data[history_data[1]])
      html_item =''
      for (var item of data[history_data[1]]){
          html_item += '<div class="swiper-slide history_slide"><span class="history_slide_time">A.D.' +
              item.year +'</span>' + '<span class="history_slide_link">'+ item.title +'</span></div>'

      }
      var history_container_wrapper = document.getElementById('history_container_wrapper')
      append(history_container_wrapper, html_item);
      var swiper_history = new Swiper('.history_swiper-container', {
          passiveListeners:true,
          spaceBetween: 30,
          effect: 'coverflow',
          coverflowEffect: {
              rotate: 30,
              slideShadows: false,
          },
          loop: true,
          direction: 'vertical',
          autoplay: {
              disableOnInteraction: true,
              delay:5000
          },

          mousewheel:false,
          // autoHeight: true,

      });

      var history_comtainer = document.getElementById('history-container');
      history_comtainer.onmouseenter = function () {
          swiper_history.autoplay.stop();
      };
      history_comtainer.onmouseleave = function () {
          swiper_history.autoplay.start();
      }
  })}

//评论侧边栏
//移除FixedComment类，保持原生样式，确保不与最新评论跳转冲突
function RemoveFixedComment() {
  var activedItems = document.querySelectorAll('.fixedcomment');
  if (activedItems) {
    for (i = 0; i < activedItems.length; i++) {
      activedItems[i].classList.remove('fixedcomment');
    }
  }
}
//给post-comment添加fixedcomment类
function AddFixedComment(){
  var commentBoard = document.getElementById('post-comment');
  var quitBoard = document.getElementById('quit-board');
  commentBoard.classList.add('fixedcomment');
  quitBoard.classList.add('fixedcomment');
}
//创建一个蒙版，作为退出键使用
function CreateQuitBoard(){
  var quitBoard = `<div id="quit-board" onclick="RemoveFixedComment()"></div>`
  var commentBoard = document.getElementById('post-comment');
  commentBoard.insertAdjacentHTML("beforebegin",quitBoard)
}

function FixedCommentBtn(){
  //第一步，判断当前是否存在FixedComment类，存在则移除，不存在则添加
  // 获取评论区对象
  var commentBoard = document.getElementById('post-comment');
  // 若评论区存在
  if (commentBoard) {
      // 判断是否存在fixedcomment类
      if (commentBoard.className.indexOf('fixedcomment') > -1){
        // 存在则移除
        RemoveFixedComment();
      }
      else{
        // 不存在则添加
        CreateQuitBoard();
        AddFixedComment();
      }
  }
  // 若不存在评论区则跳转至留言板(留言板路径记得改为自己的)
  else{
    // 判断是否开启了pjax，尽量不破坏全局吸底音乐刷新
      if (pjax){
        pjax.loadUrl("/message/#post-comment");
      }
      else{
        window.location.href = "/message/#post-comment";
      }
  }
}
//切换页面先初始化一遍，确保开始时是原生状态。所以要加pjax重载。
RemoveFixedComment();

  fetch('https://v1.hitokoto.cn')
    .then(response => response.json())
    .then(data => {
      const hitokoto = document.getElementById('hitokoto_text')
      hitokoto.href = 'https://hitokoto.cn/?uuid=' + data.uuid
      hitokoto.innerText = data.hitokoto
    })
    .catch(console.error)


