/**
 * Created by cathy on 2017/10/20.
 */
import shop from '../../api/shop'
import * as types from '../mutation-types'

//initial state
const state = {
  all: []
}

//getters
const getters = {
  allProducts: state => state.all
}

//actions
const actions = {
  getAllProducts ({ commit }) {
    console.log(123);
    shop.getProduct(products =>{
      console.log(products,123,types);
      commit(types.RECEIVE_PRODUCTS, {products})
    })
  }
}

//mutation
const mutations = {
  [types.RECEIVE_PRODUCTS] (state, {products}){
    console.log(678);
    state.all = products
  },

  [types.ADD_TO_CART] (state, { id }){
    console.log(state,id,333);
    state.all.find(p => p.id === id).inventory
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
