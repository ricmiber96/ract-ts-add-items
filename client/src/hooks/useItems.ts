import { useState } from "react"
import { Item } from "../App"

export const useItems = () => {

    const [items, setItems] = useState<Item[]>([])

    const addItem = (text:string) => {
        const newItem: Item  = {
            id: crypto.randomUUID(),
            text: text, 
            timestamp: Date.now(),
         
          }
       
          setItems((prevItems)=> [...prevItems, newItem])
    }

    const removeItem = (id:string) => {
        setItems((prevItems)=> {
            return prevItems.filter(item => item.id !== id)
        })

    }

    return { items, addItem, removeItem}
}