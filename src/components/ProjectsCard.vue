<script>
export default {
    props: {
        project: Object, 
    },
  data() {
    return {
      //inseriamo il percorso per il recupero delle immagini dal nostro strorage di Laravel
      imageUrl: "http://127.0.0.1:8000/storage",
    };
  },
};
</script>

<template>
  <div class="card h-100">
          <img
            :src="
              project.cover_image
                ? `${imageUrl}/${project.cover_image}`
                : `https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg`
            "
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">Stato di lavorazione: {{ project.status }}</p>
            <p>Tecnologie Usate:</p>
            <p class="card-text" v-for="technology in project.technologies">
              {{ technology.name }}
            </p>
            <p class="card-text">
              Tipologia di Progetto:
              {{ project.type ? project.type.name : "Nessuna tipologia" }}
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
</template>

<style scoped lang="scss"></style>
