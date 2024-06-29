<script>
import axios from "axios";
import ProjectCard from "./ProjectsCard.vue";
import { Bootstrap5Pagination } from 'laravel-vue-pagination';



export default {
  components: {
    ProjectCard,
    Bootstrap5Pagination,

    
   
  },

  data() {
    return {
      projects: [],
      pagination: {
        current_page: 1,
        last_page: 1,
        per_page: 8,
        total: 0,
      },
    };
  },

  created() {
    this.fetchProjects();
  },

  methods: {
    fetchProjects(page = 1) {
      axios
        .get(`http://127.0.0.1:8000/api/projects?page=${page}`)
        .then((resp) => {
          console.log("API Response:", resp);

          this.projects = resp.data.results.data; 
          console.log("Projects:", this.projects);

          this.pagination = {
            current_page: resp.data.results.current_page,
            last_page: resp.data.results.last_page,
            per_page: resp.data.results.per_page,
            total: resp.data.results.total,
          };
          console.log("Pagination Data:", this.pagination);
        })
        .catch((error) => {
          console.error("Errore durante il recupero dei progetti:", error);
        });
    },
    
    changePage(page) {
      if (page >= 1 && page <= this.pagination.last_page) {
        this.fetchProjects(page);
      }
    },
  },
};
</script>

<template>
  <div class="container mt-5 mb-5">
    <h1 class="text-center mb-3">I nostri Progetti</h1>
    <div class="row row-cols-4 g-3">
      <div class="col" v-for="project in projects" :key="project.id">
        <ProjectCard :project="project" />
      </div>
    </div>
   
      <div class="mt-3 mb-5">
        <Bootstrap5Pagination 
        :data="pagination" 
        @pagination-change-page="changePage" 
        :show-disabled="true"
        :limit="2"
        
      />


    </div>
  
  </div>
</template>

<style scoped lang="scss">

</style>

