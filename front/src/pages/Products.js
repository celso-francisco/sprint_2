import { useState, useEffect } from "react"
import Item from "../components/Item"
import ComponentHeader from "../components/ComponentHeader" 
import products from '../beautyProducts.json'
import Icones from '../components/Icones'



export default function Products() {
  const [productList, setProductList] = useState([])
  const [buttonCount, setButtonCount] = useState(false)

  useEffect(() => {
    setProductList(products.beauty)
  }, [])
  
  return (
    <div className="content-product">
      <header>
         <ComponentHeader />
         <Icones />
      </header>

     <section className="main-products">
        {productList.map((p, index) => (
          <Item key={index} product={p} buttonCount={buttonCount} setButtonCount={setButtonCount}/>
        ))}
      </section>
      <footer></footer>
    </div>

    
  )
}






