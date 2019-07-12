
<template>
    <div>
        
        <div class="homePageCarouselBacBox">
            <div class="carousel">
                <img src="./../../assets/homePageImages/carousel1.jpg" alt="">
            </div>
        </div>
        <div class="homePageSpaceFill20px"></div>
        <div class="homePageRecmdSongList">推荐歌单</div>
        <ul class="homePageRecmdSongList_item">
            <li><div><img src="./../../assets/homePageImages/list-1.jpg" alt=""></div><p>哈记得你的梦想吗?别让你的梦想只有想</p></li>
            <li><div><img src="./../../assets/homePageImages/list-1.jpg" alt=""></div><p>哈记得你的梦想吗?别让你的梦想只有想</p></li>
            <li><div><img src="./../../assets/homePageImages/list-1.jpg" alt=""></div><p>哈记得你的梦想吗?别让你的梦想只有想</p></li>
            <li><div><img src="./../../assets/homePageImages/list-1.jpg" alt=""></div><p>哈记得你的梦想吗?别让你的梦想只有想</p></li>
            <li><div><img src="./../../assets/homePageImages/list-1.jpg" alt=""></div><p>哈记得你的梦想吗?别让你的梦想只有想</p></li>
            <li><div><img src="./../../assets/homePageImages/list-1.jpg" alt=""></div><p>哈记得你的梦想吗?别让你的梦想只有想</p></li>
            <li><div><img src="./../../assets/homePageImages/list-1.jpg" alt=""></div><p>哈记得你的梦想吗?别让你的梦想只有想</p></li>
            <li><div><img src="./../../assets/homePageImages/list-1.jpg" alt=""></div><p>哈记得你的梦想吗?别让你的梦想只有想</p></li>
            <li><div><img src="./../../assets/homePageImages/list-1.jpg" alt=""></div><p>哈记得你的梦想吗?别让你的梦想只有想</p></li>
            <li><div><img src="./../../assets/homePageImages/list-1.jpg" alt=""></div><p>哈记得你的梦想吗?别让你的梦想只有想</p></li>
            <li><div><img src="./../../assets/homePageImages/list-1.jpg" alt=""></div><p>哈记得你的梦想吗?别让你的梦想只有想</p></li>
            <li><div><img src="./../../assets/homePageImages/list-1.jpg" alt=""></div><p>哈记得你的梦想吗?别让你的梦想只有想</p></li>
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
    overflow: hidden;
}
div.homePageCarouselBacBox>.carousel>img{
    width: 100%;
    height:100%;
    
}
div.homePageSpaceFill20px{
    width: 100%;
    height:20px;
}
div.homePageRecmdSongList{
    width:100%;
    height:60px;
    line-height:60px;
    font-weight:bold;
    text-align:left;
}

ul.homePageRecmdSongList_item{
    width:100%;
    
    list-style:none;
    display:flex;
    justify-content:space-around;
    flex-wrap:wrap;
    margin:0;
    padding:0;
}
ul.homePageRecmdSongList_item>li{
    width:110px;
    border-radius: 5px;
    margin:0;
    padding:0;
    overflow: hidden;
}
ul.homePageRecmdSongList_item div{
    width:100%;
    height:100px;
    background:orange;
    border-radius:5px;
}
ul.homePageRecmdSongList_item div>img{
    width:100%;
    height:100%;
    
}
ul.homePageRecmdSongList_item p{
    padding:0;
    font-size:8px;
    text-align:left;
}
</style>
