import React from 'react';

const Pagination = ({orgPerPage, totalElements, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalElements / orgPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className='pagination'>
                {pageNumbers.map(number => (
                    <li key={number} className='page-item'>
                        <a onClick={(a) =>{
                            a.preventDefault();
                            paginate(number)
                        } } href='' >
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;