<template>
    <div class="page">
        <div class="article-panel">
            <!-- <vue-html5-editor :content="content"></vue-html5-editor> -->
        </div>
        <div class="btnBox">           
        </div>

    </div>
</template>
<script>
    export default{
        data(){
            return{
                content:''        

            }
        },
        components:{
        },
        mounted(){
            // this.articleId = this.$route.params.articleId;
            console.log(this.articleId);
        },
        methods: {
            save:function(){
                this.$router.push({ path: 'home/list'})
            },
            cancle:function(){
                this.$router.push({ path: 'home/list'})
            }
        }
    }
</script>
<style lang="scss">
    .article-panel{
        width:100%;
        margin:0 auto;
    }
    .article-panel .vue-html5-editor{
        border:none 0;
        border-bottom: 1px solid #ddd;
        border-radius: 0px; 
    }
    .btnBox {
        padding-top:1.5rem;
        text-align: center;
    }
</style>