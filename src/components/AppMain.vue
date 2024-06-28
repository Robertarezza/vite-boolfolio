<script>
//importiamo axios per la chiamata api
import axios from "axios";
export default {
  data() {
    return {
      //defiamo projects come array vuoto
      projects: [],
      //inseriamo il percorso per il recupero delle immagini dal nostro strorage di Laravel
      imageUrl: 'http://127.0.0.1:8000/storage',
    };
  },
  //si fa partire la chiamata all'avvio della pagina
  created() {
    //metto l'url testato su Postman
    axios.get("http://127.0.0.1:8000/api/projects").then((resp) => {
      //console.log(resp)

      this.projects = resp.data.results;
       console.log(this.projects)
    });
  },
};
</script>

<template>
  <div class="container mt-5 mb-5">
  <h1 class="text-center mb-3">I nostro Progetti</h1>
    <div class="row row-cols-4 g-3">
      <div class="col" v-for="project in projects">
        <div class="card h-100">
          <img :src="project.cover_image ? `${imageUrl}/${project.cover_image}` : `https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg`" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{{project.title}}</h5>
            <p class="card-text">
              Stato di lavorazione: {{ project.status }}
            </p>
            <p>Tecnologie Usate:</p>
            <p class="card-text" v-for="technology in project.technologies">
               {{ technology.name }} 
            </p>
            <p class="card-text">
              Tipologia di Progetto:  {{ project.type ? project.type.name : "Nessuna tipologia" }}
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
