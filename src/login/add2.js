import {useEffect,useState}from 'react';
import CardP from './form';

const Addpage = ()=>
    {
        const [workouts, setWorkouts] = useState(null)

        useEffect(() => {
            const fetchProducts = async () => {
                const response = await fetch('/api/workouts')
                const json = await response.json()
    
                if (response.ok) {
                    setWorkouts(json)
                }
            }
            fetchProducts()
        }, [])

        return(
           
            <div >   
                <CardP/>
            </div>
            

        );

    };

    export default Addpage