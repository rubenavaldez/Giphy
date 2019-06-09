var animals = ["dog", "fish", "bear", "lion", "turtle", "moose"]


function renderButtons(){
    $("#buttons-view").empty()

    for (i = 0; i < animals.length; i++)
        var button = $("<button>")

        button.addClass("animal")
        button.att("value", animals[i])
        button.text(animals[i])

        $("#display-buttons").append(button)
}

renderButtons()