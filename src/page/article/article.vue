<template>
    <div class="page">
        <article class="articleBox">
                <h3 class="title">{{articleList.title}}</h3>
                <p class="time">{{articleList.time}}</p>
                <el-carousel trigger="click" height="150px" arrow="always" :autoplay="false">
                  <el-carousel-item v-for="(item, index) in conUrl" :key="index">
                    <img :src="item" alt="">
                  </el-carousel-item>
                </el-carousel>
                <p class="con">{{articleList.con}}</p>
        </article>  
    </div>
</template>
<script>
    export default{
        data(){
            return{
                articleId:'',
                articleList:{},
                conUrl:[]
            }

        },
        components:{
        },
        beforeCreate(){
            console.log("beforeCreate");
        },
        created(){
            console.log("created");
        },
        beforeMount(){
            this.articleId = this.$route.query.id;
        },
        mounted(){
            let that = this;
            that.$axios.get('../static/data/article.json', {
                params: {
                  // ID: 12345
                }
              })
              .then(function (response) {
                if(response.status==200){
                    for(var i=0;i<response.data.length;i++){
                        if(that.articleId == response.data[i].articleId){
                            that.articleList = response.data[i];
                            that.conUrl = response.data[i].conUrl;
                        }
                    }
                    
                }else{
                    that.$message({
                      message: '服务器请求失败',
                      type: 'warning'
                    });
                }
                
              })
              .catch(function (error) {
                    that.$message({
                      message: '服务器请求失败',
                      type: 'warning'
                    });   
              });
            
        },
        beforeUpdate(){
            console.log("beforeUpdate");
        },
        updated(){
            console.log("updated");
        },
        beforeDestroy(){
            console.log("beforeDestroy");
        },
        destroyed(){
            console.log("destroyed");
        },
        methods: {
        }
    }
</script>
<style lang="scss">
.page__title{
    text-align: center;
}
.articleBox{
    $width:90%;
    width:$width;
    margin:0 auto;
    text-align: left;
    .title {
        text-align:center;
        margin-top:15px;
    }
    .time{
        color:#999;
        font-size: 12px;
        text-align:right;
        padding:5px 0px;
    }  
    .con{
        padding:15px 0px;
    }  
}
.el-carousel__item{
    text-align: center;
    h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 150px;
        margin: 0;
    }
    img {
        width: 100%;
        height: 100%;
        display: block;
    }
    &:nth-child(2n) {
        background-color: #99a9bf;
    }
    &:nth-child(2n+1) {
        background-color: #d3dce6;
    }
}


</style>