import axios from 'axios'

const url = 'http://localhost:8080'
class ServicesRequest {

  parseResp(res) {
    return res.data
  }

  async getProducts() {
    const response = await axios.get(`${url}/products`)
    return parseResp(response)
  }

  async getOrdersById(id) {
    const response = await axios.get(`${url}/ordersSell/${id}`)
    return parseResp(response)
  }

  async addOrder(order) {
    const response = await axios.post(`${url}/ordersSell`, order)
    return parseResp(response)
  }

  async addCustomer(user) {
    const response = await axios.post(`${url}/customers`, user)
    return parseResp(response)
  }

  async login(user) {
    const response = await axios.post(`${url}/login`, user)
    return parseResp(response)
  }
}

export default ServicesRequest