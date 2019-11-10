import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import OrderContainer from '../../containers/Order'
import ServicesRequest from '../../services/request'
import { connect } from 'react-redux'

const Services = new ServicesRequest()
const Order = ({
  login,
  history,
}) => {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    if (!login) {
      return history.push('login')
    }
    const response = Services.getOrdersById(login.id)
    setOrders(response)
  }, [])
  return (
    <OrderContainer
      logged={login}
      orders={orders}
    />
  )
}

const mapStateToProps = (state)=>{
  const { login } = state
  return {
    login,
  }
}

export default connect(mapStateToProps)(withRouter(Order))
