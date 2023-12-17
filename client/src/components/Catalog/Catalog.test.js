import {  render, screen } from '@testing-library/react';
import React, { isValidElement } from 'react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { CurrentUserProvider } from '../../context/CurrentUserContext';
import { LoggedProvider } from '../../context/LoggedContext';
import Catalog from '../Catalog/Catalog';

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

describe('Catalog', () => {
    it('renders Catalog', async () => {
        renderWithRouter(<Catalog />);
        expect(screen.getByText('Catalog')).toBeInTheDocument();
    });

});