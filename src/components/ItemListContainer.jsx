import { useEffect, useState } from 'react';
import '../styles/itemListContainer.css'
import { simFetch } from '../utils/simFetch';
import ItemCount from './ItemCount';
import Spinner from './Spinner';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'

const ItemListContainer = ()=>{
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const {idCategory} = useParams()
    
    useEffect(()=>{
        if (idCategory) {
            const db = getFirestore()
            const queryCollection = collection(db, 'products');
            const queryCategory = query(queryCollection, where('category','==', idCategory))
            getDocs(queryCategory)
                .then(answ => setProducts( answ.docs.map(product => ({ id: product.id, ...product.data() }))))
                .catch(err => console.log(err))
                .finally(()=> setIsLoading(false))
        } else {
            const db = getFirestore()
            const queryCollection = collection(db, 'products');
            getDocs(queryCollection)
                .then(answ => setProducts( answ.docs.map(product=>({id: product.id, ...product.data()}) ) ))
                .catch(err => console.log(err))
                .finally(()=> setIsLoading(false))
        }
    }, [idCategory])
    
    return(
        <div className='containerCards'>
            { 
                isLoading ?
                    <Spinner/>
                :
                    <ItemList products={products}/>
            }
            {/*  <h1>{greeting.text}</h1> 
                <ItemCount initial={1} stock={5} />*/
            }
        </div>
    )
}

export default ItemListContainer;