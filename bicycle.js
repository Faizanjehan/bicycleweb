function formatCurrency(value) {
    return "$" + value.toFixed(2);
}

// Function to increment the value
function incrementValue(element, start, end, duration) {
    let current = start;
    const increment = (end - start) / (duration / 10); // Calculate increment per step
    const interval = setInterval(() => {
        current += increment;
        if (current >= end) {
            current = end;
            clearInterval(interval);
        }
        element.textContent = formatCurrency(current);
    }, 10); // Update every 10 milliseconds
}

// Get references to the span elements by their ids
const spans = [
    document.getElementById('dolor1'),
    document.getElementById('dolor2'),
    document.getElementById('dolor3'),
    document.getElementById('dolor4'),
    document.getElementById('dolor5')
];

// Start incrementing each span from 0 to 350 over 3.5 seconds (3500 milliseconds)
spans.forEach(span => incrementValue(span, 0, 350, 3500));




