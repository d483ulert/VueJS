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
    },
    disabled: {
      type: Boolean,
      required: true,
    }
  },
  data(){
    return{

    }
  },
  crated(){

  },
  methods: {
    updateName(e) {
      console.log(e.target.value);
      console.log(e.targe);

      this.$emit('update-name', e.target.value);
    }
  }
}
</script>

<style scoped>

</style>