<template>
  <div>
    <MenuComponent />

    <header>
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h1 class="text-center text-white">Вхід</h1>
          </div>
        </div>
      </div>
    </header>

    <main class="main">
      <LoginComponent @login="handleLogin" @login-error="handleLoginError" />      
    </main>
  </div>
</template>

<script>
import MenuComponent from '@/components/Menu.vue'
import LoginComponent from '@/components/Login.vue'

export default {
  components: {
    MenuComponent,
    LoginComponent
  },
  methods: {
    handleLogin() {
      try {
        alert('Вхід виконано успішно!');
        console.log('Login attempted', this.$store.state.user.email);
        window.location = '/index.html'
      } catch (err) {
        console.error('Помилка при обробці входу:', err);
        alert('Не вдалося обробити вхід. Будь ласка, спробуйте знову.');
      }
    },
    handleLoginError(errorMessage) {
      alert(`Помилка: ${errorMessage}`);
    }
  }
}
</script>
