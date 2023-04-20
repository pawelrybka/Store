import Footer from '../Footer/Footer'
import { useState, useEffect } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { MdOutlineKeyboardArrowUp } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { increase, decrease } from '../../Redux/QuantitySlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../Redux/Store';
import LoadingSpinner from '../../UI/LoadingSpinner/LoadingSpinner';
import styles from './Main.module.css'

interface Products {
  category: string
  description: string
  id: number
  image: string
  price: number
}

function Main() {
  
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<Products[]>([])
  const dispatch = useDispatch()
  const quantityValue = useSelector((state: any) => state.quantity.value);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data)
      setLoading(false);
    }
    fetchData()
  }, []);

  const handleIncrease = () => {
    dispatch(increase());
  }

  const handleDecrease = () => {
    dispatch(decrease());
  }

  return (
    <div className={styles.main}>
      <div className={styles.main__content}>
        <div className={styles.content}>
          {loading ? 
            <LoadingSpinner/> : 
            products.map(product => (
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
                  <MdOutlineKeyboardArrowUp size={30} onClick={() => handleIncrease()}/>
                    {quantityValue}
                  <MdOutlineKeyboardArrowDown size={30} onClick={() => handleDecrease()}/>
                </div>
              </div>
            ))
          }
        </div>
        <Footer/>
      </div>
    </div>
  )
}

export default Main
