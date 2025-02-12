/* Adding footer to the page from an external html file*/
fetch('./footer.html')
  .then(response => response.text())
  .then(html => {
    // Create a temporary element to hold the HTML content
    const tempElement = document.createElement('div');
    tempElement.innerHTML = html;

    // Extract the footer element from the temporary element
    const footer = tempElement.querySelector('footer');

    // Insert the footer into the body
    const bodyElement = document.body;
    bodyElement.insertAdjacentElement('beforeend', footer);
  })
  .catch(error => console.error('Error fetching footer.html:', error));

