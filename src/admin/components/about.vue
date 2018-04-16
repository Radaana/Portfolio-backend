<template lang="pug">
  .admin-main
    h2.admin-main__title Страница "Обо мне"
    .admin-main__inner
      skills-list(
        v-for="skillType in skillsTypes"
        :key="skillType"
        :skillType="skillType"
        :skills="skills"
        @updateList="updateList"
      )

</template>
<script>
// import { mapActions, mapGetters } from "vuex";
import skillsList from "./skillsList";
export default {
  components: {
    skillsList
  },
  data() {
    return {
      skills: null,
      skillsTypes: ["frontend", "workflow", "backend"]
    };
  },
  computed: {
    // ...mapGetters(['skills'])
  },
  methods: {
    // ...mapActions(['fetchSkills'])
    updateList() {
      this.axios.get(`http://localhost:3000/api/skills`).then(rs => {
        this.skills = rs.data.skills;
      });
    }
  },
  mounted() { 
    // this.fetchSkills();
    // console.log('akcio');
    this.axios.get(`http://localhost:3000/api/skills`).then(rs => {
        this.skills = rs.data.skills;
      });
  }
};
</script>

<style lang="scss" >
  .admin-main {
      padding: 30px 30px;
    }

  .admin-main__title {
    font-family: 'robotomedium', sans-serif;
    text-transform: none;
    font-size: 21px;
    color: $text; 
  }

  .admin-main__inner {
    width: 650px;
    display: flex;
    flex-wrap: wrap;

    @media screen and (max-width: 768px) {
        width: 100%;
        flex-direction: column;
        flex-wrap: nowrap;
    }
}
</style>