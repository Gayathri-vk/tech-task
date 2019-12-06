import { USER_DATA } from './type';
import axios from 'axios';


export const userData = () => dispatch =>{
    axios.get('http://demo0872604.mockable.io/userdetails')
              .then(res => res.data)
              .then(data =>{
                  dispatch({
                     type: USER_DATA,
                     payload:data
                  })
              })
}