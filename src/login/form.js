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
import { Card, Button, Form, Row, Col, Container } from 'react-bootstrap';

const CardP = () => {
    const { user } = useAuthContext();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [quantity, setQuantity] = useState('');
    const [error, setError] = useState(null);
    const [workouts, setWorkouts] = useState([]);
    const [selectedWorkoutId, setSelectedWorkoutId] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const { logout } = useLogout();

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

    const handleDisplay = async (id) => {
        setSelectedWorkoutId(id);
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
        if (!user) {
            setError('You are not Authorized');
            return;
        }
        const product = { title, description, imageUrl, quantity };
        const response = await fetch('/api/workouts', {
            method: 'POST',
            body: JSON.stringify(product),
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${user.token}`,
            },
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
        if (!user) {
            setError('You are not Authorized');
            return;
        }
        if (!selectedWorkoutId) {
            setError('Nothing selected');
            return;
        }
        const product = { title, description, imageUrl, quantity };
        const response = await fetch('/api/workouts/' + selectedWorkoutId, {
            method: 'PATCH',
            body: JSON.stringify(product),
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${user.token}`,
            },
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
                        if (!user) {
                            setError('You are not Authorized');
                            return;
                        }
                        const response = await fetch('/api/workouts/' + id, {
                            method: 'DELETE',
                            headers: {
                                'Content-Type': 'application/json',
                                Authorization: `Bearer ${user.token}`,
                            },
                        });
                        if (!response.ok) {
                            const json = await response.json();
                            setError(json.error);
                        } else {
                            toast.success('Product deleted successfully!');
                            setWorkouts(workouts.filter((workout) => workout._id !== id));
                        }
                    },
                },
                {
                    label: 'No',
                    onClick: () => {},
                },
            ],
        });
    };

    const handleLogout = () => {
        logout();
    };

    return (
        <Container className="my-4">
            <Card>
                <Card.Header className="d-flex justify-content-between align-items-center">
                    <h3 className="mb-0">Hello Admin</h3>
                    <Button variant="outline-danger" onClick={handleLogout}>
                        Logout
                    </Button>
                </Card.Header>
                <Card.Body>
                    <Form onSubmit={handleAdd}>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formTitle">
                                <Form.Label>Product</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter product title"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    required
                                />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formQuantity">
                                <Form.Label>Quantity</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Enter quantity"
                                    value={quantity}
                                    onChange={(e) => setQuantity(e.target.value)}
                                    required
                                />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="formDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder="Enter product description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formImageUrl">
                            <Form.Label>Image URL</Form.Label>
                            <Form.Control
                                type="url"
                                placeholder="Enter image URL"
                                value={imageUrl}
                                onChange={(e) => setImageUrl(e.target.value)}
                                required
                            />
                        </Form.Group>

                        {error && <div className="alert alert-danger">{error}</div>}

                        <div className="d-flex gap-2">
                            <Button variant="primary" type="submit">
                                Add
                            </Button>
                            <Button variant="warning" onClick={handleUpdate} disabled={!selectedWorkoutId}>
                                Update
                            </Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>

            <Row className="mt-4 g-4" xs={1} sm={2} md={3} lg={4} xl={4}>
                {workouts.map((workout) => (
                    <Col key={workout._id}>
                        <Card>
                            <Card.Img variant="top" src={workout.imageUrl} alt={workout.title} style={{ height: '180px', objectFit: 'cover' }} />
                            <Card.Body>
                                <Card.Title>{workout.title}</Card.Title>
                                <Card.Text>{workout.description}</Card.Text>
                                <Card.Text>
                                    <small className="text-muted">Quantity: {workout.quantity}</small>
                                </Card.Text>
                                <div className="d-flex justify-content-between">
                                    <Button variant="success" onClick={() => handleDisplay(workout._id)}>
                                        Edit
                                    </Button>
                                    <Button variant="danger" onClick={() => handleDelete(workout._id)}>
                                        Delete
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
            <ToastContainer />
        </Container>
    );
};

export default CardP;
