document.addEventListener('DOMContentLoaded', function () {
    var searchInput = document.querySelector('.search');
    var googleSearchButton = document.querySelector('.buttons button:first-child');
    var feelingLuckyButton = document.querySelector('.buttons button:last-child');

    // Function to perform the Google search
    function performSearch() {
        var searchTerm = searchInput.value.trim();

        if (searchTerm !== '') {
            var googleSearchURL = 'https://www.google.com/search?q=' + encodeURIComponent(searchTerm);
            window.location.href = googleSearchURL;
        }
    }

    // Event listener for the Enter key on the search input
    searchInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            performSearch();
        }
    });

    // Event listener for the Google Search button
    googleSearchButton.addEventListener('click', function () {
        performSearch();
    });

    // Event listener for the I'm Feeling Lucky button
    feelingLuckyButton.addEventListener('click', function () {
        window.location.href = 'https://doodles.google/';
    });
});
