<template>
  <div>
    {{ msg }}
    <ul>
      <li v-for="student in students"> {{ student}} </li>
    </ul>
    <h3>{{hellsay("morning")}} </h3>
    <p>{{ sayHello }}</p>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      students: ["Anil", "sanjay","Manoj","vinod", "Rakesh","mahesh", "Adarsh"],
      msg: 'Welcome to Your Vue.js App',
      fristName: "www.you",
      lastName: "tube.com",
      author: "Anil kumar verma"
    }
  },
  methods:{
    hellsay: function(daytime){
      return "Good " + daytime;
    }
  },
  computed:{
    sayHello: function(){
      return this.fristName+"  "+ this.lastName +" given by "+this.author;
    }
  }
}
</script>

<style>

</style>
