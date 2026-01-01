import React from 'react';
import './formstyles.css';
import './updatestyles.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { useEffect, useState } from 'react';
import Pagination from '../Products/pagination';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';


const CardP = () => {
        const {user} =useAuthContext()
        const [title, setTitle] = useState('');
        const [description, setDescription] = useState('');
        const [imageUrl, setImageUrl] = useState('');
        const [quantity, setQuantity] = useState('');
        const [error, setError] = useState(null);
        const [workouts, setWorkouts] = useState([]);
        const [selectedWorkoutId, setSelectedWorkoutId] = useState(null);
        const [currentPage, setCurrentPage] = useState(1);
        const [totalPages, setTotalPages] = useState(1);
       
        //logout
     const {logout} = useLogout()


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
        setCurrentPage(page);};

     const handleDisplay = async (id) => {
        setSelectedWorkoutId(id); // Store the selected workout ID

        setTitle('');
        setDescription('');
        setImageUrl('');
        setQuantity('');
             
        const response = await fetch('/api/workouts/' + id);
        const json = await response.json();
        if (!response.ok) {
            setError(json.error);
        } else {
            setTitle(json.title);
            setDescription(json.description);
            setImageUrl(json.imageUrl);
            setQuantity(json.quantity);
            setError(null);
        }
     };

     const handleAdd = async (e) => {
        e.preventDefault();
        if(!user)
            {
                setError("You are not Authorized")
                return
            }
        const product = { title, description, imageUrl, quantity };
        const response = await fetch('/api/workouts', {
            method: 'POST',
            body: JSON.stringify(product),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        });
        const json = await response.json();
        if (!response.ok && !user) {
            setError(json.error);
        }  
        if (response.ok) {
            setTitle('');
            setDescription('');
            setImageUrl('');
            setQuantity('');
            setError(null);
            window.location.reload();
        }
     };

     const handleUpdate = async (e) => {
        e.preventDefault();
        if(!user)
            {
                setError("You are not Authorized")
                return
            }
        if (!selectedWorkoutId) {setError("Nothing selected")
            return
        }; // Ensure a workout is selected
        const product = { title, description, imageUrl, quantity };
        const response = await fetch('/api/workouts/' + selectedWorkoutId, {
            method: 'PATCH',
            body: JSON.stringify(product),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        });
        const json = await response.json();
        if (!response.ok && !user) {
            setError(json.error);
        } else {
            alert('Product updated successfully!');
            window.location.reload();
        }
     };


     const handleDelete = async (id) => {
        confirmAlert({
            title: 'Confirmation',
            message: 'Are you sure you want to delete this product?',
            buttons: [
                {
                    label: 'Yes',

                    onClick: async () => {


                        if(!user)
                            {
                                setError("You are not Authorized")
                                return
                            }



                        const response = await fetch('/api/workouts/' + id, {
                            method: 'DELETE',
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': `Bearer ${user.token}`
                            }
                        });
                        if (!response.ok) {
                            const json = await response.json();
                            setError(json.error);
                        } 
                        
                        else {
                            toast.success('Product deleted successfully!');
                            setWorkouts(workouts.filter(workout => workout._id !== id));
                        }
                    }
                },
                {
                    label: 'No',
                    onClick: () => {}
                }
            ]
        });
     };

      const handleLogout = () =>
        {
            logout()

        };

    
     return (
        <div>
            <div className="form-container">
                <form className="styled-form">
                    <h3>HELLO ADMIN</h3>
                    <div className="form-group">
                        <label>Product:</label>
                        <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} className="form-box2" />
                    </div>
                    <div className="form-group">
                        <label>Description:</label>
                        <input type="text" onChange={(e) => setDescription(e.target.value)} value={description} className="form-box2d" />
                    </div>
                    <div className="form-group">
                        <label>Image URL:</label>
                        <input type="text" onChange={(e) => setImageUrl(e.target.value)} value={imageUrl} className="form-box2" />
                    </div>
                    <div className="form-group">
                        <label>Quantity:</label>
                        <input type="text" onChange={(e) => setQuantity(e.target.value)} value={quantity} className="form-box2" />
                    </div>
                    <button type="submit" onClick={handleAdd} className="btnadd">Add</button>
                    {error && <div className="error-box">{error}</div>}
                    <button onClick={handleUpdate} className="btnupdate">Update</button>
                    <button  onClick={handleLogout} className="btnlogout">Logout</button>
                </form>
            </div>

            <div className='datac'>
            {workouts.map(workout => (
                    <div className="custom-blog-slider" key={workout._id}>
                        <div className="custom-blog-slider__wrapper">
                            <div className="custom-blog-slider__item">
                                <div className="custom-blog-slider__image">
                                    <img src={workout.imageUrl} alt="Blog Image " />
                                </div>
                                <div className="custom-blog-slider__content">
                                    <span className="custom-blog-slider__date">Quantity: {workout.quantity}</span>
                                    <div className="custom-blog-slider__title">{workout.title}</div>
                                    <div className="custom-blog-slider__text">
                                        {workout.description}
                                    </div>
                                    <button onClick={() => handleDisplay(workout._id)} className="custom-blog-slider__button" style={{ color: 'lightgreen' }}>Edit</button>
                                    <button onClick={() => handleDelete(workout._id)} className="custom-blog-slider__button" style={{ color: 'red' }}>Delete</button>
                                </div>
                            </div>
                        </div>
                        <div className="custom-blog-slider__pagination"></div>
                    </div>
                ))}
                <Pagination 
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
            </div>
            
        </div>
    );
};

export default CardP;




