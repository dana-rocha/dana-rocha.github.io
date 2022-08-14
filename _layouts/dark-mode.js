const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () => {
    // Change the theme of the website 
    console.log("button got clicked");
    document.body.classList.toggle('dark');
});