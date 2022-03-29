import React from 'react';

const Organizations = ({ organizations }) => {
    
    return (
        <ul className=' '>
            {organizations.map(element => (
                <li key={element.id} className=''>
                    {element.name}
                    {element.type}
                    {element.description}
                    {element.body}
                </li>
            ))}
        </ul>
    );
};

export default Organizations;