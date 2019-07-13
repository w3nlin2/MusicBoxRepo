<template>
        <div class="music-list">
        <div class="dd-header">
            <div class="dd-left">
                <i class="iconfont icon-angle-left"></i>
                </div>
            <div class="dd-text">
                <h1>歌单</h1>
            </div>
        </div>
            <div class="bg-image">
            <div class="filter"></div>
            <div class="text">
                <h2 class="title-list">【VIP专享】一周新歌推荐</h2>
            <p class="play-count"><i class="iconfont icon-fa-headphones">14242万</i></p>
            </div>
           </div>
           <div class="song-list-wrapper">
               <div class="sequence-play">
                   <i class="iconfont icon-bofangicon"></i>
                   <span class="text">播放全部</span>
                   <span class="count">(共20首)</span>
               </div>
               <div class="song-list">
                   <ul v-for="(elem,i) in songullist" :key="i">
                       <li class="item">
                        <p class="count">{{i+1}}</p>
                        <div class="content">
                            <h2 class="name">{{elem.name}}</h2>
                            <p class="desc">{{elem.desc}}</p>
                        </div>
                        </li>
                   </ul>
               </div>
           </div>
    </div>
</template>
<script>
export default {
data(){
return {
songullist:[
{name:"Spirit (From Disney's The Lion King)",desc:"Beyoncé"},
{name:"Forever Rock N Roll",desc:"黄征"},
{name:"Forever Rock N Roll",desc:"黄征"},
{name:"Forever Rock N Roll",desc:"黄征"},
{name:"Forever Rock N Roll",desc:"黄征"},
{name:"Forever Rock N Roll",desc:"黄征"},
{name:"Forever Rock N Roll",desc:"黄征"},
{name:"Forever Rock N Roll",desc:"黄征"},
{name:"Forever Rock N Roll",desc:"黄征"},
{name:"Forever Rock N Roll",desc:"黄征"},
{name:"Forever Rock N Roll",desc:"黄征"},
{name:"Forever Rock N Roll",desc:"黄征"},
{name:"Forever Rock N Roll",desc:"黄征"},
{name:"Forever Rock N Roll",desc:"黄征"},
{name:"Forever Rock N Roll",desc:"黄征"},
{name:"Forever Rock N Roll",desc:"黄征"},
{name:"Forever Rock N Roll",desc:"黄征"},
{name:"Forever Rock N Roll",desc:"黄征"},
{name:"Forever Rock N Roll",desc:"黄征"},
{name:"Forever Rock N Roll",desc:"黄征"},
{name:"Forever Rock N Roll",desc:"黄征"},
]
}
},

}
</script>
<style scoped>
.music-list{
z-index:1000;
top:0;left:0;
bottom:0;right:0;
background-color:#f2f3f4;
}
.music-list .dd-header{
position:fixed;
display:block;
top:0;
width:100%;
height:40px;
color:#fff;
z-index:100;
background:reba(212,68,57,0)
}
.dd-left{
position:absolute;
top:5px;
left:-3px;
}
.dd-text{
position:absolute;
width:40px;height:44px;
left:35px;
top:10px;
font-size:8px;
font-weight:normal;
text-overflow:ellipsis;
overflow:hidden;
white-space:nowrap;
}
.dd-text>h1{
margin:0;padding:0;
vertical-align: baseline;
}
.iconfont{
font-size:30px;
padding:5px 8px;
}
.bg-image{
position:relative;
width:100%;
height:0;
padding-top:75%;
background-size:cover;
background-position: 0 30%;
background-image:url('../../assets/homePageImages/dd-1.jpg')
}
.filter{
position:absolute;
top:0;left:0;
width:100%;height:100%;
}
.music-list .bg-image .text{
position:absolute;
width:80%;
height:40px;
bottom:40px;
left:15px;
color:#fff;
}
.title-list{
position:absolute;
bottom:0;
font-size:16px;
line-height:18px;
font-weight:700;
letter-spacing:1px;
margin:0;
}
.play-count{
position:absolute;
bottom:-16px;
font-size:11px;
font-weight:400px;
margin:0;padding:0
}
.icon-fa-headphones{
display:inline-block;
font-size:inherit;
text-rendering:auto;
padding:0;
}
.song-list-wrapper{
pointer-events:auto;
padding:41px 0 20px;
border-radius:10px;
position:relative;
background-color:#f2f3f4;
top:-20px;
vertical-align:baseline
}
.sequence-play{
position:absolute;
top:0;
display:flex;
align-items:center;
width:100%;
height:40px;
padding-left:16px;
border-bottom:1px solid #e4e4e4;
}
.icon-bofangicon{
font-size:18px;
color:#2e3030;
padding-right:14px;
}
.music-list .list .music-list-wrapper .song-list-wrapper .sequence-play .text{
font-size:16px;
}
.song-list-wrapper .sequence-play .count{
font-size:14px;
color:#757575
}
.sont-list{
pointer-events:auto;
}
.item{
position:relative;
display:flex;
align-items:center;
box-sizing:border-box;
height:60px;
border-bottom:1px solid #e4e4e4;
}
.song-list .item .count{
flex: 0 0 50px;
width: 50px;
text-align: center;
color: #757575;
margin:0;
}
.song-list .item .content{
flex:1;
line-height:20px;
overflow:hidden;
text-align:left;
}
.song-list .item .content .name{
margin-top:4px;
margin-bottom:0px;
width:80%;
text-overflow:ellipsis;
overflow:hidden;
white-space:nowrap;
color:#2e3030;
text-align:left;
font-size:12px;
}
.song-list .item .content .desc{
text-overflow:ellipsis;
overflow:hidden;
white-space:nowrap;
width:80%;
font-size:12px;
color:#757575;
margin-top:0;
margin-left:0;
margin-bottom:0;
}
</style>


