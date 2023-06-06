<script>
export default {
  data() {
    return {
      selectedCliente: null,
      selectedContacto: null,
      selectedRol: null,
      password: "",
      showPassword: false,
      confirmPassword: "",
      showConfirmPassword: false,
      alertMessage: null,
      alertType: null,
    };
  },
  methods: {
    submitForm() {
      if (
        !this.selectedCliente ||
        !this.selectedContacto ||
        !this.selectedRol
      ) {
        this.alertMessage = "Faltan campos requeridos";
        this.alertType = "error";
        return;
      }

      if (this.password !== this.confirmPassword) {
        this.alertMessage = "Las contraseñas no coinciden";
        this.alertType = "error";
        return;
      }

      console.log(this.selectedCliente);
      console.log(this.selectedContacto);
      console.log(this.selectedRol);
      console.log(this.password);
      console.log(this.confirmPassword);

      this.alertMessage = "Usuario creado con éxito!";
      this.alertType = "success";
    },
  },
  computed: {
    passwordMatchError() {
      if (this.password !== this.confirmPassword) {
        return "Las contraseñas no coinciden";
      }
      return "";
    },
  },
  watch: {
    confirmPassword(newValue) {
      if (newValue !== this.password) {
        this.$refs.confirmPassword.validate();
      }
    },
  },
};
</script>

<template>
  <div style="text-align: center">
    <h1>Creación de usuario</h1>
  </div>

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

  <v-select
    :items="['Brasaos', 'Betos', 'Freka', 'Pizza Factory']"
    label="Selecciona el Cliente *"
    v-model="selectedCliente"
    required
  ></v-select>

  <v-select
    :items="[
      'user@gmail.com',
      'user1@gmail.com',
      'user2@gmail.com',
      'user3@gmail.com',
    ]"
    label="Selecciona un Contacto *"
    v-model="selectedContacto"
    required
  ></v-select>

  <v-select
    :items="['Admin', 'Usuario']"
    label="Selecciona el Rol *"
    v-model="selectedRol"
    required
  ></v-select>

  <v-text-field
    label="Contraseña"
    v-model="password"
    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
    :type="showPassword ? 'text' : 'password'"
    @click:append="showPassword = !showPassword"
  ></v-text-field>

  <v-text-field
    label="Confirmar contraseña*"
    v-model="confirmPassword"
    type="confirmPassword"
    :append-icon="showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
    :type="showConfirmPassword ? 'text' : 'password'"
    @click:append="showConfirmPassword = !showConfirmPassword"
    :error-messages="[passwordMatchError]"
    required
  ></v-text-field>

  <button
    type="submit"
    style="
      background-color: rgb(151, 90, 182);
      border-radius: 16px;
      padding: 5px 22px;
      color: white;
    "
    @click="submitForm"
  >
    Crear
  </button>
</template>

<style scoped></style>

<!-- v-model="selectedSede" -->
