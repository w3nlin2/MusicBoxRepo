<template>
    <div>
        <ul class="homePageIndex2Box">
            <li class="homePageIndex2Box_item">
              <div><img src="./../../assets/homePageImages/list-6.jpg"></div>
              <ol><li>So funny-Xeris</li><li>FAITH ORANGE - OranGe</li><li>Bring That Sh!t Back -J.W.</li></ol>  
            </li>
        </ul>
        <ul class="homePageIndex2Box">
            <li class="homePageIndex2Box_item">
              <div><img src="./../../assets/homePageImages/list-6.jpg"></div>
              <ol><li>So funny-Xeris</li><li>FAITH ORANGE - OranGe</li><li>Bring That Sh!t Back -J.W.</li></ol>  
            </li>
        </ul>
        <ul class="homePageIndex2Box">
            <li class="homePageIndex2Box_item">
              <div><img src="./../../assets/homePageImages/list-6.jpg"></div>
              <ol><li>So funny-Xeris</li><li>FAITH ORANGE - OranGe</li><li>Bring That Sh!t Back -J.W.</li></ol>  
            </li>
        </ul>
        <ul class="homePageIndex2Box">
            <li class="homePageIndex2Box_item">
              <div><img src="./../../assets/homePageImages/list-6.jpg"></div>
              <ol><li>So funny-Xeris</li><li>FAITH ORANGE - OranGe</li><li>Bring That Sh!t Back -J.W.</li></ol>  
            </li>
        </ul>
        <ul class="homePageIndex2Box">
            <li class="homePageIndex2Box_item">
              <div><img src="./../../assets/homePageImages/list-6.jpg"></div>
              <ol><li>So funny-Xeris</li><li>FAITH ORANGE - OranGe</li><li>Bring That Sh!t Back -J.W.</li></ol>  
            </li>
        </ul>
        <ul class="homePageIndex2Box">
            <li class="homePageIndex2Box_item">
              <div><img src="./../../assets/homePageImages/list-6.jpg"></div>
              <ol><li>So funny-Xeris</li><li>FAITH ORANGE - OranGe</li><li>Bring That Sh!t Back -J.W.</li></ol>  
            </li>
        </ul>
        <ul class="homePageIndex2Box">
            <li class="homePageIndex2Box_item">
              <div><img src="./../../assets/homePageImages/list-6.jpg"></div>
              <ol><li>So funny-Xeris</li><li>FAITH ORANGE - OranGe</li><li>Bring That Sh!t Back -J.W.</li></ol>  
            </li>
        </ul>
        <ul class="homePageIndex2Box">
            <li class="homePageIndex2Box_item">
              <div><img src="./../../assets/homePageImages/list-6.jpg"></div>
              <ol><li>So funny-Xeris</li><li>FAITH ORANGE - OranGe</li><li>Bring That Sh!t Back -J.W.</li></ol>  
            </li>
        </ul>
        <ul class="homePageIndex2Box">
            <li class="homePageIndex2Box_item">
              <div><img src="./../../assets/homePageImages/list-6.jpg"></div>
              <ol><li>So funny-Xeris</li><li>FAITH ORANGE - OranGe</li><li>Bring That Sh!t Back -J.W.</li></ol>  
            </li>
        </ul>
        <ul class="homePageIndex2Box">
            <li class="homePageIndex2Box_item">
              <div><img src="./../../assets/homePageImages/list-6.jpg"></div>
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
    height:100px;
  
    display:inline-block;    
    display:flex;   
}
li.homePageIndex2Box_item>div{
    width:100px;
    height:100px;
    background:red;
    border-radius:5px;
}
li.homePageIndex2Box_item>div>img{
    width:100%;
    height:100%;
}

li.homePageIndex2Box_item>ol{
    padding-left:0;
    margin-left: 40px;
    display:flex;
    flex-direction:column;
    justify-content: space-around;
    align-items: left;
}

</style>
