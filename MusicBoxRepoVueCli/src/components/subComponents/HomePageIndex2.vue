<template>
    <div>
        <ul class="homePageIndex2Box">
            <li class="homePageIndex2Box_item">
              <div>img</div>
              <ol><li>So funny-Xeris</li><li>FAITH ORANGE - OranGe</li><li>Bring That Sh!t Back -J.W.</li></ol>  
            </li>
        </ul>
        <ul class="homePageIndex2Box">
            <li class="homePageIndex2Box_item">
              <div>img</div>
              <ol><li>So funny-Xeris</li><li>FAITH ORANGE - OranGe</li><li>Bring That Sh!t Back -J.W.</li></ol>  
            </li>
        </ul>
        <ul class="homePageIndex2Box">
            <li class="homePageIndex2Box_item">
              <div>img</div>
              <ol><li>So funny-Xeris</li><li>FAITH ORANGE - OranGe</li><li>Bring That Sh!t Back -J.W.</li></ol>  
            </li>
        </ul>
        <ul class="homePageIndex2Box">
            <li class="homePageIndex2Box_item">
              <div>img</div>
              <ol><li>So funny-Xeris</li><li>FAITH ORANGE - OranGe</li><li>Bring That Sh!t Back -J.W.</li></ol>  
            </li>
        </ul>
    </div>
</template>
<script>

    export default{   //导出默认对象
        data(){           //当前组件共享数据
            return{}     //数据
        },
        
    }
</script>
<style>
ul,ul>li{
    margin:0;
    padding:0;
    list-style:none;
}
ul.homePageIndex2Box{
    width:100%;
    border:1px solid gray;
    border-top-color:transparent;
    border-left-color:transparent;
    border-right-color:transparent;
}
li.homePageIndex2Box_item{
    margin:5px 0;
    width:100%;
    height:160px;
  
    display:inline-block;    
    display:flex;   
}
li.homePageIndex2Box_item>div{
    width:160px;
    height:160px;
    background:red;
    border-radius:5px;
}
li.homePageIndex2Box_item>ol{
    
    height:100%;
    
    
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    
}
li.homePageIndex2Box_item>ol>li{
    
    text-align:left;
    padding-left:10px;
}
</style>
