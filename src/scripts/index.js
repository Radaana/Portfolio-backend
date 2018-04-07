const  loader = require ('./modules/preloader');
const webgl = require ('./modules/webgl');
const authBtn = require ('./modules/auth-btn');


let Vue = require ('vue/dist/vue');
var SimpleVueValidation = require('simple-vue-validator');

var Validator = SimpleVueValidation.Validator;
Vue.use(SimpleVueValidation);

// import axios from 'axios'
// import VueAxios from 'vue-axios'

let axios = require ('axios');
let VueAxios = require ('vue-axios');

Vue.use(VueAxios, axios);



loader.init();

let container = document.getElementById('container');
let width = container.offsetWidth;
let mobile = false;

if(  width < 769 ) {
  mobile = true;
  console.log('mobile' + mobile + '   ' + navigator.userAgent);
};
if (!mobile) {
  webgl.init();
  // console.log('webgl init');
} ;


window.onresize = function () {
  width = container.offsetWidth;
  console.log(width);
  if(  width < 769 ) {
    mobile = true;
    // console.log('mobile' + mobile + '   ' + navigator.userAgent);
  };
  
};

// if (!mobile) {
//     webgl.init();
//     console.log('webgl init');
//   } ;


const errorMessages = {
  required : "Не заполнено",
  notHuman: "Вход только для людей",
};

Vue.component("auth-form", {
  
  template: "#auth-form",
  props: [''],
  data() {
    return {
      login : '',
      password: '',
      human: false,
      isSure: 0,
    }
  },
  methods: {
      submit: function () {
          this.$validate()
            .then(function (success) {
              if (success) {
                console.log('Tada');
                // console.log(axios);
                 axios({
                    method: 'post',
                    url: 'http://localhost:3000/index',
                    data: {
                      login: this.login,
                      password: this.password,
                    }
                }).then(rs => {
                    // this.msgblog = rs.data.status;
                    this.login = '';
                    this.password = '';
                    this.validation.reset();
                    console.log('tada')
                })
                    .catch(function (error) {
                      console.log(error);
                });
              }
            });
      }, 
      reset: function() {
        this.validation.reset();
        this.login  = '';
        this.password = '';
        this.human = false;
        this.isSure = 0;
      },
  },
  mixins: [require('simple-vue-validator').mixin],
  validators: {
    login: function(value) {
        return Validator.value(value).required(errorMessages.required);
        },
    password: function(value) {
      return Validator.value(value).required(errorMessages.required);
      },
    human: function (value) {
      return Validator.custom(function () {
          if (!value) return errorMessages.notHuman;
        });
    },
    isSure: function (value) {
      return Validator.custom(function () {
          if (value == "0") return errorMessages.notHuman;
        });
    },      
  } // methods
}); //auth-form

const auth = new Vue({
  data: {
  }
}); // Vue end

auth.$mount("#auth-container");


authBtn.init();