<template lang="pug">
  .admin-tabs
    //- ul..admin-tabs__list
      //- li.admin-tabs__item
    button.btn.admin-tabs__tab(v-for="tab in tabs")
      router-link( :to="tab.href" ).link {{tab.name}}
</template>
<script>
export default {
  data() {
    return {
      tabs: [
        {name: 'Skills', href: "/"},
        {name: 'Blog', href: "/blog"},
        {name: 'Works', href: "/works"},
        {name: 'Other', href: "/pages/20"},
      ]
    }
  }
}
</script>
<style  lang="scss">
  .admin-tabs {
    display: flex;
    background-color: #f0efe9;
    width: 100%;


    @media screen and (max-width: 560px) {
        flex-direction: column;
    }
    // @include screen-xs {
    //     flex-direction: column;
    // }
}



.admin-tabs__tab {
    width: 180px;
    height: 60px;
    border: 0;
    border-right: 2px solid #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'robotomedium', sans-serif;
    color: $text;
    cursor: pointer;
    background-color: transparent;
    
    a {
      width: 100%;
      line-height: 60px;
      display: block;
      text-transform: uppercase;
      color: $text;
    }

    &:hover {
        background-color: rgba(#fff, 0.8);

        a {
          color: $green;
          font-weight: bold;
        }
    }

    @media screen and (max-width: 560px) {
        width: 100%;
        border-right: none;
        border-bottom: 2px solid #fff;
    }
    // @include screen-xs {
    //     width: 100%;
    //     border-right: none;
    //     border-bottom: 2px solid #fff;
    // }
}
</style>