import React from 'react'
import News from './News'
import PropTypes from 'prop-types';

const ListNews = (props) => {

    //const loading = props.length < 1 ? {return null};

    return (
        <div className="row" >
            {props.news.map(resp => (
                <News
                    key={resp.url}
                    news={resp} />
            ))}
        </div>
    );
}

ListNews.propTypes = {
    props: PropTypes.object
}

export default ListNews;