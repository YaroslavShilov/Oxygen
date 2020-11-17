import React from "react";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="header">
        <div className="header__top">
          <div className="container">
            <div className="header__top-inner">
              <div className="logo">
                <a className="logo__link" href="#">
                  <img className="logo__img" src="" alt="logo" />
                </a>
              </div>
              <nav className="menu">
                <ul className="menu__list">
                  <li className="menu__list-item">
                    <a className="menu__link menu__link--active" href="#">
                      Home
                    </a>
                  </li>
                  <li className="menu__list-item">
                    <a className="menu__link" href="#">
                      About Us
                    </a>
                  </li>
                  <li className="menu__list-item">
                    <a className="menu__link" href="#">
                      Portfolio
                    </a>
                  </li>
                  <li className="menu__list-item">
                    <a className="menu__link" href="#">
                      Our team
                    </a>
                  </li>
                  <li className="menu__list-item">
                    <a className="menu__link" href="#">
                      Blog
                    </a>
                  </li>
                  <li className="menu__list-item">
                    <a className="menu__link" href="#">
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="header__content">
          <div className="container">
            <div className="header__content-inner">
              <h1 className="header__title">Oxygen</h1>
              <p className="header__description">Starter UI KIT</p>
              <div className="header__content-decor" />
            </div>
          </div>
        </div>
      </header>

      <section className="about">
        <div className="container">
          <div className="about__inner">
            <h2 className="title">About Us</h2>
            <div className="about__text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquam, atque aut consequatur dignissimos doloribus eaque
                eligendi est facere in laborum magnam nemo quam quod reiciendis
                repellendus saepe, sapiente sequi tempora.
              </p>
              <p>
                Aut illum porro quae suscipit tempore totam ut voluptatum!
                Accusamus assumenda at dolorem enim esse labore nihil,
                praesentium quaerat qui ratione unde vel veritatis. Distinctio
                facere fuga omnis reiciendis rerum?
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="expertise">
        <div className="container">
          <h2 className="title">Our Expertise</h2>

          <div className="expertise__content">
            <div className="expertise__content-items">
              <div className="expertise__content-item">Branding</div>
              <div className="expertise__content-item">Design</div>
              <div className="expertise__content-item">Development</div>
            </div>
            <div className="expertise__content-text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Consequatur deserunt dignissimos earum eos excepturi illo libero
                maiores necessitatibus non porro, praesentium, quisquam quo
                suscipit, tenetur totam ullam ut voluptate. Exercitationem.
              </p>
              <p>
                Alias architecto delectus, dolor doloremque doloribus eius
                eligendi est, et explicabo fugiat impedit magni minus nam
                nostrum obcaecati provident quibusdam repudiandae ullam. Amet
                commodi distinctio exercitationem ipsum necessitatibus quo
                sapiente!
              </p>
            </div>
          </div>
          <div className="expertise__items">
            <div className="expertise__item">
              <img className="expertise__item-img" src="" alt="icon" />
              <div className="expertise__item-box">
                <div className="expertise__item-title">Graphic design</div>
                <div className="expertise__item-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Asperiores excepturi pariatur praesentium quaerat quas.
                  Consectetur ipsa iusto neque nulla qui quis reprehenderit
                  rerum, vero. Impedit incidunt ipsum quo sapiente ut.
                </div>
              </div>
            </div>
            <div className="expertise__item">
              <img className="expertise__item-img" src="" alt="icon" />
              <div className="expertise__item-box">
                <div className="expertise__item-title">Web Development</div>
                <div className="expertise__item-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Asperiores excepturi pariatur praesentium quaerat quas.
                  Consectetur ipsa iusto neque nulla qui quis reprehenderit
                  rerum, vero. Impedit incidunt ipsum quo sapiente ut.
                </div>
              </div>
            </div>
            <div className="expertise__item">
              <img className="expertise__item-img" src="" alt="icon" />
              <div className="expertise__item-box">
                <div className="expertise__item-title">Marketing</div>
                <div className="expertise__item-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Asperiores excepturi pariatur praesentium quaerat quas.
                  Consectetur ipsa iusto neque nulla qui quis reprehenderit
                  rerum, vero. Impedit incidunt ipsum quo sapiente ut.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <div className="features__inner">
            <h2 className="features__title title">Let's make magic.</h2>
            <div className="features__text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deleniti, dolores exercitationem explicabo harum inventore iusto
                magnam maxime natus numquam odio placeat quas, repudiandae
                tempora totam, vel velit vero vitae voluptatum!
              </p>
              <p>
                Corporis ipsum natus quia sint! Consectetur dicta dolorem ea eos
                rem vero voluptatibus? Aspernatur, aut deserunt dolor fugit
                harum id illum, labore nemo nesciunt odio odit optio quis sit
                temporibus.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio">
        <div className="container">
          <div className="portfolio__head">
            <h2 className="title">Portfolio</h2>
            <ul className="portfolio__tabs">
              <li className="portfolio__tab">
                <button className="portfolio__tab-btn">All</button>
              </li>
              <li className="portfolio__tab">
                <button className="portfolio__tab-btn">Branding</button>
              </li>
              <li className="portfolio__tab">
                <button className="portfolio__tab-btn">Photography</button>
              </li>
              <li className="portfolio__tab">
                <button className="portfolio__tab-btn">Illustration</button>
              </li>
            </ul>
          </div>

          <div className="portfolio__items">
            <div className="portfolio__item">
              <div className="portfolio__item-title">Occa cupidatat</div>
              <div className="portfolio__item-desc">Design</div>
            </div>
            <div className="portfolio__item">
              <div className="portfolio__item-title">Occa cupidatat</div>
              <div className="portfolio__item-desc">Design</div>
            </div>
            <div className="portfolio__item">
              <div className="portfolio__item-title">Occa cupidatat</div>
              <div className="portfolio__item-desc">Design</div>
            </div>
            <div className="portfolio__item">
              <div className="portfolio__item-title">Occa cupidatat</div>
              <div className="portfolio__item-desc">Design</div>
            </div>
            <div className="portfolio__item">
              <div className="portfolio__item-title">Occa cupidatat</div>
              <div className="portfolio__item-desc">Design</div>
            </div>
            <div className="portfolio__item">
              <div className="portfolio__item-title">Occa cupidatat</div>
              <div className="portfolio__item-desc">Design</div>
            </div>
            <div className="portfolio__item">
              <div className="portfolio__item-title">Occa cupidatat</div>
              <div className="portfolio__item-desc">Design</div>
            </div>
            <div className="portfolio__item">
              <div className="portfolio__item-title">Occa cupidatat</div>
              <div className="portfolio__item-desc">Design</div>
            </div>
            <div className="portfolio__item">
              <div className="portfolio__item-title">Occa cupidatat</div>
              <div className="portfolio__item-desc">Design</div>
            </div>
          </div>

          <button className="portfolio__btn">View more projects</button>
        </div>
      </section>

      <section className="video">
        <div className="container">
          <div className="video__quotes">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
            autem beatae culpa cupiditate eum, exercitationem impedit ipsa
            labore magnam maxime neque perspiciatis soluta tempora tempore
            tenetur, unde vel vitae voluptatem.
          </div>

          <div className="video__quotes-author">Super Person</div>
          <video className="video__content" src="" />
        </div>
      </section>

      <section className="statistics">
        <div className="container">
          <div className="statistics__inner">
            <div className="statistics__item">
              <p className="statistics__item-num">305</p>
              <p className="statistics__item-text">Web Designs</p>
            </div>

            <div className="statistics__item">
              <p className="statistics__item-num">220</p>
              <p className="statistics__item-text">Logo Designs</p>
            </div>

            <div className="statistics__item">
              <p className="statistics__item-num">52</p>
              <p className="statistics__item-text">Print Designs</p>
            </div>

            <div className="statistics__item">
              <p className="statistics__item-num">88</p>
              <p className="statistics__item-text">Mobile Apps</p>
            </div>
          </div>
        </div>
      </section>

      <section className="slider">
        <div className="content">
          <div className="slider__inner">
            <div className="slider__item">
              <h2 className="slider__item-title">
                Then they show that show to the people who make shows
              </h2>
              <p className="slider__item-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                dignissimos distinctio dolorem dolores fugit id labore libero
                magnam maiores omnis placeat porro provident quaerat ratione,
                recusandae rem sunt totam vitae?
              </p>
            </div>

            <div className="slider__item">
              <h2 className="slider__item-title">
                Then they show that show to the people who make shows
              </h2>
              <p className="slider__item-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                dignissimos distinctio dolorem dolores fugit id labore libero
                magnam maiores omnis placeat porro provident quaerat ratione,
                recusandae rem sunt totam vitae?
              </p>
            </div>

            <div className="slider__item">
              <h2 className="slider__item-title">
                Then they show that show to the people who make shows
              </h2>
              <p className="slider__item-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                dignissimos distinctio dolorem dolores fugit id labore libero
                magnam maiores omnis placeat porro provident quaerat ratione,
                recusandae rem sunt totam vitae?
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="team">
        <div className="container">
          <h2 className="title">
            Our Team
          </h2>
          <div className="team__items">
            <div className="team__item">
              <img className="team__item-img" src="" alt="photo"/>
              <h3 className="team__item-name">Bernard sparks</h3>
              <p className="team__item-position">CEO</p>
            </div>

            <div className="team__item">
              <img className="team__item-img" src="" alt="photo"/>
              <h3 className="team__item-name">Minerva Benson</h3>
              <p className="team__item-position">Co-Founder</p>
            </div>

            <div className="team__item">
              <img className="team__item-img" src="" alt="photo"/>
              <h3 className="team__item-name">Jared Olson</h3>
              <p className="team__item-position">Sales</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing">
        <div className="container">
          <h2 className="title">Pricing Plans</h2>
        </div>

        <div className="pricing__items">
          <div className="pricing__item">
            <p className="pricing__item-name">Basic</p>
            <div className="pricing__item-rate">

            </div>
            <ul className="pricing__list">
              <li className="pricing__list-item">1 Logo Design</li>
              <li className="pricing__list-item">1 Website Design</li>
              <li className="pricing__list-item">1 Domain Free</li>
              <li className="pricing__list-item">3 Month License</li>
              <li className="pricing__list-item">1 GB Storage</li>
            </ul>
            <button className="pricing__btn">Choose plan</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
