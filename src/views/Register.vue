<template>
    <div>
      <MenuComponent />
  
      <header>
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h1 class="text-center text-white">Реєстрація</h1>
            </div>
          </div>
        </div>
      </header>
  
      <main class="main">
        <RegisterComponent @register="handleRegister" @register-error="handleRegisterError" />      
      </main>
    </div>
  </template>
  
  <script>
  import MenuComponent from '@/components/Menu.vue'
  import RegisterComponent from '@/components/RegisterPanel.vue'
  
  export default {
    components: {
      MenuComponent,
      RegisterComponent
    },
    methods: {
      handleRegister() {
        try {
          alert('Реєстрацію виконано успішно!');
          console.log('Login attempted', this.$store.state.user.email);
          window.location = '/index.html'
        } catch (err) {
          console.error('Помилка при обробці реєстрації:', err);
          alert('Не вдалося обробити реєстрацію. Будь ласка, спробуйте знову.');
        }
      },
      handleRegisterError(errorMessage) {
        alert(`Помилка: ${errorMessage}`);
      }
    }
  }
  </script>
  