<template>
  <div>

  </div>

</template>

<script>
import CustomLoginButton from "../common/CustomLoginButton.vue";

export default {
  name: "NaverOauth",
  components: {
    CustomLoginButton
  },
  methods: {
    naver(){
      const naver_id_login = new window.naver_id_login("MJ2zPkH7PPoAFvmPPYEL", "http://localhost:4050/login");
      if (naver_id_login.oauthParams.access_token) {
        this.$emit("response", naver_id_login.oauthParams);
      } else {
        const state = naver_id_login.getUniqState();
        naver_id_login.setDomain("YOUR_SERVICE_URL");
        naver_id_login.setState(state);
        naver_id_login.init_naver_id_login();
      }
    }
  }
};
</script>

<style>

</style>