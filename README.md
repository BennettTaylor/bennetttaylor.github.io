# Bennett Taylor's Portfolio

Welcome to the personal portfolio website of Bennett Taylor, an Electrical and Computer Engineering (ECE) M.S. student at Boston University. This project is built using Next.js, Tailwind CSS, and React.

## Project Structure

The project is organized as follows:

```
bennett-taylor-portfolio
├── src
│   ├── app
│   │   ├── page.js          # Main entry point for the application
│   │   ├── layout.js        # Layout structure wrapping main content
│   │   └── globals.css      # Global CSS styles including Tailwind imports
│   ├── components
│   │   ├── Header.js        # Navigation menu and branding
│   │   ├── Footer.js        # Copyright and social media links
│   │   ├── About.js         # Information about Bennett Taylor
│   │   ├── Projects.js      # List of projects
│   │   └── Contact.js       # Contact form or information
│   └── data
│       └── projects.js      # Project data used in Projects component
├── public
│   └── favicon.ico          # Favicon for the website
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
├── package.json             # npm configuration and dependencies
├── README.md                # Project documentation
└── next.config.js           # Next.js configuration
```

## Features

- **Responsive Design**: The website is designed to be fully responsive, ensuring a great user experience on all devices.
- **Dynamic Components**: Utilizes React components for modularity and reusability.
- **Tailwind CSS**: Leverages Tailwind CSS for styling, allowing for rapid UI development with utility-first classes.
- **Project Showcase**: Displays a curated list of projects that Bennett has worked on, with detailed descriptions and links.

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/bennett-taylor-portfolio.git
   ```

2. Navigate to the project directory:
   ```
   cd bennett-taylor-portfolio
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Run the development server:
   ```
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000` to view the portfolio.

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.