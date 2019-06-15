import React from 'react';
import { Header } from './../components/header';
// import { Footer } from './../components/footer';


export const Layout = ({ title, github, children }) => (
  <>
    <Header title={title} github={github} />
    { children }
    {/*<Footer />*/}
  </>
);
