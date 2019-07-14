

<template>
    <div>
        <homepageheader v-on:navValue="navValueFn"></homepageheader>
        <div class="placeHolder"></div>
        <mt-tab-container v-model="active"> 
            <mt-tab-container-item id="推荐"> <homepageindex1></homepageindex1>  </mt-tab-container-item> 
            <mt-tab-container-item id="排行"> <homepageindex2></homepageindex2>  </mt-tab-container-item> 
            <mt-tab-container-item id="歌手"> <homepageindex3></homepageindex3>  </mt-tab-container-item> 
        </mt-tab-container>
    </div>
</template>
<script>
    import HomePageHeader from "./subComponents/HomePageHeader"
    import HomePageIndex1 from "./subComponents/HomePageIndex1"
    import HomePageIndex2 from "./subComponents/HomePageIndex2"
    import HomePageIndex3 from "./subComponents/HomePageIndex3"
    
    export default{   //导出默认对象
        data(){           //当前组件共享数据
            return{
                active:"推荐"
            } 
        },
        components:{
            "homepageheader":HomePageHeader,
            "homepageindex1":HomePageIndex1,
            "homepageindex2":HomePageIndex2,
            "homepageindex3":HomePageIndex3
        },
        methods:{
            navValueFn(val){
                this.active=val;
            }
        }
    }
</script>
<style>

div.placeHolder{
    height: 120px;
    width: 100%;
}
</style>

