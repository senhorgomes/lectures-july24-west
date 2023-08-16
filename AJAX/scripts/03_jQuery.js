$(document).ready(() => {
    // // Query the button
    // const searchButton = document.querySelector('button');
    const searchButton = $('button');
    // // Add an event listener for the button
    // searchButton.addEventListener('click', ()=>{
    searchButton.on("click", () => {

        //     // This is based on the scenario
        //     searchButton.disabled = true
        searchButton.attr("disabled", true)
        //     // Make the fetch request
        //     fetch('https://api.tvmaze.com/search/shows?q=breaking+bad')
        $.get('https://api.tvmaze.com/search/shows?q=blacklist')
            .then((data) => {
                for (const element of data) {
                    const liElementWithTextNode = $(`<li>${element.show.name}</li>`)
                    $("ul").append(liElementWithTextNode)
                    // $("ul").append(`<li>${element.show.name}</li>`)
                }
            })
        // $.ajax({
        //     url: 'https://api.tvmaze.com/search/shows?q=suits',
        //     // method: 'POST', //This is established as DEFAULT
        //     success: (data) =>{
        //         for(const element of data){
        //             const liElementWithTextNode = $(`<li>${element.show.name}</li>`)
        //             $("ul").append(liElementWithTextNode)
        //             // $("ul").append(`<li>${element.show.name}</li>`)
        //         }
        //     },
        //     error: (error) => {
        //         console.log("SOMETHING BROKE!!!", error)
        //     }
        //     // data: {} //=> would be your tweet
        // })
        // .done((data)=>console.log(data))
        //     // Parse it
        //     .then((response)=> response.json())
        //     // Add it to our document
        //     .then((data)=> {
        //         // We need to find the ul in our document
        //         const list = document.querySelector('ul');
        //         // Loop through the results
        //         for(const element of data){
        //             // For each result, append it to the ul
        //             // create the li element
        //             const liElement = document.createElement("li");
        //             // create the text node
        //             const textNode = document.createTextNode(element.show.name);
        //             // join the text into the li element
        //             liElement.append(textNode);
        //             // join the li element into the ul element
        //             list.append(liElement);
        //         }

        //     })
        // })
    })

})