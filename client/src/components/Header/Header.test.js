import { 
    // fireEvent,
     render, screen } from '@testing-library/react';
import Header from './Header';

import React, { isValidElement } from 'react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { CurrentUserProvider } from '../../context/CurrentUserContext';
import { LoggedProvider } from '../../context/LoggedContext';
// import Catalog from '../Catalog/Catalog';

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
        const links=screen.getAllByRole('link');
        expect(links).toHaveLength(6);

        links.forEach(l=>{
            expect(l).toHaveAttribute('href');
        });
    });
    it('shows current user', async () => {
        renderWithRouter(<Header />);
        expect(screen.getByTestId('user')).toBeTruthy();
    });

    // it('navigates to Catalog when user clicks link', async () => {
    // //     // const user = userEvent.setup();

    //     renderWithRouter(<Header />, [
    //        { path: 'catalog',
    //         element: <Catalog/>}
    //     ]);
    //     fireEvent.click(screen.getByText('Catalog'));
    //     expect(screen.getByRole('heading', { level: 2 })).toEqual('Catalog');
    // });
});

