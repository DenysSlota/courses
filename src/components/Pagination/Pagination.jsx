import React from 'react'

const Pagination = ({ currentPage, totalPages, onChangePage }) => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
  
    return (
        <div className='mb-4'>
            <nav>
                <ul className='flex justify-center gap-2'>
                    {pages.map((page) => (
                        <li key={page} className={`color:${page === currentPage ? 'bg-violet-700' : 'bg-black'}`}>
                        <button className='border-2 border-black rounded-md px-2 py-1 hover:text-[#61dafb]' onClick={() => onChangePage(page)}>{page}</button>
                        </li>
                    ))}
                </ul>
            </nav>
      </div>
    );
  }

export default Pagination;