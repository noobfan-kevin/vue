/**
 * Created by cathy on 2017/10/20.
 */
import shop from '../../api/shop'
import * as types from '../mutation-types'

//initial state
//shape: [{id, quantity}]
const state = {
  added: [],
  checkoutStatus: null
}

//getters
const getters = {
  checkoutStatus: state => state.checkoutStatus
}

//actions
const actions = {
  checkout ({commit, state },products){
    const savedCartItems =[...state.added]
    commit(types.CHECKOUT_REQUEST)
    shop.buyProducts(
      products,
      () => commit(types.CHECKOUT_SUCCESS),
      () => commit(types.CHECKOUT_FAILURE, {savedCartItems})
    )
  }
}

//mutation
const mutations = {
  [types.ADD_TO_CART] (state ,{ id }){
    console.log(state,id,111);
     state.lastCheckout = null
     const record = state.added.find(p => p.id === id)
     if(!record){
        state.added.push({
          id,
          quantity: 1
        })
     } else {
       record.quantity++
     }
  },

  [types.CHECKOUT_REQUEST] (state){
    //clear cart
    state.added = []
    state.checkoutStatus = null
  },

  [types.CHECKOUT_FAILURE] (state, {savedCartTtems }){
    //rollback to the cart saved before sending the request
    state.added = savedCartTtems
    state.checkoutStatus = 'failed'
  },

  [types.CHECKOUT_SUCCESS] (state) {

    state.checkoutStatus = 'successful'
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
