<template>
  <div>
    <h1>This is home Page</h1>
    <form action="">
      <inputField
        :name="name"
        @update-name="name = $event.target.value"
      />
      <button>sumbit</button>
    </form>
  </div>
</template>

<script>
import inputField from  "@/components/inputField";
import Vue from "vue";
export default {
  components: {
    inputField,
    Vue
  },
  data() {
    return {
      name: ''
    }
  },
  methods: {
    updateName(name) {
      this.name = name;
    }
  }
}
</script>

<style scoped>

</style>