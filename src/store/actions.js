/**
 * Created by cathy on 2017/10/20.
 */
import * as types from './mutation-types'

export const addToCart = ({ commit }, product) => {
   if(product.inventory > 0){
     commit(types.ADD_TO_CART, {
       id:product.id
     })/*提交matution*/
   }
}
