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

function drawSeasonalElements(month, hour, minute, second) {
    // Clear previous elements
    clear();

    // Spring: Draw flowers
    if (month >= 3 && month <= 5) {
        drawFlowers(minute);
    }
    // Summer: Draw a sun
    else if (month >= 6 && month <= 8) {
        drawSun(hour);
    }
    // Autumn: Draw falling leaves
    else if (month >= 9 && month <= 11) {
        drawLeaves(second);
    }
    // Winter: Draw snowflakes
    else {
        drawSnowflakes(second);
    }
}

function drawFlowers(minute) {
    // Simple flower representation
    let flowerSize = map(minute, 0, 59, 10, 50);
    fill(255, 192, 203); // Pink flowers
    ellipse(100, 100, flowerSize, flowerSize);
}

function drawSun(hour) {
    // Sun's position changes with the hour
    let sunX = map(hour, 0, 23, 0, width);
    fill(255, 204, 0); // Yellow sun
    ellipse(sunX, 100, 50, 50);
}

function drawLeaves(second) {
    // Leaves fall based on the second
    let leafY = map(second, 0, 59, 0, height);
    fill(34, 139, 34); // Green leaves
    ellipse(300, leafY, 20, 20);
}

function drawSnowflakes(second) {
    // Snowflakes fall based on the second
    let flakeY = map(second, 0, 59, 0, height);
    fill(255); // White snowflakes
    ellipse(500, flakeY, 10, 10);
}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
