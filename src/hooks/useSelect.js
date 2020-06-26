import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

const useSelect = (stateInicial, category) => {

    const [state, changeState] = useState(stateInicial);

    const Select = () => (
        <Fragment>
            <select 
                name="selectForm" 
                id="selectForm"
                className="browser-default"
                value={state}
                onChange={(e) => changeState(e.target.value)}
                >
                {category.map(resp => (
                    <option value={resp.value} key={resp.value}>{resp.label}</option>
                    
                ))}
            </select>
        </Fragment>
    );

    return [state, Select];
}

useSelect.propTypes = {
    stateInicial: PropTypes.string.isRequired,
    category: PropTypes.array.isRequired
}

export default useSelect;