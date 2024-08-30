import { useEffect, useState } from "react"
import "./App.css"
import { Basket } from "./components/Basket"
import { ProductList } from "./components/ProductList"
import { Product } from "./components/Product"
import { BasketItem } from "./components/BasketItem"

export default function App() {
  const [products, setProducts] = useState([
    {id: 101, name:"Puma Rs-X1", price:45, photo:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/393161/01/sv01/fnd/PHL/fmt/png/RS-X-Games-Sneakers"},
    {id: 102, name:"Puma Rs-X2", price:42, photo:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/380462/01/fnd/PNA/fmt/png/RS-X-Mix-Men's-Sneakers"},
    {id: 103, name:"Puma Rs-X3", price:35, photo:"https://i.ebayimg.com/images/g/bYoAAOSwoFlmNCUN/s-l1200.jpg"},
    //{id: 104, name:"Puma Rs-X4", price:65, photo:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/393161/01/sv01/fnd/PHL/fmt/png/RS-X-Games-Sneakers"},
    //{id: 105, name:"Puma Rs-X5", price:62, photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6V6-YHzAjtyMMXAL8U_vVKMu3gTLAT6hppg&s"},
    //{id: 106, name:"Puma Rs-X6", price:82, photo:"https://m.media-amazon.com/images/I/71ZApeHKYSL._AC_UY900_.jpg"},
    {id: 107, name:"Puma Rs-X7", price:120, photo:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/395551/06/sv01/fnd/EEA/fmt/png"},
    {id: 108, name:"Puma Rs-X8", price:75, photo:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/371860/01/sv01/fnd/PNA/fmt/png/RS-X-Subvert-Men's-Sneakers"},
    {id: 109, name:"Puma Rs-X8", price:225, photo:"https://images.footlocker.com/is/image/EBFL2/38989601?wid=250&hei=250"},
  ]) 
  const [basket, setBasket] = useState([])  

  const [total, setTotal] = useState(0)


  const moveToCart = id => {
    let found = products.find(x => x.id == id)
    if(found) {
      let newproduct = basket.find(item => item.id == id)
      
      if(newproduct) {
          newproduct.count++
          setBasket([...basket])
      } else {
          setBasket([...basket, {...found, count: 1}])
      }
  }}

  const addProduct = id => {
    let found = products.find(x => x.id == id)
    if(found) {
      let newproduct = basket.find(item => item.id == id)
    if(newproduct) {
      newproduct.count++   
    }
    setBasket([...basket])
  }
  }


  const reduceProduct = id => {
    let found = products.find(x => x.id == id)
    if(found) {
      let newproduct = basket.find(item => item.id == id)
    if(newproduct) {
      if(newproduct.count>1){
      newproduct.count--
    }
  }
    setBasket([...basket])
  }
  }

  const removeProduct = id => {
    const newbasket = basket.filter(x => x.id !== id)
    setBasket(newbasket)
  }

  return <>
  <h1>Online Shop</h1>
  <div className="row">
    <ProductList
    items = {products}
    onMove = {moveToCart}
     

    />
    <Basket
    cart = {basket}
    total={total}
    onAdd = {addProduct}
    onReduce = {reduceProduct}
    onRemove = {removeProduct}
    setTotal={setTotal}
    />
  </div>
  </>
}
