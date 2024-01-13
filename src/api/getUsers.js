import axios from 'axios'
/**
* @module 
* @function
* @async
* @param {number} count - Number of items in server response
* @return {Object}
* @description Function for getting users from server
*/
async function getUsers(count) {
	const response = await axios.get(`https://randomuser.me/api?results=${count}`)
	return response.data
}

export default getUsers
