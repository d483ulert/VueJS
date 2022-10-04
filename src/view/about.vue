<template>
  <div class="about">
    <h1>gg</h1>
    <jisung
        :title="title"
    />
  </div>
</template>

<script>
import jisung from "@/components/jisung";

export default {
  components: {
    jisung
  },
  data() {
    return {
      title: 3
    }
  }


}
</script>

<style scoped>

</style>