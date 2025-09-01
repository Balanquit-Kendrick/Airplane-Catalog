import { planeData as data } from "./plane-data.js";

async function fetchAllPlaneData() {
  try {
    
    // Check if the data is valid
    // If the data is not available or in the wrong format, throw an error
    if (
      !data ||
      !Array.isArray(data) ||
      data.length === 0
    ) {
      throw new Error("Planes data is not available");
    }

    // This will look for the tag with an element Id of "page-content" and store it to a variable
    const container = document.getElementById("page-content");

    // This will clean the innerHTML of the variable named "container"
    container.innerHTML = "";
    // Iterate through the plane data
    // This will create a card for each plane
    data.forEach((plane) => {
      const planeCard = `
        <div class="container plane-container">
          <div class="card" >
            <div class="imgBx">
              <img src="./images/airplane-png/${plane.Image}">
            </div>
            <div class="contentBx">
              <h2>${plane.Model}</h2>
              <div class="size">
                <h3>Max Capacity :</h3>
                <span>${plane.PaxMaxSeating}</span>
              </div>
              <div class="size">
                <h3>Product Number :</h3>
                <span>${plane.ProductNumber}</span>
              </div>
              <div class="size">
                <h3>Name :</h3>
                <span>${plane.Name}</span>
              </div>

              <a href="./plane-pages/${plane.Model}.html" class="more_details">More Details</a>
            </div>
          </div>
        </div>
        `;
      // Append the motorcycle card to the container
      // This will display the motorcycle cards on the page
      container.innerHTML += planeCard;
    });
  } catch (error) {
    // Show error message in case of failure
    console.error("Error loading plane data:", error);
  }
}

// Load the data when the page loads
document.addEventListener("DOMContentLoaded", fetchAllPlaneData);

export { fetchAllPlaneData };