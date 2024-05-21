import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    user: {
      name: '',
      email: '',
      password: '',
      country: '',
      city: '',
      sex: '',
      about: ''
    },
    selectedArt: {
      name: '',
      image_path: '',
      price: '',
      buyerID: '',
      creatorID: '',
      author: ''
    },
    userArts: [],
    arts: []
  },
  mutations: {
    SET_USER(state, userData) {
      state.user = userData;
    },
    CLEAR_USER(state) {
      state.user = { name: '',email: '', password: '', country: '', city: '', sex: '', about: '' };
    },
    SET_USERARTS(state, artsData) {
      state.userArts = artsData;
    },
    SET_ARTS(state, artsData) {
      state.arts = artsData;
    },
    SET_SELECTED_ART(state, art) {
      state.selectedArt = art;
    }
  },
  actions: {
    async loginUser({ commit }, userData) {
      try {
        const response = await axios.get('http://localhost:3000/collectors', {
          params: {
            email: userData.email
          }
        });

        if (response.data.status !== 200) {
          throw new Error('Користувач не знайдений або сталася помилка');
        }

        if (response.data.data.password !== userData.password) {
          throw new Error('Невірний пароль');
        }

        commit('SET_USER', response.data.data);
      } catch (error) {
        throw error;
      }
    },
    async updateUser({ commit }, userData) {
      try {
        const response = await axios.post('http://localhost:3000/collectors/update', userData);

        if (response.data.status !== 200) {
          throw new Error('Помилка');
        }

        commit('SET_USER', response.data.data );
      } catch (error) {
        throw error;
      }
    },
    async collectorsCollection({ commit }, buyerID) {
      try {
        const response = await axios.get('http://localhost:3000/collectors/collection', {
          params: {
            buyerID: buyerID
          }
        });
        
        if (response.data.status !== 200) {
          throw new Error(response.data.error);
        }

        const artsWithAuthor = await Promise.all(response.data.data.map(async artwork => {
          const authorResponse = await axios.get(`http://localhost:3000/artists`, {
            params: {
              userID: artwork.creatorID
            }
          });
          return {
            ...artwork,
            author: authorResponse.data.data.name
          };
        }));

        commit('SET_USERARTS', artsWithAuthor);
        
      } catch (error) {
        console.error('Error fetching arts:', error);
      }
    },
    async availableArts({ commit }) {
      try {
        const response = await axios.get('http://localhost:3000/arts/available_arts');
        
        if (response.data.status !== 200) {
          throw new Error(response.data.error);
        }

        const artsWithAuthor = await Promise.all(response.data.data.map(async artwork => {
          const authorResponse = await axios.get(`http://localhost:3000/artists`, {
            params: {
              userID: artwork.creatorID
            }
          });
          return {
            ...artwork,
            author: authorResponse.data.data.name
          };
        }));

        commit('SET_ARTS', artsWithAuthor);
        
      } catch (error) {
        console.error('Error fetching arts:', error);
      }
    },
    selectArt({ commit }, art) {
      commit('SET_SELECTED_ART', art);
    },
    async buyArt({ commit },  { artID, buyerID }) {
      console.log(buyerID);
      try {
        const response = await axios.post('http://localhost:3000/arts/buy', {
          artID: artID,
          buyerID: buyerID
        });
        
        if (response.data.status !== 200) {
          throw new Error(response.data.error);
        }

      } catch (error) {
        console.error('Error fetching arts:', error);
      }
    },
    async registerUser({ commit }, userData) {
      try {
        const responseCheck = await axios.get('http://localhost:3000/collectors', {
          params: {
            email: userData.email
          }
        });

        if (responseCheck.data.status === 200) {
          throw new Error('Користувач з цією поштою вже існує');
        }
        const response = await axios.post('http://localhost:3000/collectors', userData);
        console.log(response.data);

        if (response.data.status !== 200) {
          throw new Error(response.data.error || 'Failed to register user');
        } 

        commit('SET_USER', response.data.data);

      } catch (error) {
        console.error('Error registering user:', error);
        throw error;
      }
    },
  }
});
