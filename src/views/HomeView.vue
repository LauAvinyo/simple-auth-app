<template>
  <div class="sample">
    <h1>LOGIN</h1>
    <cv-text-input label="Username" v-model="username" placeholder="username" />
    <cv-text-input label="Password" v-model="password" placeholder="password" type="password" />
    <cv-button @click="test">Login</cv-button>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import axios from 'axios';
export default {
  data: () => ({
    username: '',
    password: '',
  }),
  methods: {
    ...mapMutations(['setUser', 'setToken']),
    ...mapState(['token', 'user']),
    async onClick(e) {
      e.preventDefault();
      const response = await fetch('http://127.0.0.1:5000/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: this.username,
          password: this.password,
          // username: "Laura",
          // password: "thisisapawword"
        }),
      });
      const answer = await response.json();
      const user = answer['user']['username']
      const token = answer['user']['access-token']
      // TODO:
      // Unsertand why the this.setToken is not working
      // console.log(this.token)
      this.$store.state.token = token
      this.$store.state.user = user
      // this.setUser(user)
      // this.setToken(token)
      console.log(this.$store.state.user)
      this.$router.push('/about');
    },
    test() {
      // fetch('http://127.0.0.1:5000/api/v1/auth/login', {
      //   method: 'POST',
      //   credentials: 'include',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     username: this.username,
      //     password: this.password,
      //     // username: "Laura",
      //     // password: "thisisapawword"
      //   }),
      // });
      axios.get(
        'http://127.0.0.1:5000/api/v1/auth/login',
        {
          withCredentials: true, 
          headers: {
            'Content-Type': 'application/json'
          },
          params: {
            username: "Laura", password: "thisisapawword"
          }
        }
      ).then(
        result => {
          console.log(result)
          this.backend_result = result.data
        }
      )
    }
  },
};
</script>

<style>
.sample {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 600px;
  margin: 5% auto;
}

.cv-text-input {
  margin: 10px 0;
}
</style>