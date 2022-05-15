import axios from 'axios';
const instance=axios.create({
    baseURL:'https://books-58490-default-rtdb.firebaseio.com/'
})
export default instance;