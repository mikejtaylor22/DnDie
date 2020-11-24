<template>
  <div class="home">
    <div class="welcome container">
      <div class="card mycard">
        <div class="card-content center align">
          <h2 class="brown-text"> Welcome To Dice Arena </h2>

         <form @submit.prevent="enterGame">
         <label for="name">Enter Your character name:</label>
         <input type="text" name="name" v-model="person.name">
         <p v-if="feedback" class="red-text">{{feedback}}</p>


  

         <button class="btn brown">Enter Arena</button>
         
         </form>

    
         </div>



        
  </div>
  </div>
  </div>
</template>

<script>


export default {
  name: 'Home',
  data () {
    return {
      person: {name: '',
               class: ''},
      // name: null,
      feedback: null,
      selected: null
    }
  },
  methods: {
    enterGame(){
       if(this.person.name){
    this.$router.push({name: 'Game', params: {name: this.person.name}})
    
    }else{
      this.feedback = 'You must enter a name to join'
    }
    }
  
  }
  
}
 document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, options);
  });
</script>


<style scoped>
.card {
  background-color: beige;
  background-size: contain;
}
.welcome{
  max-width: 600px;
  margin-top: 100px;
   
}

.welcome h2 {
  font-size: 3em;
}

.welcome button {
  margin:30px auto;
}

</style>
