import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail"
import { simFetch } from "../utils/simFetch"
import { useParams } from "react-router-dom"
import Spinner from './Spinner';

const ItemDetailContainer = () => {
    const [product,setProduct] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const {idItem} = useParams()

    useEffect(()=>{
        simFetch(idItem)
        .then((answ)=>setProduct(answ))
        .catch((err)=> alert(err))
        .finally(()=>setIsLoading(false))
    },[])
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