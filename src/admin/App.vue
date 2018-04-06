<template lang="pug">
  .admin__page
    .admin
      app-header
      tabs
      router-view
</template>

<script>
import header from './components/header'
import tabs from './components/tabs'
import about from './components/about' 
import works from './components/works' 
import blog from './components/blog' 
 
export default {
  components: {
    appHeader : header,
    tabs, about, works, blog
  }
}
</script>


<style lang="scss" >
  .admin__page {
    padding: 0;
    margin: 0;
    background: url('../images/welcome-bg.jpg') center center / cover no-repeat;
  }

  .admin {
    background-color: rgba(#ddd, 0.5);
    width: 100%;
    min-height: 100vh;
  }

  .btn {
    cursor: pointer;
    background-color: transparent;
    border: 0;
}

.admin__input {
    background-color: #fff;
    border-radius: 10px;
    border: none;
    color: $text;
}

.admin-btn {
    background-color: $green;
    color: #fff;
    padding: 15px 20px;
    border-radius: 5px;
    display: inline-block;
    max-width: 120px;
}

.error {
    border: 1px solid red;
    outline: none;
  }

.form__message {
    font-family: 'robotomedium', sans-serif;
    position: absolute;
    top: 50%;
    left: 15%;
    transform: translateY(-50%);
    color: red;
    // font-weight: bold;
}

</style>

