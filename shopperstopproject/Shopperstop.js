let scrollingContainer = document.getElementById("scrolling-container");

function scrollImages() {
  scrollingContainer.scrollLeft += 10; // Adjust scrolling speed as needed
}

setInterval(scrollImages, 50); // Adjust interval for smoother or faster scrolling

// Get the notification modal and button
var notificationModal = document.getElementById('notificationModal');
var closeNotificationBtn = document.getElementById('closeNotificationBtn');
var notificationMessage = document.getElementById('notificationMessage');

// Function to open the notification modal with a message
function openNotification(message) {
    notificationMessage.innerText = message;
    notificationModal.style.display = 'block';

    // Close the modal after 3 seconds (adjust as needed)
    setTimeout(function() {
        notificationModal.style.display = 'none';
    }, 3000);
}

// Close the notification modal
closeNotificationBtn.onclick = function() {
    notificationModal.style.display = 'none';
}


// Example: Trigger notification after adding an item to the cart
var addToCartButton = document.getElementById('addToCartButton');

addToCartButton.onclick = function() {
    // Add the item to the cart logic here

    // Trigger the notification
    openNotification('Item added to your cart!');
}
