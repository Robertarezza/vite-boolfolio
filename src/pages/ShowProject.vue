<script>
import axios from "axios";
import { store } from '../store.js'

export default {
  data() {
    return {
      project: null,
      store,
      
    };
  },
  created() {
    // Utilizza this.$route.params.slug per ottenere il parametro slug dalla route
    const slug = this.$route.params.slug;
    axios
      .get(`${store.apiBaseURL}/api/projects/${slug}`)
      .then((resp) => {
        console.log(resp);
        console.log(resp.data.results);
        this.project = resp.data.results;
      })
      .catch((error) => {
        //console.error("Errore durante la richiesta API:", error);

        if (error.response.status === 404) {
          this.$router.push({ name: "not-found" });
        }
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
            ? `${store.imageUrl}/${project.cover_image}`
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

        <p>Tecnologie Usate:</p>
        <ul>
          <li v-if="project.technologies.length === 0">Non inserita</li>
          <li v-else class="card-text" v-for="technology in project.technologies">
            {{ technology.name || "Non inserita" }}
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div v-else>
    <div class="loader">
      <span class="loader-text">loading</span>
      <span class="load"></span>
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
