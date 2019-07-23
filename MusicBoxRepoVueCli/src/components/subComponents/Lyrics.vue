<template>
  <div class="lyric">
    <div class="header">
      <div class="back" @click="back">
        <img src="../../assets/homePageImages/back.png">
      </div>
      <div class="Title">
        <span class="title">{{artist}}</span>
        <span class="singer">{{song_name}}</span>
      </div>
      <div class="share">
        <img src="../../assets/homePageImages/share.png">
      </div>
    </div>
    <div class="turntable" id="turntable" @click="turntable">
      <img  src="../../assets/homePageImages/list-1.jpg">
    </div>
    <div class="music-lrc" id="music-lyc" @click="musicLyc">
       <div class="lyricWrap">
         {{lrc_name}}
       </div>
    </div>
    <div class="audioOff">
      <audio id="music" :src="audioUrl"  type="audio/mp3" controls preload  
       @canplay="getDuration" @timeupdate="updateTime" ref="audio" hidden
      ></audio>
      <div class="progress-bar" ref="progressBar">
       <div class="bar-inner">
        <div class="progress" ref="progress"></div>
        <div class="progress-btn-wrapper" ref="progressBtn">
           <div class="progress-btn" @touchstart="start"
           @touchmove="move" @touchend="end"
           ></div>
        </div>
       </div>
      </div>
      <div class="duration">
          <span>{{starttime}}</span>
          <span class="right-timer">{{duration}}</span>
      </div>
      <div class="player">
        <div class="loop" @click="loop">
          <img src="../../assets/homePageImages/dq1.png">
        </div>
        <div class="prev">
          <img src="../../assets/homePageImages/next.png">
        </div>
        <div class="play" @click="play4">
          <img src="../../assets/homePageImages/play-w.png">
        </div>
        <div class="next">
          <img src="../../assets/homePageImages/next.png">
        </div>
        <div class="shouc" @click="shoucang">
          <img src="../../assets/homePageImages/sc.png">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// 1.1引入json文件[数据]
