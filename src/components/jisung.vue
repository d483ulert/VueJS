<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ name }}</p>
    <button
        @click="updateName">change
    </button>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      name: 'jisung'
    }
  },
  methods: {
    upadateName() {
      this.name = 'jisung';
    }
  }

}
</script>

<style scoped>

</style>