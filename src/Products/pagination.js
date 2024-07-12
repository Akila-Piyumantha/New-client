import React from 'react';
import './pagination.css'; // Optional: to style the pagination

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
    const handleClick = (page) => {
        onPageChange(page);
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(
                <button
                    key={i}
                    className={`page-item ${i === currentPage ? 'active' : ''}`}
                    onClick={() => handleClick(i)}
                >
                    {i}
                </button>
            );
        }
        return pageNumbers;
    };

    return (
        <div className="pagination">
            <button
                className="page-item"
                onClick={() => handleClick(currentPage - 1)}
                disabled={currentPage === 1}
            >
                Previous
            </button>
            {renderPageNumbers()}
            <button
                className="page-item"
                onClick={() => handleClick(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;


