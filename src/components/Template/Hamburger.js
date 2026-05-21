import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import routes from '../../data/routes';

const Hamburger = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="hamburger-container">
      <nav className="main" id="hambuger-nav">
        <ul>
          <li className={`menu ${open ? 'close-menu' : 'open-menu'}`}>
            <button
              type="button"
              className="menu-hover"
              aria-expanded={open}
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen(!open)}
            >
              {open ? '\u2715' : '\u2630'}
            </button>
          </li>
        </ul>
      </nav>
      <button
        type="button"
        className={`hamburger-overlay${open ? ' is-open' : ''}`}
        aria-label="Close menu overlay"
        onClick={() => setOpen(false)}
      />
      <aside className={`hamburger-panel${open ? ' is-open' : ''}`}>
        <ul className="hamburger-ul">
          {routes.map((l) => (
            <li key={l.label}>
              <Link to={l.path} onClick={() => setOpen(false)}>
                <h3 className={l.index ? 'index-li' : ''}>{l.label}</h3>
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default Hamburger;
