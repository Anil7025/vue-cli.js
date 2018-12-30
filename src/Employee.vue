<template>
  <div>
    <h3>{{ employeeStement }}</h3>
    <ul>
      <li v-for="emp in employeeList">{{ emp }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      employeeStement: 'Welcome to my Company employee',
      employeeList: ["Employee 1", "Employee 2", "Employee 3", "Employee 4", "Employee 5"]
    }
  }
}
</script>
<style scoped>
  h3{
    color:red;
  }
</style>

