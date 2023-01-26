document.getElementById("openai-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Get the input text from the form
    var inputText = document.getElementById("input-text").value;
  
    // Make an API call to the OpenAI API with the input text
    fetch('https://api.openai.com/v1/engines/code-cushman-001/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer CHANGEME'
      },
      body: JSON.stringify({
        prompt: document.getElementById("input-text").value,
        max_tokens: 1000,
        temperature: 0.5,
        stop: "print(\"goodbye\")"
      })
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        // Display the response in the response area
        handleResponse(data);
      });
  });
  
  function handleResponse(response) {
    var responseArea = document.getElementById("response-area");
    var responseText = response.choices[0].text;
    var delay = 50; // delay between characters in milliseconds
    
    // Clear any existing text in the response area
    responseArea.innerHTML = "";
    
    // Iterate through each character of the response
    for (var i = 0; i < responseText.length; i++) {
      (function(i) {
        setTimeout(function() {
          // Append the current character to the response area
          responseArea.innerHTML += responseText[i];
        }, delay * i);
      })(i);
    }
  }

  