import axios from "axios";
import { defineStore } from "pinia";

export const useMeetingStore = defineStore("MeetingStore", {
   state: () => {
      return {
         meetings: []
      }
   },
   actions: {
      async fetchMeetings() {
         try {
            const data = await axios.get('http://localhost:3000/meetings/')
            this.meetings = data.data
         } catch (err) {
            alert(err)
            console.log(err)
         }
      }
   },
   getters: {
      getMeetings(state) {
         return state.meetings
      }
   }
})