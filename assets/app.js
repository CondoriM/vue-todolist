const app = new Vue({
    el: '#app',


    data:{
        newTask:'',
        tasks:[],
    },

    methods:{
        addTask(){
            if(this.newTask === ''){
                console.log('inserisci qualcosa');
            }else{
                console.log('add task');
            this.tasks.unshift(this.newTask)
            this.newTask = '';
            console.log(this.tasks);
            }
        },

        removeTask(i){
            this.tasks.splice(i,1)
        }
    }
})