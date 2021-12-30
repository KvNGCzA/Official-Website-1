import {MutableRefObject, useEffect, useRef, useState} from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import {toast} from 'react-toastify';
import {send} from 'emailjs-com';
import {ContactDetails} from '../../config/interfaces/contact-details.interface';
import {SOCIAL_BUTTONS, MAIL_REGEX, INITIAL_STATE} from './index.constants';
import './index.scss';

const {
        REACT_APP_RECAPTCHA_SITE_KEY,
        REACT_APP_EMAILJS_SERVICE_ID,
        REACT_APP_EMAILJS_TEMPLATE_ID
      } = process.env;

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
  const [contactDetails, setContactDetails] = useState<ContactDetails>(INITIAL_STATE);
  const [showCaptcha, setShowCaptcha]       = useState<boolean>(false);
  const [loading, setLoading]               = useState<boolean>(false);
  const captchaRef                          = useRef() as MutableRefObject<ReCAPTCHA>;

  useEffect(() => {
    if (!REACT_APP_RECAPTCHA_SITE_KEY) {
      toast('ReCaptcha siteKey missing, Please contact admin', {type: 'error'});
    }
  }, []);

  const handleFormChange = (e: any): void => {
    setContactDetails({
      ...contactDetails,
      [e.target.name]: e.target.value
    });

    if (
      !showCaptcha &&
      MAIL_REGEX.test(e.target.value)
    ) {
      setShowCaptcha(true);
    }
  };

  const disableSubmitButton = (): boolean =>
    !MAIL_REGEX.test(contactDetails.email) ||
    (!contactDetails.captchaPassed && Boolean(REACT_APP_RECAPTCHA_SITE_KEY)) ||
    loading;

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

  const handleSubmit = async (e: any): Promise<void> => {
    e.preventDefault();
    setLoading(true);

    try {
      await send(
        REACT_APP_EMAILJS_SERVICE_ID || '',
        REACT_APP_EMAILJS_TEMPLATE_ID || '',
        contactDetails as any
      );
      setContactDetails(INITIAL_STATE);
      setShowCaptcha(false);
      captchaRef?.current?.reset?.();
      toast('Subscription successful!', {type: 'success'});
    } catch (_error) {
      toast(
        'An error has occurred! Please try again',
        {type: 'error'}
      );
    }

    setLoading(false);
  };

  return (
    <div className="lower-section">
      <SocialButtons />

      <div className="access-form">
       

        <p className="coming-soon">coming soon</p>
      </div>

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
