import {useState} from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import './index.scss';
import {SOCIAL_BUTTONS, MAIL_REGEX} from './index.constants';

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

const LowerSection = (): JSX.Element => {
  const [contactDetails, setContactDetails] = useState<{
    email: string;
    captchaPassed: boolean;
  }>({
    email:         '',
    captchaPassed: false
  });

  const [showCaptcha, setShowCaptcha] = useState<boolean>(false);

  const handleFormChange = (e: any): void => {
    setContactDetails({
      ...contactDetails,
      [e.target.name]: e.target.value
    });

    if (
      MAIL_REGEX.test(e.target.value) &&
      !showCaptcha
    ) {
      setShowCaptcha(true);
    }
  };

  const disableSubmitButton = (): boolean =>
    !MAIL_REGEX.test(contactDetails.email) ||
    !contactDetails.captchaPassed;

  const onCaptchaChange = (passed: any): void => {
    if (passed) {
      setCaptchaPassed(true);
      return;
    }

    handleCaptchaError();
  };

  const setCaptchaPassed = (captchaPassed: boolean): void => {
    setContactDetails({...contactDetails, captchaPassed});
  };

  const handleCaptchaError = (): void => {
    setCaptchaPassed(false);
  };

  return (
    <div className="lower-section">
      <div className="access-form">
        <p className="label">Get early access</p>
        <input
          onChange={handleFormChange}
          type="email"
          name="email"
          placeholder="your email address"
          required
          className="email-input"
          value={contactDetails.email} />
        <div
          className="captcha" style={{
          display: showCaptcha ?
                     'flex' : 'none'
        }}>
          <ReCAPTCHA
            sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY ?? ''}
            onChange={onCaptchaChange}
            onErrored={handleCaptchaError}
            onExpired={handleCaptchaError}
          />
        </div>
        <button className="submit-button" disabled={disableSubmitButton()}>submit</button>

        <p className="coming-soon">coming soon</p>
      </div>

      <SocialButtons />
    </div>
  );
};

const Landing = (): JSX.Element => {
  return (
    <div className="landing-wrapper">
      <UpperSection />
      <LowerSection />
    </div>
  );
};

export default Landing;
