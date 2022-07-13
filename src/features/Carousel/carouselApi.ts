import axios from "axios"

const dev_url = 'http://localhost:8000/v1/data/'
const prod_url = "https://token-migration-backend.herokuapp.com/v1/data/"
const data = axios.get(prod_url)

export {data}