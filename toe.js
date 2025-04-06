// Replace with your own API key from NewsAPI
const apiKey = 'YOUR_API_KEY_HERE';

// News API URL for top headlines
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

// Function to fetch news
async function fetchNews() {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Failed to fetch news');
    }

    const data = await response.json();
    
    // Process the data (for example, log it to the console)
    console.log('Top News Headlines:', data.articles);
    
    // You can display the news on the webpage or process it as needed
    data.articles.forEach(article => {
      console.log(`Title: ${article.title}`);
      console.log(`Description: ${article.description}`);
      console.log(`URL: ${article.url}`);
      console.log('---');
    });

  } catch (error) {
    console.error('Error fetching news:', error);
  }
}

// Call the fetchNews function to get the news
fetchNews();
