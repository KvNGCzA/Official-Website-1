import './index.scss';
import TwentyTwentyTwo from '../../../assets/icons/2022.png';
import Footer from '../../../components/Footer';

const SectionFour = () =>
  <div className="section section__four">
    <p className="coming-soon-text">coming in</p>
    <img
      src={TwentyTwentyTwo}
      alt="coming in 2022"
      width={370}
      height="auto"
      className="twenty-twenty-two"
    />
    <Footer />
  </div>;

export default SectionFour;
