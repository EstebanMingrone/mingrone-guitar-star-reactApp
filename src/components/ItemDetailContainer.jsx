import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail"
import { simFetch } from "../utils/simFetch"
import { useParams } from "react-router-dom"
import Spinner from './Spinner';
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
    const [product,setProduct] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const {idItem} = useParams()

    /*useEffect(()=>{
        simFetch(idItem)
        .then((answ)=>setProduct(answ))
        .catch((err)=> alert(err))
        .finally(()=>setIsLoading(false))
    },[])*/

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