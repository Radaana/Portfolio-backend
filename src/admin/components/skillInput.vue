<template lang="pug">
  .admin-group  
    .admin-group__enter
      input.admin__input.admin-group__enter(
        type="text" 
        v-model="skillName"
        placeholder="Новое умение"
        @keydown.enter="addNewSkill"
        :class="{error : validation.hasError('skillName')}"
      )
      button.admin-group__save(type="button" @click="addNewSkill") +
    .error-message {{validation.firstError('skillName')}}
</template>

<script>
// import { mapMutations } from "vuex";
import { Validator } from "simple-vue-validator";

export default {
   props: {
    type: Number
  },
  data() {
    return {
      skillName: ""
    };
  },
  mixins: [require("simple-vue-validator").mixin],
  validators: {
    skillName: value => {
      return Validator.value(value).required("Название не может быть пустым");
    }
  },
  methods: {
    // ...mapMutations(["addSkill"]),
    addNewSkill() {
      const newSkill = {
        id: Math.round(Math.random() * 1000000),
        name: this.skillName,
        percents: 0,
        type: this.type
      };
      this.$validate().then(success => {
        if (!success) return;
        // this.addSkill(newSkill);
        this.axios.post(`/api/skills`, newSkill).then(rs => {
          this.skillName = "";
          this.validation.reset();
          console.log(rs.data.status);
          this.$emit('skillAdded')
        });
      });
    }
  }
};
</script>

<style lang="scss">
  .admin-group__enter {
    width: 100%;
    display: flex;
    align-items: center;
    padding-top: 5px;
    padding-bottom: 5px;
    justify-content: flex-start;
  }

  .admin-group__enter {
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

  

  .error-message {
    font-family: 'Roboto', sans-serif;
    color: $text; 
    font-size: 14px;
  }

  
</style>

