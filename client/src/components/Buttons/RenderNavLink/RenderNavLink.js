import { NavLink, useNavigation } from 'react-router-dom';

export default function RenderNavLink({to, classN, id, text}) {
    const navigation = useNavigation();
    const isLoading = navigation.state === 'loading';

    const activeStyles = {
        backgroundColor: '#F79234',
        borderRadius: '5px',
        textShadow: '1px 1px 1px #132930',
    };

    return (
        <NavLink
            to={to}
            className={`nav header list links ${classN}`}
            id={`nav-head-${id}-link`}
            style={({ isActive }) => (isActive ? activeStyles : null)}
            disabled={isLoading}
        >
            {isLoading ? 'Loading..' : text}
        </NavLink>
    );
}
