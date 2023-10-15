function AboutPage() {
  return (
    <>
      <section className="section-aboutme">
        <div className="container">
          <h1 className="aboutme-section-heading">About Me</h1>
          <ul className="aboutme-col-list">
            <li className="aboutme-col-left">
              <p>
                Hey there! I'm Alice. Thanks for taking the time to check out my
                portfolio! :)
              </p>
              <p>
                You may have guessed this from my work already, but I am a
                multidisciplinary enthusiast who loves programming, art, and
                games. I adore the creative process of bringing ideas to life -
                whether that means working on a new game project, painting an
                illustration of my next D&D character, or anything in between!
              </p>
              <p>
                For me, the most rewarding part of creativity is growth. I'm
                constantly seeking new challenges and ways to push myself to
                improve, and a lot of my work is driven by experimentation.
              </p>
              <p>
                Aside from that, I love playing games - I could never list all
                of my favourites, but recent additions to the list include:
                Elden Ring, Fire Emblem: Three Houses, and Baldur's Gate 3 (I
                loved it way before I got to work on it!). I also play D&D and
                enjoy tabletop games in general.
              </p>
              <p>
                Other than games, I'm a big melomaniac - I play guitar and sing;
                and I love exploring new places. In particular, centuries-old
                castles and cathedrals (when I get the opportunity), as well as
                historical museums (especially if they have medieval armour or
                weapon exhibits!).
              </p>
              <p>
                For the sake of convenience, I've also listed some of my
                professional experience below!
              </p>
            </li>
            <li className="aboutme-col-right">
              <img
                src="/img/avatar/self2.jpg"
                alt=""
                className="aboutme-image"
              />
            </li>
          </ul>
        </div>
      </section>
      <section className="section-experience" id="experience">
        <div className="container">
          <h1 className="experience-section-heading">Experience</h1>
          <ul className="experience-list">
            <li className="experience-item">
              <img
                src="/img/logos/larian-studios.png"
                alt="Larian Studios Logo"
                className="experience-logo"
              />
              <div className="experience-mid-content">
                <h3 className="experience-workplace">Larian Studios</h3>
                <h4 className="experience-date">Sep 2021 - Feb 2023</h4>
              </div>
              <div className="experience-right-content">
                <h3 className="experience-title">Capture Artist</h3>
                <p className="experience-description">
                  As a Capture Artist at Larian, I worked on producing the game
                  trailers and marketing content for Baldur's Gate 3, from
                  pitching and recording to editing and post-production.
                </p>
              </div>
            </li>
            <li className="experience-item">
              <img
                src="/img/logos/unity.png"
                alt="Unity Technologies Logo"
                className="experience-logo"
              />
              <div className="experience-mid-content">
                <h3 className="experience-workplace">Unity Technologies</h3>
                <h4 className="experience-date">Sep 2020 - Sep 2021</h4>
              </div>
              <div className="experience-right-content">
                <h3 className="experience-title">Technical Writer</h3>
                <p className="experience-description">
                  My mission as a Technical Writer at Unity was to create clear,
                  concise, and accurate technical documentation for our users,
                  giving them all the information necessary to achieve their
                  creative goals with Unity.
                </p>
              </div>
            </li>
            <li className="experience-item">
              <img
                src="/img/logos/unity.png"
                alt="Unity Technologies Logo"
                className="experience-logo"
              />
              <div className="experience-mid-content">
                <h3 className="experience-workplace">Unity Technologies</h3>
                <h4 className="experience-date">Jul 2018 - Jul 2019</h4>
              </div>
              <div className="experience-right-content">
                <h3 className="experience-title">Developer Advocate</h3>
                <p className="experience-description">
                  As a Developer Advocate, I was responsible for representing
                  Unity in front of the developer community at large, engaging
                  with creators online and at events and conventions.
                </p>
                <p className="experience-description">
                  I was also responsible for producing and delivering technical
                  demo content, which involved working with the new features of
                  the engine in order to showcase them to our community in the
                  context of a working project.
                </p>
              </div>
            </li>
          </ul>
          <h1 className="experience-section-heading">Education</h1>
          <ul className="experience-list">
            <li className="experience-item">
              <img
                src="/img/logos/city-uni.png"
                alt="City, University of London Logo"
                className="experience-logo"
              />
              <div className="experience-mid-content">
                <h3 className="experience-workplace">
                  City, University of London
                </h3>
                <h4 className="experience-date">Sep 2016 - Jul 2020</h4>
              </div>
              <div className="experience-right-content">
                <h3 className="experience-title">
                  BSc Computer Science with Games Technology
                </h3>
                <p className="experience-description">
                  Graduated with First-Class Honours (1:1). I studied software
                  engineering concepts such as data structures, algorithms and
                  algorithmic complexity, and engineering patterns; and their
                  application in the context of software and game development.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
