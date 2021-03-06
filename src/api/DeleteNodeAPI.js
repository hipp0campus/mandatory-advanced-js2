import axios from 'axios';

const DeleteNodeAPI = (id, cb) => {
    axios.delete(`http://3.120.96.16:3001/movies/${id}`)
    .then(response => cb(response))
    .catch(err => {
        console.log(err)
        cb(err)
    })
}

export default DeleteNodeAPI;