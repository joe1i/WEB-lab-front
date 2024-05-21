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
  
  export default {
    components: {
      MenuComponent,
      ArtInfoComponent
    },
    methods: {
      handleArt(art) {
        if(art)
        {
            alert("Покупку виконано успішно!");
            window.location = '/index.html'
        }
      }
    }
  };
  </script>
  

  