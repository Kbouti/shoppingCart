import { describe, it, expect } from 'vitest';
import {render, screen} from '@testing-library/react';
import App from '../App';

describe('App', () => {
    it('At first renders loading message', () => {

        render(<App />);
        expect(screen.getByText("Loading...").textContent).toMatch(/Loading.../i);
    })
})

// We've successfully tested that our loading screen displays.