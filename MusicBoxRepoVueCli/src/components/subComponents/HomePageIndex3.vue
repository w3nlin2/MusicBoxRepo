<template>
    <div>
        <div></div>
        <ul class="songIndexUl">
            <li v-for="(elem,i) in songIndex" :key=i><a class="songIndex_A"  :href="getTargetId(elem)"  >{{elem}}</a></li>
        </ul>
        <div  :id="elem" v-for="(elem,i) in songIndex" :key=i class="songTargetUl" >
            <div class="listHeader">{{elem}}</div>
            <ul class="songListUl" v-for="(childElem,j) in songList.key[i]" :key=j>
                <li class="songListLi">
                    <div><img src="./../../assets/homePageImages/list-1.jpg"></div>
                    <div>{{childElem}}</div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import "../../assets/js/jquery-1.9.1.min.js"
    import "../../../node_modules/jquery"
    import "../../../node_modules/bootstrap"
    import "../../../node_modules/popper.js"
import { setInterval, clearInterval } from 'timers';
    export default{   //导出默认对象
        data(){           //当前组件共享数据
            return{ //数据
                songIndex:["热门","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
                songList:{key:[
                 ["SAa-sada","saddas-sadad","sadas-sadas"]
                ,["a1-sada"]
                ,["b1-sadfef","b2-fefewf","b3-efefwewfef"]
                ,["c1-sfsad","c2-sfafasd","c3-sadad","c4-asfasd"]
                ,["d1-asdds","d2-asd","d3-assa","d4-vdfvds"]
                ,["e1-asdad","e2-asdad","e3-sadasf","e4-asdads"]
                ,["f1-fcscfe","f2-sdfesf","f3-sasd","f4-asdasd"]
                ,["g1-sads","g2-asd","g3-asds","g4-sad"]
                ,["h1-asda","h2-sads","h3-sadasd","h4-asasd"]
                ,["i1-sad","i2-sffs","i3-adas","i4-asdad"]
                ,["j1-asdsa","j2-sfaf","j3-sfsf","j4-sfad"]
                ,["kk-saDsa","kkk-asda","kkkk-asdad","kkkkk-asdad","kk-asds","kkkkkk-asdad"]
                ]},
                max:0,
            }     
        },
        methods:{
            getTargetId(elem){
                return "#"+elem
            },
            
            
        },
        created(){
            var This=this;
            var n=0;
            var arr=[];
            var timer=null;
            var num=0;
            $(window).scroll(function(){
                clearInterval(timer);
                timer=setInterval(function(){
                    for(var i=0;i<$(".songTargetUl").length;i++){
                        $(".songIndexUl>li>a").eq(i).css({color:"",background:""})
                        
                if($(window).scrollTop()>=$(".songTargetUl").eq(i).offset().top){
                    arr.push(i);
                }
            }
               this.max = arr[0] ; 
            for( var j=0; j<arr.length; j++ ){ 
                this.max = arr[j] > this.max ?  arr[j] : this.max;
                    } 
                    console.log(this.max);
    
                    $(".songIndexUl>li>a").eq(this.max).css({color:"white",background:"red",padding:"5px"})
                    
                    arr=[];
                clearInterval(timer);
                },200);
            }) 
 
            },
            mounted(){
                if($(".songIndex_A").html()=="热门"){
                    $(".songIndex_A").eq(0).html("热")
                }
                if($(".listHeader").html()=="热门"){
                    $(".listHeader").eq(0).css({color:"red"})
                }
            }
        
    }
</script>
<style>
.songIndexUl{
    position: fixed;
    right:10px;
    bottom:10px;
}
.songIndexUl>li{
    font-size:10px; 
    margin: 2px;
}
.songIndexUl>li>a{
    color: gray;
    font-weight: bold;
}
.songIndexUl div{
    line-height: 16px;
    font-weight: bolder;
}


ul.songListUl{
   
    
    margin: 0;
    padding: 0;
    border:1px solid grey;
    border-top:transparent;
    border-left:transparent;
    border-right:transparent;
    
}

ul.songListUl>li{
    
    width: 100%;
    display:flex;
    flex-direction: row;
    
    padding:5px 0;
}
ul.songListUl>li>div:nth-of-type(1){
    width: 50px;
    
    
}
ul.songListUl>li>div>img{
    width: 100%;
    vertical-align: middle;
}
div.songTargetUl>div:nth-of-type(1){
    height:30px;
    line-height:30px;
    font-size: 20px;
    text-align: left;
    background: #a0a0a0;
    font-weight: bold;
    color:white;
}
li.songListLi>div:nth-of-type(2){
    line-height:50px;
    padding-left:30px; 
}

</style>
