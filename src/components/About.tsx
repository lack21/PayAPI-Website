function About() {
  return (
    <>
      <div className="sub-circle"></div>

      <section className="about">
        <h1 className="title">
          We empower innovators by delivering access to the financial system
        </h1>

        <article className="article">
          <h3 className="name">Our Vision</h3>
          <p className="text">
            Our main goal is to build beautiful consumer experiences along with
            developer-friendly infrastructure. The result is an intelligent tool
            that gives everyone the ability to create amazing products that
            solve big problems. We are deeply focused on democratizing financial
            services through technology.
          </p>
        </article>
        <article className="article">
          <h3 className="name">Our Business</h3>
          <p className="text">
            At the core of our platform is the technical infrastructure APIs
            that connect consumers. Our innovative product provides key insights
            for businesses and individuals, as well as robust reporting for
            traditional financial institutions and developers.
          </p>
        </article>
      </section>

      <div className="second-banner"></div>

      <section className="info">
        <div className="row">
          <div className="item">
            <h3 className="name">Team Members</h3>
            <h4 className="number">300+</h4>
          </div>
          <div className="item">
            <h3 className="name">Offices in the US</h3>
            <h4 className="number">3</h4>
          </div>
          <div className="item">
            <h3 className="name">Transactions analyzed</h3>
            <h4 className="number">10M+</h4>
          </div>
        </div>

        <article className="article">
          <h3 className="name">The Culture</h3>
          <p className="text">
            We strongly believe there's always an opportunity to learn from each
            other outside of day-to-day work, whether it's company-wide
            offsites, internal hackathons, or co-worker meetups. We always value
            cross-team collaboration and diversity of thought, no matter the job
            title.
          </p>
        </article>
        <article className="article">
          <h3 className="name">The People</h3>
          <p className="text">
            We're all passionate about building a more efficient and inclusive
            financial infrastructure together. At PayAPI, we have diverse
            backgrounds and skills.
          </p>
        </article>
      </section>
    </>
  );
}

export default About;
