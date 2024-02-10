import axios from "axios";
import { defineStore } from "pinia";

const url = "http://localhost:3000/people/"

export const usePeopleStore = defineStore("PeopleStore", {
   state: () => {
      return {
         people: []
      }
   },
   actions: {
      async fetchPeople() {
         try {
            const data = await axios.get(url)
            this.people = data.data
         } catch (err) {
            alert(err)
            console.log(err)
         }
      }
   },
   getters: {
      getPeople(state) {
         return state.people
      }
   }
})