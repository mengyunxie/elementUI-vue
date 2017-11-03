<template>
    <div class="headTop">
        <div class="banner">
            {{userName}}
        </div>
        <div class="tabbar"> 
            <router-link v-for="(tabbarName,index) of tabbarNames"
            :to="tabbarName.tabLink" 
            @click.native="clickFun(index)"
            class="tabbar-item"
            active-class :key="index">
                <i>
                    <img class="default-img" :src="tabbarName.img">
                    <img class="active-img" :src="tabbarName.activeImg">
                </i>
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            userName:this.myName,
            tabbarNames:[
                {
                    name:'列表',
                    tabLink:'/home/list',
                    img:'../static/pic/list.png',
                    activeImg:'../static/pic/listActive.png'
                },
                {
                    name:'新增',
                    tabLink:'/addArticle',
                    img:'../static/pic/plus.png',
                    activeImg:'../static/pic/plusActive.png'
                },
                {
                    name:'日历',
                    tabLink:'/configure',
                    img:'../static/pic/calendar.png',
                    activeImg:'../static/pic/calendarActive.png'
                }
            ]
        }
    },
    props: {
        myName:{
            type:String,
            default:''
        }
    },
    mounted: function() {
        this.$nextTick(function() {
          const uri = this.$route.path;
        });
    },
    methods:{
        clickFun(index){
            console.log(index);
        }
    }
}
</script>
<style lang="scss" scoped>
.headTop{
    position:fixed;
    top:0;
    left:0;
    width:100%;
    z-index:2;
}
.banner{
    width:100%;
    background-color:#6dd2c9;
    color:#fff;
    font-size:20px;
    line-height:2rem;
    text-align:center;
    padding: 2rem 0rem 0rem;
}
.tabbar{
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    width: 100%;
    height:4rem;
    background-color:#6dd2c9;
    .tabbar-item {
        display: block;
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        font-size: 0;
        color: #fff;
        text-align: center;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
        padding: 10px 0 8px 0;
        cursor: pointer;
        background-color:#6dd2c9;
    }
    .default-img{
        display:inline-block;
        width:27px;
        height:27px;
    }
    .active-img {
        display:none;
        width:27px;
        height:27px;
    }
    .router-link-active{
        .default-img{
            display:none;
        }
        .active-img{
            display:inline-block;
        }
        >p{
            color: #00d3c2;
        }
    }
}
</style>