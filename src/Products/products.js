import './pstyles.css';

const Procard = ({ workout }) => {
    return(
        <div className="card-grid " style={{ paddingTop: '90px' }}>
            <a className="card" href="/add">
                <div className="card__background" style={{backgroundImage: `url(${workout.imageUrl})`}}></div>
                <div className="card__content">
                    <p className="card__category" key={workout._id}>{workout.title}</p>
                    <h3 className="card__heading" key={workout._id}>{workout.category}</h3>
                </div>
            </a>
        </div>
    )
}

export default Procard;