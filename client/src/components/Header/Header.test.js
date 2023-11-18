import { render, screen } from '@testing-library/react';
import Header from './Header';

import React, { isValidElement } from 'react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { CurrentUserProvider } from '../../context/CurrentUserContext';
import { LoggedProvider } from '../../context/LoggedContext';

export function renderWithRouter(children, routes = []) {
    const options = isValidElement(children)
        ? { element: children, path: '/' }
        : children;

    const router = createMemoryRouter([{ ...options }, ...routes], {
        initialEntries: [options.path],
        initialIndex: 1,
    });

    return render(
        <CurrentUserProvider>
            <LoggedProvider>
                <RouterProvider router={router} />
            </LoggedProvider>
        </CurrentUserProvider>
    );
}

describe('Header', () => {
    it('renders Header', async () => {
        renderWithRouter(<Header />);
        expect(screen.getByText('Catalog')).toBeInTheDocument();        
    });
    it('shows links', async () => {
        renderWithRouter(<Header />);
        expect(screen.getAllByRole('link')).toHaveLength(6);        
    });
    // it('does not show links', async () => {
    //     renderWithRouter(<Header />);
    //     expect(screen.getAllByRole('link')).toHaveLength(0);        
    // });
});
