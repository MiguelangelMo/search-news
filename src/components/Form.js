import React from 'react';
import useSelect from '../hooks/useSelect';
import styled from '../css/Formulario.module.css';
import PropTypes from 'prop-types';

const Form = (props) => {


    // Operacion Submit
    const handleChange = (e) => {
        e.preventDefault();

        props.setstate(state);
    }

    // Array de Caregoria
    const categoria = [
        { value: 'general', label: 'General' },
        { value: 'business', label: 'Negocio' },
        { value: 'entertainment', label: 'Entretenimiento' },
        { value: 'health', label: 'Salud' },
        { value: 'science', label: 'Ciencia' },
        { value: 'sports', label: 'Deportes' },
        { value: 'technology', label: 'Tecnologia' },
    ];

    //Manejo de hooks
    const [state, Select] = useSelect('general', categoria);

    return (
        <div className={`${styled.buscador} row`}>
            <div className="col s12 m8 offset-m2">
                <form onSubmit={handleChange}>
                    <h2 className={styled.heading}>{props.title}</h2>

                    <Select />

                    <div className="input-field col s12">
                        <input
                            value="Buscar..."
                            type="submit"
                            className={`btn-large amber darken-2 ${styled.btn_block}`} />
                    </div>
                </form>
            </div>
        </div>
    );
}

Form.propTypes = {
    props: PropTypes.object
}

export default Form;