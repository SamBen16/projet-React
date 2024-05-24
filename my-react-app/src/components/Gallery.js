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
                        {/* <div className="thumb" style={{ 
                            backgroundImage: `linear-gradient(to top, #000, #0004 40%, #0000 65%, #0000 75%), url(${item.cover})`, 
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            }}> */}

                            <p>{item.title}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Gallery;