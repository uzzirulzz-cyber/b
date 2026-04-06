# GameHub - Gaming Marketplace

A modern, responsive gaming marketplace website built with HTML, CSS, and JavaScript.

## Features

✨ **Homepage**
- Hero section with search functionality
- Featured games showcase
- Popular categories display
- Beautiful gradient design

🎮 **Games Listing Page**
- Grid layout with game cards
- Sidebar filters (price, genre, platform)
- Sorting options (latest, price, popularity)
- Game details on click

🎨 **Design**
- Dark theme optimized for gaming
- Responsive design (mobile, tablet, desktop)
- Tailwind CSS for modern styling
- Smooth animations and transitions
- Purple accent color scheme

## File Structure

```
├── index.html       # Homepage
├── games.html       # Games listing page
├── script.js        # JavaScript functionality
├── styles.css       # Custom CSS styling
└── README.md        # This file
```

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/uzzirulzz-cyber/b.git
cd b
```

2. Open in a browser:
- Simply open `index.html` in your web browser
- Or use a local server:
  ```bash
  python -m http.server 8000
  # Then visit http://localhost:8000
  ```

## Features to Implement

- [ ] User authentication system
- [ ] Shopping cart functionality
- [ ] Payment integration
- [ ] User reviews and ratings
- [ ] Wishlist feature
- [ ] Game trading system
- [ ] Admin dashboard
- [ ] Database integration
- [ ] API backend

## Sample Games

The marketplace includes 8 sample games:
- Cyber Legends (Action)
- Dragon Quest (RPG)
- Speed Racer Pro (Racing)
- Puzzle Masters (Puzzle)
- Soccer Championship (Sports)
- Strategy Empire (Strategy)
- Dark Souls Clone (Action RPG)
- Indie Gem (Puzzle Platformer)

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla)
- Tailwind CSS
- Placeholder images

## Customization

### Add More Games
Edit the `gamesData` array in `script.js`:

```javascript
{
    id: 9,
    title: "Your Game",
    price: 29.99,
    rating: 4.5,
    category: "Action",
    platform: ["PC"],
    image: "image-url-here",
    description: "Game description"
}
```

### Change Color Scheme
Modify the primary color in `styles.css`:
```css
--primary: #your-color;
--primary-dark: #your-darker-color;
```

## License

This project is open source and available under the MIT License.

## Contributing

Feel free to fork this project and submit pull requests with improvements!