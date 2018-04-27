<template lang="pug">
  .admin-header
    h1.admin-header__title Панель администрирования
    a.admin-header__link(href="/index") Вернуться на сайт
</template>
<script>
export default {
}
</script>
<style lang="scss" >
  .admin-header {
    margin: 0;
    min-height: 80px;
    background-color: $green;
    display: flex;
    padding: 30px;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 560px) {
        flex-direction: column;
    }
}

.admin-header__title {
    margin: 0;
    padding: 0;
    text-align: center;
    color: #fff;

    @media screen and (max-width: 560px) {
        order: 5;
    }
}

.admin-header__link {
    color: rgba(#fff, 0.5);
    text-decoration: underline;

    @media screen and (max-width: 560px) {
        order: 1;
        margin-bottom: rem(5px);
    }
}
</style>
