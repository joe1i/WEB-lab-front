<template>
    <div>
      <section class="mycollection">
        <div class="container">
          <div class="col-12">
            <h1 class="text-center" style="padding: 60px 0;">Моя колекція</h1>
          </div>
          <div>
            <div v-if="arts.length === 0" class="text-center">
              Порожньо
            </div>
            <div v-else class="row row-cols-1 row-cols-sm-3 row-cols-md-4 row-cols-xl-6 g-4">
              <div v-for="artwork in arts" :key="artwork.id" class="col">
                <div class="card">
                  <img :src="'/' + artwork.image_path" class="card-img-top">
                  <div class="card-body">
                    <h5 class="card-title">{{ artwork.name }}</h5>
                    <p class="card-text">{{ artwork.author }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  import { mapState } from 'vuex';
  export default {
    computed: {
      ...mapState({
        arts: state => state.userArts
      })
    }
  }
  </script>
  