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

    it('renders addToCart button', () => {
        render(<App />);

        setTimeout(()=>{

            expect(screen.getByRole("addToCart").toBeInTheDocument());
// This returns true no matter what the role is defined as
// This test does not work, it passes no matter what. Tried with getByRole, getByText, doesn't matter. Is it because of setTimeout?

            // const button = screen.getByRole("addToCart");
            // expect(button.toBeInTheDocument());
            // This test passes even when the addToCart button is not displayed..... BAD test
        }, 5000)
    })


})


describe('something truthy', () => {
    it('multiplies 2 x 2 = 4', () => {
        expect(2*2).toBe(4);
    })
})