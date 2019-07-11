
<template>
    <div>
        
        <div class="homePageCarouselBacBox">
            <div class="carousel">
            
            </div>
        </div>
        <div class="homePageSpaceFill20px"></div>
        <div class="homePageRecmdSongList">推荐歌单</div>
        <ul class="homePageRecmdSongList_item">
            <li><div></div><p>哈记得你的梦想吗?别让你的梦想只有想</p></li>
            <li><div></div><p>哈记得你的梦想吗?别让你的梦想只有想</p></li>
            <li><div></div><p>哈记得你的梦想吗?别让你的梦想只有想</p></li>
            <li><div></div><p>哈记得你的梦想吗?别让你的梦想只有想</p></li>
            <li><div></div><p>哈记得你的梦想吗?别让你的梦想只有想</p></li>
            <li><div></div><p>哈记得你的梦想吗?别让你的梦想只有想</p></li>
            <li><div></div><p>哈记得你的梦想吗?别让你的梦想只有想</p></li>
            <li><div></div><p>哈记得你的梦想吗?别让你的梦想只有想</p></li>
            <li><div></div><p>哈记得你的梦想吗?别让你的梦想只有想</p></li>
            <li><div></div><p>哈记得你的梦想吗?别让你的梦想只有想</p></li>
            <li><div></div><p>哈记得你的梦想吗?别让你的梦想只有想</p></li>
            <li><div></div><p>哈记得你的梦想吗?别让你的梦想只有想</p></li>
        </ul>

    </div>
</template>
<script>
    
    export default{   //导出默认对象
        data(){           //当前组件共享数据
            return{}     //数据
        }
    }
</script>
<style>
div#homePageHeader,div#homePageNav{
    width:100%;
    height:80px;
    background-color:red;
    display:flex;
    justify-content:space-around;
    align-items:center;
}
div#homePageHeader>.moreBar{
    width:80px;
    height:80px;
    background-color:blue;
}
div#homePageHeader>.headerTitle{
    width:238px;
    height:80px;
    margin:0;
    padding:0;
    line-height:80px;
    color:white;
}
div#homePageHeader>.search{
    width:80px;
    height:80px;
    background-color:blue;
}
div#homePageNav span{
    color:white;
    padding-bottom:5px;
    border:2px solid white;
    border-top-color:transparent;
    border-left-color:transparent;
    border-right-color:transparent;
}
div.homePageCarouselBacBox{
    width:100%;
    height:180px;
    background:red;
    position:relative;
}
div.homePageCarouselBacBox>.carousel{
    position:absolute;
    top:0;
    left:5%;
    width:90%;
    height:200px;
    background:blue;
    border-radius:10px;
}

div.homePageSpaceFill20px{
    width:100%;
    height:20px;
}
div.homePageRecmdSongList{
    width:100%;
    height:40px;
    line-height:40px;
    font-weight:bold;
    text-align:left;
}

ul.homePageRecmdSongList_item{
    width:100%;
    background:pink;
    list-style:none;
    display:flex;
    justify-content:space-around;
    flex-wrap:wrap;
    margin:0;
    padding:0;
}
ul.homePageRecmdSongList_item>li{
    width:120px;
    
    background:purple;
    margin:0;
    padding:0;
}
ul.homePageRecmdSongList_item div{
    width:120px;
    height:120px;
    background:orange;
    border-radius:5px;
}
ul.homePageRecmdSongList_item p{
    padding:0 10px;
    font-size:8px;
    text-align:left;
}
</style>
