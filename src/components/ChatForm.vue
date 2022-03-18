<template>
  <div id="container">
    <ul id="messages">
      <li v-for="(message, i) in messages" :key="i">{{message}}</li>
    </ul>
  </div>
  <form id="form" @submit.prevent="handleSubmit" action>
    <input id="input" type="text" v-model="msg" autocomplete="off" />
    <button>Send</button>
  </form>
</template>


<script>
export default {
  data() {
    return {
      msg: ''
    }
  },
  emits: ['form-submit'],
  props: ['messages'],
  methods: {
    handleSubmit() {
      // passing new message through emitting event for parent component
      this.$emit('form-submit', this.msg);
    }

  }

}
</script>


<style>
#form {
  background: rgba(0, 0, 0, 0.15);
  padding: 0.25rem;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  box-sizing: border-box;
  backdrop-filter: blur(10px);
}
#input {
  border: none;
  padding: 0 1rem;
  height: 2rem;
  border-radius: 2rem;
  margin: 0.25rem;
  width: 80vw;
  max-width: 80vw;
}
#input:focus {
  outline: none;
}
#form > button {
  background: #333;
  border: none;
  padding: 0 1rem;
  margin: 0.25rem;
  height: 2rem;
  border-radius: 2rem;
  outline: none;
  color: #fff;
}

#container {
  display: block;
  height: 90vh;
  margin: 0;
  padding: 0;
  background: #fff;
  border-radius: 3px;
}

#messages {
  list-style-type: none;
  margin: 0px;
  
}
#messages > li {
  padding: 0.5rem 1rem;
  text-align: left;
}

</style>