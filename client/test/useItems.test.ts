import { describe, expect, test } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useItems } from "../src/hooks/useItems";

describe('useItems tests', () => {
    test('should add and remove items', () => {
        const {result} = renderHook(() => useItems())
        console.log('====================================');
        console.log(result);
        console.log('====================================');
        expect(result.current.items.length).toBe(0);

        act(() =>{
            result.current.addItem('Ir a correr')
            result.current.addItem('Hacer la compra')
        })

        expect(result.current.items.length).toBe(2);

        act(() => {
            result.current.removeItem(result.current.items[0].id)
          })
      
        expect(result.current.items.length).toBe(1)
    })
})
