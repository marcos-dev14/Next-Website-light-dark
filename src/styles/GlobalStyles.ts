import { title } from 'process';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --header-height: 3rem;
    // Colors
    --primary: #069C54;
    --primary-alt: #048654;
    --title-color: #393939;
    --text-color: #707070;
    --text-color-light: #A6A6A6;
    --body-color: #FBFEFD;
    --container-color: #FFFFFF;

    // Font and typography
    --body-font: 'Poppins', sans-serif;
    --biggest-font-size: 2.25rem;
    --h1-font-size: 1.5rem;
    --h2-font-size: 1.25rem;
    --h3-font-size: 1rem;
    --normal-font-size: .938rem;
    --small-font-size: .813rem;
    --small-font-size: .75rem;

    // Font weight
    --font-medium: 500;
    --font-semi-bold: 600;

    // Margenes
    --mb-1: .5rem;
    --mb-2: 1rem;
    --mb-3: 1.5rem;
    --mb-4: 2rem;
    --mb-5: 1.5rem;
    --mb-6: 3rem;

    // z index
    --z-tooltip: 10;
    --z-fixed: 100;
  }

  @media screen and (min-width: 768px) {
    :root {
      --biggest-font-size: 4rem;
      --h1-font-size: 2.25rem;
      --h2-font-size: 1.5rem;
      --h3-font-size: 1.25rem;
      --normal-font-size: 1rem;
      --small-font-size: .875rem;
      --small-font-size: .813rem;
    }
  }

  // Base

  *,::before,::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: var(--header-height) 0 0 0;
    font-family: var(--body-font);
    fon-size: var(--normal-font-size);
    background: var(--body-color);
    color: var(--text-color);
    line-height: 1.6;
  }

  h1, h2, h3, p, ul {
    margin: 0;
  }

  ul {
    padding: 0;
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;

// Class

// .section {
//   padding: 4rem 0 2rem;
// }

// .section-title, .section-subtitle {
//   text-aling: center;
// }

// .section-title {
//   font-size: var(--h1-font-size);
//   color: var(--title-color);
//   margin-bottom: var(--mb-3);
// }

// .section-subtitle {
//   display: Block;
//   color: var(--first-color);
//   font-weight: var(--font-medium);
//   margin-bottom: var(--mb-1);
// }