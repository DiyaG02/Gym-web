// Function to calculate BMI
function calculateBMI() {
    // Get input values
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);
  
    
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
     
      document.getElementById('result').innerHTML = 'Please enter valid values for weight and height.';
      return;
    }
  
    
    var bmi = weight / Math.pow(height, 2);
  
    
    document.getElementById('result').innerHTML = 'Your BMI is: ' + bmi.toFixed(2);
  }
  