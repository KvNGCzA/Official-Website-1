import './index.scss';
import {NavLink} from 'react-router-dom';
import {MENU_ITEMS} from './index.config';
import {ReactComponent as NeonLogo} from '../../assets/icons/neon-logo.svg';

const isActive = ({isActive}: { isActive: boolean }): string => isActive ? 'menu-item active' : 'menu-item';

const NavBar = (): JSX.Element => <div className="navigation">
  {MENU_ITEMS.map(item => <NavLink to={item.link} className={isActive} key={item.text}>{item.text}</NavLink>)}
</div>;

const Header = (): JSX.Element => {
  return (
    <header className="header-wrapper">
      <div className="header-wrapper__sub-wrapper">
        <div className="header-container">
          <NeonLogo />
          <NavBar />
        </div>
      </div>
    </header>
  );
};

export default Header;
