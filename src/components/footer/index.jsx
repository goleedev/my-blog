import React from 'react'
import AdSense from 'react-adsense';
import './index.scss'

export const Footer = () => (
  <footer className="footer">
    <AdSense.Google
      client='ca-pub-6040570141335986'
      slot='7806394673'
      style={{ display: 'block' }}
      layout='in-article'
      format='fluid'
    />
    ©<a href="https://github.com/goleedev">GO Lee</a>, Built with{' '}
    <a href="https://github.com/JaeYeopHan/gatsby-starter-bee">
      Gatsby-starter-bee
    </a>
  </footer>
)
