import { useState, useEffect } from 'react';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md';
import LoadingSpinner from '../../UI/LoadingSpinner/LoadingSpinner';
import Footer from '../Footer/Footer'
import styles from './Main.module.css'
import { increase, decrease } from '../../Redux/QuantitySlice';
import { addToCart, removeFromCart } from '../../Redux/TotalPriceSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Redux/Store';

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
  const quantities = useSelector((state: RootState) => state.quantity);
  const dispatch = useDispatch();
  
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data)
      setLoading(false);
    }
    fetchData()
  }, []);

  const handleIncrease = (product: Products) => {
    dispatch(increase(product.id));
    dispatch(addToCart({ price: product.price }));
  };
  
  const handleDecrease = (product: Products) => {
    dispatch(decrease(product.id));
    dispatch(removeFromCart({ price: product.price }));
  };

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
                  <MdOutlineKeyboardArrowUp 
                    size={30}
                    onClick={() => handleIncrease(product)} 
                  />
                    <p>{quantities[product.id] ?? 0}</p>
                  <MdOutlineKeyboardArrowDown 
                    size={30}
                    onClick={() => handleDecrease(product)} 
                  />
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
