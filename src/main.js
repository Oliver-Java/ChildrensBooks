import Vue from 'vue'
import App from './App.vue'
// *IF RENDER STARTS @Covers*
// import Covers from './views/Covers.vue'
import router from './router'
import Data from './assets/childrensbooks.json'
Vue.config.productionTip = false

new Vue({
    data() {
        return {
            books: Data.books,
        };
    },
    methods: {
        getBooks() {
            return this.books
        }, 
        getShowcaseBook(id) {
            return this.books.find(book => book.id == id)
        }

    },
    router,
    render: h => h(App)
}).$mount('#app')
