import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail"
import { simFetch } from "../utils/simFetch"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const [product,setProduct] = useState([])
    
    const {idItem} = useParams()

    useEffect(()=>{
        simFetch(idItem)
        .then((answ)=>setProduct(answ))
        .catch((err)=> alert(err))
    },[])
    return (
        <ItemDetail product={product} />
  )
}

export default ItemDetailContainer