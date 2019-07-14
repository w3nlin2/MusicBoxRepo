
<template>
    <div>
        
    
<div class="container">
    <h1 class="page-header d-none">Bootstrap</h1>
    <div class="carousel">
        <div class="window">
            <div class="image_reel">
                <a href="#"><img src="./../../assets/homePageImages/carousel1.jpg"></a>
                <a href="#"><img src="./../../assets/homePageImages/carousel1.jpg"></a>
                <a href="#"><img src="./../../assets/homePageImages/carousel1.jpg"></a>
            </div>
        </div>
    
    <div class="paging">
        <a href="#" rel="1">。</a>
        <a href="#" rel="2">。</a>
        <a href="#" rel="3">。</a>
    </div>
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
    import "../../../node_modules/jquery"
    import "../../../node_modules/bootstrap"
    import "../../../node_modules/popper.js"
    export default{   //导出默认对象
        data(){           //当前组件共享数据
            return{
                play:null,
                $active:{},
            }     
        },
        methods:{

             

    rotateSwitch(){
        this.play=setInterval(function(){
            this.$active=$(".paging a.active").next();
            if(this.$active.length===0){
                this.$active=$(".paging a:first");
            }
            $(".paging a").removeClass("active");
        this.$active.addClass("active");
        $(".image_reel").animate({
            left:-(this.$active.attr("rel")-1)*$(".window").width()
        },500);
        },2000)
    },

        },
        mounted(){
            var This=this;
            $(".paging").show();
            $(".paging a:first").addClass("active");
            $(".image_reel").css({"width":$(".window").width()*$(".image_reel img").size()});
            This.rotateSwitch();
            $(".paging a").click(function(){
            $active=$(This);
            clearInterval(play);
            $(".paging a").removeClass("active");
            $active.addClass("active");
            $(".image_reel").animate({
            left:-($active.attr("rel")-1)*$(".window").width()
            },500)
            This.rotateSwitch();
            return false;
    });
            $(".image_reel a").hover(function(){
        clearInterval(This.play);
    },function(){
        This.rotateSwitch();
    });

    }
}
</script>
<style>
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




.container{
            width: 100%;
            height:180px;
            margin:0 auto;
            position:relative;
            background: red;
            
        }
        .carousel{
            width: 100%;
            height:110%;
            overflow:hidden;
            position:relative;
            /*outline:2px solid #f00;*/
            border-radius: 20px;
            
        }
        .window{
            width: 100%;
            height:110%;
            
            
        }
        .image_reel{
            width: 100%;
            height:110%;
            position:absolute;
            left: 0px;
            top:0;
          
            
        }
        
        .image_reel img{
            float:left;
            width:33.33%;
            height:110%;
            display: flex;
            
            vertical-align: middle;
        }


        .paging{
            position:absolute;
            bottom:20px;
            left:45%;
            display: none;
        }
        .paging a{
            text-decoration:none;
            color:#fff;
        }
        .paging a:hover{
            background: #920000;
            font-weight:bold;
        }
        .paging a.active{
            background: #920000;
            font-weight: bold;
        }
        
</style>
