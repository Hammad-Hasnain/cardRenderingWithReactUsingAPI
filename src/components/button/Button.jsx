import './button.css'

const Button = ({ price }) => <div className="buy-btn-div">
    <button >{price}$ Buy</button>
</div>

export default Button;