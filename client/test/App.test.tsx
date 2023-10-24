import { render, screen } from '@testing-library/react'
import React from 'react'
import { describe, expect, test } from 'vitest'
import App from '../src/App'


describe('<App />', () => {
    test('should work', () => {
    render(<App />)
      expect(
       screen.getByText('Prueba tecnica React + Typescript')
      ).toBeDefined()
    })
})