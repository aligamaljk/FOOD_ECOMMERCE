import "./Cart.scss"
import SectionHeader from "../../Components/common/SectionHeader/SectionHeader"
import CartItems from "../../Components/foots/CartItems/CartItems";
import EmptyItems from "../../Components/common/EmptyItems/EmptyItems";

const Cart = () => {

  const data = true
  return (
    <>
      <div className="cart">
        <SectionHeader title="cart" />
        {data ? (
          <CartItems />
        ) : (
          <>
            <EmptyItems
              titleEmpty="Your cart is currently empty."
              navigation="/shop"
            />
          </>
        )}
      </div>
    </>
  );
}

export default Cart