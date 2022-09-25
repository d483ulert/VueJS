
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <jisung>
      <template #header="{ shop }">
        <p>header1 {{ shop }}</p>
      </template>
      <template #default>
        hello
      </template>
    </jisung>
  </div>
</template>

<script>
export default {
  components: {
    InputField
  },
  data(){
    return{
      name: 'jisung'
    }
  },
  beforeCreate() {
    console.log()

  },
  created() {

  },
  beforeMount() {

  },
  mounted() {

  },
  beforeUpdate() {

  },
  updated() {
  },



}

</script>

<style>

</style>

