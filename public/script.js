function automate() {
    fetch('/api/automate')
      .then(response => response.json())
      .then(data => alert(data.message))
      .catch(error => console.error('Une erreur est survenue:', error));
  }
  