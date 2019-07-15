
<template>
    <div>

     <div class="container">
    <div id="mycarousel" class="carousel slide" data-ride="carousel" ><!--carousel旋转木马--><!--data-ride让旋转木马开始走-->
        <div class="carousel-inner">
            <div class="item active">
                <img src="../../assets/homePageImages/carousel1.jpg">
            </div>
            <div class="item">
                <img src="../../assets/homePageImages/dzq.jpg">
            </div>
            <div class="item">
                <img src="https://dummyimage.com/600x300/222/fff&text=dummyimage.com+rocks!">
            </div>
        </div>
        
        <ul class="carousel-indicators">
            <li data-target="#mycarousel" data-slide-to="0" class="active"></li>
            <li data-target="#mycarousel" data-slide-to="1"></li>
            <li data-target="#mycarousel" data-slide-to="2"></li>
        </ul>
        
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
    import "../../assets/js/jquery-1.9.1.min.js"
    import "../../assets/bs/js/bootstrap.js"
    import "../../assets/bs/css/bootstrap.css"

    import "../../../node_modules/jquery"
    import "../../../node_modules/bootstrap"
    import "../../../node_modules/popper.js"
    
    export default{   //导出默认对象
        data(){           //当前组件共享数据
            return{
                imgItems:[{key1:"active",key2:require('../../assets/homePageImages/carousel1.jpg')},
                {key1:"active",key2:require('../../assets/homePageImages/carousel1.jpg')},
                ]
            }     
        },
        methods:{

             

    

        },
        
           

    }

</script>
<style>
div#mycarousel{
    width: 100%!important;
    height: 240px!important;
    margin-bottom:-20px; 
}
div.carousel-inner{
    width: 100%!important;
    height: 100%!important;
}
div.item{
    width: 100%!important;
    height: 100%!important;
}
div.item>img{
    width: 100%!important;
    height: 100%!important;
}
div.carousel-inner{
    border-radius: 5px;
    overflow: hidden;
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
