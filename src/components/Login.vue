<!-- Login.vue -->
<template>
  <div>
    <section class="signin">
      <div class="container">
        <div style="display: flex; justify-content: center;">
          <form>
            <div class="mb-3">
              <label for="emailLog" class="form-label">Адреса електронної пошти</label>
              <input v-model="user.email" class="form-control" id="emailLog" aria-describedby="emailHelp">
              <div id="emailHelp" class="form-text">Ми ніколи нікому не передамо вашу електронну адресу.</div>
            </div>
            <div class="mb-3">
              <label for="passwordLog" class="form-label">Пароль</label>
              <input type="password" v-model="user.password" class="form-control" id="passwordLog">
            </div>
            <div class="mb-3 form-check">
              <input type="checkbox" class="form-check-input" v-model="remember" id="rememberLog">
              <label class="form-check-label" for="rememberLog">Запам'ятати мене</label>
            </div>
            <button @click.prevent="login" class="btn btn-itd" id="loginLog">Увійти</button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  data() {
    return {
      remember: false
    };
  },
  computed: {
    ...mapState({
      user: state => state.user
    })
  },
  methods: {
    ...mapActions(['loginUser']),
    async login() {
      try {
        if (!this.user.email || !this.user.password) {
          throw new Error('Всі поля є обов\'язковими');
        }

        if (!this.user.email.trim()) {
          throw new Error('Електронна пошта не може бути порожньою');
        }

        if (!this.user.password.trim()) {
          throw new Error('Пароль не може бути порожнім');
        }

        if (!this.user.email.match(/^[a-zA-Z0-9_\-\.]+@[a-zA-Z0-9_\-\.]+\.[a-zA-Z]{2,}$/)) {
          throw new Error('Неправильний формат електронної пошти');
        }

        if (this.user.password.length < 6) {
          throw new Error('Пароль повинен містити 6 або більше символів');
        }

        localStorage.setItem('rememberLog', this.remember);

        await this.loginUser(this.user);
        localStorage.setItem('user', JSON.stringify(this.user));
        this.$emit('login');
      } catch (err) {
        console.error('Помилка при вході:', err);
        this.$emit('login-error', err.message);
      }
    }
  },
  mounted() {
    const rememberCheck = localStorage.getItem('rememberLog');
    
    if (rememberCheck === "true") {
      const storedUser = localStorage.getItem('user');
      
      if (storedUser) {
        const userData = JSON.parse(storedUser);
        this.remember = rememberCheck;
        this.$store.commit('SET_USER', userData);
      }
    }
  }
}
</script>
