<script>
export default {
  data() {
    return {
      activeStep: 0,
      username: "",
      password: "",
      showPassword: false,
      selectedSede: "",
      colors: ["#975ab6", "grey", "grey"],
      isAlert: false,
      alertMessage: null,
      alertType: null,
      dialog: false,
    };
  },
  methods: {
    submitLoginForm() {
      if (this.username === "admin" && this.password === "password") {
        this.alertMessage = "Usuario válido";
        this.alertType = "success";
        this.activeStep = 1;
      } else {
        this.alertMessage = "Credenciales inválidas";
        this.alertType = "error";
      }
    },
    submitSede() {
      if (!this.selectedSede || this.selectedSede == "") {
        this.alertMessage = "Es necesario seleccionar una sede";
        this.alertType = "error";
        return;
      }

      //Set localstorage
      localStorage.setItem("isLoggedIn", true);

      this.activeStep = 2;
      this.$router.push("/home");
    },
    timelineItemColor(index) {
      if (this.activeStep == index) {
        return "purple";
      } else {
        return "grey";
      }
    },
  },
  watch: {
    activeStep(newVal) {
      this.colors.splice(0, newVal, ...Array(newVal).fill("purple"));
    },
  },
};
</script>

<template>
  <v-container>
    <v-alert
      v-if="alertMessage"
      :value="true"
      :type="alertType"
      closable
      @input="
        alertMessage = null;
        isAlert = false;
      "
    >
      {{ alertMessage }}
    </v-alert>

    <div style="text-align: center">
      <p>Dataclau</p>
      <h1>Login</h1>
    </div>
    <div>
      <!-- Timeline -->
      <v-row no-gutters style="margin-bottom: 50px">
        <v-timeline
          :active.sync="activeStep"
          direction="horizontal"
          line-inset="12"
        >
          <v-timeline-item :dot-color="timelineItemColor(0)" size="small">
            <template v-slot:opposite> Login </template>
          </v-timeline-item>

          <v-timeline-item
            :active="activeStep >= 1"
            :dot-color="timelineItemColor(1)"
            size="small"
          >
            <template v-slot:opposite> Sede </template>
          </v-timeline-item>

          <v-timeline-item
            :active="activeStep >= 2"
            size="small"
            :dot-color="timelineItemColor(2)"
          >
            <template v-slot:opposite> Empezar </template>
          </v-timeline-item>
        </v-timeline>
      </v-row>

      <v-row no-gutters>
        <!-- Step Login -->
        <div v-if="activeStep == 0" style="width: 100%">
          <form @submit.prevent="submitLoginForm">
            <v-text-field
              label="Correo*"
              v-model="username"
              type="text"
              required
            ></v-text-field>
            <v-text-field
              label="Password"
              v-model="password"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              :type="showPassword ? 'text' : 'password'"
              @click:append="showPassword = !showPassword"
            ></v-text-field>
            <button
              type="submit"
              style="
                background-color: rgb(151, 90, 182);
                border-radius: 16px;
                padding: 5px 22px;
                color: white;
              "
            >
              Siguiente
            </button>
          </form>
        </div>

        <!-- Step Sede -->
        <div v-if="activeStep >= 1" style="width: 100%">
          <form @submit.prevent="submitSede">
            <v-select
              :items="[
                'Sede Cable',
                'Sede Chipre',
                'Sede Milan',
                'Sede La Francia',
              ]"
              label="Selecciona una sede *"
              v-model="selectedSede"
              required
            ></v-select>
            <button
              style="
                background-color: rgb(151, 90, 182);
                border-radius: 16px;
                padding: 5px 22px;
                color: white;
              "
            >
              Siguiente
            </button>
          </form>
        </div>
      </v-row>
    </div>
  </v-container>
</template>

<style scoped></style>
