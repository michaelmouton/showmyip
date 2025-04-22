const output = document.getElementById('output');
const interval = setInterval(async () => {
  try {
    const response = await fetch('/cgi-bin/index.html');
    if (!response.ok) throw new Error('Network response was not ok');
    const text = await response.text();
    if (text.trim() !== "") {
      output.innerText = text;
      clearInterval(interval);
    }
  } catch (error) {
    console.error('Error fetching content:', error);
  }
}, 250);
