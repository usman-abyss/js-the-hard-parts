import {fetchUser} from '../utils/fetch.js'

const fetch = fetchUser()

fetch.then((data)=>console.log(data));

console.log('First');