import axios from "axios";
import { defineStore } from "pinia";


const url = "http://localhost:3000/assignments/"

export const useAssignmentStore = defineStore("AssignmentStore", {
   state: () => {
      return {
         assignments: []
      }
   },
   actions: {
      async createAssignment(assignment_type, person, meeting) {
         console.log(meeting)
         const options = {
            method: 'POST',
            url: 'http://localhost:3000/assignments',
            headers: {'Content-Type': 'application/json', Accept: 'application/json'},
            data: {assignment: {meeting_id: meeting.id, person_id: person.id, assignment_type_id: assignment_type.id}}
          };
          
          axios.request(options).then(function (response) {
            console.log(response.data);
          }).catch(function (error) {
            console.error(error);
          });

      }
   }
})