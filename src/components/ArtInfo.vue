<template>
    <div>
        <section class="art_info1" style="margin: 50px;">
                <div class="container" >
                    <div class="card">
                        <div class="row g-0">
                        <div class="col-xl-8 col-md-12">
                            <img :src="artwork.image_path" class="card-img-center" alt="..." style="width: 100%; height: 100%; object-fit: cover;" id="imageInfo">
                        </div>
                        <div class="col-xl-3 col-md-12">
                            <div class="card-body">
                                <h5 class="card-title" style="font-size: 30px;" id="nameInfo">{{ artwork.name }}</h5>
                                <p class="card-text"style="font-size: 25px;" id="authorInfo"><small class="text-muted">Автор: {{ artwork.author }}</small></p>
                                <a class="btn btn-itd " @click="buyArtwork()" id="buyInfo">Купити за {{ artwork.price }}$</a>
                            </div>
                        </div>
                        </div>
                    </div>   
                </div>
             </section>   
    </div>
  </template>
  
  <script>
import { mapState, mapActions } from 'vuex';
  
  export default {
    computed: {
      ...mapState({
        artwork: state => state.selectedArt
      })
    },
    methods: {
        ...mapActions(['buyArt']),
      async buyArtwork() {
        console.log(this.artwork.artID);
        console.log(this.$store.state.user.userID);
        if (!this.$store.state.user.userID) {
            console.error("User ID is undefined!"); 
        } else {
            await this.buyArt({ artID: this.artwork.artID, buyerID: this.$store.state.user.userID });
            this.$emit('buyArt', this.artwork);
        }
      }
    },
    mounted() {
      const storedArt = localStorage.getItem('selectedArt');
      
      if (storedArt) {
        const artData = JSON.parse(storedArt);
        this.$store.commit('SET_SELECTED_ART', artData);
      }
      else
      {
        window.location = '/index.html'
      }

      const storedUser = localStorage.getItem('user');
      
      if (storedUser) {
        const userData = JSON.parse(storedUser);
        this.$store.commit('SET_USER', userData);
      }
      else {
        window.location = '/signin.html'
      }
    
    }
  };
  </script>
  
  