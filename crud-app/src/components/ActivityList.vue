<template>
  <div class="activity-container">
    <h2>Activity List</h2>
    
    <!-- ActivityForm Component (for adding new activities) -->
    <ActivityForm @add-activity="addActivity" />
    
    <ul class="activity-list">
      <ActivityItem 
        v-for="activity in activities" 
        :key="activity.id" 
        :activity="activity" 
        @toggle-activity="toggleActivity" 
        @delete-activity="deleteActivity" 
      />
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import ActivityItem from "./ActivityItem.vue";
import ActivityForm from "./ActivityForm.vue";

export default {
  components: { ActivityItem, ActivityForm },
  computed: {
    ...mapState(["activities"]),
  },
  methods: {
    ...mapActions(["addActivity", "toggleActivity", "deleteActivity"]),
  },
};
</script>

<style scoped>
.activity-container {
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
}

h2 {
  margin-bottom: 10px;
  color: #333;
}

.activity-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
