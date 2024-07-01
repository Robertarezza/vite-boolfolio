<script>
import axios from "axios";

export default {
  data() {
    return {
      project: null,
    };
  },
  created() {
    // Utilizza this.$route.params.slug per ottenere il parametro slug dalla route
    const slug = this.$route.params.slug;
    axios.get(`http://127.0.0.1:8000/api/projects/${slug}`)
      .then(resp => {
        console.log(resp);
        console.log(resp.data.results)
        this.project = resp.data.results;
       ;
      })
      .catch(error => {
        console.error("Errore durante la richiesta API:", error);
      });
  }
};
</script>

<template>
  <div>
    <h1 class="text-center">{{ project.title  }}</h1>
    <p>{{project.description}}</p>
  
  </div>
</template>

<style scoped lang="scss">

</style>
