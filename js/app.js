const { createApp } = Vue

createApp({
  data() {
    return {
      emalis:[],
      nEmails:10
    }
  },
  methods:{
    newEmail(mailNumbers){
        for(let i = 0; i < mailNumbers; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((res) => {
              console.log(res)
             const result = res.data.response
             console.log(result)
             this.emalis.push(result)
                 
             })
        }
       

    }
  },
  created(){
    this.newEmail(this.nEmails)

    
  }
}).mount('#app')