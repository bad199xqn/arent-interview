
<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="readme_images/logo.jpg" alt="Logo" width="212" height="80">
  </a>

  <h3 align="center">HealthApp By Bui Anh Duc</h3>
</div>

## Built With

* react^18.2.0
* vite^4.3.9: Build tool
* typescript^5.0.2
* tailwindcss^3.3.2: UI styling
* react-hook-form^7.45.1
* yup^1.2.0: form validation
* react-lazy-load-image-component^1.6.0: images lazy loading
* @loadable/component^5.15.3: pages lazy loading
* @reduxjs/toolkit^1.9.5: states management
* dayjs^1.11.9: convert time formats
* recharts^2.7.2: graph creating


<!-- GETTING STARTED -->
## Getting Started

### Installation and run

1. Install NPM packages
   ```sh
   npm install
   ```
2. Run local
   ```sh
   npm run dev
   ```
3. Build
   ```sh
   npm run build
   ```
4. View the production build
   ```sh
   npm run preview
   ```
Locally preview the production build at http://localhost:4173/

<!-- ROADMAP -->
## Roadmap

- [x] Add Top page
- [x] Add My Record page
- [x] Add Column page
- [x] Responsive UI for screens with a width larger than 1280px  
- [x] Add routing with react-router-dom
- [x] Add 404 page
- [x] Add ErrorBoundary component
- [x] Add redux store
- [x] Add Login modal component
- [x] Add form validation with react-hook-form and yup
- [x] Add authentication
- [X] Add fake backend for authentication
- [x] Add README.md
- [ ] Responsive UI for tablet and mobile screens
- [ ] Add fake backend for data fetching
- [ ] Add automation test
- [ ] Multi-language Support
    - [ ] English
    - [ ] Japanese


<!-- ABOUT THE PROJECT -->
## App Details


### Navigation Bar and Menu
[![Nav-menu Screen Shot][Nav-menu]]()

* Click on the logo to navigate to the Top page
* Highlight the item with an active link



### Top page
[![Top-page Screen Shot][Top-page]]()

* Date－Achievement rate
* Body weight - Body fat percentage graph
* Button to filter meals (figma design requirement)
* Button to load more meal records
* Button to scroll to the top of the page



### My Record page
[![Record-page Screen Shot][Record-page]]()

* Scroll to the "BODY RECORD," "MY EXERCISE," and "MY DIARY" sections
* Body fat percentage graph
* Exercise record
* Button to load more diary records
* Button to scroll to the top of the page



### Column page
[![Column-page Screen Shot][Column-page]]()

* Button to load more recommends
* Button to scroll to the top of the page


### Authentication
[![Login-modal Screen Shot][Login-modal]]()

* Form validation
* Authentication error message
* Close the Login modal to return to the Column page


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[Nav-menu]: readme_images/navbar-menu.png
[Top-page]: readme_images/Top-page.png
[Record-page]: readme_images/Record-page.png
[Column-page]: readme_images/Column-page.png
[Login-modal]: readme_images/Login-modal.png


