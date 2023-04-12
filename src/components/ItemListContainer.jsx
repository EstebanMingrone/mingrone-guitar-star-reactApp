import { useEffect, useState } from 'react';
import '../styles/itemListContainer.css'
import { simFetch } from '../utils/simFetch';
import ItemCount from './ItemCount';
import Spinner from './Spinner';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = ()=>{
    const [products, setProducts] = useState([]);
    const {idCategory} = useParams()
    
    useEffect(()=>{
        if (idCategory) {
            simFetch()
                .then(answ => setProducts(answ.filter(prod => prod.category == idCategory)))
                .catch(err => console.log(err))
        } else {
            simFetch()
                .then(answ => setProducts(answ))
                .catch(err => console.log(err))
        }
        
    }, [idCategory])
   
    return(
        <div className='containerCards'>
            { 
                products.length !== 0 ?
                    <ItemList products={products}/>
                :
                    <Spinner/>
            }
            {/*  <h1>{greeting.text}</h1> 
                <ItemCount initial={1} stock={5} />*/
            }
        </div>
    )
}

export default ItemListContainer;