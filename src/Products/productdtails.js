import React, { useEffect, useState } from 'react';
import './pstyles.css';
import Procard from './products';
import Pagination from './pagination';

const Pro = () => {
    const [workouts, setWorkouts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const fetchProducts = async (page) => {
            const response = await fetch(`/api/workouts?page=${page}&limit=12`);
            const data = await response.json();

            if (response.ok) {
                setWorkouts(data.workouts);
                setCurrentPage(data.page);
                setTotalPages(data.totalPages);
            }
        };
        fetchProducts(currentPage);
    }, [currentPage]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className='bodyback'>
            <section className="hero-section bodym bodyback">
                {workouts.map(workout => (
                    <Procard key={workout._id} workout={workout} />
                ))}
            </section>
            <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </div>
    );
};

export default Pro;
