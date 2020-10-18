import React from 'react'
import PropTypes from 'prop-types'
import { useUserContext } from '../context/UserContext';
import Auth from './Auth';
import Game from './Game'

const App = () => {
    const { user } = useUserContext();

    const payload = {
        size: 10,
        QTY: 5
    };

    const content = user.login ? <Game payload={payload} /> : <Auth />;
    return (
        <div>
            {content}
        </div>
    )
};

App.propTypes = {
    user: PropTypes.object
};

export default App;