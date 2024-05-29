import { describe, it, expect } from 'vitest';
import {render, screen} from '@testing-library/react';
import App from '../App';

describe('App', () => {
    it('At first renders loading message', () => {

        render(<App />);
        expect(screen.getByText("Loading...").textContent).toMatch(/Loading.../i);
    })

    it('Renders title in less than 5 seconds', () =>{
        render(<App />);
        setTimeout(()=>{
            expect(screen.getByText("Kevin's webShop").textContent).toMatch(/Kevin's webShop/i);
        }, 5000)
    })
})
