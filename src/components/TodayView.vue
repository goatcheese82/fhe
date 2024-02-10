<script setup>
import MeetingItem from './MeetingItem.vue';
const props = defineProps(['people', 'meetings']);

</script>

<template>
   <MeetingItem v-if="meetings[0]" :meeting="meetings[0]" :people="props.people"></MeetingItem>
</template>