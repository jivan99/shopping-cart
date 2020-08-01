import axios from 'axios';

const state = {
  productItems: [] 
}

const mutations = {
  UPDATE_PRODUCT_ITEMS (state, payload) {
    state.productItems = payload;
  }
}

const actions = {
  getProductItems ({ commit }, token) {
    axios.get(`/api/products?token=${token}`).then((response) => {
      commit('UPDATE_PRODUCT_ITEMS', response.data)
    });
  },
}

const getters = {
  productItems: state => state.productItems,
  productItemFromId: state => id => state.productItems.find(product => product.id === id)
}

const productModule = {
  state,
  mutations,
  actions,
  getters
}

export default productModule;
