import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer text-faded text-center py-5">
      <div className="container">
        <p className="m-0 small">
          Copyright &copy; F.RKAIEK {year}{' '}
          <span>
            Developed by :{' '}
            <a
              href="https://www.linkedin.com/in/sami-ilahi/"
              target="_blank"
              rel="noopener"
            >
              SAMI ILAHI
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
}
