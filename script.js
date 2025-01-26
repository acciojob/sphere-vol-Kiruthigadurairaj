function volume_sphere(event) {
    event.preventDefault();

    // Retrieve the radius input
    const radiusInput = document.getElementById('radius').value;

    // Parse the input as a float
    const radius = parseFloat(radiusInput);

    // Reference to the volume output field
    const volumeOutput = document.getElementById('volume');

    // Validate input (non-negative and numeric)
    if (isNaN(radius) || radius < 0) {
        volumeOutput.value = 'Invalid input';
        return;
    }

    // Calculate the volume of the sphere
    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    // Set the volume output rounded to 4 decimal places
    volumeOutput.value = volume.toFixed(4);
}

// Attach the function to the form's onsubmit event
window.onload = function() {
    document.getElementById('MyForm').onsubmit = volume_sphere;
};
