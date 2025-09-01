// This is a function to get a single data from array of plane Data
async function fetchPlaneData(data){
  try {

    //This is to get the DOM of with ID of plane-content
    const container = document.getElementById("plane-content");

    //Clear the value of innerHTML
    container.innerHTML = "";

    //This will be the content of the div which have the ID of plane-content
    const planeContent = `
      <img src="../images/airplane-png/${data.Image}" alt="" class="airplane-image">
      <div>
        <h1 class="special title">${data.Model}</h1>
      </div>
      <div class="d-flex plane-specs" id="plane-specs">
        <div class="p-4 inner">
          <div class="d-flex justify-content-between"><span class="special">Product Number:</span><span>${data.ProductNumber}</span></div>
          <div class="d-flex justify-content-between"><span class="special">Model:</span><span>${data.Model}</span></div>
          <div class="d-flex justify-content-between"><span class="special">Name:</span><span>${data.Name}</span></div>
          <div class="d-flex justify-content-between"><span class="special">Descriptions:</span><span>${data.Descriptions}</span></div>
          <div class="d-flex justify-content-between"><span class="special">Pax Max Seating:</span><span>${data.PaxMaxSeating}</span></div>
          <div class="d-flex justify-content-between"><span class="special">Cargo D3 Capacity:</span><span>${data.CargoD3Capacity}</span></div>
          <div class="d-flex justify-content-between"><span class="special">Max Pallet Number:</span><span>${data.MaxPalletNumber}</span></div>
          <div class="d-flex justify-content-between"><span class="special">Water Volum:</span><span>${data.WaterVolume}</span></div>
          <div class="d-flex justify-content-between"><span class="special">Performance Range:</span><span>${data.PerformanceRange}</span></div>
          <div class="d-flex justify-content-between"><span class="special">Mmo:</span><span>${data.ProductNumber}</span></div>
          <div class="d-flex justify-content-between"><span class="special">Max Ramp Weight:</span><span>${data.Mmo}</span></div>
        </div>

        <div class="p-4 inner">
          <div class="d-flex justify-content-between"><span class="special">Max Take-Off Weight:</span><span>testing</span></div>
          <div class="d-flex justify-content-between"><span class="special">Max Zero Fuel Weight:</span><span>${data.MaxRampWeight}</span></div>
          <div class="d-flex justify-content-between"><span class="special">Max Fuel Capacity:</span><span>${data.MaxTakeOffWeight}</span></div>
          <div class="d-flex justify-content-between"><span class="special">Overall Length:</span><span>${data.MaxZeroFuelWeight}</span></div>
          <div class="d-flex justify-content-between"><span class="special">Cabin Length:</span><span>${data.CabinLength}</span></div>
          <div class="d-flex justify-content-between"><span class="special">Fuselage Width:</span><span>${data.FuselageWidth}</span></div>
          <div class="d-flex justify-content-between"><span class="special">Max Cabin Width:</span><span>${data.MaxCabinWidth}</span></div>
          <div class="d-flex justify-content-between"><span class="special">Wing Span:</span><span>${data.WingSpan}</span></div>
          <div class="d-flex justify-content-between"><span class="special">Height:</span><span>${data.Height}</span></div>
          <div class="d-flex justify-content-between"><span class="special">Track:</span><span>${data.Track}</span></div>
          <div class="d-flex justify-content-between"><span class="special">Wheelbase:</span><span>${data.Wheelbase}</span></div>
        </div>
      </div>
    `

    //Insert the custom div to the innerHTML of the selected container
    container.innerHTML = planeContent;
  } catch (error) {
    //Catch an error and display if there's any
    console.error("Error fetching plane data:", error);
  }
}

//Export the function so you can use it
export { fetchPlaneData }