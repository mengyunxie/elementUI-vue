<template>
    <div class="scrollerBox">
      <scroller style="top: 8rem;" :on-refresh="refresh" :on-infinite="infinite" refresh-layer-color="#6dd2c9" loading-layer-color="#6dd2c9" ref="my_scroller">
        <svg class="spinner" style="stroke: #6dd2c9;" slot="refresh-spinner" viewBox="0 0 64 64">
            <g stroke-width="7" stroke-linecap="round">
                <line x1="10" x2="10" y1="27.3836" y2="36.4931">
                    <animate attributeName="y1" dur="750ms" values="16;18;28;18;16;16" repeatCount="indefinite"></animate>
                    <animate attributeName="y2" dur="750ms" values="48;46;36;44;48;48" repeatCount="indefinite"></animate>
                    <animate attributeName="stroke-opacity" dur="750ms" values="1;.4;.5;.8;1;1" repeatCount="indefinite"></animate>
                </line>
                <line x1="24" x2="24" y1="18.6164" y2="45.3836">
                    <animate attributeName="y1" dur="750ms" values="16;16;18;28;18;16" repeatCount="indefinite"></animate>
                    <animate attributeName="y2" dur="750ms" values="48;48;46;36;44;48" repeatCount="indefinite"></animate>
                    <animate attributeName="stroke-opacity" dur="750ms" values="1;1;.4;.5;.8;1" repeatCount="indefinite"></animate>
                </line>
                <line x1="38" x2="38" y1="16.1233" y2="47.8767">
                    <animate attributeName="y1" dur="750ms" values="18;16;16;18;28;18" repeatCount="indefinite"></animate>
                    <animate attributeName="y2" dur="750ms" values="44;48;48;46;36;44" repeatCount="indefinite"></animate>
                    <animate attributeName="stroke-opacity" dur="750ms" values=".8;1;1;.4;.5;.8" repeatCount="indefinite"></animate>
                </line>
                <line x1="52" x2="52" y1="16" y2="48">
                    <animate attributeName="y1" dur="750ms" values="28;18;16;16;18;28" repeatCount="indefinite"></animate>
                    <animate attributeName="y2" dur="750ms" values="36;44;48;48;46;36" repeatCount="indefinite"></animate>
                    <animate attributeName="stroke-opacity" dur="750ms" values=".5;.8;1;1;.4;.5" repeatCount="indefinite"></animate>
                </line>
            </g>
        </svg>
        <div class="article-panel">
            <div class="time-line" v-for="item in articleList" key="item.articleId">
                <router-link :to='{path: "/article", query: {id: item.articleId}}'>
                    <p  class="article-con">{{item.name}}</p>
                </router-link>
                <p class="article-info">{{item.time}}</p>
                <i class="typeIcon type{item.type}" :class="{ 'type1': item.type==1, 'type2': item.type==2, 'type3': item.type==3 }"></i>
            </div>
        </div>
        <svg class="spinner" style="fill: #6dd2c9;" slot="infinite-spinner" viewBox="0 0 64 64">
            <g>
                <circle cx="16" cy="32" stroke-width="0" r="3">
                    <animate attributeName="fill-opacity" dur="750ms" values=".5;.6;.8;1;.8;.6;.5;.5" repeatCount="indefinite"></animate>
                    <animate attributeName="r" dur="750ms" values="3;3;4;5;6;5;4;3" repeatCount="indefinite"></animate>
                </circle>
                <circle cx="32" cy="32" stroke-width="0" r="3.09351">
                    <animate attributeName="fill-opacity" dur="750ms" values=".5;.5;.6;.8;1;.8;.6;.5" repeatCount="indefinite"></animate>
                    <animate attributeName="r" dur="750ms" values="4;3;3;4;5;6;5;4" repeatCount="indefinite"></animate>
                </circle>
                <circle cx="48" cy="32" stroke-width="0" r="4.09351">
                    <animate attributeName="fill-opacity" dur="750ms" values=".6;.5;.5;.6;.8;1;.8;.6" repeatCount="indefinite"></animate>
                    <animate attributeName="r" dur="750ms" values="5;4;3;3;4;5;6;5" repeatCount="indefinite"></animate>
                </circle>
            </g>
        </svg>
      </scroller>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                articleList:[],
                value:20,
                userName:"Melin",
                open: false,
                value3: '',
                pageNo: 0,
                nextLoaded:false
            }

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
            that.getData(function(datas){
              that.articleList = datas;
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
          refresh(done){
            let that = this;
            console.log("do refresh");
            setTimeout(() => {
                that.nextLoaded = true;
                that.getData(function(datas){
                  that.articleList = datas;
                  that.nextLoaded = false;
                }); 
                done();             
            },1500)


          },
          infinite(done){
            let that = this;
            if(that.nextLoaded){
              console.log("do nothing");
                setTimeout(() => {
                  done(true)
                }, 1500)
                return;
            }
            console.log("do infinite");
            setTimeout(() => {
                that.nextLoaded = true;
                that.pageNo++;
                that.getData(function(datas){
                  console.log(that.pageNo);
                  that.articleList = that.articleList.concat(datas);
                  that.nextLoaded = false;
                });
                done();              
            },1500)

          },
          getData(callback){
            let that = this;
            callback = callback || function(){};
            that.$axios.get('../static/data/list.json', {
                params: {
                  // ID: 12345
                }
              })
              .then(function (response) {
                if(response.status==200){
                  callback(response.data);
                    
                }else{
                    that.$message({
                      message: '服务器请求失败',
                      type: 'warning'
                    });
                    that.nextLoaded = false;
                }
                
              })
              .catch(function (error) {
                    that.$message({
                      message: '服务器请求失败',
                      type: 'warning'
                    }); 
                    that.nextLoaded = false;  
              });
          }
        }
    }
</script>
<style lang="scss" scoped>

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