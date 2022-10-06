<template>

  <label for="">Name</label>
  <input
      type="text"
      :value="name"
      @input="$emit('update-name',$event)"
  >

</template>

<script>

export default {
  props: {
    name: {
      type: String,
      required: true,
    }
  },
  methods: {
    updateName(e) {
      console.log(e.target.value);
      this.$emit('update-name', e.target.value);
    }
  }
}
</script>

<style scoped>

</style>