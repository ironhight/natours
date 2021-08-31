import Nat8 from '../../assets/img/nat-8.jpg';
import Nat9 from '../../assets/img/nat-9.jpg';

const Popup = () => {
  const navButton = document.getElementById('navi-toggle');
  const navLinks = document.querySelectorAll('.navigation__link');

  Array.from(navLinks).forEach((link) =>
    link.addEventListener('click', () => {
      navButton.checked = false;
    })
  );

  return (
    <div className="popup" id="popup">
      <div className="popup__content">
        <div className="popup__left">
          <img src={Nat8} alt="Tour" className="popup__img" />
          <img src={Nat9} alt="Tour" className="popup__img" />
        </div>
        <div className="popup__right">
          <a href="#nothing" className="popup__close">
            ×
          </a>
          <h2 className="heading-secondary u-margin-bottom-small">
            Start booking now
          </h2>
          <h3 className="heading-tertiary u-margin-bottom-small">
            Important – Please read these terms before booking
          </h3>
          <p className="popup__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed sed
            risus pretium quam. Aliquam sem et tortor consequat id. Volutpat
            odio facilisis mauris sit amet massa vitae. Mi bibendum neque
            egestas congue. Placerat orci nulla pellentesque dignissim enim sit.
            Vitae semper quis lectus nulla at volutpat diam ut venenatis.
            Malesuada pellentesque elit eget gravida cum sociis natoque
            penatibus et. Proin fermentum leo vel orci porta non pulvinar neque
            laoreet. Gravida neque convallis a cras semper. Molestie at
            elementum eu facilisis sed odio morbi quis. Faucibus vitae aliquet
            nec ullamcorper sit amet risus nullam eget. Nam libero justo laoreet
            sit. Amet massa vitae tortor condimentum lacinia quis vel eros
            donec. Sit amet facilisis magna etiam. Imperdiet sed euismod nisi
            porta.
          </p>
          <a href="/#" className="btn btn--green">
            Book now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Popup;
