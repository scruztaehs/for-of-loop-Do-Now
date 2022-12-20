var photos = [
    "https://upload.wikimedia.org/wikipedia/commons/3/38/Stranger_Things_logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Grey%27s_Anatomy_Logo.svg/480px-Grey%27s_Anatomy_Logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/The_Office_US_logo.svg/1280px-The_Office_US_logo.svg.png",
    "https://live.staticflickr.com/2936/13473480295_6946a28e9d_c.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/e/ec/American_Horror_Story.svg", "https://upload.wikimedia.org/wikipedia/en/3/3e/The_Middle_Season_2.jpg"
];
for (let images of photos){
    $("body").append("<img src=" + images + ">");
}

