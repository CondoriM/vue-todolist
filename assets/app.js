const app = new Vue({
    el: '#app',


    data:{
        activeClass: '',
        done:'0',
        notDone:'0',
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
            console.log(this.tasks);
            this.notDone++
        },

        completedTask(i){
            this.tasks.splice(i,1)
            console.log(this.tasks);
            activeClass = true;
            this.done++
        },

        cleanNumber(){
            this.done = 0;
            this.notDone = 0;
        },
    },
})