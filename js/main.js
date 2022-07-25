var app = new Vue({
    el: '#app',
    data:{
        NewDaFare: "", 
        lista:[
            {
                text:'finire gli esercizi',
                done:'false'
            },
            {
                text:'allenarmi',
                done:'false'
            },
        ]
    },
    methods:{
        aggiungi(){
            if(!this.NewDaFare==""){
                let newobject = {
                                    text: this.NewDaFare,
                                    done:'false'
                                };
                this.lista.push(newobject);
                this.NewDaFare="";
            };
        },

        cancella(number){
            this.lista.splice(number,1);
        },

        giaFatto(number){
            if(this.done==false){
                this.done=true;
                let line = document.querySelectorAll('li');
                line[number].classList.add('done')
            }else{
                this.done=false;
                let line = document.querySelectorAll('li');
                line[number].classList.remove('done')
            }
        },
    },
   
})