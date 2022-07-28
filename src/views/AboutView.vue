<template>
  <div id="app">
    <input type="button" value="test" @click="test"/>

    <p>{{ backend_result }}</p>

  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {
      backend_result: ''
    }
  },
  methods: {
    test() {
      axios.get(
          'http://127.0.0.1:5000',
          { withCredentials: true }
      ).then(
          result => {
            console.log(result)
            this.backend_result = result.data
          }
      )
    }
  }
}
</script>