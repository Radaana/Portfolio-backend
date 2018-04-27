let moment = require('moment');

let Vue = require ('vue/dist/vue');
let axios = require ('axios');
let VueAxios = require ('vue-axios');

Vue.use(VueAxios, axios);


let ham = require ('./modules/hamburger');
let blogBtn = require ('./modules/blog-btn');
let loader = require ('./modules/preloader');



loader.init();
ham.init();


Vue.component('article-list', {
    template: "#article-list",
    props: ['posts'],
    // data() {
    //     return {
    //     }
    //   },
    methods: {
        handleMessage: function (payload) {
            this.$emit('change-id', { changeId: payload })
        }
      }
  });

  Vue.component('article-item', {
    template: "#article-item",
    props: ['post'],
    data() {
        return {
            id: this.post._id,
        }
      },
    computed: {
        date: function() {
            return moment(this.post.date).format("MMM Do YYYY");  
        }
    },
    methods: {
        handleScroll: function (event) {
            let pageY =  window.pageYOffset;
            let post = document.getElementById(`${this.id}`);
            let topMargin = window.innerHeight / 6;
            let postRect = post.getBoundingClientRect();
            let postY = postRect.top;
            let change = postY;
            if (change > -10 && change < 50) {
                this.$emit('message', { message: this.id });
            } 
        }
    },
    
    mounted: function () {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed: function () {
        window.removeEventListener('scroll', this.handleScroll);
    }
      
  });
  
  Vue.component("names-list", {
    template: "#names-list",
    props: ['posts', 'cid'],
    data() {
      return {
 
      }
    },
    methods: {
        handleClick: function (event) {
            let clicked = event.currentTarget.href.slice(-3);
            this.$emit('clicked', { clicked: clicked  });
        }
    },
  });
  
  const contents = new Vue({
    data: {
        currentId: null,
        posts: null
    }, // data END
    methods: {
        currentIdChange: function (payload) {
          this.currentId = payload.changeId.message;
        },
        changeByClick: function (payload) {
            this.currentId = payload;
        }
      },
    mounted() { 
        axios.get(`188.225.26.32:3000/api/blog`).then(rs => {
            this.posts = rs.data.articles;
            this.currentId = this.posts[0]._id;
            });
    }
  }); // Vue end
  
  contents.$mount("#contents");

  blogBtn.init();
