
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart.items);

  // Calculate the total quantity of all plants.
  const calculateTotalQuantity = () => {
    return cart.reduce(
      (total, item) => total + item.quantity,
      0
    );
  };

  // Calculate the total cost of all plants in the cart.
  const calculateTotalAmount = () => {
    return cart.reduce(
      (total, item) =>
        total + Number(item.cost) * item.quantity,
      0
    );
  };

  // Increase the quantity of a particular plant.
  const handleIncrement = (item) => {
    dispatch(
      updateQuantity({
        name: item.name,
        quantity: item.quantity + 1,
      })
    );
  };

  // Decrease the quantity of a particular plant.
  const handleDecrement = (item) => {
    if (item.quantity <= 1) {
      dispatch(removeItem(item.name));
      return;
    }

    dispatch(
      updateQuantity({
        name: item.name,
        quantity: item.quantity - 1,
      })
    );
  };

  // Remove a plant completely from the cart.
  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  // Calculate the subtotal for one plant type.
  const calculateTotalCost = (item) => {
    return (Number(item.cost) * item.quantity).toFixed(2);
  };

  const handleContinueShopping = () => {
    if (onContinueShopping) {
      onContinueShopping();
    }
  };

  const handleCheckout = () => {
    window.alert('Checkout Coming Soon!');
  };

  return (
    <main className="cart-container">
      <h1 className="cart-page-title">Shopping Cart</h1>

      <div className="cart-summary">
        <h2>
          Total Plants: {calculateTotalQuantity()}
        </h2>

        <h2>
          Total Cart Amount: $
          {calculateTotalAmount().toFixed(2)}
        </h2>
      </div>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <h2>Your shopping cart is empty.</h2>
          <p>Add some beautiful plants to get started!</p>

          <button
            type="button"
            className="get-started-button"
            onClick={handleContinueShopping}
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          <div className="cart-items-list">
            {cart.map((item) => (
              <div className="cart-item" key={item.name}>
                <img
                  className="cart-item-image"
                  src={item.image}
                  alt={item.name}
                />

                <div className="cart-item-details">
                  <h3 className="cart-item-name">
                    {item.name}
                  </h3>

                  <p className="cart-item-cost">
                    Unit Price: $
                    {Number(item.cost).toFixed(2)}
                  </p>

                  <div className="cart-item-quantity">
                    <span>Quantity:</span>

                    <button
                      type="button"
                      className="cart-item-button cart-item-button-dec"
                      onClick={() => handleDecrement(item)}
                      aria-label={`Decrease ${item.name} quantity`}
                    >
                      −
                    </button>

                    <span
                      className="cart-item-quantity-value"
                      aria-live="polite"
                    >
                      {item.quantity}
                    </span>

                    <button
                      type="button"
                      className="cart-item-button cart-item-button-inc"
                      onClick={() => handleIncrement(item)}
                      aria-label={`Increase ${item.name} quantity`}
                    >
                      +
                    </button>
                  </div>

                  <p className="cart-item-total">
                    Item Total: $
                    {calculateTotalCost(item)}
                  </p>

                  <button
                    type="button"
                    className="cart-item-delete"
                    onClick={() => handleRemove(item)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="total_cart_amount">
            <h2>
              Grand Total: $
              {calculateTotalAmount().toFixed(2)}
            </h2>
          </div>

          <div className="continue_shopping_btn">
            <button
              type="button"
              className="get-started-button"
              onClick={handleContinueShopping}
            >
              Continue Shopping
            </button>

            <button
              type="button"
              className="get-started-button1"
              onClick={handleCheckout}
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </main>
  );
};

export default CartItem;
