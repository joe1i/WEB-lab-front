import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '@/views/LoginView.vue';
import RegisterView from '@/views/RegisterView.vue';
import ArtsListView from '@/views/MainView.vue';
import ProfileView from '@/views/ProfileView.vue';
import ArtInfoView from '@/views/ArtInfoView.vue';
import AboutView from '@/views/AboutView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/signin.html',
      name: 'login',
      component: LoginView
    },
    {
      path: '/signup.html',
      name: 'registration',
      component: RegisterView
    },
    {
      path: '/index.html',
      name: 'gallery',
      component: ArtsListView
    },
    {
      path: '/art_info.html',
      name: 'art info',
      component: ArtInfoView
    },
    {
      path: '/profile.html',
      name: 'profile',
      component: ProfileView
    },
    {
      path: '/about.html',
      name: 'about',
      component: AboutView
    }
  ]
});

export default router;
