import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { resetCart } from '../../components/actions/cart'
import PaymentContainer from '../../containers/Payment'
import { isEmpty } from 'ramda'
import ServicesRequest from '../../services/request'

const Service = new ServicesRequest()
const Payment = ({
  addedItems,
  resetCartItem,
  login,
  history,
}) => {

  useEffect(() => {
    if (!login) {
      return history.push('login')
    }
  }, [history])

  const handleChange = (name, value) => {
    setFormData({...formData, [name]: value })
  }

  const handleSubmit = () => {
    if(!isEmpty(formData)) {
      return Service.addOrder(formData)
    }
  }

  return (
    <PaymentContainer
      addedItems={addedItems}
      history={history}
      address={login.address}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  )
}


const mapStateToProps = (state) => {
  const { login, products: { addedItems } } = state
  return {
    addedItems,
    login,
  }
}

const mapDispatchToProps= (dispatch)=>{
  return {
    resetCartItem: () => dispatch(resetCart()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Payment))