var animals = ["dog", "fish", "bear", "lion", "turtle", "moose", "hedgehog", "mouse", "penguin", "hippo", "elephant", "chipmunk", "piglet", "kitten", "tiger"]


function renderButtons(){
    
    $("#display-buttons").empty()

    for (i = 0; i < animals.length; i++){
        var button = $("<button>")

        button.addClass("animal-button")
        button.addClass("btn")
        button.addClass("btn-success")
        button.attr("gif-value", animals[i])
        button.text(animals[i])

        $("#display-buttons").append(button)
        console.log(button.attr("gif-value"))
}
}

renderButtons()



$("#add-animal").on("click", function (){
    event.preventDefault();

    var addedAnimal = $("#form-input").val().trim();

    animals.push(addedAnimal)
    console.log(animals)

    renderButtons();
    $("#form-input").val("")

})

$("body").on("click",".animal-button", function(){
       
    var getAnimal = $(this).attr("gif-value")

    console.log(getAnimal)
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=5YZ894rMrCbWmgCjCwfzFzLcae8nlSyO&q=" +
    getAnimal + "&limit=10&offset=0&rating=G&lang=en";

    $.ajax({
        url: queryURL,
        method: "GET"
      })

      .then(function(response) {

        console.log(response)

        var results = response.data;

            console.log(response.data)
            
            for ( i = 0; i < results.length; i++) {
                var gifDiv = $("<div>");
                var p = $("<p>").text("rating: " + results[i].rating)

                var animalImage = $("<img>")

                animalImage.addClass("gif")
                animalImage.attr("src", results[i].images.fixed_height_still.url)
                animalImage.attr("data-animate", results[i].images.fixed_height.url )
                animalImage.attr("data-still", results[i].images.fixed_height_still.url  )
                animalImage.attr("state", "animated")

                gifDiv.append(p);
                gifDiv.append(animalImage)

                $("#gifs-appear-here").prepend(gifDiv)

            }

      })

})

$(document).on('click','img',function(){
        var animateState = $(this).attr("state");

        if(animateState == "still"){
            console.log("still")
            $(this).attr("src", $(this).attr("data-animate"))
            $(this).attr("state", "animated")

        } else {
            console.log("animated")
            $(this).attr("src", $(this).attr("data-still"))
            $(this).attr("state", "still")
        }




    });

    

    


