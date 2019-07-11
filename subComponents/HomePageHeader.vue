<template>
    <div>
        <div id="homePageHeader">
            <div class="moreBar"></div>
            <h1 class="headerTitle">VMUSICJIN</h1>
            <div class="search"></div>
        </div>
        <div id="homePageNav">
            <div class="recmd"><span>推荐</span></div>
            <div class="rank"><span>排行</span></div>
            <div class="singer"><span>歌手</span></div>
        </div>
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
</style>
