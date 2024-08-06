document.getElementById('discountForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const originalPrice = parseFloat(document.getElementById('originalPrice').value);
    const discountPercentage = parseFloat(document.getElementById('discountPercentage').value);
    
    if (isNaN(originalPrice) || isNaN(discountPercentage)) {
        alert('Please enter valid numbers');
        return;
    }
    
    const discountAmount = (originalPrice * discountPercentage) / 100;
    const finalPrice = originalPrice - discountAmount;
    
    document.getElementById('result').innerText = `Final Price: ${finalPrice.toFixed(2)}`;
});
