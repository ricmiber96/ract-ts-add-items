import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { describe, expect, test } from 'vitest'
import App from '../src/App'


describe('<App />', () => {
    // test('should work', () => {
    // render(<App />)
    //   expect(
    //    screen.getByText('Prueba tecnica React + Typescript')
    //   ).toBeDefined()
    // })

    test('should  add a new item and remove them',async ()=>{
      const user = userEvent.setup()
      render(<App/>)

      // Buscar el input
      const input = screen.getByRole('textbox')
      expect(input).toBeDefined()

      //Buscar el form
      const form = screen.getByRole('form')
      expect(form).toBeDefined()

      //Buscamos el boton
      const button = form.querySelector('button')
      expect(button).toBeDefined()

      const randomText = crypto.randomUUID()
      await user.type(input,randomText)
      await user.click(button!)

    
      //Asegurarnos que el elemento se ha creado y añadido a la lista
      screen.debug()
      const list = screen.getByRole('list')
      expect(list).toBeDefined()
      expect(list.childNodes.length).toBe(2)
    

      //Asegurarnios de que podemos borrar el elemento
      const item = screen.getByText(randomText)
      const removeButton = item.querySelector('button')
      expect(removeButton).toBeDefined()
      await user.click(removeButton!)
      
      const noResults = screen.getByText('No hay elementos en la lista')
      expect(noResults).toBeDefined()
      screen.debug()
    })
})