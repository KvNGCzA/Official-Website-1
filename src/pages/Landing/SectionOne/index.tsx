import {SECTION_ONE} from '../index.constants';
import './index.scss';

const SectionOne = (): JSX.Element =>
  <div className="section section__one">
    <div className="gif-wrapper">
      <img src={SECTION_ONE.gifCharacters} alt="metacurse characters" className="characters" />
      <img src={SECTION_ONE.image} alt="metacurse gif logo" className="image" />
    </div>
    <p className="tag-line">{SECTION_ONE.description}</p>
  </div>;

export default SectionOne;
