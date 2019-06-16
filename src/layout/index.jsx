import React from 'react';
import { Footer } from './../components/footer';
import './index.scss';

export const Layout = ({ children }) => (
  <div className="layout">
    { children }
    <Footer />
  </div>
);
