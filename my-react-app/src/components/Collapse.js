import React, { useState } from 'react';
import vectorRotation from '../assets/Vector (7).png';

function Collapse({ description, title }) {
    const [toggle, setToggle] = useState(false);
    const toggleCollapse = () => {
        setToggle(!toggle);
    };

    return (
        <div>
            <div className="collapse">
                <div className="barreCollapse" onClick={toggleCollapse}>
                    <div className="titreCollapse">{title}</div>
                    <img 
                        className={toggle ? "vector rotation rotate" : "vector"} 
                        src={vectorRotation} 
                        alt="dérouler ou non" 
                    />
                </div>
                <div className={toggle ? "collapseToggle animated expanded" : "collapseToggle"}>
                    <div className="container">
                        {Array.isArray(description) ? (
                            <ul>
                                {description.map((element, key) => (
                                    <li key={key}>{element}</li>
                                ))}
                            </ul>
                        ) : (
                            <p className="textCollapse">{description}</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Collapse;
