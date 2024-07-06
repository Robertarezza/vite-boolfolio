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
     
      <router-link
        :to="{ name: 'showProject', params: { slug: project.slug } }" class="text-decoration-none"> <button >Dettagli  <span></span> </button> 
       </router-link
      >
    </div>
  </div>
</template>

<style scoped lang="scss">

button {
  border: none;
  border-radius: 10px;
  display: block;
  position: relative;
  padding: 0.7em 2.4em;
  font-size: 18px;
  background: transparent;
  cursor: pointer;
  user-select: none;
  overflow: hidden;
  color: royalblue;
  z-index: 1;
  font-family: inherit;
  font-weight: 500;
}

button span {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  z-index: -1;
  border: 2px solid royalblue;
}

button span::before {
  content: "";
  display: block;
  position: absolute;
  width: 8%;
  height: 500%;
  background: var(--lightgray);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-60deg);
  transition: all 0.3s;
}

button:hover span::before {
  transform: translate(-50%, -50%) rotate(-90deg);
  width: 100%;
  background: royalblue;
}

button:hover {
  color: white;
}

button:active span::before {
  background: #2751cd;
}


</style>
