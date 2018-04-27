<template lang="pug">
  form.admin-works#upload(@submit.prevent="sendFile" enctype="multipart/form-data")
    h2.admin-main__title Страница "Мои работы"
    h3.admin-main__subtitle Добавить работу
    .admin-works__group
      input.admin__input.admin-works__input(v-model="name" type="text"  placeholder="Название проекта"  :class="{error : validation.hasError('name')}")
      .form__message {{ validation.firstError('name') }}
    .admin-works__group
      input.admin__input.admin-works__input(v-model="tech" type="text"  placeholder="Технологии"  :class="{error : validation.hasError('tech')}")
      .form__message {{ validation.firstError('tech') }}
    .admin-works__group
      input.admin__input.admin-works__input(v-model="link" type="text"  placeholder="Cсылка на сайт"  :class="{error : validation.hasError('link')}")
      .form__message {{ validation.firstError('link') }}
    button.btn.works-btn(type="button") Загрузить картинку     
    input.admin__input.admin-works__input(:photo="photo" type="file" required accept="image/*" @change="fileChange($event.target.files)" ref="upload")  
    button.btn.admin-btn(type="submit") Добавить
    .status {{msgfile}}
</template>


<script>
import { Validator } from "simple-vue-validator";
export default {
  props : {  },
  data: () => {
    return {
      name: '',
      tech: '',
      link: '',
      photo: null,
      msgfile: ''
    };
  },
  mixins: [require("simple-vue-validator").mixin],
  validators: {
      name: value => {
          return Validator.value(value).required("Название не может быть пустым");
      },
      tech: value => {
          return Validator.value(value).required("Стек не может быть пустым");
      },
      link: value => {
          return Validator.value(value).required("Ссылка не может быть пустой");
      },
  }, 
  methods: {
    sendFile: function() {
      this.$validate().then(success => {
        if (!success) return;
        let formData = new FormData();
        formData.append('photo', this.photo, this.photo.name);
        formData.append('name', this.name);
        formData.append('tech', this.tech);
        formData.append('link', this.link);
        this.axios.post('http://localhost:3000/admin', formData)
        .then(rs => {
          this.msgfile = rs.data.msg;
          if (rs.data.status === 'Ok') {
            this.name = '';
            this.tech = '';
            this.photo = null;
            this.$refs.upload.value = null;
            this.validation.reset();
          }
        });
      });
    },
    fileChange: function(file) {
      this.photo = file[0];
    }
  }
};
</script>

<style lang="scss">

.admin-works {
  display: flex;
  flex-direction: column;
  padding: 50px 30px;
}

.admin-works__input {
  flex-grow: 1;
  max-width: 350px;
  margin: 5px;
  height: 35px;
  padding: 5px 15px;
}

.admin-works__group {
        position: relative;
        width: 100%;
        display: flex;
    }

.works-btn {
  color: $green;
  text-align: left;
  padding: 15px 20px;
}


</style>
  
