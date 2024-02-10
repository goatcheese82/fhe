<script setup>
// import TheWelcome from '../components/TheWelcome.vue'


import TodayView from '@/components/TodayView.vue';
import MeetingItem from '../components/MeetingItem.vue'
import { useMeetingStore } from '../stores/MeetingStore'
import { usePeopleStore } from '../stores/PeopleStore'
import { computed, onMounted } from 'vue'

//Set Stores
const meetingStore = useMeetingStore()
const peopleStore = usePeopleStore()

//Set Getters
// const getMeetings = computed(() => {
//   return meetingStore.getMeetings
// })
// const getPeople = computed(() => {
//   return peopleStore.getPeople
// })

// Get Stores
const meetings = computed(() => {
  return meetingStore.meetings
})
const people = computed(() => {
  return peopleStore.people
})
onMounted(() => {
  meetingStore.fetchMeetings()
  peopleStore.fetchPeople()
})

</script>

<template>
  <main>
    <ul>
      <TodayView :people="people" :meetings="meetings"></TodayView>
  </ul>
  </main>
</template>
