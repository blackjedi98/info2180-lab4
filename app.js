document.getElementById('searchButton').addEventListener('click', function() {
    const searchInput = document.getElementById('searchInput').value.trim();
    const encodedQuery = encodeURIComponent(searchInput); 
    fetch(`superheroes.php?query=${encodedQuery}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then(html => {
        document.getElementById('result').innerHTML = html;
      })
      .catch(error => {
        console.error('Error fetching superheroes:', error);
        document.getElementById('result').innerHTML = 'Failed to load superheroes.';
      });
  });
  