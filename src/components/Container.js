import React, {useContext} from 'react';
import Content from './Content';
import ModeChangeButton from './ModeChangeButton';
import {DarkModeContext} from './DarkModeContext';

function Container() {
    const {darkMode} = useContext(DarkModeContext);
    return (
        <div className={darkMode ? `Container Container-dark` : `Container Container-light`}>
            <Content/>
            <ModeChangeButton />
        </div>
    )
}

export default Container