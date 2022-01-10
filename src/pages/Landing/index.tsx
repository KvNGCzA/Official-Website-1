import './index.scss';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';
import SectionFour from './SectionFour';

const Landing = (): JSX.Element =>
  <div className="landing-wrapper">
    <SectionOne />
    <div className="mid-section">
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </div>
  </div>;

export default Landing;
