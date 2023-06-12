import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Card = (props) => {

    const IconSize = "2em";

    return (
        <div className='card rounded-5 shadow-lg border-0'>
            <div className='card-body'>
                <FontAwesomeIcon className="p-4" icon={props.icon} style={{fontSize: IconSize}} />
                <h3 className="card-title mb-3">{props.title}</h3>
                <p className="card-text p-3">{props.description}</p>
                <div className='sections pt-3'>
                    <h5 className='section_title'>{props.first_section}</h5>
                    {props.first_section_list.map((item, index) => (
                        <div>
                            <span key={index}>{item}</span>
                            <br />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Card;