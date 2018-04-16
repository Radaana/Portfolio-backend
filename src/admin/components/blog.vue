<template lang="pug">
  .admin-blog
        h2.admin-main__title Страница "Блог"
        h3.admin-main__subtitle Добавить запись
        .admin-blog__group 
            input.admin__input.admin-blog__input(v-model="title" type="text"  placeholder="Название"  :class="{error : validation.hasError('title')}")
            .form__message {{ validation.firstError('title') }}
        input.admin__input.admin-blog__input(v-model="date" type="date"   placeholder="Дата" )
        .admin-blog__group 
            textarea.admin__input.admin-blog__textarea(v-model="text"  placeholder="Содержание"  rows="7"  :class="{error : validation.hasError('text')}")              
            .form__message {{ validation.firstError('text') }}
        button.btn.admin-btn(type="button" @click="sendArticle") Добавить
        .status {{msgblog}} 

</template>
<script>
import moment from 'moment';
import { Validator } from "simple-vue-validator";
export default {
    props : {
    },
    data: () => {
        return {
            moment: moment,
            title: '',
            date: moment(new Date(), 'DD/MM/YYYY').format('YYYY-MM-DD'),
            text: '',
            msgblog: ''
        };
    },
    mixins: [require("simple-vue-validator").mixin],
    validators: {
        title: value => {
            return Validator.value(value).required("Название не может быть пустым");
        },
        text: value => {
            return Validator.value(value).required("Содержание не может быть пустым");
        },
    },  
    methods: {
        sendArticle: function() {
            // console.log(this.title, this.date, this.text);
            this.$validate().then(success => {
                if (!success) return;
                this.axios({
                    method: 'post',
                    url: 'http://localhost:3000/api/blog',
                    data: {
                    title: this.title,
                    date: this.date,
                    text: this.text
                    }
                }).then(rs => {
                    this.msgblog = rs.data.status;
                    this.title = '';
                    this.text = '';
                    this.validation.reset();
                });
            });    
        }
    } // methods
};
</script>

<style lang="scss">


    .admin-blog {
        display: flex;
        flex-direction: column;
        padding: 50px 30px;
        // align-items: flex-start;
    }

    .admin-blog__group {
        position: relative;
        width: 100%;
        display: flex;
    }

    .admin-blog__input {
        flex-grow: 1;
        max-width: 350px;
        margin: 5px;
        height: 35px;
        padding: 5px 15px;
        
    }

    .admin-blog__textarea {
        // flex-grow: 1;
        margin: 5px;
        padding: 5px 15px;
        height: 165px;
        width: 450px;

        @media screen and (max-width: 560px) {
            width: 80%;
        }
    }

</style>
