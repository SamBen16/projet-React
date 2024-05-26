import React from 'react';
import { Link } from 'react-router-dom';
import { dataList } from '../data/data';
import '../index.scss';

function Gallery() {
    return (
        <div id="thumb-container">
            <div className="thumb-container">
                {dataList.map(item =>(
                    <Link to={`/apartment/${item.id}`} key={item.id}>
                        <div className="thumb">
                            <img className="thumbImg" key={item.id} src={item.cover} alt={item.cover} />
                            <p>{item.title}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Gallery;
