<template>
    <div class="page">
        <myInput 
            :myVal="nameVal"
            :placeholderText="placeholderName" 
            v-on:input="inptParent1"
        />
        <myInput 
            :myVal="phoneVal"
            :placeholderText="placeholderPhone" 
            v-on:input="inptParent2"
        />
        <myInput 
            :myVal="emailVal"
            :placeholderText="placeholderEmail" 
            v-on:input="inptParent3"
        />
        <div class="btnBox">
            <el-button plain @click="saveForm">提交</el-button>
        </div>
        
    </div>
</template>
<script>
import myInput from '../../components/myInput/myInput';
    export default{
        components: {
            myInput
        },
        data(){
            return{
                nameVal:'',
                placeholderName:'your name',
                phoneVal:'',
                placeholderPhone:'your phone',
                emailVal:'',
                placeholderEmail:'your email'
            }
        },
        methods:{
            saveForm:function(){
                const user={};
                user.nameVal = this.nameVal;
                user.phoneVal = this.phoneVal;
                user.emailVal = this.emailVal;
                this.$router.push({ path: 'home/list', query: user})
            },
            inptParent1:function(params){
                const trimmedText = params.trim();
                this.nameVal = trimmedText;
            },
            inptParent2:function(params){
                const trimmedText = params.trim();
                this.phoneVal = trimmedText;
            },
            inptParent3:function(params){
                const trimmedText = params.trim();
                this.emailVal = trimmedText;
            }
        }
    }
</script>
<style lang="scss">
.btnBox{
    padding-top:24px;
    text-align: center;
}
</style>