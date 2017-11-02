<template>
    <div class="page">
        <div class="article-panel">
                <div class="time-line" v-for="item in articleList" key="item.articleId">
                    <router-link :to='{path: "/article", query: {id: item.articleId}}'>
                        <p  class="article-con">{{item.name}}</p>
                    </router-link>
                    <p class="article-info">{{item.time}}</p>
                    <i class="typeIcon type{item.type}" :class="{ 'type1': item.type==1, 'type2': item.type==2, 'type3': item.type==3 }"></i>
                </div>
        </div>
    </div>
</template>
<script>
import headTop from '../../components/headtop/headtop';
    export default{
        data(){
            return{
                articleList:[],
                value:20,
                userName:"Melin",
                open: false,
                value3: ''
            }

        },
        components:{
            headTop
        },
        beforeCreate(){
            console.log("beforeCreate");
        },
        created(){
            console.log("created");
        },
        beforeMount(){
            console.log(this.$route.query);
            if(this.$route.query.nameVal){
                this.userName = this.$route.query.nameVal;
            }
            
        },
        mounted(){
            let that = this;
            that.$axios.get('../static/data/list.json', {
                params: {
                  // ID: 12345
                }
              })
              .then(function (response) {
                if(response.status==200){
                    that.articleList = response.data;
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
.article-panel{
    width:84%;
    margin:0 auto;
    padding:10px 0px 0px 0px;
    border-left: 1px solid #ddd;
}
.article-con{
    color:#666;
    font-size: 16px;
}
.article-info{
    color:#999;
    font-size: 12px;
}
.time-line{
    position:relative;
    padding:10px 0px 10px 15px;
}
.typeIcon {
  display: block;
  position: absolute;
  top: 15px;
  left: -5px;
  width: 10px;
  height: 10px;
  border-radius: 10px;
  &.type1 {
    background-color: #6dd2c9;
  }
  &.type2 {
    background-color: #fa5555;
  }
  &.type3 {
    background-color: #eb9e05;
  }
}

.calendarBox{
    position:fixed;
    width:32px;
    height:32px;
    text-align:center;
    line-height:36px;
    border-radius:16px;
    background-color:#6dd2c9;
    bottom:10px;
    right:10px;
}
</style>