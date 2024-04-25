import { useState } from "react";

function Cart({ isOpen, setIsOpen, cartProducts, setCartProducts }) {
  function closeModal() {
    setIsOpen(false);
  }

  // function handleDecreaseItems(id) {
  //   setCartProducts((prevCartProducts) => {
  //     return prevCartProducts.map((prod) => {
  //       if (id === prod.id) {
  //         return { ...prod, quantity: prod.quantity - 1 };
  //       }
  //       return prod;
  //     });
  //   });
  // }

  function handleDecreaseItems(id) {
    setCartProducts((prevCartProducts) => {
      return prevCartProducts
        .map((prod) => {
          if (id === prod.id) {
            // Decrease quantity by 1
            const updatedQuantity = prod.quantity - 1;

            if (updatedQuantity <= 0) {
              // If quantity becomes zero or less, remove the product from the cart
              return null; // Filter it out
            } else {
              // Otherwise, update the quantity
              return { ...prod, quantity: updatedQuantity };
            }
          }
          return prod;
        })
        .filter(Boolean); // Remove null entries (products with zero quantity)
    });
  }

  function handleIncreaseItems(id) {
    setCartProducts((prevCartProducts) => {
      return prevCartProducts.map((prod) => {
        if (id === prod.id) {
          return { ...prod, quantity: prod.quantity + 1 };
        }
        return prod;
      });
    });
  }

  let totalPrice = 0;
  function getTotalPrice() {
    if (cartProducts.length > 0) {
      cartProducts.map(
        (product) => (totalPrice += product.price * product.quantity)
      );
      return totalPrice.toFixed(2);
    }
  }

  getTotalPrice();

  return (
    <>
      <div id="modal" className={isOpen ? "modal opened" : "modal closed"}>
        <div className="modal-content">
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <div className="cart">
            <div>
              {cartProducts.length > 0 ? (
                cartProducts.map((product) => (
                  <div key={product.id}>
                    <div>{product.title}</div>
                    <div>{product.price * product.quantity}</div>
                    <div className="quantity">
                      <button onClick={() => handleDecreaseItems(product.id)}>
                        -
                      </button>
                      <div>{product.quantity}</div>
                      <button onClick={() => handleIncreaseItems(product.id)}>
                        +
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div>Cart is empty!</div>
              )}
            </div>
            {cartProducts.length > 0 ? (
              <div className="checkOut">
                <div className="totalPrice">
                  <div>Total:</div>
                  <div>{totalPrice}</div>
                </div>
                <button className="checkOutBtn">Check Out</button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
