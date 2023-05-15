import { useState, useEffect } from "react"
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import Spinner from './Spinner';

const ItemDetailContainer = () => {
    const [product,setProduct] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const {idItem} = useParams()

    useEffect(() => {
        const db = getFirestore()
        const queryDoc = doc(db, 'products', idItem)
        getDoc(queryDoc)
        .then((answ)=>setProduct({ id: answ.id, ...answ.data()}))
        .catch((err)=> console.log(err))
        .finally(()=>setIsLoading(false))
    }, [])
    return (
        <>
        {
            isLoading ?
                <Spinner/>
            :
                <ItemDetail product={product} />
        }
        </>
  )
}

export default ItemDetailContainer