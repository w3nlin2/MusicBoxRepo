<template>
 <div class="songList">
        <!-- 1.歌手相关列表 -->
    <div class="absinger">
       <!-- 1.1图片歌手信息 -->
       <div class="singerInfo">
           <!--头部 返回图标+歌手 -->
           <div class="tback">
             <img src="../../static/img/back.png">
             <span>歌手</span>
           </div>
           <!-- 底部歌手名称 -->
           <div class="sname">G.E.M邓紫棋(G.E.M)</div>
       </div>
       <!-- 1.2 播放列表-->
       <div class="music-list">
          <ul class="playall">
              <li>
			    <span class="play-icon"></span>
				<span>播放全部(共50首)</span>
              </li>
              <li>
      
              </li>
          </ul>
       </div>
    </div>

      <!-- 底部播放器 -->
     <div class="play-music">
      <div class="songInfo" @click="toLyrics">
          <img src="../../static/img/list-6.jpg">
          <div class="Title">
            <span class="title">I need your love</span>
             <span class="singer">calvin harris / ellie goulding</span>
          </div>
      </div>
      <div class="player">
        <div><img src="../../static/img/more.png"></div>
        <div><img src="../../static/img/play-red.png"></div>
        <div><img src="../../static/img/next-red.png"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return{
         list:[
        {id:1,song:'倒数',sname:'G.E.M邓紫棋'},
        {id:2,song:'光年之外',sname:'G.E.M邓紫棋'},
        {id:3,song:'红蔷薇白玫瑰',sname:'G.E.M邓紫棋'},
        {id:4,song:'来自天堂的魔鬼',sname:'G.E.M邓紫棋'},
        {id:5,song:'Good To Be Bad',sname:'G.E.M邓紫棋'},
        {id:6,song:'多远都要在一起',sname:'G.E.M邓紫棋'},
        {id:7,song:'After Tonight',sname:'G.E.M邓紫棋'},
        {id:8,song:'我的秘密',sname:'G.E.M邓紫棋'},
        {id:9,song:'亚莉亚蒂之歌',sname:'G.E.M邓紫棋'},
        {id:10,song:'What Have U Done',sname:'G.E.M邓紫棋'},
        {id:11,song:'单行的轨道',sname:'G.E.M邓紫棋'},
        {id:12,song:'Oh Boy',sname:'G.E.M邓紫棋'},
              ]
        }
    },
    methods:{
    //  songInfo点击的时候跳转到播放详情页
     toLyrics(){
         
     }
    //  player 点击控制播放状态 
    }
}
</script>
<style scope> 
     /* 歌手相关列表 */
     .absinger{
      width:100vw;
      height:90vh;
     }
     /* 歌手信息背景图片 文字颜色样式 */
     .singerInfo{
      height:40vh;
      background:url(../../static/img/dzq.jpg) no-repeat 50%;
      background-size:cover;
      color:#f5f5f5;
      display: flex;
      flex-direction:column;
      justify-content: space-between;
     }
     /* 返回图标和歌手弹性布局 */
     .tback{
         display:flex;
         margin:8px 12px;
         align-items: center;
     }
     /* 返回图标的大小设置 */
     .tback img{
          width:22px;
          margin-right:8px;
      }
      /* 歌手名称样式 */
     .sname{
         font-weight: bold;
         margin:25px 15px;
     }
     /*  */
     .music-list{

         width:100vw;
         /* height:50vh; */
         border-top-left-radius: 15px;
         border-top-right-radius: 15px;
         border:1px solid #ccc;
         position:absolute;
         top:38vh;
         background:#f5f5f5;
     }
     /* 去掉列表项标识 */
     .music-list ul{
         list-style: none;
         padding:0;
         margin:0;
  
     }
       .music-list ul li{
       display:flex;
       align-items: center;
       border-bottom:1px solid #ddd;
       padding:8px;
       }
     /* 播放图标 */
     .play-icon{
         width:20px;
         height:20px;
         background:url(../../static/img/paly.png)  no-repeat center center;
         background-size:100%;
         margin:3px 15px 3px 8px;
     }

    /* 设置播放器整体的弹性布局，两端对齐 定位固定在底部*/
    .play-music{
        position:fixed;
        bottom:0;
        left:0;
        background:#fff;
        width:100vw;
        border:1px solid red;
        display:flex;
        justify-content:space-between;
        align-items: center;
        padding:5px 0;
    }
    /* 弹性布局横向排列 */
    .songInfo,.player{
        display:flex;
        /* width:50%; */
    }
    /* 弹性布局横线排列 靠右侧方向 */
    .player{
      justify-content: flex-end;
    }
    /* 图片距离 */
    .player div{
        margin:10px;
    }
    /* 图片与文字垂直居中 */
    .player div img{
        vertical-align:middle;
    }
   /* 设置图片的大小 */
    .songInfo img{
      width:40px;
      height:40px;
      border-radius:8px;
      margin:0 8px;
    }
   /* 歌手和歌名弹性布局竖向排列 */
    .Title{
        display:flex;
        flex-direction:column;
        justify-content: center;
    }
    /* 歌手字体大小设置 */
    .singer{
        font-size:13px;
    }

</style>
