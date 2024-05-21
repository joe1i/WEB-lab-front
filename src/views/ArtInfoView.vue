<template>
    <div>
      <MenuComponent />
  
      <main class="main">
        <ArtInfoComponent @buyArt="handleArt" />
      </main>
    </div>
  </template>
  
  <script>
  import MenuComponent from '@/components/Menu.vue';
  import ArtInfoComponent from '@/components/ArtInfoPanel.vue';
  import { mapState, mapActions } from 'vuex';
  
  export default {
    components: {
      ArtInfoComponent,
      MenuComponent
    },
    methods: {
      handleArt(art) {
        // Додайте вашу логіку тут
        console.log('Selected art:', art);
        if(art)
        {
            alert("Покупку виконано успішно!");
            window.location = '/index.html'
        }
      }
    }
  };
  </script>
  

  