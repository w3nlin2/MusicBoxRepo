<template>
    <div id="headerBox">
        <div id="homePageHeader">
            <div class="moreBar"><img src="./../../assets/homePageImages/more.png"></div>
            <h1 class="headerTitle">VMUSICJIN</h1>
            <div class="search"><img src="./../../assets/homePageImages/search.png"></div>
        </div>
        <ul id="homePageNav" >
            <li  :class="{underlineCla:false}" @click="underlineChange" v-for="(elem,i) in homePageNavData" :key=i>{{elem}}</li>
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
                homePageNavData:["推荐","排行","歌手"],
                underlineBtn:false,
            } 
        },
        methods:{
            underlineChange(e){
                for(var i=0;i<e.target.parentNode.children.length;i++){
                    e.target.parentNode.children[i].classList.remove("underlineCla");
                }
                e.target.classList.add("underlineCla");
                this.$emit("navValue",e.target.innerHTML) 
            }
        },
        mounted(){
            $("#homePageNav>li").eq(0).addClass("underlineCla");
        }
    }
</script>
<style>
div#headerBox{
    position:fixed;
    top:0;
    left:0;
    width: 100%;
    z-index: 999;
}
 div#homePageHeader{
    width:100%;
    height:60px;
    background-color:red;
    display:flex;
    justify-content:space-around;
    align-items:center;
}
div#homePageHeader>.moreBar{
    width:60px;
    height:60px;
    
}
div#homePageHeader>.moreBar>img,div#homePageHeader>.search>img{
    margin-top: 25%;
    width:50%;
    height:50%;
}
div#homePageHeader>.headerTitle{
    height:60px;
    margin:0;
    padding:0;
    line-height:60px;
    color:white;
}
div#homePageHeader>.search{
    width:60px;
    height:60px;
    
}
ul#homePageNav{
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0;
    margin:0;
    width: 100%;
    height:60px;
    background: red;
}
ul#homePageNav>li{
    cursor:pointer;
    color:white;
    padding: 5px 0;
    font-weight: bolder;
    user-select: none;
}
.underlineCla{
    border:2px solid white;
    border-left:transparent;
    border-top:transparent;
    border-right:transparent;
}
</style>

