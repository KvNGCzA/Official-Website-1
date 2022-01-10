import {SECTION_TWO} from '../index.constants';
import './index.scss';

const SectionTwo = () =>
  <div className="section section__two">
    {SECTION_TWO.map(section =>
      <div
        className="bot-card" id={section.id} key={section.head} style={section?.cardStyles}>
        <img src={section.image} className="bot-image" alt={section.head} style={section?.imageStyles} />
        <div className="text-content">
          <p className="head">{section.head}</p>
          <p className="description" style={section?.descriptionStyles}>{section.description}</p>
        </div>
      </div>
    )}
  </div>;

export default SectionTwo;
