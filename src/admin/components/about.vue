<template lang="pug">
  .about-section
    h1 Страница "Обо мне"
    skills-list(
      v-for="skillType in skillsTypes"
      :key="skillType"
      :skillType="skillType"
      :skills="skills"
    )

</template>
<script>
import { mapActions, mapGetters } from "vuex";
import skillsList from "./skillsList";
export default {
  components: {
    skillsList
  },
  data() {
    return {
      skillsTypes: ["frontend", "workflow", "backend"]
    };
  },
  computed: {
    ...mapGetters(['skills'])
  },
  methods: {
    ...mapActions(['fetchSkills'])
  },
  mounted() {
    this.fetchSkills();
  }
};
</script>