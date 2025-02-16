<template>
  <div class="activity-form">
    <input v-model="newActivity" @keyup.enter="submitActivity" placeholder="Add a new activity" />
    <button @click="submitActivity">Add</button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup(_, { emit }) {
    const newActivity = ref("");

    const submitActivity = () => {
      if (newActivity.value.trim()) {
        emit("add-activity", { id: Date.now(), title: newActivity.value, completed: false });
        newActivity.value = "";
      }
    };

    return { newActivity, submitActivity };
  },
};
</script>

<style scoped>
.activity-form {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
}

input {
  flex: 1;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 5px 10px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background: #0056b3;
}
</style>
