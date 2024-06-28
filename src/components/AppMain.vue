<script>
import axios from "axios";
import ProjectCard from "./ProjectsCard.vue";

export default {
    components: {
        ProjectCard,
    },

    data() {
        return {
            projects: [],
            pagination: {
                currentPage: 1,
                lastPage: 1,
                perPage: 10,
                total: 0
            },
        };
    },

    created() {
        this.fetchProjects();
    },

    methods: {
        fetchProjects(page = 1) {
            axios.get(`http://127.0.0.1:8000/api/projects?page=${page}`)
                .then((resp) => {
                  console.log(resp);
                    this.projects = resp.data.results.data; // 'data' contiene i progetti
                    console.log(this.projects);
                    

                    this.pagination = {
                        currentPage: resp.data.results.current_page,
                        lastPage: resp.data.results.last_page,
                        perPage: resp.data.results.per_page,
                        total: resp.data.results.total,
                        
                    };
                    console.log(resp.data.results.current_page);
                    console.log( this.pagination);
                })
                .catch((error) => {
                    console.error("Errore durante il recupero dei progetti:", error);
                });
        },
        getPageNumbers() {
            const pages = [];
            for (let i = 1; i <= this.pagination.lastPage; i++) {
                pages.push(i);
            }
            return pages;
        },
        changePage(page) {
            this.currentPage = page;
            this.fetchProjects(page);
        }

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
      <button
        v-for="page in getPageNumbers()"
        :key="page"
        @click="changePage(page)"
        :class="['btn', page === pagination.currentPage ? 'btn-secondary' : 'btn-primary']">
        {{ page }}
      </button>
     
    </div>
  </div>
</template>


<style scoped lang="scss"></style>
