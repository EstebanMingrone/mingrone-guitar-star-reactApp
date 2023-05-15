import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import Spinner from './Spinner';
import ItemList from './ItemList';
import '../styles/itemListContainer.css'

const ItemListContainer = ()=>{
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const {idCategory} = useParams()
    
    useEffect(()=>{
        const db = getFirestore()
        const queryCollection = collection(db, 'products');
        
        const queryCategory = idCategory ? query(queryCollection, where('category','==', idCategory)) : queryCollection
        getDocs(queryCategory)
        .then(answ => setProducts( answ.docs.map(product => ({ id: product.id, ...product.data() }))))
        .catch(err => console.log(err))
        .finally(()=> setIsLoading(false))

    }, [idCategory])
    
    return(
        <div className='containerCards'>
            { 
                isLoading ?
                    <Spinner/>
                :
                    <ItemList products={products}/>
            }
        </div>
    )
}

export default ItemListContainer;