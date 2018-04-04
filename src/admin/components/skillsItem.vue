<template lang="pug">
  .admin-group__row
    span.admin-group__name {{skill.name}}
    input.admin__input.admin-group__input(:value="skill.percents" type="text"  placeholder="50" required)
    span.admin-group__persent %
    button.admin-group__button(type="button" @click="removeExistedSkill(skill.id)") X
    //- td {{skill.name}}
    //- td
    //-   input(type="text" :value="skill.percents")
    //- td
    //-   button(type="button" @click="removeExistedSkill(skill.id)") Удалить
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: {
    skill: Object
  },
  methods: {
    ...mapMutations(['removeSkill']),
    removeExistedSkill(skillId) {
      this.removeSkill(skillId);
    }
  }
};
</script>
<style lang="scss">
  .admin-group__row {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-top: 5px;
    padding-bottom: 5px;


    &:hover {
      .admin-group__button {
        opacity: 1;
      }
    }
}

.admin-group__name {
    padding-left: 20px;
    flex-grow: 1;
    color: $text; 
    font-size: 16px;
    font-family: 'robotomedium', sans-serif;
    font-weight: normal;
}

.admin__input {
    background-color: #fff;
    border-radius: 10px;
    border: 1px solid $text;
    color: $text;
}

.admin-group__input {
    width: 50px;
    height: 35px;
    text-align: center;

}

.admin-group__persent {
    width:30px;
    text-align: center;
}

.admin-group__button {
  border: 1px solid $text;
  opacity: 0;
  width:30px;
  height: 30px;
  border-radius: 10px;
  background-color: #fff;
}
</style>

