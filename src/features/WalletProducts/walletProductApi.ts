import axios from "axios"
import { useEffect, useState } from "react"

const URL = "https://token-migration-backend.herokuapp.com/v1/wallet/"

export const useWalletProductApi = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const  response = await axios.get(URL)
                setData(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])
    
    return data
}