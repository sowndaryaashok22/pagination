import React from 'react'

export const Pages = ({postsPerPage, totalPosts, paginate}) => {

    const pageNumber = [];
    for(let i = 1; i <= Math.ceil(totalPosts/postsPerPage);i++){
        pageNumber.push(i);
    }
    return (
        <div>
            <ul className="pagination">
                {
                    pageNumber.map(number => (
                    <li key ={number} className='page-item'>
                    <a onClick={()=>paginate(number)}  href ='!#'  className='page-link'>{number}</a>
                    </li>
                     ))
                }
            </ul>
            
        </div>
    )
}
