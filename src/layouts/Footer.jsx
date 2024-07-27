import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className="footer items-center p-4 border-t border-neutral-700">
        <aside className="grid-flow-col items-center">
          <img
            src="./favicon.ico"
            alt=""
          />
          <p className="font-medium">Pedro Domitti de Carvalho © {new Date().getFullYear()} - All right reserved</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <p className="font-light align-bottom">Powered by</p>
          <img
            src="./open-weather.png"
            alt=""
            className="w-16"
          />
        </nav>
      </footer>
    </>
  );
};

export default Footer;
