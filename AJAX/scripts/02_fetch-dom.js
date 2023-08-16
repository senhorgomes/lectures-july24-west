// fetch('https://api.tvmaze.com/search/shows?q=friends')
// // The response is in JSON, must be parsed into an Object, or something that Javascript can read
// .then((response)=> response.json())
// // We can't use JSON.parse because we are parsing the RESPONSE of the fetch request
// .then((data)=> console.log(data))

// Query the button
const searchButton = document.querySelector('button');
// Add an event listener for the button
searchButton.addEventListener('click', ()=>{
    // This is based on the scenario
    searchButton.disabled = true
    // Make the fetch request
    fetch('https://api.tvmaze.com/search/shows?q=breaking+bad')
    // Parse it
    .then((response)=> response.json())
    // Add it to our document
    .then((data)=> {
        // We need to find the ul in our document
        const list = document.querySelector('ul');
        // Loop through the results
        for(const element of data){
            // For each result, append it to the ul
            // create the li element
            const liElement = document.createElement("li");
            // create the text node
            const textNode = document.createTextNode(element.show.name);
            // join the text into the li element
            liElement.append(textNode);
            // join the li element into the ul element
            list.append(liElement);
        }
        
    })
})