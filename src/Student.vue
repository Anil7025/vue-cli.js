<template>
  <div>
    <h3>{{ information }}</h3>
    <ul>
      <li v-for="stu in students"> {{ stu }} </li>
    </ul>
    <employee></employee>
  </div>
</template>

<script>
export default {
  data () {
    return {
      information: 'Welcome to my new project in vue js',
      students:["Rahul", "Dinesh", "Mukesh", "Rakesh"]
    }
  }
}
</script>

<style scoped >
  h3{
    color:blue;
  }
</style>

