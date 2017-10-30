<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre, 
form,fieldset,input,textarea,p,blockquote,th,td { 
    padding: 0; 
    margin: 0; 
} 
table { 
    border-collapse: collapse; 
    border-spacing: 0; 
} 
fieldset,img { 
    border: 0; 
} 
address,caption,cite,code,dfn,em,strong,th,var { 
    font-weight: normal; 
    font-style: normal; 
} 
ol,ul { 
    list-style: none; 
} 
caption,th { 
    text-align: left; 
} 
h1,h2,h3,h4,h5,h6 { 
    font-weight: normal; 
    font-size: 100%; 
} 
a, a:link, a:visited, a:hover, a:active{
    text-decoration:none
}
q:before,q:after { 
    content:”; 
} 
abbr,acronym {
    border: 0; 
}
#app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
