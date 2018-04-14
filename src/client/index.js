// @flow

import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', () => {
    const rootEl = document.getElementById('root');

    if (!rootEl) {
        throw new Error('No root element!');
    }

    ReactDOM.render(<h1>Привет мир!</h1>, rootEl);
});
