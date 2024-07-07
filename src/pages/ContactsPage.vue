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
      //aggiunta per validare solo dopo il click sul bottone
      submitted: false
    };
  },
  methods: {
    sendForm() {
      this.isLoading = true;
       //aggiunta per validare solo dopo il click sul bottone
      this.submitted = true;
      axios
        .post(`${store.apiBaseURL}/api/leads`, this.form)
        .then((resp) => {
          if (resp.data.success) {
            this.success = true;
            this.clearFields();
          }
        })
        .catch((err) => {
             if (err.response.status === 422) {
                 this.errors= err.response.data.errors
             }
          console.log(err);
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
            <input type="text" class="form-control" :class="{'is-invalid': submitted && errors.name, 'is-valid': submitted && !errors.name}"  id="name" v-model="form.name" />

            <div class="invalid-feedback" v-if="errors.name">{{ errors.name[0] }}</div>
            <div class="valid-feedback" v-else> Looks good! </div>
          </div>

          <div class="mb-3">
            <label for="lastname" class="form-label">Cognome</label>
            <input
              type="text"
              class="form-control"
              id="lastname"
              v-model="form.lastname"
             :class="{'is-invalid': submitted && errors.lastname, 'is-valid': submitted && !errors.lastname}"
            />
            <div class="invalid-feedback" v-if="errors.lastname">{{ errors.lastname[0] }}</div>
            <div class="valid-feedback" v-else> Looks good! </div>
          </div>

          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input
              type="email"
              class="form-control"
              id="email"
              v-model="form.email"
              aria-describedby="emailHelp"
             :class="{'is-invalid': submitted && errors.email, 'is-valid': submitted && !errors.email}"
            />

            <div class="invalid-feedback" v-if="errors.email">{{ errors.email[0] }}</div>
            <div class="valid-feedback" v-else> Looks good! </div>
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
              :class="{'is-invalid': submitted && errors.message, 'is-valid': submitted && !errors.message}"
            ></textarea>
            <div class="invalid-feedback" v-if="errors.message">{{ errors.message[0] }}</div>
            <div class="valid-feedback" v-else> Looks good! </div>
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
