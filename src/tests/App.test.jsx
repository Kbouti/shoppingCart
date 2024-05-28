import {render, screen} from '@testing-library/react';
import App from '../App';

describe('App', () => {
    it('renders heading', () => {
        render(<App />);
        expect(screen.getByRole("heading").textContent).toContain("Kevdawg's webShop");
    })
})

// I'll have to go back and revisist testing, this doesn't pass. 