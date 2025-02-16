<template>
  <div id="app">
    <h1>My To-Do List</h1>
    <ActivityList />
  </div>
</template>

<script>
import ActivityList from './components/ActivityList.vue';

export default {
  components: { ActivityList }
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
  text-align: center;
}
</style>
