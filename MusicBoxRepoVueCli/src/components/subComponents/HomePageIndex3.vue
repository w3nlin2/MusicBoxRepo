<template>
    <div>
        <ul class="songIndexUl">
            <li v-for="(elem,i) in songIndex" :key=i><a  :href="getTargetId(elem)" >{{elem}}</a></li>
        </ul>
        <div :id="elem" v-for="(elem,i) in songIndex" :key=i class="songTargetUl">{{elem}}
            <ul v-for="(elem,i) in songIndex" :key=i>
                <li>
                    <div><img src="" alt=""></div>
                    <div>{{elem}}</div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default{   //导出默认对象
        data(){           //当前组件共享数据
            return{ //数据
                songIndex:["热","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
                
            }     
        },
        methods:{
            getTargetId(elem){
                return "#"+elem
            },
            
        }
    }
</script>
<style>
.songIndexUl{
    position: fixed;
    right:10px;
    bottom:50px;
}
.songIndexUl>li{
    font-size:10px; 
}
.songIndexUl div{
    line-height: 16px;
    font-weight: bolder;
}
.sonTargetBox{
    border:2px solid blue;
}
</style>