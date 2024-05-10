import { Button, Card, Image } from 'antd';
import img from '../../../assets/images/Frame.png';
import "./CartItems.scss"
const CartItems = () => {
  return (
    <>
      <div className="cart-container">
        <div className="count-item">3 Items In Cart</div>
        <div className="cart-content">
          <div className="cart-products">
            <Card className="cart-item">
              <div className="img">
                <Image preview={false} src={img} />
              </div>
              <div className="content">
                <div className="title">Pork Chop with Apple Chutney</div>
                <div className="price">150 EG</div>
                <div className="count-item-cart">
                  <div className="item-max">
                    <h2>4 Pieces</h2>
                    <h2>Spicy Sauce</h2>
                  </div>
                  <div className="add-item">
                    <Button type="primary">
                      +
                    </Button>
                    <span>1</span>
                    <Button type="primary" >
                      -
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          <div className="checkout">
            <div className="total-price">
              <h2>Total </h2>
              <span>240 EG</span>
            </div>
            <div className="shopping">
              <h2>Shopping</h2>
              <span>Free</span>
            </div>
            <div className="checkout-btn">
              <Button danger type="primary" block>
                Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItems;
