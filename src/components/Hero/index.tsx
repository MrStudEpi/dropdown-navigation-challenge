import "./style.css";

export default () => {
  return (
    <div className="hero">
      <img
        className="hero__image__mobile"
        src="/assets/images/image-hero-mobile.png"
        alt="Hero Mobile Image"
      />
      <div className="hero__content">
        <h1 className="hero__content__title">Make remote work</h1>
        <p className="hero__content__desc">
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar
        </p>
        <button className="hero__content__more">Learn more</button>
        <ul className="hero__content__brand-list">
            <li className="hero__content__brand-list__item"><img src="/assets/images/client-databiz.svg" /></li>
            <li className="hero__content__brand-list__item"><img src="/assets/images/client-audiophile.svg" /></li>
            <li className="hero__content__brand-list__item"><img src="/assets/images/client-meet.svg" /></li>
            <li className="hero__content__brand-list__item"><img src="/assets/images/client-maker.svg" /></li>
        </ul>
      </div>
      <img
        className="hero__image__desktop"
        src="/assets/images/image-hero-desktop.png"
        alt="Hero Mobile Image"
      />
    </div>
  );
};
