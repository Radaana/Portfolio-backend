let ham = require ('./modules/hamburger');
let blur = require ('./modules/blur');
let loader = require ('./modules/preloader');

loader.init();

let Vue = require ('vue/dist/vue');
var SimpleVueValidation = require('simple-vue-validator');

var Validator = SimpleVueValidation.Validator;
Vue.use(SimpleVueValidation);

let axios = require ('axios');
let VueAxios = require ('vue-axios');

Vue.use(VueAxios, axios);

ham.init();

window.onload= function () {
    blur.init();
};

window.onresize = function () {
    blur.init();
};

  Vue.component("slider-info", {
    template: "#slider-info",
    props: ['site'],
    data() {
      return {
 
      }
    },
    methods: {
    },
  }); //slider-info

  Vue.component("slider-display", {
    template: "#slider-display",
    props: ['sites' ,"i"],
    data() {
      return {
 
      }
    },
    methods: {
    },
  }); //slider-display 

  Vue.component("slider-part", {
    template: "#slider-part",
    props: [ 'direction', 'sites', 'i'],
    data() {
      return {
        show: true,
      }
    },
    computed: {
        nextI: function() {
            let nextI = this.i;
            nextI++;
            if (nextI < this.sites.length) {
                return nextI;
            } else {
                return 0;
            };
        },
        previousI: function() {
            let prevI = this.i;
            prevI--;
            if (prevI < 0) {
                return (this.sites.length - 1);
            } else {
                return prevI;
            };
        },
    },
    methods: {
        handleClick: function (event){
            if (this.direction == 'up') {
                this.$emit('arrow', {direction:"up"});
            } else {
                this.$emit('arrow', {direction:"down"});
            }
        },

    },
  }); //slider-part 

  const slider = new Vue({
    data: {
        i: 0,
        direction: ["down", "up"],
        sites: [        
            {
                id: 101,
                title: "Лендинг для магазина бургеров",
                desc: "HTML, CSS, javaScript, jQuery",
                src: "img/burger.jpg",
                link: "https://radaana.github.io/BurgerShop/",
            },
            {
                id: 102,
                title: "Сайт ресторана",
                desc: "HTML, CSS, javaScript, jQuery",
                src: "img/resto.jpg",
                link: "https://radaana.github.io/Resto-restaurant/build/index.html",
            },
            {
                id: 103,
                title: "Сайт кофейни",
                desc: "HTML, CSS, javaScript",
                src: "img/latte.jpg",
                link: "https://radaana.github.io/Be-Latte/build/index.html",
            },
        ]
    }, // data END
    methods: {
        handleArrow: function(dir) {
            // console.log('got it');
            let i = this.i;
            let length = this.sites.length;
            if (dir.direction == 'up') {
                i++;
                this.i = i >= length ? 0 : i;

            } else {
                i--;
                this.i = i < 0 ? length-1 : i;
            }
        },
      }
  }); // Vue end
  
  slider.$mount("#slider");

  const errorMessages = {
    required : "Не заполнено",
    email : "Некорректный email",
  };

  Vue.component("contact-form", {
    
    template: "#contact-form",
    props: [''],
    data() {
      return {
        name : '',
        email: '',
        comment: '',
        data: null,
      }
    },
    methods: {
        submit: function () {
            // console.log( this.$validate() );
            this.$validate()
              .then((success) => {
                if (!success) {return}
                console.log('Validation succeeded!');
                this.data = {
                    name: this.name,
                    email: this.email,
                    comment: this.comment,
                  };
                axios.post('http://localhost:3000/works', this.data).then(rs => { //авторизация
                    this.name = '';
                    this.email = '';
                    this.comment = '';

                    this.validation.reset(); 
                });
              });
        }
    },
    mixins: [require('simple-vue-validator').mixin],
    validators: {
            name: function(value) {
                return Validator.value(value).required(errorMessages.required);
                },
            email: function(value) {
                return Validator.value(value).required(errorMessages.required).email(errorMessages.email);
                },
            comment: function(value) {
                return Validator.value(value).required(errorMessages.required);
                },
        }
    }); //slider-display 
  
const contactMe = new Vue({
    data: {
    }
}); // Vue end

contactMe.$mount("#contact-me")
 

