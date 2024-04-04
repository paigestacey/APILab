
/*link the api*/
async function searchNews() {
    const apiKey = '15bd0b3d6758496aa82d74ac8da4459a';
    const searchQuery = document.getElementById('searchInput').value;
    const apiUrl = `https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${apiKey}`;
    
  /*fetch api*/
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayResults(data.articles);
        })
        .catch(error => console.log('Error fetching data:', error));
  }
  
  /*display cards based on search results*/ 
  function displayResults(articles) {
    const searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = '';
  
    articles.forEach(article => {
        const card = document.createElement('div');
        card.classList.add('card');
  
        const cardImg = document.createElement('img');
        cardImg.classList.add('card-img-top');
        cardImg.src = article.urlToImage ? article.urlToImage : 'https://via.placeholder.com/150';
  
        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
  
        const cardTitle = document.createElement('h5');
        cardTitle.classList.add('card-title');
        cardTitle.textContent = article.title;
  
        const cardText = document.createElement('p');
        cardText.classList.add('card-text');
        cardText.textContent = article.description;
  
        const readMoreLink = document.createElement('a');
        readMoreLink.href = article.url;
        readMoreLink.textContent = 'Read more';
        readMoreLink.classList.add('btn', 'btn-primary');
  
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        cardBody.appendChild(readMoreLink);
  
        card.appendChild(cardImg);
        card.appendChild(cardBody);
  
        searchResults.appendChild(card);
    });
  }