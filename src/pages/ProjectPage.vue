<script>
import axios from "axios";
import ProjectCard from '../components/ProjectCard.vue';
import {store} from "../store";
import { Bootstrap5Pagination } from 'laravel-vue-pagination';



export default {
  components: {
    ProjectCard,
    Bootstrap5Pagination,
   
  },

  data() {
    return {
      store,
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
        .get(`${store.apiBaseURL}/api/projects?page=${page}`)
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
        //console.error("Errore durante la richiesta API:", error);

        if (error.response.status === 404) {
          this.$router.push({name: "not-found"});
        }
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
    <div v-if="projects">

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
  <div v-else>
    <div class="loader">
      <span class="loader-text">loading</span>
      <span class="load"></span>
    </div>
  </div>
  </div>
</template>

<style scoped lang="scss">
.loader {
  width: 80px;
  height: 50px;
  position: relative;
  top: 200px;
  left: 50%;
}

.loader-text {
  position: absolute;
  top: 0;
  padding: 0;
  margin: 0;
  color: #210577;
  animation: text_713 3.5s ease both infinite;
  font-size: 0.8rem;
  letter-spacing: 1px;
}

.load {
  background-color: #210577;
  border-radius: 50px;
  display: block;
  height: 16px;
  width: 16px;
  bottom: 0;
  position: absolute;
  transform: translateX(64px);
  animation: loading_713 3.5s ease both infinite;
}

.load::before {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  background-color: #d1c2ff;
  border-radius: inherit;
  animation: loading2_713 3.5s ease both infinite;
}

@keyframes text_713 {
  0% {
    letter-spacing: 1px;
    transform: translateX(0px);
  }

  40% {
    letter-spacing: 2px;
    transform: translateX(26px);
  }

  80% {
    letter-spacing: 1px;
    transform: translateX(32px);
  }

  90% {
    letter-spacing: 2px;
    transform: translateX(0px);
  }

  100% {
    letter-spacing: 1px;
    transform: translateX(0px);
  }
}

@keyframes loading_713 {
  0% {
    width: 16px;
    transform: translateX(0px);
  }

  40% {
    width: 100%;
    transform: translateX(0px);
  }

  80% {
    width: 16px;
    transform: translateX(64px);
  }

  90% {
    width: 100%;
    transform: translateX(0px);
  }

  100% {
    width: 16px;
    transform: translateX(0px);
  }
}

@keyframes loading2_713 {
  0% {
    transform: translateX(0px);
    width: 16px;
  }

  40% {
    transform: translateX(0%);
    width: 80%;
  }

  80% {
    width: 100%;
    transform: translateX(0px);
  }

  90% {
    width: 80%;
    transform: translateX(15px);
  }

  100% {
    transform: translateX(0px);
    width: 16px;
  }
}
</style>

