import Footer from '../Footer/Footer'
import { useState, useEffect } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { MdOutlineKeyboardArrowUp } from 'react-icons/md';
import styles from './Main.module.css'

interface Products {
  category: string
  description: string
  id: number
  image: string
  price: number
}

function Main() {
  
  const [products, setProducts] = useState<Products[]>([])

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      console.log(data);
      setProducts(data)
    }
    fetchData()
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.main__content}>
        <div className={styles.content}>
          {products.map(product => (
            <div key={product.id} className={styles.product}>
              <div className={styles.product__info}>
                <img 
                src={product.image} 
                alt={product.category} 
                className={styles.product__image}
                />
                <div>
                  <h3>{product.category}</h3>
                  <p>{product.price}$</p>
                </div>
              </div>
              <div className={styles.product__quantity}>
                <MdOutlineKeyboardArrowUp size={30}/>
                  0
                <MdOutlineKeyboardArrowDown size={30}/>
              </div>
            </div>
          ))}
        </div>
        <Footer/>
      </div>
    </div>
  )
}

export default Main
