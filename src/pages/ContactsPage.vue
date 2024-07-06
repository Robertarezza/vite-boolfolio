<script>
import axios from "axios";
import { store } from "../store";

export default {
  data() {
    return {
      store,
      form: {
        name: "",
        lastname: "",
        email: "",
        phone_number: "",
        message: "",
      },
      success: false,
      isLoading: false,
      errors: {},
    };
  },
  methods: {
    sendForm() {
      this.isLoading = true;
      axios
        .post(`${store.apiBaseURL}/api/leads`, this.form)
        .then((resp) => {
          if (resp.data.success) {
            this.success = true;
            this.clearFields();
          }
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
    clearFields() {
      this.form.name = "";
      this.form.lastname = "";
      this.form.email = "";
      this.form.phone_number = "";
      this.form.message = "";
    },
  },
};
</script>

<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-12 col-md-6">
        <h1 class="mt-3">Contattaci</h1>

        <div class="alert alert-success" v-if="success">
          Il tuo messaggio è stato inviato con successo
        </div>

        <form>
          <div class="mb-3">
            <label for="name" class="form-label">Nome</label>
            <input type="text" class="form-control" id="name" v-model="form.name" />
          </div>

          <div class="mb-3">
            <label for="lastname" class="form-label">Cognome</label>
            <input
              type="text"
              class="form-control"
              id="lastname"
              v-model="form.lastname"
            />
          </div>

          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input
              type="email"
              class="form-control"
              id="email"
              v-model="form.email"
              aria-describedby="emailHelp"
            />
          </div>

          <div class="mb-3">
            <label for="phone_number" class="form-label">Numero di telefono</label>
            <input
              type="tel"
              class="form-control"
              id="phone_number"
              v-model="form.phone_number"
            />
          </div>

          <div class="mb-3">
            <label for="message" class="form-label">Example textarea</label>
            <textarea
              class="form-control"
              id="message"
              rows="3"
              v-model="form.message"
            ></textarea>
          </div>

          <button
            type="submit"
            :disabled="isLoading"
            class="btn btn-primary"
            @click.prevent="sendForm"
          >
            <span v-if="!isLoading">Invia </span>
            <div v-else class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
