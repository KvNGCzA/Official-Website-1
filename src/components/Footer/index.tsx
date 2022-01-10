import './index.scss';

const SOCIAL_ICONS = ['telegram', 'twitter', 'discord', 'medium'];

const Footer = () => {
  return (
    <footer className="footer">
      {SOCIAL_ICONS.map(social => <img
        src={process.env.PUBLIC_URL + '/icons/' + social + '.png'}
        alt={'social'}
        height={54}
        width={54}
        className="social-icon"
        key={social}
      />)}
    </footer>
  );
};

export default Footer;
