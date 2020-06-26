import React from 'react';
import PropTypes from 'prop-types';

const News = (props) => {

    const { source, title, description, url, urlToImage } = props.news

    return (
        <div className={`col s12 m6 l4 `}>
            <div className={`card`}>
                <div className="card-image">
                    <img src={urlToImage} alt="cargando..." />
                    <span className="card-title">
                        {source.name}
                    </span>
                </div>
                <div className="card-content">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <div className="card-action">
                    <a
                        href={url}
                        rel=""
                        target="_black"
                        className="waves-effevt weves-ligth btn">
                        Ver Noticia
                    </a>
                </div>
            </div>
        </div>
    );
}

News.propTypes = {
    props: PropTypes.object.isRequired
}

export default News;