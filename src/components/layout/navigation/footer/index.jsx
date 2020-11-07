import React from 'react';

import './footer.css';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <h3>The Footer</h3>
        <div className="flex-row">
          <div className="footer-column">
            <div className="footer-column__heading">
              Footer-heading
            </div>
            <p>something</p>
          </div>
          <div className="footer-column">
            <div className="footer-column__heading">
              Footer-heading
            </div>
            <p>something</p>
          </div>
          <div className="footer-column">
            <div className="footer-column__heading">
              Footer-heading
            </div>
            <p>something</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
