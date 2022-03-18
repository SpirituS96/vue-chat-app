<script>
import ChatForm from './components/ChatForm.vue'
import { io } from "socket.io-client";
// initializing connection with socket server
const socket = io('http://localhost:8080');

export default {
  name: 'App',
  components: { ChatForm },
  created() {
    socket.on('chat message', (msg) => {
      // add server message for rendering
      this.messages.push(msg);
      //rerendering child component
      this.reload(); 
    });
  },
  methods: {
    sendMessage(newMessage) {
      // add client message for rendering
      this.messages.push(newMessage);
      //rerendering child component
      this.reload();
      //sending client message to the socket server
      socket.emit('chat message', newMessage);

    },
    reload() {
      this.message_reload++;
    }
  },
  data() {
    return {
      messages: [''], //  array of messages for rendering 
      message_reload: 0
    }
  },
}

</script>

<template>
  <ChatForm @form-submit="sendMessage" :messages="messages" :key="message_reload"/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  background: rgba(0, 0, 0, 0.15);
}
[v-cloak] {
  display: none;
}
</style>
