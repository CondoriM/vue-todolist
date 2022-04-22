const app = new Vue({
    el: '#app',


    data:{
        newTask:'',
        tasks:[],
    },

    methods:{
        addTask(){
            console.log('add task');
            this.tasks.unshift(this.newTask)
            this.newTask = '';
        }
    }
})