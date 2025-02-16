<template>
  <li class="activity-item">
    <span :class="{ completed: activity.completed }">
      {{ activity.title }}
    </span>
    <div class="actions">
      <button class="toggle-btn" @click="$emit('toggle-activity', activity.id)">
        {{ activity.completed ? "Mark Incomplete" : "Mark Complete" }}
      </button>
      <button class="delete-btn" @click="$emit('delete-activity', activity.id)">✖</button>
    </div>
  </li>
</template>

<script setup>
defineProps(["activity"]);
defineEmits(["toggle-activity", "delete-activity"]);
</script>

<style scoped>
.activity-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  padding: 10px;
  border-radius: 5px;
  margin: 5px 0;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
}

.completed {
  text-decoration: line-through;
  color: #888;
}

.actions {
  display: flex;
  gap: 5px;
}

.toggle-btn {
  background: #28a745;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 12px;
}

.toggle-btn:hover {
  background: #218838;
}

.delete-btn {
  background: red;
  color: white;
  border: none;
  padding: 5px 8px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 14px;
}

.delete-btn:hover {
  background: darkred;
}
</style>
