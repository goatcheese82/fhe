<script setup>
const props = defineProps(['people', 'meeting'])
const time = new Date(props.meeting.time).toLocaleString('en-us', {
  weekday: 'short',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric'
})
import { useAssignmentStore } from '@/stores/AssignmentStore'

const assignmentStore = useAssignmentStore()
</script>

<template>
  <div class="meeting">
    <div class="details">
      <h3>
        {{ time }}
      </h3>
      <slot></slot>
      <div v-for="assignment in props.meeting.assignments" :key="assignment.id" class="">
        <form @submit.prevent="assignmentStore.createAssignment(assignment.assignment_type, assignment.person, props.meeting)">
          <label>{{ assignment.assignment_type.title }}</label>
          <input type="hidden" v-model="assignment.assignment_type">
          <!-- <input type="hidden" v-model="props.meeting"> -->
          <select v-model="assignment.person">
            <option v-for="person in props.people" :key="person.id" :value="person">
              {{ person.first_name }}
            </option>
          </select>
          <input type="submit" value="Update" class="submit">
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
select {
  appearance: none;
  padding: 0.4em;
  background-color: #181818;
  border: 0px solid black;
  font-size: 2em;
  color: white;
}
.submit {
  appearance: none;
  border-style: none;
  background-color: transparent;
  color: white;
}

label {
  font-size: 2em;
}
</style>