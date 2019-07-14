<template>
  <div class="lyric">
    <div class="header">
      <div class="back" @click="back">
        <img src="../../assets/homePageImages/back.png">
      </div>
      <div class="Title">
        <span class="title">I need your love</span>
        <span class="singer">calvin harris / ellie goulding</span>
      </div>
      <div class="share">
        <img src="../../assets/homePageImages/share.png">
      </div>
    </div>
    <div class="turntable">
      <img src="../../assets/homePageImages/list-1.jpg">
    </div>
    <div class="music-lrc">
       <div class="lyricWrap">

       </div>
    </div>
    <div class="audioOff">
      <audio id="audio" :src="audioURl"></audio>
      <div class="progress">
        <mt-range v-model="rangeValue" :value="rangeValue" :step="10" :max="offset"></mt-range>
        <div class="duration">
          <span>{{starttime}}</span>
          <span class="right-timer">{{duration}}</span>
        </div>
        <div class="cover"></div>
      </div>
      <div class="player">
        <div class="loop">
          <img src="../../assets/homePageImages/loop.png">
        </div>
        <div class="prev">
          <img src="../../assets/homePageImages/next.png">
        </div>
        <div class="play">
          <img src="../../assets/homePageImages/play-w.png">
        </div>
        <div class="next">
          <img src="../../assets/homePageImages/next.png">
        </div>
        <div class="more">
          <img src="../../assets/homePageImages/more-w.png">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      audioURl: "../../static/music/陶辚竹 - 一直很安静",
      rangeValue: 0, //进度
      starttime: "00:00", //正在播放时长
      duration: "01:03", //总时长
      offset: 0
    };
  },
  methods: {
    back(){
      this.$router.push({path:'./Player'})
    }

  }
};
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
  display: none;
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
  border: 1px solid red;
}
/* 转盘中的图片位置调整 */
.turntable img {
  width: 270px;
  margin-top: 15px;
  border-radius: 50%;
}
/* 歌词 */
.music-lrc{
  color:#f5f5f5;
  border: 1px solid red;
  position: absolute;
  top: 13%;
  width: 80%;
  height: 60%;
  left:10%;
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
  padding: 0.4rem 0;
  /* border:1px solid red; */
}
/* 进度条样式 */
.progress {
  width: 95%;
  margin: 0 auto;
  flex: 1; /* 所有弹性盒模型对象的子元素都有相同的长度 */
  font-size: 0.3rem;
  position: relative;
}
/* 播放时进度条的进度样式 */
.cover {
  width: 0.28rem;
  height: 0.1rem;
  position: absolute;
  background: rgb(0, 110, 255);
  top: 0.9rem;
  left: 0rem;
}
/* 进度条指示器原点的样式和位置 */
.mt-range-thumb {
  background-color: #fff;
  position: absolute;
  left: 0;
  top: 0.6rem !important;
  width: 0.6rem !important;
  height: 0.6rem !important;
  border-radius: 50%;
  cursor: move;
  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  z-index: 999;
}
/* 进度条底下时间的样式 */
.duration {
  color: #f5f5f5;
  display: flex;
  justify-content: space-between;
}
/*最后时长的时间位置调整*/
.right-timer {
  margin-right: 0.27rem;
}
/* 播放器位置调整，弹性布局横向排列 */
.audioOff .player {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
/* 上一首图标样式调整 */
.prev img{
   transform: rotateY(180deg); 
}
</style>
