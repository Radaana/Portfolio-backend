const  loader = require ('./modules/preloader');
const webgl = require ('./modules/webgl');
const authBtn = require ('./modules/auth-btn');


let Vue = require ('vue/dist/vue');
var SimpleVueValidation = require('simple-vue-validator');

var Validator = SimpleVueValidation.Validator;
Vue.use(SimpleVueValidation);

let axios = require ('axios');
let VueAxios = require ('vue-axios');

Vue.use(VueAxios, axios);

loader.init();

let container = document.getElementById('container');
let width = container.offsetWidth;
let mobile = false;

if(  width < 769 ) {
  mobile = true;
};
if (!mobile) {
  webgl.init();
} ;
window.onresize = function () {
  width = container.offsetWidth;
  if(  width < 769 ) {
    mobile = true;
  };
};

const errorMessages = {
  required : "Не заполнено",
  notHuman: "Вход только для людей",
};

var global = false;

Vue.component("auth-form", {
  
  template: "#auth-form",
  props: [''],
  data() {
    return {
      login : '',
      password: '',
      human: false,
      isSure: 0,
      data: null,
      validate: false,
    }
  },
  methods: {
      submit: function () {
          this.$validate()
            .then((success) => {
              if (!success) return;
              console.log('Validation succeeded');
              global = true;
              console.log(`Global - ${global}`);
              if (global) {
                console.log('Sending data');
                this.data = {
                    login: this.login,
                    password: this.password,
                  };
                axios.post('/index', this.data).then(rs => { //авторизация
                    let msgblog = rs.data.status;
                    this.login = '';
                    this.password = '';
                    this.validation.reset(); 
                    window.location.href = "/admin"; //редирект
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