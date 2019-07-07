// pelajaran1
var app = new Vue({
    el : '#app',
    data: {
        pesan: 'Hello World'
    }
})

// pelajaran2
var app2 = new Vue({
    el : '#app-2',
    data: {
        message: 'You loaded this page on' + new Date().toLocaleString()
    }
})

// pelajaran3
var app3 = new Vue({
    el : '#app-3',
    data: {
        seen: true
    }
})
// app3.seen = false;


// pelajaran4
var app4 = new Vue({
    el : '#app-4',
    data: {
        todos: [
            { text: 'Ifest2019' },
            { text: 'Discovery6' },
            { text: 'Membatik2019' }
        ]
    }
})
app4.todos.push({ text: 'Itcc2019' })

// pelajaran5
var app5 = new Vue({
    el : '#app-5',
    data: {
        message: 'Hello Vue'
    }, methods: {
        reverseMessage: function() {
            this.message = this.message.split('').reverse().join('');
        }
    }
})


// pelajaran6
var app6 = new Vue({
    el : '#app-6',
    data: {
        message: 'Hello Vue!'
    }
})


// pelajaran komponen
Vue.component('todo-item', {
    template: '<li>This is a Todo</li>'
    // props: ['todo'],
    // template: '<li> {{ todo.text }} </li>'
})

var app_comp = new Vue({
    el : '#app_comp'
})


// pelajaran 7
Vue.component('todo-items', {
    props: ['todo'],
    template: '<li> {{ todo.text }} </li>'
})
var app7 = new Vue({
    el: "#app-7",
    data: {
        groceryList: [
            { id: 0, text: 'Obat' },
            { id: 1, text: 'Keju' },
            { id: 2, text: 'Bwodo amat anjengg' }
        ]
    }
})