import React, {useContext} from 'react';
import {DarkModeContext} from './DarkModeContext';

function ChangeMode() {
    const {darkMode, toggleDarkMode} = useContext(DarkModeContext);
    const changeMode = () => {
        toggleDarkMode();
    }
    return (
        <div>
            <button onClick={changeMode}>Change Mode</button>    
        </div>
    )
}

export default ChangeMode