<template>
 <div class="songList">
        <!-- 1.歌手相关列表 -->
    <div class="absinger">
       <!-- 1.1图片歌手信息 -->
       <div class="singerInfo">
           <!--头部 返回图标+歌手 -->
           <div class="tback">
             <img src="../../assets/homePageImages/back.png">
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
              <li class="song-list" v-for="(item,i) of list" :key="i" @click="play2">
                  <span>{{i+1}}</span>
                  <p>
                      <span>{{item.songname}}</span>
                      <span>{{item.singer}}</span>
                  </p>
              </li>
          </ul>
       </div>
    </div>
    <!-- 当前播放器的清单列表 -->
    <div class="bg_tab"   @touchmove.prevent @mousewheel.prevent>
      <div class="show-all">
        <ul>
            <li>
                <!-- 播放风格：循环播放、单曲循环、随机播放 -->
                <div class="pstyle">
                 <div class="pstyle-icon" @click="turnsty">
                    <img :src="imgs[i]">
                 </div>
			     <span v-text="pstyle[i]">(共{{pcount}}首)</span>
                </div>  
                <div class="del" @click="delAll">
                    <img src="../../assets/homePageImages/del.png" >
                </div>
            </li>
            <li class="p-list"  v-for="(item,i) of list.slice(0,6)" :key="i" @click="play1"><!-- v-if="pshow"-->
                 <span>{{item.songname}}</span>
                <span class="del-item" @click="delItem"> <img src="../../assets/homePageImages/close.png" ></span>
            </li>
        </ul>
        <div class="close" @click="close">关闭</div>
      </div>
    </div>
     <!-- 底部播放器 -->
     <div class="play-music hide">
      <div class="songInfo" @click="toLyrics">
          <img src="../../assets/homePageImages/list-1.jpg">
          <div class="Title">
            <span class="title">{{songname}}</span>
             <span class="singer">{{singer}}</span>
          </div>
      </div>
      <div class="player">
        <div class="more" @click="more"><img src="../../assets/homePageImages/more.png"></div>
        <div id="myplay" class="play"   @click="play3"><img src="../../assets/homePageImages/play-red.png"></div>
        <div class="next" id="next" @click="next" ><img src="../../assets/homePageImages/next-red.png"></div>
      </div>
    </div>
    <!-- 插入音频 -->
    <audio  id="music" :src="audioUrl"  type="audio/mp3" controls preload hidden></audio>
  </div>
