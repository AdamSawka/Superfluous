import React from 'react';

const Organizations = ({organizations}) => {

    return (
        <ul className='help-organizations'>
            {organizations.map(element => (
                <li key={element.id} className='help-list-element'>
                    <div>
                        <h3 className="element-name">{element.name}</h3>
                        <p className="element-body">{element.description}</p>
                    </div>
                    <p className="element-description">{element.body}</p>
                </li>
            ))}
        </ul>
    );
};

export default Organizations;