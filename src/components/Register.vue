<template>
    <div>
        <section class="signup">
            <div class="container">
                <div style="display: flex; justify-content: center;">
                <form class="row g-3">
                    <div class="col-12">
                    <label for="inputUsername4" class="form-label">Ім'я</label>
                    <div class="input-group">
                        <div class="input-group-text">@</div>
                        <input v-model="user.name" type="text" class="form-control" id="nameProf">
                    </div>
                    </div>
                    <div class="col-md-6">
                        <label for="inputEmail4" class="form-label">Адреса електронної пошти</label>
                        <input v-model="user.email" type="emailReg" class="form-control" id="emailReg">
                    </div>
                    <div class="col-md-6">
                        <label for="inputPassword4" class="form-label">Пароль</label>
                        <input v-model="user.password" type="passwordReg" class="form-control" id="passwordReg">
                    </div>
                                    
                    <div class="col-md-6">
                    <label for="inputState" class="form-label">Країна</label>
                    <select v-model="user.country" id="countryProf" class="form-select">
                        <option selected>Україна</option>
                                        <option>США</option>
                                        <option>Китай</option>
                                        <option>Індія</option>
                                        <option>Японія</option>
                                        <option>Німеччина</option>
                                        <option>Велика Британія</option>
                                        <option>Франція</option>
                                        <option>Італія</option>
                                        <option>Бразилія</option>
                                        <option>Канада</option>
                                        <option>Австралія</option>
                                        <option>Росія</option>
                                        <option>Індонезія</option>
                                        <option>Мексика</option>
                                        <option>Саудівська Аравія</option>
                                        <option>Туреччина</option>
                                        <option>Аргентина</option>
                                        <option>Пакистан</option>
                                        <option>Нігерія</option>
                                        <option>Південна Корея</option>
                                        <option>Іран</option>
                                        <option>Польща</option>
                                        <option>Іспанія</option>
                                        <option>Египет</option>
                                        <option>Колумбія</option>
                                        <option>Малайзія</option>
                                        <option>Ірак</option>
                                        <option>Чилі</option>
                                        <option>Бангладеш</option>
                    </select>
                    </div>
                    <div class="col-md-6">
                    <label for="inputCity" class="form-label">Місто</label>
                    <input v-model="user.city" type="text" class="form-control" id="cityProf" value="Київ">
                    </div>
                    <div class="col-md-6">
                    <label for="inputState" class="form-label">Стать</label>
                    <select v-model="user.sex" id="sexProf" class="form-select">
                        <option selected>Чоловік</option>
                        <option>Жінка</option>
                    </select>
                    </div>
                    <div class="col-12">
                    <label for="inputCity" class="form-label">Про мене</label>
                    <input v-model="user.about" type="text" class="form-control" id="aboutProf" value="Інформація про мене">
                    </div>
                    <div class="col-12">
                    <button @click.prevent="register" class="btn btn-itd" id="saveProf">Зареєструватись</button>
                    </div>
                </form>
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
        user: state => state.user
      })
    },
    methods: {
      ...mapActions(['registerUser']),
      async register() {
        try {
            if (!this.user.name || !this.user.email || !this.user.password || !this.user.city || !this.user.about) {
                throw new Error('Всі поля є обов\'язковими');
            }
    
            if (!this.user.name.trim()) {
                throw new Error('Ім\'я користувача не може бути порожнім');
            }
  
            if (!this.user.city.trim()) {
                throw new Error('Місто не може бути порожнім');
            }

            if (!this.user.about.trim()) {
                throw new Error('Інформація про Вас не може бути порожньою');
            }

            if (!this.user.city.match(/^[a-zA-Z\-\.а-яА-ЯіїЇєЄёЁґҐіІЇЙоОуУУЄЄхХцЦчЧшШщЩьЬюЮяЯ]/)) {
                throw new Error('Неправильний формат міста');
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
  
            await this.registerUser(this.user);
                localStorage.setItem('user', JSON.stringify(this.user));
                localStorage.setItem('rememberLog', "false");
                this.$emit('register');
            } catch (err) {
                console.error('Помилка при реєстрації:', err);
                this.$emit('register-error', err.message);
            }
        }
    },
  }
  </script>
  