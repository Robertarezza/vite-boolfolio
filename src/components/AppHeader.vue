<script>
export default {
    data() {
        return {
            navItems: [
            {
                routerName: 'home',
                title: 'Home'
            },
            {
                routerName: 'projects',
                title: 'Progetti'
            },
            {
                routerName: 'contacts',
                title: 'Contattaci'
            },
           
        ]
        }
       
    }
      // Pulisci il messaggio dopo 5 secondi
      // setTimeout(() => {
      //   this.success = false;
      // }, 5000);this.$router.push({
             
    
}
</script>


<template>
<nav class="navbar navbar-expand-lg bg-body-tertiary bg-primary" data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Boolfolio</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item" v-for="item in navItems">
          <router-link :to="{name: item.routerName}" class="nav-link" aria-current="page" href="#">{{item.title}}</router-link>
        </li>
        
        </ul>
    </div>
  </div>
</nav>
</template>

<style scoped lang="scss">

</style>