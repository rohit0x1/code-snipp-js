function redirectToRandomURLWithReload() {
    // List of URLs
    const urls = [
        "https://www.x.com",
        "https://www.duck.com",
        "https://www.google.com",
        // Add more URLs as needed
    ];

    // Function to reload the page
    function reloadPage() {
        location.reload();
    }

    // Set a timeout to reload the page after 5 minutes (300,000 milliseconds)
    setTimeout(reloadPage, 1000);

    // Choose a random URL index
    const randomIndex = Math.floor(Math.random() * urls.length);

    // Get the random URL
    const randomURL = urls[randomIndex];

    // Redirect to the random URL
    window.location.href = randomURL;
}

// Call the function to initiate the process
redirectToRandomURLWithReload();
