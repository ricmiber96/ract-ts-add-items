import React from 'react'
import './App.css'
import Item from './components/Item'
import { useItems } from './hooks/useItems'
import { useSEO } from './hooks/useSEO'


export type ItemId =  `${string}-${string}-${string}-${string}-${string}`

export interface Item {
  id: ItemId,
  timestamp: number
  text: string
}

// const INITIAL_ITEMS: Item[] = [
//   {
//     id: crypto.randomUUID(),
//     timestamp: Date.now(),
//     text: 'Books',
//   },
//   {
//     id: crypto.randomUUID(),
//     timestamp: Date.now(),
//     text: 'Games'
//   }
// ]

function App() {

  const {items, addItem, removeItem} = useItems()
  useSEO({title: `[${items.length}] Prueba de React`, description: 'Añadir elementos a una lista'})

  const handleSubmit = (event:React.FormEvent<HTMLFormElement>)=> {
    event.preventDefault()

    const {elements} = event.currentTarget 
    const input = elements.namedItem('item') as HTMLInputElement
    const isInput = input instanceof HTMLInputElement
    if(!isInput && input == null) return
    addItem(input.value)
    input.value = ''
 
  }

  const handleRemoveItem = (id: ItemId) => () => {
    removeItem(id)
  }

  return (
    <>
     <main>
      <aside>
      <h1>Prueba tecnica React + Typescript</h1>
        <form onSubmit={handleSubmit} aria-label="Add an item to list">
          <label>
            Elemento a introducir
            <input type="text" name="item" required placeholder="Books"/>
          </label>
          <button type="submit">Añadir nuevo elemento</button>
        </form>
      </aside>
      <section>
        <h2>Lista de elementos</h2>
         {
          items.length === 0 ? 
           (
           <p>
            <strong>No hay elementos en la lista</strong>
           </p>
           ) : (
            <ul> { 
              items.map(item => {
            return (
              <Item {...item} handleClick={handleRemoveItem(item.id)} key={item.id}/>
              ) } ) 
            }
          </ul> 
        )
      }
      </section>
     </main>
    </>
  )
}

export default App
