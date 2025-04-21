const output = document.getElementById('output');
const interval = setInterval(() => {
  fetch('/curl/index.html')
    .then(response => {
      if (!response.ok) throw new Error('Network response was not ok');
      return response.text();
    })
    .then(text => {
      if (text.trim() !== "") {
        output.innerText = text;
        clearInterval(interval);
      }
    })
    .catch(error => {
      console.error('Error fetching content:', error);
    });
}, 250);
