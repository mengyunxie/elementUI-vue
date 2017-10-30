<template>
    <div class="page">   
        <div class="conBox">
           <router-view></router-view> 
        </div>   
    </div>
</template>
<script>
    export default{

    }
</script>
<style scoped>
.page{  
    position:relative;
    z-index:0;
}
.conBox{
    position:relative;
    z-index:1;
    padding-top:8rem;
}
</style>