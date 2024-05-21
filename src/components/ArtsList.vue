<template>
  <div>
    <section class="gallery">
      <div class="container">
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div v-for="(column, columnIndex) in columns" :key="columnIndex" class="col">
            <div v-for="(artwork, artworkIndex) in column" :key="artworkIndex" class="card">
              <img :src="artwork.image_path" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title">{{ artwork.name }}</h5>
                <p class="card-text">{{ artwork.author }}</p>
                <a class="btn btn-itd buy-button" @click="selectArtwork(artwork)" id="buyMain">{{ artwork.price }}$</a>
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
      arts: state => state.arts
    })
  },
  data() {
    return {
      columns: [[], [], []],
      currentIndex: 0
    };
  },
  watch: {
    arts: {
      handler(newArts) {
        this.columns = [[], [], []]; 
        newArts.forEach((artwork, index) => {
          this.addArtworkToColumn(artwork);
        });
      },
      immediate: true
    }
  },
  methods: {
    addArtworkToColumn(artwork) {
      this.columns[this.currentIndex].unshift(artwork);
      this.currentIndex = (this.currentIndex + 1) % 3;
    },
    ...mapActions(['SELECT_ART', 'AVAILABLE_ARTS']),
    async selectArtwork(artwork) {
      try {
        await this.SELECT_ART(artwork);
        localStorage.setItem('selectedArt', JSON.stringify(artwork));
        this.$emit('select', artwork);
      } catch (err) {
        console.error('Помилка при виборі арту:', err);
        this.$emit('select-error', err.message);
      }
      
    }
  },
  async mounted() {
      try {
        await this.AVAILABLE_ARTS();
      } catch (err) {
        console.error('Помилка:', err);
        this.$emit('select-error', err.message);
      }
    }
};
</script>

