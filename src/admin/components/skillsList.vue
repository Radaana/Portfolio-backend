<template lang="pug">
  .admin-group.admin-main__group
    h3.admin-main__subtitle {{skillType}}
    skills-item(
      v-for="skill in skills"
      v-if="convertSkillStringToNum(skillType) === skill.type"
      :key="skill.id"
      :skill="skill"
    )
    skill-input(
      :type="convertSkillStringToNum(skillType)"
    )
</template>
<script>
import skillsItem from "./skillsItem";
import skillInput from "./skillInput";

export default {
  components: { skillsItem, skillInput },
  props: {
    skillType: String,
    skills: Array
  },
  methods: {
    convertSkillStringToNum(skillGroupName) {
      switch (skillGroupName) {
        case "frontend":
          return 1;
        case "workflow":
          return 2;
        case "backend":
          return 3;
      }
    }
  }
};
</script>
<style lang="scss">
  .admin-group {
    flex-grow: 0;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    width: 260px;
  }

  .admin-main__group {
    margin-right: 20px;
    margin-bottom: 20px;
  }

  .admin-main__subtitle {
      font-family: 'robotomedium', sans-serif;
      font-size: 16px; 
      color: $text;
      text-transform: capitalize;
      text-align: left;
  }

  
</style>
