import React from 'react';
import { Header } from './../components/header';
import { Footer } from './../components/footer';


export const Layout = ({ title, children }) => (
  <div>
    <Header title={title} />
    { children }
    <Footer />
  </div>
)
