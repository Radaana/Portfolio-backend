let Vue = require ('vue/dist/vue');

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
            id: this.post.id,
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
    
    created: function () {
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
        currentId: 101,
        posts: [
            {
                id: 101,
                title: "Как сделать разметку легко адаптируемой",
                date: "20 февраля 2018",
                datetime: "2018-02-20",
                text: "<p>Чтобы разметку было легко потом сделать адаптивной, желательно сразу разбить контент на блоки, которые потом легко можно будет переставить. В этом в значительной степени помогает БЭМ. </p><p> Второй немаловажный фактор - резиновые размеры, или размеры в относительных единицах (например rem), тогда страница будет легко масштабироваться сама по себе или при указании другого размера шрифта у тега html</p>"
            },
            {
                id: 102,
                title: "Почему именно БЭМ",
                date: "20 февраля 2018",
                datetime: "2018-02-20",
                text: "<p>БЭМ очень удобен для организации кода в CSS стилях. Использование методологии позволяет не думать над тем, как назвать классы, так как в ней имеется уже готовая инструкция к действию.</p> <p>Особенно важно это на самом начальном этапе разработки. БЭМ предлагает удобные инструменты для структуризации кода и четкие правила стилизации (например не использовать для стилизации теги и id)</p>"
            },
            {
                id: 103,
                title: "Как работает position: sticky; ",
                date: "20 февраля 2018",
                datetime: "2018-02-20",
                text: "<p>Элемент с position: sticky; фиксируется в рамках ближайшего родителя, когда расстояние до границы ближайшего прокручиваемого родителя достигает указанного в свойствах top, right, bottom, left значения. при вертикальной прокрутке для элемента имеет смысл указывать только top и bottom. При горизонтальной прокрутке будут работать только свойства left и right. Также имеет значение, чтобы высота или ширина родительского контейнера была больше размера элемента. На то, в каком месте элемент прикрепится и где отцепиться, также влияют свойства padding, margin и transform. Размещение элемента над другими элементами правится с помощью свойства z-index.</p> <p>Значение sticky является относительно новым и не все браузеры его поддерживают, в частности, Internet Explorer, Opera Mini и есть ограничения в последних версиях Chrome</p>"
            },
            {
                id: 104,
                title: "Flexbox или Grid?",
                date: "21 марта 2018",
                datetime: "2018-03-21",
                text: "<p>Flexbox это удобный инструмент для манипулирования блоками, но он предоставляет рычаги полного управления только в одном направлении, т.к. поперечная ось поворачивается вместе с главной, отдельно повернуть ее нельзя.</p> <p>Grid дает возможности для двумерной расстановки блоков или элементов любым необходимым способом. Grid подходит для разметки макета в целом. Эта система облегчает управление макетом страницы и даже может иметь дело с нестандартным и асимметричным дизайном. Но поддержка этого свойста сейчас пока не так высока, как у Flexbox</p>"
            },
            {
                id: 105,
                title: "HTTP",
                date: "21 марта 2018",
                datetime: "2018-03-21",
                text: "<p>HTTP (англ. HyperText Transfer Protocol — «протокол передачи гипертекста») — протокол прикладного уровня передачи данных (изначально — в виде гипертекстовых документов в формате «HTML», в настоящий момент используется для передачи произвольных данных).</p> <p>Основой HTTP является технология «клиент-сервер». Потребитель (клиент) инициирует соединение и посылают запрос. Поставщик (сервер) ожидает соединение для получения запроса, производит необходимые действия и возвращант обратно сообщение с результатом.</p> <p> Особенностью протокола HTTP является возможность указать в запросе и ответе способ представления одного и того же ресурса по различным параметрам: формату, кодировке, языку и т. д. (в частности, для этого используется HTTP-заголовок).</p> <p>Именно благодаря возможности указания способа кодирования сообщения, клиент и сервер могут обмениваться двоичными данными, хотя данный протокол является текстовым.</p><p> HTTP — протокол прикладного уровня; аналогичными ему являются FTP и SMTP. Обмен сообщениями идёт по обыкновенной схеме «запрос-ответ». Для идентификации ресурсов HTTP использует глобальные URI. В отличие от многих других протоколов, HTTP не сохраняет своего состояния. Это означает отсутствие сохранения промежуточного состояния между парами «запрос-ответ». Компоненты, использующие HTTP, могут самостоятельно осуществлять сохранение информации о состоянии, связанной с последними запросами и ответами (например, «куки» на стороне клиента, «сессии» на стороне сервера). Браузер, посылающий запросы, может отслеживать задержки ответов. Сервер может хранить IP-адреса и заголовки запросов последних клиентов. Однако сам протокол не осведомлён о предыдущих запросах и ответах, в нём не предусмотрена внутренняя поддержка состояния, к нему не предъявляются такие требования. Метод HTTP (англ. HTTP Method) — последовательность из любых символов, кроме управляющих и разделителей, указывающая на основную операцию над ресурсом. Обычно метод представляет собой короткое английское слово, записанное заглавными буквами. Обратите внимание, что название метода чувствительно к регистру. Сервер может использовать любые методы, не существует обязательных методов для сервера или клиента. Если сервер не распознал указанный клиентом метод, то он должен вернуть статус 501 (Not Implemented). Если серверу метод известен, но он неприменим к конкретному ресурсу, то возвращается сообщение с кодом 405 (Method Not Allowed). В обоих случаях серверу следует включить в сообщение ответа заголовок Allow со списком поддерживаемых методов. Кроме методов GET и HEAD, часто применяется метод POST. </p>"
            },
        ]
    }, // data END
    methods: {
        currentIdChange: function (payload) {
          this.currentId = payload.changeId.message;
        },
        changeByClick: function (payload) {
            this.currentId = payload;
        }
      }
  }); // Vue end
  
  contents.$mount("#contents");

  blogBtn.init();