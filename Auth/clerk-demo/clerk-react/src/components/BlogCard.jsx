const Card = ({title, author, description}) => {
    return (
        <>
            
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <div className="d-flex justify-content-end">
                        <p className="card-text">
                            <small className="text-muted">By {author}</small>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;