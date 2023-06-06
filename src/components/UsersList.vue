<template>
  <div>
    <h2 class="title">Users</h2>
    <v-row>
      <v-col cols="6">
        <v-text-field v-model="searchQuery" label="Search"></v-text-field>
      </v-col>
      <v-col cols="4">
        <CreateUserModal />
      </v-col>
      <v-col cols="4"> </v-col>
    </v-row>

    <v-list lines="one">
      <v-list-item
        v-for="user in filteredUsers"
        :key="user.cli_code"
        :title="user.cli_name + ' ' + user.cli_last_name"
        :subtitle="user.cli_type"
        :prepend-avatar="
          user.cli_pic ||
          'https://firebasestorage.googleapis.com/v0/b/mantis-project-7c277.appspot.com/o/Screenshot_20230327-202809_Gallery.jpg?alt=media&token=c5ebba52-f2d1-4719-a6f8-b39799b9b677'
        "
      >
        <v-list-item-action slot="action">
          <v-icon>mdi-pencil</v-icon>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
import axios from "axios";
import CreateUserModal from "./CreateUserModal.vue";

export default {
  components: {
    CreateUserModal,
  },
  data() {
    return {
      users: [],
      searchQuery: "",
      showCreateUserModal: false,
    };
  },
  created() {
    axios
      .get("http://localhost:3000/users/getAllClients")
      .then((response) => {
        this.users = response.data.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  computed: {
    filteredUsers() {
      return this.users.filter((user) => {
        const name = `${user.cli_name} ${
          user.cli_last_name || ""
        }`.toLowerCase();
        return name.includes(this.searchQuery.toLowerCase());
      });
    },
  },
  methods: {
    addUser() {
      // Code to add a new user
    },
    openDialog() {
      this.dialog = true;
    },
  },
};
</script>
<style scoped></style>
