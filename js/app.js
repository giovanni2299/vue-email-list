const { createApp } = Vue

createApp({
  data() {
    return {
      emalis:[],
    }
  },
  methods:{
    newEmail(mailNumbers){
        for(let i = 0; i < mailNumbers; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((res) => {
             const result = res.data.response
             console.log(result)
             this.emalis.push(result)
                 
             })
        }
       

    }
  },
  created(){
    this.newEmail(10)

    
  }
}).mount('#app')