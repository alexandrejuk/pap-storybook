import React, { Fragment } from 'react'
import './style.css'

const Order = ({
  logged,
  orders,
}) => {
  const ordersUser = orders.filter(order => order.user.id === logged.id)

  return (
    <Fragment>
      <h3>Meus Pedidos</h3>
      {
          ordersUser.map(order => (
            <div key={order.date}>
              {order.items.map(item => (
                <div className="listOrder" key={item.id}>
                  <div className="imageCircleWrapper">
                    <img
                      className="imageItem"
                      src={item.image}
                      alt="image"
                    />
                  </div>
                  <div className="itemTitle">
                    <h3>{item.title}</h3>
                    <h3>R$ {item.price},00</h3>
                  </div>
                  <div className="itemTitle">
                    <h3>Status <br /> {order.status}</h3>
                  </div>
                  <div className="itemPrice">
                  </div>
                  <div className="itemQuantity">
                    <span className="quantityTotal">{item.quantity} un</span>
                  </div>
                  <div className="itemAmount">
                    <h5>subtotal</h5>
                    <h3>R$ {item.price * item.quantity},00</h3>
                  </div>
                </div>
              ))}
            </div>
          ))

      }
    </Fragment>
  )
}

export default Order
