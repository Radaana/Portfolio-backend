<template lang="pug">
  .admin-works
    h2.admin-main__title Страница "Мои работы"
    h3.admin-main__subtitle Добавить работу
    input.admin__input.admin-works__input(type="text"  placeholder="Название проекта" required)
    input.admin__input.admin-works__input(type="text"  placeholder="Технологии" required)
    button.btn.works-btn(type="button") Загрузить картинку       
    button.btn.admin-btn(type="submit") Добавить


</template>
<script>

export default {
  props : {
    
  }
};
</script>

<style lang="scss">

.admin-works {
    display: flex;
    flex-direction: column;
    padding: 50px 30px;
    // align-items: flex-start;
}

.admin-works__input {
  // flex-grow: 1;
  max-width: 350px;
  margin: 5px;
  height: 35px;
  padding: 5px 15px;
    
}

.works-btn {
    color: $green;
    text-align: left;
    padding: 15px 20px;
    
}
</style>

