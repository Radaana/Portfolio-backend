<template lang="pug">
  .admin-header
    h1.admin-header__title Панель администрирования
    a.admin-header__link(href="index.html") Вернуться на сайт
</template>
<script>
export default {
}
</script>
<style lang="scss" >
  .admin-header {
    margin: 0;
    // padding: 0;
    min-height: 80px;
    // width: 100%;
    // background-color: #4e8839;
    background-color: $green;
    display: flex;
    padding: 30px;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 560px) {
        flex-direction: column;
    }
    // @include screen-xs {
    //     flex-direction: column;

    // }
}

.admin-header__title {
    margin: 0;
    padding: 0;
    text-align: center;
    color: #fff;

    @media screen and (max-width: 560px) {
        order: 5;
    }
    // @include screen-xs {
    //     order: 5;
    // }
}

.admin-header__link {
    color: rgba(#fff, 0.5);
    text-decoration: underline;

    @media screen and (max-width: 560px) {
        order: 1;
        margin-bottom: rem(5px);
    }
    // @include screen-xs {
    //     order: 1;
    //     margin-bottom: rem(5px);
    // }
}
</style>
