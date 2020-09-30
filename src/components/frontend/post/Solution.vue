<template>
  <div>
      <li v-for = "soln in solution" 
                :key="soln.id"
                class="alert alert-success">
                {{ soln.solution}}
            </li>
  </div>
</template>

<script>
export default {
props:['solution'],
}
</script>

<style scoped>


</style>