function setup() {
    createCanvas(windowWidth, windowHeight);
    textSize(160);
    textAlign(CENTER, CENTER);
}

function draw() {
    let h = hour();
    let m = minute();
    let s = second();
    let currentMonth = month();

    // Set background and text color based on day or night
    if (h >= 6 && h < 18) { // Daytime: 6 AM to 6 PM
        background(135, 206, 235); // Light blue for day
        fill(0, 0, 0); // Black text
    } else { // Nighttime
        background(25, 25, 112); // Dark blue for night
        fill(255, 255, 255); // White text
    }

    // Digital time display
    text(nf(h, 2) + ':' + nf(m, 2) + ':' + nf(s, 2), width / 2, height / 2);

    // Set seasonal background
    setSeasonalBackground(currentMonth);

    // Seasonal elements
    drawSeasonalElements(currentMonth, h, m, s);
}

function setSeasonalBackground(month) {
    // Adjust the transparency of the seasonal background
    // to blend with the day/night cycle
    let alphaValue = (hour() >= 6 && hour() < 18) ? 100 : 200;
    
    // Seasonal color schemes (with transparency)
    if (month >= 3 && month <= 5) { // Spring
        fill(255, 182, 193, alphaValue);
    } else if (month >= 6 && month <= 8) { // Summer
        fill(135, 206, 235, alphaValue);
    } else if (month >= 9 && month <= 11) { // Autumn
        fill(255, 165, 0, alphaValue);
    } else { // Winter
        fill(240, 248, 255, alphaValue);
    }
    rect(0, 0, width, height);
}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
