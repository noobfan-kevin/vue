/**
 * Created by cathy on 2017/10/20.
 */
const _products = [
  {id: 1, title: "ipad 4 Mini", price: 500, inventory: 2},
  {id: 2, title: "H&M T-Shirt White", price:100, inventory: 10},
  {id: 3, title: "Charli XCX - Sucker CD", price: 20, inventory: 5}
]

 export default {
  getProduct (cb){
    setTimeout(() => cb(_products),100)
  },

   buyProducts (products, cb, errorCb){
     setTimeout(() => {
       (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1)
         ? cb()
         : errorCb()
     }, 100)
   }
}
