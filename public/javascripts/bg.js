$(function(){
  function draw(){
    ctx.fillStyle = "rgba("+br+","+bg+","+bb+", 0.05)";
    ctx.fillRect(0,0, canvas.width, canvas.height);
    ctx.fillStyle = "rgba("+fr+","+fg+","+fb+", 1)";
    ctx.font = "10px arial";
    for (var t=0; d.length>t; t++){
      var r=bgkey[Math.floor(Math.random()*bgkey.length)];
      ctx.fillText(r,t*10,d[t]*10);
      if (d[t]*10>canvas.height && Math.random()>.975){
        d[t]=0;
      }
      d[t]++;
    }
    ctx.fillStyle = "rgba(255,0,0,1)";
    ctx.fillRect(0,y, canvas.width, 6);
    ctx.fillRect(x,0, 6, canvas.height);
  }
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  var br = 0;
  var bg = 0;
  var bb = 0;
  var fr = 0;
  var fg = 255;
  var fb = 0;
  var x = 70;
  var y = 95;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  var d = [];
  for (var t=0; canvas.width/10>t; t++)
    d[t]=1;

  var bgkey = "01";
  bgkey = bgkey.split("");

  setInterval(draw, 30);
  $(window).resize(function(){
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    for (var t=0; canvas.width/10>t; t++)
      d[t]=1;
  })

  $(document).mousemove(function(e){
    x = e.pageX;
    y = e.pageY;
  })

  $("#mail").hover(
    function(){
      br = 0;
      bg = 0;
      bb = 205;
      fr = 0;
      fg = 255;
      fb = 255;
    }
  )

  $("#github").hover(
    function(){
      br = 0;
      bg = 0;
      bb = 0;
      fr = 0;
      fg = 255;
      fb = 0;
    }
  )

  $("#facebook").hover(
    function(){
      br = 0;
      bg = 0;
      bb = 0;
      fr = 255;
      fg = 0;
      fb = 0;
    }
  )

  $("#googleplus").hover(
    function(){
      br = 139;
      bg = 0;
      bb = 0;
      fr = 255;
      fg = 255;
      fb = 0;
    }
  )

  $("#writeahead").hover(
    function(){
      br = 236;
      bg = 240;
      bb = 241;
      fr = 127;
      fg = 140;
      fb = 141;
    }
  )

  $("#wargame").hover(
    function(){
      br = 0;
      bg = 0;
      bb = 0;
      fr = 255;
      fg = 255;
      fb = 255;
    }
  )

  $("#speakerdeck").hover(
    function(){
      br = 255;
      bg = 165;
      bb = 0;
      fr = 0;
      fg = 0;
      fb = 0;
    }
  )

  $("#linkin").hover(
    function(){
      br = 30;
      bg = 144;
      bb = 255;
      fr = 255;
      fg = 255;
      fb = 255;
    }
  )

  $("#nisra").hover(
    function(){
      br = 0;
      bg = 0;
      bb = 0;
      fr = 255;
      fg = 215;
      fb = 0;
    }
  )

  $("#blog").hover(
    function(){
      br = 117;
      bg = 117;
      bb = 117;
      fr = 255;
      fg = 255;
      fb = 255;
    }
  )

  console.log("尼使Roar(2/3)");
  console.log("經歷滄桑的梅大");
  console.log("無敵霹靂艾倫翁大大");
  console.log("苗條脫鉤哈比大大");
  console.log("少林十八銅人大大");
  console.log("黑Orange大大");
  console.log("BZ大大 nodejs就上手XD");
  console.log("小林倉鼠*1");
  console.log("3C傳說級破壞王");
  console.log("吊帶襪與人生");
  console.log("長門有希最高");
  console.log("狂讚士");
  console.log("冷酷小王子");
  console.log("Gary is a X");
  console.log("就只是一隻拖鞋");
  console.log("超級小煙囪");
  console.log("奇耙 奇異之人聚集與此");
  console.log("尼使Roar N大不可思議");
  console.log("<(_ _)>");
  console.log("...");
  console.log("...");
  console.log("媽呀 我剛剛到底打了什麼");
});
