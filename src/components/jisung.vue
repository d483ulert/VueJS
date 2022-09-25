
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

}

</script>

<style>

</style>

