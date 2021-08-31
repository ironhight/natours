import Nat1 from '../../assets/img/nat-1.jpg';
import Nat1Large from '../../assets/img/nat-1-large.jpg';
import Nat2 from '../../assets/img/nat-2.jpg';
import Nat2Large from '../../assets/img/nat-2-large.jpg';
import Nat3 from '../../assets/img/nat-3.jpg';
import Nat3Large from '../../assets/img/nat-3-large.jpg';

const SectionAbout = () => (
  <section className="section-about" id="section-about">
    <div className="u-center-text u-margin-bottom-big">
      <h2 className="heading-secondary">
        Exciting tours for adventurous people
      </h2>
    </div>
    <div className="row">
      <div className="col-1-of-2">
        <h3 className="heading-tertiary u-margin-bottom-small">
          You're going to fall in love with nature
        </h3>
        <p className="paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
          ipsum sapiente aspernatur libero repellat quis consequatur ducimus
          quam nisi exercitationem omnis earum qui.
        </p>
        <h3 className="heading-tertiary u-margin-bottom-small">
          Live adventures like you never have before
        </h3>
        <p className="paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          nulla deserunt voluptatum nam.
        </p>
        <a href="/#" className="btn-text">
          Learn more →
        </a>
      </div>
      <div className="col-1-of-2">
        <div className="composition">
          <img
            // srcSet="img/nat-1.jpg 300w, img/nat-1-large.jpg 1000w"
            srcSet={`${Nat1} 300w, ${Nat1Large} 1000w`}
            sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
            alt="1"
            className="composition__photo composition__photo--p1"
            src={Nat1Large}
          />
          <img
            // srcSet="img/nat-2.jpg 300w, img/nat-2-large.jpg 1000w"
            srcSet={`${Nat2} 300w, ${Nat2Large} 1000w`}
            sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
            alt="2"
            className="composition__photo composition__photo--p2"
            src={Nat2Large}
          />
          <img
            // srcSet="img/nat-3.jpg 300w, img/nat-3-large.jpg 1000w"
            srcSet={`${Nat3} 300w, ${Nat3Large} 1000w`}
            sizes="(max-width: 37.5em) 30vw, (max-width: 56.25em) 20vw, 300px"
            alt="3"
            className="composition__photo composition__photo--p3"
            src={Nat3Large}
          />
        </div>
      </div>
    </div>
  </section>
);

export default SectionAbout;
