function App() {
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
    </div>
  );
}

export default App;
