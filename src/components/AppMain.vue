<script>
//importiamo axios per la chiamata api
import axios from "axios";
//importiamo il component ProjectCard
import ProjectCard from "./ProjectsCard.vue";


export default {
    components: {
        ProjectCard,
    },

  data() {
    return {
      //defiamo projects come array vuoto
      projects: [],
    };
  },
  //si fa partire la chiamata all'avvio della pagina
  created() {
    //metto l'url testato su Postman
    axios.get("http://127.0.0.1:8000/api/projects").then((resp) => {
      //console.log(resp)

      this.projects = resp.data.results;
      console.log(this.projects);
    });
  },
};
</script>

<template>
  <div class="container mt-5 mb-5">
    <h1 class="text-center mb-3">I nostro Progetti</h1>
    <div class="row row-cols-4 g-3">
      <div class="col" v-for="project in projects">
       <ProjectCard :project="project" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
