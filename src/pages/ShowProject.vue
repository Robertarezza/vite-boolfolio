<script>
import axios from "axios";

export default {
  data() {
    return {
      project: null,
      imageUrl: "http://127.0.0.1:8000/storage",
    };
  },
  created() {
    // Utilizza this.$route.params.slug per ottenere il parametro slug dalla route
    const slug = this.$route.params.slug;
    axios
      .get(`http://127.0.0.1:8000/api/projects/${slug}`)
      .then((resp) => {
        console.log(resp);
        console.log(resp.data.results);
        this.project = resp.data.results;
      })
      .catch((error) => {
        console.error("Errore durante la richiesta API:", error);
      });
  },
};
</script>

<template>
  <div class="container mt-4" v-if="project">
    <h1 class="text-center">{{ project.title }}</h1>
    <div class="d-flex justify-content-between gap-2">
    <img
      :src="
        project.cover_image
          ? `${imageUrl}/${project.cover_image}`
          : `https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg`
      "
      class="card-img-top"
      alt="..."
    />
    <div class=" ">
    <p>{{ project.description }}</p>
   
      <p class="card-text">
        Tipologia di Progetto:
        {{ project.type ? project.type.name : "Nessuna tipologia" }}
      </p>
      <div class="d-flex gap-2">
        <p>Tecnologie Usate:</p>
        <p class="card-text" v-for="technology in project.technologies">
          {{ technology.name }}
        </p>
      </div>
    </div>
</div>
  </div>
  <div v-else>
    <p>Caricamento...</p>
  </div>
</template>

<style scoped lang="scss"></style>
