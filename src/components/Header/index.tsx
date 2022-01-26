import './index.scss';
import {Fragment, useCallback, useEffect, useState} from 'react';
import {NavLink} from 'react-router-dom';
import {NavBarProps} from './index.interface';
import {MENU_ITEMS} from './index.config';
import {ReactComponent as NeonLogo} from '../../assets/icons/neon-logo.svg';

const isActive = ({isActive}: { isActive: boolean }): string => isActive ? 'menu-item active' : 'menu-item';

const NavBar = ({menuOpen, togglemenu}: NavBarProps): JSX.Element =>
  <Fragment>
    <div className="navigation desktop">
      {MENU_ITEMS.map(item => <NavLink to={item.link} className={isActive} key={item.text}>{item.text}</NavLink>)}
    </div>

    <div
      className="menu-icon" onClick={togglemenu} style={{
      backgroundImage:    `url(${process.env.PUBLIC_URL}/icons/${menuOpen
        ? 'menu_close'
        : 'open_menu'}.png)`,
      backgroundSize:     'contain',
      backgroundRepeat:   'no-repeat',
      backgroundPosition: 'center'
    }} />

    <div
      className="navigation mobile" style={{
      display: menuOpen ? 'flex' : 'none'
    }}>
      {MENU_ITEMS.map(item => <NavLink
        to={item.link}
        className={isActive}
        key={item.text}
        onClick={togglemenu}>{item.text}</NavLink>)}
    </div>
  </Fragment>;

const Header = (): JSX.Element => {
  const [menuOpen, setMenuOpen]         = useState(false);
  const [darkenHeader, setDarkenHeader] = useState(false);
  const toggleMenu                      = useCallback((): void => {
    setMenuOpen(!menuOpen);
  }, [menuOpen]);

  const handleResize = useCallback(() => {
    if (window.innerWidth > 944 && menuOpen) {
      toggleMenu();
    }
  }, [toggleMenu, menuOpen]);

  const handleScroll = useCallback((): void => {
    if (window.scrollY >= 600 && !darkenHeader) {
      setDarkenHeader(true);
    }

    if (window.scrollY < 600 && darkenHeader) {
      setDarkenHeader(false);
    }
  }, [darkenHeader, setDarkenHeader]);

  useEffect(() => {

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll, handleResize]);

  return (
    <header className="header-wrapper">
      <div
        className="header-wrapper__sub-wrapper" style={{
        background: darkenHeader ? '#0A060D' : 'transparent'
      }}>
        <div className="header-container">
          <NeonLogo className="logo" />
          <NavBar menuOpen={menuOpen} togglemenu={toggleMenu} />
        </div>
      </div>
    </header>);
};

export default Header;
