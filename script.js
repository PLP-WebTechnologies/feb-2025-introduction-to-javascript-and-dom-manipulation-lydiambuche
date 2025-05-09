// Function to change text content and style of the heading
function changeText() {
    // Get the element with ID 'dynamicText'
    const textElement = document.getElementById("dynamicText");
  
    // Change the text content
    textElement.textContent = "Text has been changed dynamically!";
  
    // Modify the text color
    textElement.style.color = "red";
  
    // Modify the font size
    textElement.style.fontSize = "24px";
  }
  
  // Function to add or remove a new element
  function toggleElement() {
    // Get the container where elements will be added or removed
    const container = document.getElementById("container");
  
    // Check if the new element already exists
    const existing = document.getElementById("newElement");
  
    if (existing) {
      // If it exists, remove it from the container
      container.removeChild(existing);
    } else {
      // If it doesn't exist, create a new div
      const newDiv = document.createElement("div");
  
      // Set the ID and text content for the new div
      newDiv.id = "newElement";
      newDiv.textContent = "This element was added!";
  
      // Append the new element to the container
      container.appendChild(newDiv);
    }
  }
  