// json文件引入当前项目 js obj
import musicjson from '../../assets/json/content.json' 
export default {
  data() {
    return {
      audioUrl:require('../../assets/songs/ai_la_la.mp3'),
      rangeValue:0, //进度
      starttime: "00:00", //正在播放时长
      duration: "01:03", //总时长
      totalTime:"",
      tstart:"",//进度条开始touchstart的X距离
      tend:"",//进度条开始touchend的X距离
      flags: false,
       nx: '',//拖拽移动的距离
       dx: '', //元素边框外侧到父元素左侧距离
       xPum: '',//元素移动的水平距离(left)
       list:musicjson,//清单
       artist:"" ,//歌手
       song_name:"",//歌名
       lrc_name:""//歌词
    };
  },
  methods: {
     loadMore(){
        var musicLyc=this.list.data;
        console.log( musicLyc);
        var lrcname=this.audioUrl.split(".")[0].split("/")[2];
        for(var lyc of musicLyc){
           if(lrcname===lyc.lrc_name){
             this.artist=lyc.artist;
             this.song_name=lyc.song_name;         
           }
        }
     },
    // 点击返回时的事件
    back(){
      this.$router.push({path:'./Player'})
    }
    // 点击转盘时显示歌词
    ,turntable(e){
       e.currentTarget.style.display="none";
       var lyc=document.getElementById("music-lyc");
       lyc.style.display="block";
    },
    // 点击歌词时显示转盘
    musicLyc(e){
        e.currentTarget.style.display="none";
        var lyc=document.getElementById("turntable");
       lyc.style.display="block";
    },
    // play4 点击事件，当图片播放时候，改变图标，控制中间转盘状态 
   play4(e){
     var el=e.currentTarget;
     var playImg=el.firstElementChild;
     var audio=document.getElementById("music");
     var turntable=document.getElementById("turntable");
     var turnImg=turntable.firstElementChild;
     if(audio.paused){
        playImg.src=require("../../assets/homePageImages/stopPlay.png");
          audio.play();
        turnImg.classList.add("turnImg");
     }else{
        playImg.src=require("../../assets/homePageImages/play-w.png");
        audio.pause();
         turnImg.classList.remove("turnImg");
     }
    },
    // 点击收藏时的图标切换
     shoucang(e){
        var el=e.currentTarget;
        var sc=el.firstElementChild;
       if(sc.src==require('../../assets/homePageImages/sc.png')){
         sc.src=require('../../assets/homePageImages/sc1.png');
       }else{
         sc.src=require('../../assets/homePageImages/sc.png');
       }
  },
  // 点击时实现歌曲循环
  loop(e){
    var audio=document.getElementById("music");
    var loopImg=e.currentTarget.firstElementChild;
    if(loopImg.src==require('../../assets/homePageImages/dq1.png')){
         loopImg.src=require('../../assets/homePageImages/dq2.png');
         audio.loop="loop";  
    }else{
         loopImg.src=require('../../assets/homePageImages/dq1.png');
         audio.loop=false;
    }
  },

 getDuration() {
      //  console.log(this.$refs.audio.duration); //此时可以获取到duration
      //  this.duration = this.$refs.audio.duration;
                 //处理时长
                var time =this.$refs.audio.duration;
                this.totalTime=time;
                //分钟
                var minute = time / 60;
                var minutes = parseInt(minute);
                if (minutes < 10) {
                    minutes = "0" + minutes;
                }
                //秒
                var second = time % 60;
                var seconds = Math.round(second);
                if (seconds < 10) {
                    seconds = "0" + seconds;
                }
                this.duration=minutes+":"+seconds;
    },
    updateTime(e) {
       var currentTime = e.target.currentTime;  //获取audio当前播放时间
      //  console.log(time);
       var minute = currentTime / 60;
       var minutes = parseInt(minute);
       if (minutes < 10) {
            minutes = "0" + minutes;
        }
        //秒
       var second = currentTime % 60;
         var seconds = Math.round(second);
        if (seconds < 10) {
           seconds = "0" + seconds;
        }
       this.starttime=minutes+":"+seconds;
      var progress=document.getElementsByClassName("progress")[0];
      var turntable=document.getElementById("turntable");
      var playImg=document.getElementsByClassName("play")[0].firstChild;
      var proBtn=document.getElementsByClassName("progress-btn")[0];
      var img=turntable.firstChild;
      // console.log(currentTime/this.totalTime)
      progress.style.width=parseInt(currentTime*300/this.totalTime)+"px";
      proBtn.style.left=parseInt(currentTime*300/this.totalTime)+"px";
      if(e.target.ended){
           progress.style.width=0;
           this.starttime="00:00";
           img.classList.remove("turnImg");
           playImg.src=require("../../assets/homePageImages/play-w.png");
           proBtn.style.left=0;

      }
    },
    start(e){
      var proBtn=document.getElementsByClassName("progress-btn")[0];
      this.flags = true;
      var touch = event.touches[0];
      this.tstart=touch.clientX
      // console.log(touch)
      this.dx = proBtn.offsetLeft;//元素到浏览器的左侧距离
      // console.log(this.dx)
    },
    move(e){
      //阻止页面的滑动默认事件
      e.preventDefault();
      if(this.flags){
      var touch = event.touches[0];
      this.nx = touch.clientX - this.tstart;//拖拽移动的距离     
      // console.log(this.nx)
      if(this.nx+this.dx>=0&&this.nx+this.dx<=300){
       this.xPum = this.dx+this.nx;//控制元素左右移动距离
       var proBtn=document.getElementsByClassName("progress-btn")[0];
        proBtn.style.left=parseInt(this.xPum)+"px";
      }
    }
    },
    end(e){
        this.flags = false;  
        var xPum=this.xPum;
        var total=this.totalTime;
        var ctime=total*xPum/300 //进度条长度300
        music.currentTime=ctime;
      },
          
    },//method的结束
    created(){
       this.loadMore();
    }

};
// 在模板渲染成html后调用，通常是初始化页面完成后，再对html的dom节点进行一些需要的操作。
</script>
<style scope>
/* 界面高度背景图片设置 */
.lyric {
  height: 100vh;
  background: url("../../assets/homePageImages/playerbg4.jpg");
  background-position: cover;
  background-size: 100%;
  position: relative;
}
/* 头部弹性布局 横向排列 */
.header {
  display: flex;
  justify-content: space-between;
  padding: 10px;
}
/* 歌手和歌名弹性布局竖向排列 */
.lyric .Title {
  text-align: center;
  color: #f5f5f5;
}
/* 中间转盘*/
.turntable {
  /* display: none; */
  width: 300px;
  height: 300px;
  position: absolute;
  top: 20%;
  left: 50%;
  margin-left: -150px;
  background: url("../../assets/homePageImages/default.png") no-repeat;
  background-size: 100%;
  border-radius: 50%;
  text-align: center;
  /* border: 1px solid red; */
}
/* 转盘中的图片位置调整 */
.turntable img {
  width: 270px;
  margin-top: 15px;
  border-radius: 50%;
}
/* 转盘中的图片位置调整 */
.turntable>img {
  width: 270px;
  margin-top: 15px;
  border-radius: 50%;
}
.turnImg{
   animation:rotateImg 8s linear infinite; 
}
 @keyframes rotateImg {
  0% {transform : rotate(0deg);}
  100% {transform : rotate(360deg);}
}


/* 歌词 */
.music-lrc{
  display:none;
  color:#f5f5f5;
  /* border: 1px solid red; */
  position: absolute;
  top: 13%;
  width: 80%;
  height: 60%;
  left:10%;
  text-align:center;
  overflow:hidden;
}
/*  */

/* 底部进度条样式和播放器的样式 */
 .audioOff {
  position: fixed;
  bottom: 8%;
  width: 80%;
  left: 50%;
  margin-left: -40%;
  padding: 0.4rem 0;} 
 
/* 播放器位置调整，弹性布局横向排列 */
.audioOff .player {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
 /*进度条容器的高度*/
	 .progress-bar{
	     height:30px;
       width:80vw;
			 background:none;
       /* border:1px solid red; */
	 }
    /* 进度条：宽度 位置*/
    .bar-inner{
		  position: relative;
      top:14px;
      height:3px;
      background: rgba(255,255,255, 0.6);
		}
      /* 播放进度完成进度条颜色     */
      .progress{
			 position: absolute;
       height:3px;
			 /* width:50%; */
       background :rgb(64, 131, 207);
				/* border:1px solid lightblue; */
			}
/* */
      .progress-btn-wrapper{
			  position: absolute;
        left: 0px;
        top: -5px;
        width: 30px;
        height: 30px;
			
			}  
       /* 进度球的颜色样式位置     */ 
        .progress-btn{
          position:relative;
          box-sizing: border-box;
          width :12px;
          height :12px;
          border-radius :50%;
          background:#fff;
			}
      .duration{
           width:80vw;
           display:flex;
          color:#fff;
          font-size:12px;
          justify-content: space-between; 

      }

    /* 上一首调整方向 */
   .prev img{
    transform: rotateY(180deg); 
    }

</style>
