import { describe, it, expect } from 'vitest';
import {render, screen} from '@testing-library/react';
import App from '../App';

describe('App', () => {
    it('renders correct heading', () => {

        render(<App />);
        expect(screen.getByRole("heading").textContent).toMatch(/Loading.../i);
    })
})

// I'll have to go back and revisist testing, this doesn't pass. 