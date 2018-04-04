<template lang="pug">
  .admin-blog
        h2.admin-main__title Страница "Блог"
        h3.admin-main__subtitle Добавить запись
        input.admin__input.admin-blog__input(type="text"  placeholder="Название" required)
        input.admin__input.admin-blog__input(type="text"  placeholder="Дата" required)
        textarea.admin__input.admin-blog__textarea(name="comment" placeholder="Содержание" id="comment" rows="7" required)              
        button.btn.admin-btn(type="submit") Добавить


</template>
<script>

export default {
  props : {
    
  }
};
</script>

<style lang="scss">


    .admin-blog {
        display: flex;
        flex-direction: column;
        padding: 50px 30px;
        // align-items: flex-start;
    }

    .admin-blog__input {
        // flex-grow: 1;
        max-width: 350px;
        margin: 5px;
        height: 35px;
        padding: 5px 15px;
    }

    .admin-blog__textarea {
        // flex-grow: 1;
        margin: 5px;
        padding: 5px 15px;
        max-height: 165px;
        max-width: 450px;
    }

</style>
