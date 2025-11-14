import axios from "axios";

const baseTeaHouseAPI = axios.create({
    baseURL: 'http://localhost:8080/api'
})

const LoginRequest = async (givenEmail, givenPassword) => {

    const credentials = {

        email: givenEmail,
        password: givenPassword

    }

    return await baseTeaHouseAPI.post('/auth/login', credentials)
    .then(response => {
        
        console.log("here is the database retrieve: " + response.data) ;

    }

    )
    .catch(error => console.error(`Error in retrieving data: ${error}`))
}

export default LoginRequest