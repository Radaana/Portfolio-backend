<template lang="pug">
  .admin-main
    h2.admin-main__title Страница "Обо мне"
    .admin-main__inner
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

    // @include screen-sm {
    //     width: 100%;
    //     flex-direction: column;
    //     flex-wrap: nowrap;
    // }
}
</style>