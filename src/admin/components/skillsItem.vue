<template lang="pug">
  .admin-group__row
    .admin-group__name {{skill.name}}
      .admin-ok(v-if="ok") V
    input.admin__input.admin-group__input(v-model="percents" type="text" @focus="setOK" @keydown.enter="setPersents(skill.id)"  :class="{error : validation.hasError('percents')}")
    span.admin-group__persent %
    button.admin-group__button(type="button" @click="removeExistedSkill(skill.id)") X
</template>

<script>
import { Validator } from "simple-vue-validator";
// import { mapMutations } from "vuex";
export default {
  props: {
    skill: Object
  },
  data() {
    return {
      percents: this.skill.percents,
      ok: false,
    }
  },
  mixins: [require("simple-vue-validator").mixin],
  validators: {
    percents: value => {
      return Validator.value(+value).required("Название не может быть пустым").lessThan(100).greaterThan(0);
    }
  },
  methods: {
    removeExistedSkill(id) {
      this.axios.delete(`http://localhost:3000/api/skills/${id}`).then(rs => {
        // this.skills = rs.data.skills;
        this.$emit('skillDeleted');
      });
    },
    setPersents(id) {
      let newPercents = +this.percents;
      this.$validate().then(success => {
        if (!success) return;
        let envelope = { percents : newPercents};
        // this.addSkill(newSkill);
        this.axios.put(`http://localhost:3000/api/skills/${id}`, envelope).then(rs => {
          this.validation.reset();
          console.log(rs.data.status);
          this.$emit('setPercents');
          this.ok = true;
        });
      });
    // ...mapMutations(['removeSkill']),
    // removeExistedSkill(skillId) {
    //   this.removeSkill(skillId);
    },
    setOK() {
      this.ok = false;
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
    position: relative;
}

.admin__input {
    background-color: #fff;
    border-radius: 10px;
    // border: 1px solid $text;
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
  padding: 5px 15px;
  // width:30px;
  // height: 30px;
  border-radius: 10px;
  background-color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #ff4040;
  }
}

.admin-ok {
  position: absolute;
  top: -15%;
  right: 0%;
  padding: 5px 5px;
  border-radius: 10px;
  color: #fff;
  background-color: $green;
}

// .error {
//     border: 1px solid red;
//     outline: none;
//   }
</style>

