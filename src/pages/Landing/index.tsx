import './index.scss';
import {SOCIAL_BUTTONS} from './index.constants';

const SocialButtons = (): JSX.Element =>
  <div className="social-btns">
    {SOCIAL_BUTTONS.map(({href, alt, image}) =>
      <a
        className="social-btn"
        href={href}
        target="_blank"
        rel="noreferrer"
        key={alt}
      >
        <img src={image} alt={alt} />
      </a>
    )}
  </div>;

const UpperSection = (): JSX.Element =>
  <div className="upper-section">
    <p className="tag-line">From the lost memory of humanity...</p>
    <h1 className="header">MetaCurse</h1>
  </div>;

const LowerSection = (): JSX.Element =>
  <div className="lower-section">
    <div className="access-form">
      <p className="label">Get early access</p>
      <input type="email" placeholder="your email address" required className="email-input" />
      <button className="submit-button">submit</button>

      <p className="coming-soon">coming soon</p>
    </div>

    <SocialButtons />
  </div>;

const Landing = (): JSX.Element => {
  return (
    <div className="landing-wrapper">
      <UpperSection />
      <LowerSection />
    </div>
  );
};

export default Landing;
