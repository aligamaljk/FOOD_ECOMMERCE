import { Button, Card, Image } from "antd"
import "./ProductCart.scss"
import img from "../../../assets/images/Frame.png"
import img2 from '../../../assets/images/rating.png';
import img3 from '../../../assets/images/succ.png';
import { useState } from "react";
const ProductCart = () => {
  const [newProduct, setNewProduct] = useState(false)

  return (
    <>
      <div className="product-carts">
        <Card
          hoverable
          cover={<Image preview={false} alt="example" src={img} />}
          className="product-card"
          onClick={() => setNewProduct(!newProduct)}
        >
          <div
            className="new"
            style={{ display: newProduct ? 'flex' : 'none' }}
          >
            New
          </div>
          <div className="product-card-body">
            <div className="card-title">
              <h3 className="card-price">150 EG</h3>
              <div className="card-rating">
                <Image src={img2} preview={false} />
                <span>4.5</span>
              </div>
            </div>
            <div className="info-card">
              <h3 className="info-title">Pork Chop with Apple Chutney</h3>
              <div className="info-details">
                <div className="info-detail">
                  <Image src={img3} preview={false} />
                  <span>4 pieces</span>
                </div>

                <div className="info-detail">
                  <Image src={img3} preview={false} />
                  <span>4 pieces</span>
                </div>
              </div>
              <Button type="default" shape="round" className="add-to-cart-btn">
                Add to cart
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}

export default ProductCart