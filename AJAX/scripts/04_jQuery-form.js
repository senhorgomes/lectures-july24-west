$(document).ready(() => {
    // // Query the form
    const form = $('form');
    // // Add an event listener for the form
    form.on("submit", (event) => {
        //     // This is based on the scenario
        // Prevent that from happening
        event.preventDefault()
        console.log("form")
        // It helps us retrieve the information
        const searchTerm = $("#searchTerm").val();
        //     // Make the fetch request
        //     fetch('https://api.tvmaze.com/search/shows?q=breaking+bad')
        $.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)
        .then((data) => {
            // Add a title
            $("h1").text(`Search results for: ${searchTerm}`)
            // Before adding the new results, clear the existing ul
            $("ul").empty();
            // $("ul").remove()
            // $("body").append("<ul></ul>")
            for (const element of data) {
                const liElementWithTextNode = $(`<li>${element.show.name}</li>`)
                $("ul").append(liElementWithTextNode)
                // $("ul").append(`<li>${element.show.name}</li>`)
            }
            // We can set something to the value of the input element
            $("#searchTerm").val("");
        })
    })
})