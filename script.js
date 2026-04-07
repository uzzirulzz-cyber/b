// Sample game data
const games = [
    { id: 1, title: "Cyberpunk 2077", price: 59.99, genre: "RPG", platform: "PC", image: "https://via.placeholder.com/300x200?text=Cyberpunk+2077" },
    { id: 2, title: "The Witcher 3", price: 39.99, genre: "RPG", platform: "PC", image: "https://via.placeholder.com/300x200?text=The+Witcher+3" },
    { id: 3, title: "Grand Theft Auto V", price: 29.99, genre: "Action", platform: "PC", image: "https://via.placeholder.com/300x200?text=GTA+V" },
    { id: 4, title: "Minecraft", price: 19.99, genre: "Adventure", platform: "PC", image: "https://via.placeholder.com/300x200?text=Minecraft" },
    { id: 5, title: "Fortnite", price: 0, genre: "Action", platform: "PC", image: "https://via.placeholder.com/300x200?text=Fortnite" },
    { id: 6, title: "Among Us", price: 4.99, genre: "Strategy", platform: "PC", image: "https://via.placeholder.com/300x200?text=Among+Us" }
];

// Function to display games
function displayGames(gamesList, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    gamesList.forEach(game => {
        const gameCard = `
            <div class="bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transition-transform">
                <img src="${game.image}" alt="${game.title}" class="w-full h-48 object-cover">
                <div class="p-4">
                    <h4 class="text-xl font-bold mb-2">${game.title}</h4>
                    <p class="text-purple-400 mb-2">${game.genre} - ${game.platform}</p>
                    <p class="text-2xl font-bold text-green-400">$${game.price}</p>
                    <button class="mt-4 bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded w-full">Add to Cart</button>
                </div>
            </div>
        `;
        container.innerHTML += gameCard;
    });
}

// Load featured games on homepage
if (document.getElementById('featured-games')) {
    const featured = games.slice(0, 3);
    displayGames(featured, 'featured-games');
}

// Load all games on games page
if (document.getElementById('games-grid')) {
    displayGames(games, 'games-grid');
}

// Search function
function searchGames() {
    const query = document.getElementById('search').value.toLowerCase();
    const filtered = games.filter(game => game.title.toLowerCase().includes(query));
    if (document.getElementById('featured-games')) {
        displayGames(filtered.slice(0, 3), 'featured-games');
    }
}