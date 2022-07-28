<template>
  <div class="about">
    <h1>Hi there! {{ username }}!</h1>
    <!-- {{username}} -->
  </div>
</template>


<script>
import { mapGetters } from 'vuex';

export default {
  data: () => ({
    username: '',
  }),
  computed: {
    ...mapGetters(['getToken']),
  },
  created() {
    console.log(this.getToken)
    const getUsername = async () => {
      const response = await fetch(
        'http://127.0.0.1:5000/api/v1/auth/getcookie',
        {
          "method": "GET",
          "timeout": 0,
          "headers": {
            // TODO: 
            // How we deal with this? HttpsOnly Cookie?
            "Authorization": "Bearer " + this.getToken
          },
        }
      )
      const { username } = await response.json()
      this.username = username
    }
    getUsername()
  },
};
</script>