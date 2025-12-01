'use strict';

function addRecommendation() {
  // Get the message of the new recommendation
  const recommendation = document.getElementById("new_recommendation");
  // If the user has left a recommendation, display a pop-up
  if (recommendation.value != null && recommendation.value.trim() !== "") {
    console.log("New recommendation added");
    // Call showPopup here
    showPopup(true);

    // Create a new 'recommendation' element and set its value to the user's message
    const element = document.createElement("div");
    element.setAttribute("class", "recommendation");

    // Use textContent to prevent XSS attacks, then wrap with quote spans
    const openQuote = document.createElement("span");
    openQuote.innerHTML = "&#8220;";

    const messageText = document.createTextNode(recommendation.value);

    const closeQuote = document.createElement("span");
    closeQuote.innerHTML = "&#8221;";

    element.appendChild(openQuote);
    element.appendChild(messageText);
    element.appendChild(closeQuote);

    // Add this element to the end of the list of recommendations
    document.getElementById("all_recommendations").appendChild(element);

    // Reset the value of the textarea
    recommendation.value = "";
  }
}

function showPopup(bool) {
  const popup = document.getElementById('popup');
  popup.style.visibility = bool ? 'visible' : 'hidden';
}
