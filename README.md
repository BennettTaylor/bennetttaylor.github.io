# Bennett Taylor's Portfolio
Welcome to the GitHub repository for my portfolio website! The site was built using React, Next.js, PostCSS, and Tailwind CSS. It is currently hosted on GitHub pages as my user site, BennettTaylor.github.io. I chose to forgo using jekyll for GitHub Pages for extra flexibility in frameworks, and to learn more about standard web development.

## Development
With the Next.js framework, development is quite easy for this site. All you need to modify this site is to download the required frameworks (using Node.js), fork my repository and run locally using `npm run dev`. To upload to GitHub pages, you can use the deploy.yml GitHub workflow found in my project. This requires you to set up the repository as a GitHub Pages repository and selecting GitHub Actions as the source. More information can be found here: https://docs.github.com/en/pages/quickstart

## Features
### Reactive
I experimented with reactive web design in this project by incorporating animations and color changes in response to events like loading and user interaction. Clickable sections will expand when hovered over; cards on the screen will "pop" into existance when loaded for the first time; Links will fade to green when hovered over. These elements help the user experience and bring a sense of life to the otherwise static site.

### Mobile Friendly
Using Tailwind CSS, many sections of the website have different layouts and sizing to support mobile web viewing. Everything that works on desktop should also work just fine on mobile.

### Lightweight
Because this website is a relatively small, static website, it performs relatively well without long load times or delays. Images have been reduced in size to support faster loading times.

## Site Structure
### Homepage
The homepage has all my basic information and background. It starts with a welcome message and photo of my self, followed by a section describing myself. Beneath this is a project section (identical to the project page) for users who chose to keep scrolling on the homepage. Near the bottom is a contact section and footer.

### C.V.
The C.V. page contains an up-to-date version of my resume with most of my experinces, skills, and professional/educational background. Fairly standard.

### Projects
The project page contains a few cards showcasing some of the projects I am most proud of contributing to. They can be expanded for more information by clicking on them.

### Art
The art page contains four different sections: Painting, Digital Art, Film Photography, and Digital Photography. Each section has some of my favorite pieces that I have made in each of the mediums.

## AI Disclaimer
My expertise is not in web design, so much of the website was built with the help of LLMs like ChatGPT and Google Gemini. I spent quite a bit of time learning HTML, CSS, and JS so I could understand how the website works and what was possible (and easier to achieve with frameworks). In the end I focused on Tailwind CSS as the main framework for styling the site as it was easy to pick up with some knowledge of CSS. A lot of the work done by AI was for helping to manage the React and Next.js aspects of the sight, which I simply didn't have time to learn properly. I'm quite happy with the final result and am glad to be able to take advantage of these tools. 
