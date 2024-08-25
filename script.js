// Yea yea yea, I know semantic markups and I know click events are should be done on JavaScript. I'm just trying to have fun here. :)

// P.S. No space for username pleassse...

    
    document.getElementById('finish').addEventListener('change', function() {
        if (this.checked) {
            setTimeout(function() {
                window.location.href = "dashboard.html"; // Replace with the URL you want to redirect to
            }, 5000); // 5000 milliseconds = 5 seconds
        }
    });
