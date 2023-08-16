// https://api.tvmaze.com/search/shows?q=big%20bang%20theory
// Fetching for an api

// app.get('/', (req, res)=>{

// })

fetch('https://api.tvmaze.com/search/shows?q=friends')
// The response is in JSON, must be parsed into an Object, or something that Javascript can read
.then((response)=> response.json())
// We can't use JSON.parse because we are parsing the RESPONSE of the fetch request
.then((data)=> console.log(data))