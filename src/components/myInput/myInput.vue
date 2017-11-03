<template>
  <div class="inputBox" :class="{inputBoxActive:isInputActive}">
      <el-input class="inputSelf"  v-model="inptVal" :placeholder="inptPlaceholder" @input="onInput" @focus="onFocus" @blur="onBlur" v-on:input="updateValue($event)"></el-input>
      <label class="inputLabel">{{inptLabel}}</label>
  </div>
</template>
<script>
    export default{
        data(){
            return{
                isInputActive:false,
                inptVal:this.myVal,
                inptPlaceholder:this.placeholderText,
                inptLabel:this.placeholderText
            }
        },
        props: {
            myVal:{
                type:String,
                default:''
            },
            placeholderText:{
                type:String,
                default:''
            }
        },
        methods: {
            onFocus:function(){
                this.isInputActive = true;
                this.inptPlaceholder = '';
            },
            onInput:function(){
                this.isInputActive = true;
                this.inptPlaceholder = '';
            },
            onBlur:function(){
                if(!this.inptVal){
                    this.isInputActive = false;
                    this.inptPlaceholder = this.placeholderText;
                }else{
                    this.isInputActive = true;
                } 
            },
            updateValue: function ($event) {
                this.$emit('input', $event)
            }
        }
    }
</script>
<style lang="scss" scoped>
.inputBox{
    position:relative;
    width:90%;
    margin:0 auto;
    margin-top:24px;
    margin-bottom:8px;
}
.inputSelf{
    z-index: 2;
    position: relative;
    background: 0;
    -webkit-transition: all .4s ease;
    transition: all .4s ease
}
.inputLabel {
  position: absolute;
  display: none;
  width: 100%;
  left: 0;
  padding: 12px 16px;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 12px;
  font-weight: 500;
  color: #333;
  -webkit-transition: all .4s ease;
  transition: all .4s ease;
}
label {
  &.inputLabel {
    display: block;
    opacity: 0;
    bottom: 0;
    padding: 12px 16px;
  }
}
.inputBoxActive label.inputLabel{
    display:block;
    opacity: 1;
    bottom: 100%;
    padding: 0 16px;
}
</style>