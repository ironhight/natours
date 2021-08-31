import LogoGreenSmall1x from '../../assets/img/logo-green-small-1x.png';
import LogoGreenSmall2x from '../../assets/img/logo-green-small-2x.png';
import LogoGreen1x from '../../assets/img/logo-green-1x.png';
import LogoGreen2x from '../../assets/img/logo-green-2x.png';

const Footer = () => (
  <footer className="footer">
    <div className="footer__logo-box">
      <picture className="footer__logo">
        <source
          //   srcSet="img/logo-green-small-1x.png 1x, img/logo-green-small-2x.png 2x"
          srcSet={`${LogoGreenSmall1x} 1x, ${LogoGreenSmall2x} 2x`}
          media="(max-width: 37.5em)"
        />
        <img
          //   srcSet="img/logo-green-1x.png 1x, img/logo-green-2x.png 2x"
          srcSet={`${LogoGreen1x} 1x, ${LogoGreen2x} 2x`}
          alt="Full logo"
          src={LogoGreen2x}
        />
      </picture>
    </div>
    <div className="row">
      <div className="col-1-of-2">
        <div className="footer__navigation">
          <ul className="footer__list">
            <li className="footer__item">
              <a href="/#" className="footer__link">
                Company
              </a>
            </li>
            <li className="footer__item">
              <a href="/#" className="footer__link">
                Contact us
              </a>
            </li>
            <li className="footer__item">
              <a href="/#" className="footer__link">
                Carrers
              </a>
            </li>
            <li className="footer__item">
              <a href="/#" className="footer__link">
                Privacy policy
              </a>
            </li>
            <li className="footer__item">
              <a href="/#" className="footer__link">
                Terms
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-1-of-2">
        <p className="footer__copyright">
          Built by{' '}
          <a href="/#" className="footer__link">
            Natours Team
          </a>
          . Copyright &copy; 2021 by Natours.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
