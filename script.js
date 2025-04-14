const destinations = [  
    { name: "Paris", image: "https://picsum.photos/300/200?paris", price: "$500" },  
    { name: "Tokyo", image: "https://picsum.photos/300/200?tokyo", price: "$800" },  
    { name: "Bali", image: "https://picsum.photos/300/200?bali", price: "$400" },  
  ];  
  
  function loadDestinations() {  
    const grid = document.getElementById("destinations");  
    destinations.forEach(dest => {  
      grid.innerHTML += `  
        <div class="col-md-4 mb-4">  
          <div class="card">  
            <img src="${dest.image}" class="card-img-top">  
            <div class="card-body">  
              <h5>${dest.name}</h5>  
              <p>From ${dest.price}</p>  
              <button class="btn btn-warning" onclick="bookTrip('${dest.name}')">Book Now</button>  
            </div>  
          </div>  
        </div>  
      `;  
    });  
  }  
  
  function handleSearch() {  
    const dest = document.getElementById("destination").value;  
    alert(`Searching for trips to ${dest}...`); // Replace with real logic later  
  }  
  
  function bookTrip(dest) {  
    alert(`Booking trip to ${dest}!`); // Demo only  
  }  
  
  // Load data on page load  
  window.onload = loadDestinations;  