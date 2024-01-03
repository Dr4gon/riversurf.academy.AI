<template>
  <div class="container">
    <div class="view">
      <p>
        <input type="text" placeholder="What's your question about riversurfing?" />
        <button>Ask</button>
      </p>

      <p>
        <label class="center">OR</label>
      </p>

      <p>
        <label>Upload a video for feedback</label>
        <input type="file" accept="video/*" />
        <button>Upload</button>
      </p>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
input {
  width: 55vw;
}

p {
  margin-left: 6vw;
  margin-right: 6vw;
}

.center {
  margin-left: 30vw;
}
</style>
