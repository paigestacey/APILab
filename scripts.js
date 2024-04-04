
/**
 * Option 2 Enhanced: Search bar function.
 */
function searchbarEventHandler() {
  //Get the value of the input field with id="searchbar"
  let input = document.getElementById("searchbar").value;
  input = input.toLowerCase();
  //Get all the cards
  const enhancedResults = document.getElementById("option-2-enhanced-results");
  const card = enhancedResults.getElementsByClassName("card");

  for (i = 0; i < card.length; i++) {
    //If the value of the input field is not equal to the name of the pokemon, hide the card
    if (!card[i].innerHTML.toLowerCase().includes(input)) {
      card[i].style.display = "none";
      //If the value of the input field is equal to the name of the pokemon, show the card
    } else {
      card[i].style.display = "block";
    }
  }
}
const searchbar = document.getElementById("searchbar");
searchbar.addEventListener("keyup", searchbarEventHandler);

