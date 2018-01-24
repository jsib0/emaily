import axios from 'axios';
import { FETCH_USER	} from './types';

export const fetchUser = () => {
	return function(dispatch) {
		axios.get('/api/current_user')
		.then( res => dispatch({ type: FETCH_USER, payload: res.data })); // once promise is done, dispatch action send payload to the reducers
	} 
}




