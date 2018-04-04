<template lang="pug">
  .admin-group  
    .admin-group__row
      input.admin__input.admin-group__enter(
        type="text" 
        v-model="skillName"  
        @keydown.enter="addNewSkill"
        :class="{error : validation.hasError('skillName')}"
      )
      button.admin-group__save(type="button" @click="addNewSkill") +
    .error-message {{validation.firstError('skillName')}}
</template>

<script>
import { mapMutations } from "vuex";
import { Validator } from "simple-vue-validator";

export default {
  mixins: [require("simple-vue-validator").mixin],
  validators: {
    skillName: value => {
      return Validator.value(value).required("Название не может быть пустым");
    }
  },
  props: {
    type: Number
  },
  data() {
    return {
      skillName: ""
    };
  },
  methods: {
    ...mapMutations(["addSkill"]),
    addNewSkill() {
      const newSkill = {
        id: Math.round(Math.random() * 1000000),
        name: this.skillName,
        percents: 0,
        type: this.type
      };
      this.$validate().then(success => {
        if (!success) return;
        this.addSkill(newSkill);
        this.skillName = "";
        this.validation.reset();
      });
    }
  }
};
</script>

<style lang="scss">
  

  .admin-group__enter {
    margin-left: 20px;
    height: 30px;
    margin-right: 10px;
    padding: 5px 15px;
  }

  .admin-group__save {
    border: 1px solid $text;
    padding: 5px 15px;
    // height: 30px;
    border-radius: 10px;
    background-color: #fff;
    display: flex;
    align-items: center;
    cursor: pointer;

    &:hover {
      background-color: $green;
      color: #fff;
    }
  }

  .error {
    border: 3px solid red;
    outline: none;
  }

  .error-message {
    font-family: 'Roboto', sans-serif;
    color: $text; 
    font-size: 14px;
  }

  
</style>