</template>
<script>
export default {
    data(){
        return{
        //播放清单列表  
    list:[{songname:'倒数',singer:'aaa'},
        {songname:'光年之外',singer:'G.E.M邓紫棋'},
        {songname:'红蔷薇白玫瑰',singer:'G.E.M邓紫棋'},
        {songname:'来自天堂的魔鬼',singer:'G.E.M邓紫棋'},
        {songname:'Good To Be Bad',singer:'G.E.M邓紫棋'},
        {songname:'多远都要在一起',singer:'G.E.M邓紫棋'},
        {songname:'After Tonight',singer:'G.E.M邓紫棋'},
        {songname:'我的秘密',singer:'G.E.M邓紫棋'},
        {songname:'亚莉亚蒂之歌',singer:'G.E.M邓紫棋'},
        {songname:'What Have U Done',singer:'G.E.M邓紫棋'},
        {songname:'单行的轨道',singer:'G.E.M邓紫棋'},
        {songname:'Oh Boy',singer:'G.E.M邓紫棋'},],
    songname:"Oh Boy",//歌词
    singer:"G.E.M邓紫棋",//歌手
    pcount:"138",//歌曲总个数
    pstyle:["顺序播放","随机播放","单曲循环"],
    imgs:[require('../../assets/homePageImages/xh.png'),
         require('../../assets/homePageImages/sj.png'),
         require('../../assets/homePageImages/dq.png')],
    i:0,//控制循环体的下标
    pshow:true, //播放清单是否true显示/false清空
    // 歌单列表
    songs:[
    {song: require('../../assets/songs/123_mu_tou_ren.mp3'),Lyric:"../../assets/songs/123_mu_tou_ren.lrc"},
    {song:require('../../assets/songs/ai_la_la.mp3'),Lyric:"../../assets/songs/ai_la_la.lrc"}, 
    {song:require('../../assets/songs/ai_ni.mp3'),Lyric:"../../assets/songs/ai_ni.lrc"}, 
    {song:require('../../assets/songs/ai_xiang_wei.mp3'),Lyric:"../../assets/songs/ai_xiang_wei.lrc"}, 
    {song:require('../../assets/songs/ai_xiao_de_yan_jing.mp3'),Lyric:"../../assets/songs/ai_xiao_de_yan_jing.lrc"}, 
    {song:require('../../assets/songs/ai_yi_dian.mp3'),Lyric:"../../assets/songs/ai_yi_dian.lrc"}, 
    ],
    audioUrl:""
    }
   },
    methods:{
    //  songInfo点击的时候跳转到播放详情页
     toLyrics(){
          this.$router.push({ path:'/Lyrics'})
     },
    //  player 点击控制播放状态 
     

   //点击歌单的时候显示播放器/将歌词和歌名传到播放器/audio地址连接到对应的地址  
    play2(e){
         var player=document.getElementsByClassName("play-music")[0];
        player.classList.remove("hide");
        var el=e.currentTarget;
        var i=el.firstChild.innerHTML;
        var span=el.lastChild.children;
        this.songname=span[0].innerHTML;
        this.singer=span[1].innerHTML;
        var audio=document.getElementById("music");
        this.audioUrl=this.songs[i-1].song;
        var img=document.getElementById("myplay").firstChild;
        // audio.play();
        // 设置点击时自动播放
         audio.oncanplaythrough = function () {
            audio.play();
            img.src=require("../../assets/homePageImages/stopPlay-r.png")
         };
    }, 
    // 当点击播放器播放图标时，当前歌曲实现播放/暂停
     play3(e){
         var el=e.currentTarget;
         var audio=document.getElementById("music");
        //  console.log(audio)
        var img=el.firstElementChild;
        if(audio.paused){
            img.src=require("../../assets/homePageImages/stopPlay-r.png");
            audio.play();
        }else{
            audio.pause();
            img.src=require("../../assets/homePageImages/play-red.png");
        }
     },
 // 点击播放清单的时候，显示播放器，并切换歌曲,改变播放的图标，暂停-》播放
    play1(e){
        var player=document.getElementsByClassName("play-music")[0];
        // player.classList.remove("hide");
        var img=document.getElementsByClassName("play")[0].firstChild;
        var s=e.currentTarget.children[0].innerHTML;
        this.songname=s;
        var index=0;
       for(var i=0;i<this.list.length;i++){
               if(this.list[i].songname==s){              
                   this.singer=this.list[i].singer;
                   index=i;
               }
       }  
       console.log(index)
        var audio=document.getElementById("music");
        this.audioUrl=this.songs[index].song;
        audio.play();
        console.log(audio)
        if(audio.paused){
            img.src=require("../../assets/homePageImages/stopPlay-r.png");
        }else{
            img.src=require("../../assets/homePageImages/play-red.png");
        }
 
    },


    // 点击更多的时候触发播放歌曲的清单列表/播放器隐藏
    more(){
      var bg_tab=document.getElementsByClassName("bg_tab")[0];
      var player=document.getElementsByClassName("play-music")[0];
      player.classList.add("hide");
      bg_tab.style.display="block"; 
    },
    //  show-all显示播放歌单列表中的功能实现
    // 播放风格：循环播放、单曲循环、随机播放
    turnsty(){
        if(this.i<3){
            this.i++;
        }
        if(this.i==3){
            this.i=0;
        }

    }, // 点击下一首的时候，动态切换歌曲 OK
    next(e){
        var el=e.currentTarget;
       var audio=document.getElementById("music");
       var songInfo=el.parentElement.previousSibling.lastChild;//songInfo下的Title
       var index=0;
       var s=songInfo.firstChild.innerHTML;
       for(var i=0;i<this.list.length;i++){
               if(this.list[i].songname==s){              
                   this.singer=this.list[i].singer;
                   index=i;
               }
       }
      this.songname=this.list[index+1].songname;
      this.singer=this.list[index+1].singer;
      this.audioUrl=this.songs[index+1].song;
    },
    // del 删除全部的播放清单  点击事件
    delAll(){
        var plist=document.getElementsByClassName("p-list");
        // console.log(plist)
        if(plist.length===0){
               this.$toast("您尚未添加任何歌曲")
        }
        this.$messagebox.confirm("是否确定清空全部?").then(result=>{
              this.pshow=false;
        //     console.log(plist);
        //    for(var i=0;i<plist.length;i++){
        //         plist[i].remove();
        //    }     
        }).catch(err=>{})
    },
    // del 删除单首歌曲  点击事件
    delItem(e){
       var el=e.currentTarget;
       var elPre=el.parentElement;
       elPre.remove();
    },
    //关闭时隐藏面板 显示播放器
    close(e){
        var player=document.getElementsByClassName("play-music")[0];
        player.classList.remove("hide");
        var el=e.currentTarget;
        var elPre=el.parentElement.parentElement;
        elPre.style.display="none";

    }





    }
}
</script>
<style scope> 
    /*  面板的宽高 */
    .songList{
         height:100vh;
         width:100vw;
    }
    /* 遮罩样式 */
    .bg_tab{
         width:100vw;
         height:100vh;
         position:fixed;
         top:0;
         bottom:0;
         background:rgba(0,0,0,0.1);
         display:none;
     }
      /* 显示播放列表的宽高定位样式 */
     .show-all{
        height:45vh;
        width:100vw;
        position:fixed;
        bottom:0;
        background:#f5f5f5;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
       overflow:auto;
     }
     /* 去除列表项标识 设置内边距 */
    .show-all ul{
       list-style: none;
       padding:10px 15px 5px;
       margin:0;
    }

      /* 出了最后一个li 其他都弹性布局 横线排列 两端对齐 */
   .show-all ul li{
          display:flex;
          align-items: center;
          padding:7px;
          justify-content: space-between;
   }
    /* 最后一个li的文字居中 "关闭"*/
     .show-all>div.close{
         /* text-align:center; */
         position:absolute;
         bottom:5px;
         width:40px;
         left:50%;
         margin-left:-20px;
     }
     /* 循环：弹性布局 文字和图标对齐 */
     .pstyle{
         display: flex;
         align-items: center;
     }
     /* 图标用背景的方式嵌入 */
   .pstyle-icon{
       width:20px;
       height:20px;
       margin-right:10px;
    }
    /* 图标缩小到容器的大小 */
    .pstyle-icon img{
        width:100%;
    }
    /* 右侧删除图标容器大小 */
    .del{
      width:16px;
      height:16px;  
    }
    /* 右侧删除图标容器大小 */
    .del-item{
      width:12px;
      height:12px;  
    }
    /* 删除的图标的大小设置 */
   .del img, .del-item img{
       width:100%;
   }
   /* 播放器隐藏 */
   .hide{
      display:none !important;
   }




     /* 歌手相关列表 */
     .absinger{
      width:100vw;
      height:90vh;
     }
     /* 歌手信息背景图片 文字颜色样式 */
     .singerInfo{
      height:40vh;
      background:url(../../assets/homePageImages/dzq.jpg) no-repeat 50%;
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
     /* 播放列表的边框样式 绝对定位 和背景颜色*/
     .music-list{
         width:100vw;
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
     /*  */
       .music-list ul li{
        height:50px;
        display:flex;
        padding:0 10px;
       align-items: center;
       border-bottom:1px solid #ddd;
       
       }
       /* 歌曲列表 歌名和歌手排列 */
    .song-list p{
        display:flex;
        flex-direction:column;
        margin-left:10px;
    }
    .song-list p span:last-child{
        font-size:12px;
        color:#999;
        margin-top:2px;
    }
    /* 调整歌曲别表序号和歌名之间的距离 */
      .song-list>span{
          margin:0 10px;
      }




     /* 播放图标 */
     .play-icon{
         width:20px;
         height:20px;
         background:url(../../assets/homePageImages/paly.png)  no-repeat center center;
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
        width:20px;
        height:20px;
        margin:10px;
    }
    /* 图片与文字垂直居中 */
    .player div img{
        width:100%;
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
    /* 隐藏滚动条 */
  ::-webkit-scrollbar {
     width: 0 !important;
   }

</style>
