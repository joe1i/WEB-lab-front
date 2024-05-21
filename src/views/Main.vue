<template>
    <div>
      <MenuComponent />
  
      <header>
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h1 class="text-center text-white">Галерея Піксельного Мистецтва</h1>
            </div>
          </div>
        </div>
      </header>
  
      <main class="main">
        <ArtsListComponent @artSelected="handleArt" />
      </main>
    </div>
  </template>
  
  <script>
  import MenuComponent from '@/components/Menu.vue';
  import ArtsListComponent from '@/components/ArtsList.vue';
  
  export default {
    components: {
      MenuComponent,
      ArtsListComponent
    },
    methods: {
      handleArt(art) {
        console.log('Selected art:', art);
        if(art)
        {
            window.location = '/art_info.html'
        }
      }
    }
  };
  </script>
  

  