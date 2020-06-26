import React from 'react'
import PropTypes from 'prop-types';

const Header = (props) => {
    return (
        <nav className="nav-wrapper light-blue darken-3">
            <a href="#!" className="brand-logo center">{props.title}</a>
        </nav>
    );
}

Header.propTypes = {
    props: PropTypes.object
}

export default Header;