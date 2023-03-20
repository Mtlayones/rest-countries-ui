<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">

  <h3 align="center">Rest Countries User Interface</h3>

  <p align="center">
    User Interface for the Rest Countries API
    <br />
    <a href="https://github.com/Mtlayones/rest-countries-ui"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://rest-countries-ui.netlify.app/">View Demo</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

[![UI SnapShot][ui-snapshot]](https://rest-countries-ui.netlify.app)

A visual representation of rest countries api with filter, sort, pagination. The sorting feature is limited to the alphabetical order of name of the countries. The filter feature is limited to filtering the countries included in Oceania region or larger/smaller than the area of Lithuania.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

* [![React][React.js]][React-url]
* [![TypeScript][TypeScript]][TypeScript-url]
* [![TailwindCSS][TailwindCSS]][TailwindCSS-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

Below are the instructions to install and view the project locally. Those are split into prerequisites and installation.

### Prerequisites

The only requirement for the project to be started in your machine is the npm and below is the command to install it.

* npm

  ```sh
  npm install npm@latest -g
  ```

### Installation

_Below are the instructions to run the project locally._

1. Clone the repo

   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```

2. Install NPM packages

   ```sh
   npm install
   ```

3. Create an `.env` file and copy the contents of `.sample.env`

4. Add RestCountry API in the `.env`

   ```js
   VITE_API_URL=https://restcountries.com/v2 
   ```
5. Run the project

   ```sh
    npm run dev
   ```


<p align="right">(<a href="#readme-top">back to top</a>)</p>

[React-url]: https://reactjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[TailwindCSS]: https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white
[TailwindCSS-url]: https://tailwindcss.com/
[ui-snapshot]: snapshot/screenshot.png
[TypeScript]: https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org/