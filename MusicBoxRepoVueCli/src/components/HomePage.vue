
<template>
    <div>
        <homepageheader></homepageheader>
        <homepageindex3></homepageindex3>
    </div>
</template>
<script>
    import HomePageHeader from "./subComponents/HomePageHeader"
    import HomePageIndex1 from "./subComponents/HomePageIndex1"
    import HomePageIndex2 from "./subComponents/HomePageIndex2"
    import HomePageIndex3 from "./subComponents/HomePageIndex3"
    
    export default{   //导出默认对象
        data(){           //当前组件共享数据
            return{}     //数据
        },
        components:{
            "homepageheader":HomePageHeader,
            "homepageindex1":HomePageIndex1,
            "homepageindex2":HomePageIndex2,
            "homepageindex3":HomePageIndex3
        }
    }
</script>
<style>
</style>
