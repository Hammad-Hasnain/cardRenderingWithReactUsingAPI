import './card.css'
import Button from '../button/Button';
const Card = ({ image, id, title, category, description, price, rate, count }) => {

    console.log(id, image, category
        , description, title, price, rate, count);

    return <div key={id} className="card">
        <div className="img-div">
            <img src={image} />
        </div>
        <div className='card-body'>
            <div className='title-div'>
                <h2>{id}. {title}</h2>
            </div>
            <div className='category-div'>
                <h3><q>{category}</q> </h3>
            </div>
            <div className='description-div'>
                <h4>{description}</h4>
            </div>
            <div>
                <h5>Rating: {rate}</h5>
                <h5>Count: {count}</h5>
            </div>
            <div className="buy-btn-div">
                <Button price={price} />
            </div>
        </div>
    </div>
}

export default Card;


