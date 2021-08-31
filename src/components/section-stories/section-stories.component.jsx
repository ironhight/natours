import Nat8 from '../../assets/img/nat-8.jpg';
import Nat9 from '../../assets/img/nat-9.jpg';

const SectionStories = () => (
  <section className="section-stories" id="section-stories">
    <div className="bg-video">
      <video className="bg-video__content" autoPlay muted loop>
        <source
          src="https://res.cloudinary.com/dtnws8uep/video/upload/v1630446179/video_egqmq5.mp4"
          type="video/mp4"
        />
        <source
          src="https://res.cloudinary.com/dtnws8uep/video/upload/v1630446178/video_ylqqkd.webm"
          type="video/webm"
        />
        Your browser is not supported!
      </video>
    </div>
    <div className="u-center-text u-margin-bottom-big">
      <h2 className="heading-secondary">We make people genuinely happy</h2>
    </div>
    <div className="row">
      <div className="story">
        <figure className="story__shape">
          <img src={Nat8} alt="Person on a tour" className="story__img" />
          <figcaption className="story__caption">Mary Smith</figcaption>
        </figure>
        <div className="story__text">
          <h3 className="heading-tertiary u-margin-bottom-small">
            I had the best week ever with my family
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            ipsum sapiente aspernatur libero repellat quis consequatur ducimus
            quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente
            aspernatur libero repellat quis consequatur ducimus quam nisi
            exercitationem omnis earum qui.
          </p>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="story">
        <figure className="story__shape">
          <img src={Nat9} alt="Person on a tour" className="story__img" />
          <figcaption className="story__caption">Jack Wilson</figcaption>
        </figure>
        <div className="story__text">
          <h3 className="heading-tertiary u-margin-bottom-small">
            WOW! My life is completely different now
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            ipsum sapiente aspernatur libero repellat quis consequatur ducimus
            quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente
            aspernatur libero repellat quis consequatur ducimus quam nisi
            exercitationem omnis earum qui.
          </p>
        </div>
      </div>
    </div>
    <div className="u-center-text u-margin-top-huge">
      <a href="/#" className="btn-text">
        Read all stories →
      </a>
    </div>
  </section>
);

export default SectionStories;
