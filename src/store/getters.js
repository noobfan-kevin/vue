/**
 * Created by cathy on 2017/10/20.
 */
export const cartProducts = state =>{
  console.log(state);
  return state.cart.added.map(({id, quantity }) => {
    const product = state.products.all.find(p => p.id === id)
    return {
      title: product.title,
      price: product.price,
      quantity
    }
  })
}
