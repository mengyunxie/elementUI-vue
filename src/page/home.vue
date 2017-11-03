<template>
    <div class="page">
        <head-top :myName="userName"></head-top>   
        <div class="conBox">
           <router-view></router-view> 
        </div>   
    </div>
</template>
<script>
import headTop from '../components/headtop/headtop';
    export default{
        data(){
            return{
                userName:"Melin"
            }

        },
        components:{
            headTop
        }
    }
</script>
<style lang="scss" scoped>
.page{  

}
.conBox{

    padding-top:8rem;
}
</style>