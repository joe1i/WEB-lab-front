<template>
  <div>
    <MenuComponent />

    <header>
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h1 class="text-center text-white">Мій профіль</h1>
          </div>
        </div>
      </div>
    </header>

    <main class="main">
      <ProfileComponent @save="handleProfile" @save-error="handleSaveError" />
      <CollectionComponent />
    </main>
  </div>
</template>

<script>
import MenuComponent from '@/components/Menu.vue'
import ProfileComponent from '@/components/ProfilePanel.vue'
import CollectionComponent from '@/components/Collection.vue'

export default {
  components: {
    ProfileComponent,
    MenuComponent,
    CollectionComponent
  },
  methods: {
    handleProfile() {
      try {
        alert('Зміни збережено успішно!');
        console.log('Save attempted', this.$store.state.user);
      } catch (err) {
        console.error('Помилка при обробці збереження:', err);
        alert('Не вдалося обробити збереження. Будь ласка, спробуйте знову.');
      }
    },
    handleSaveError(errorMessage) {
      alert(`Помилка: ${errorMessage}`);
    }
  }
}
</script>
