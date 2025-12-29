function App() {
  return (
    <div>
      {/* NAV */}
      <header className="nav">
        <div className="navInner">
          <div className="brand">
            <span className="brandMark">S</span>
            <span className="brandName">Sena Services</span>
          </div>

          <nav className="navLinks">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact" className="button small">
              Get a free consultation
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="hero">
          <div className="container">
            <p className="pill">Bookkeeping • Payroll • Self Assessment</p>

            <h1>
              Straightforward bookkeeping for small businesses that want clarity
              and control.
            </h1>

            <p className="lead">
              Sena Services provides reliable bookkeeping and accounting support
              for small businesses and sole traders. Clear records, simple
              communication, and dependable support — without unnecessary
              complexity.
            </p>

            <div className="heroActions">
              <a className="button" href="#contact">
                Get a free consultation
              </a>
              <a className="button ghost" href="#services">
                View services
              </a>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="section" id="services">
          <div className="container">
            <h2>Services</h2>
            <p className="subhead">
              Practical support tailored to small businesses, contractors, and
              sole traders.
            </p>

            <div className="grid3">
              <div className="card">
                <h3>Bookkeeping</h3>
                <p>
                  Accurate, up-to-date bookkeeping to keep your records
                  organised and compliant.
                </p>
                <ul>
                  <li>Income and expense tracking</li>
                  <li>Bank reconciliation</li>
                  <li>Monthly summaries</li>
                </ul>
              </div>

              <div className="card">
                <h3>Payroll</h3>
                <p>
                  Reliable payroll processing with deadlines handled correctly
                  and payslips issued on time.
                </p>
                <ul>
                  <li>Monthly payroll runs</li>
                  <li>Payslips and submissions</li>
                  <li>Starter and leaver support</li>
                </ul>
              </div>

              <div className="card">
                <h3>Self Assessment</h3>
                <p>
                  Support preparing and submitting your self-assessment return
                  accurately and on time.
                </p>
                <ul>
                  <li>Review of income and expenses</li>
                  <li>Allowable deductions</li>
                  <li>Submission support</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="section" id="about">
          <div className="container">
            <h2>About Sena Services</h2>
            <p>
              Sena Services supports small business owners who want their
              finances handled properly without unnecessary jargon or stress.
            </p>
            <p>
              The focus is on clear communication, tidy records, and dependable
              support, so you always know where you stand.
            </p>
            <p className="muted">
              Based in London • Supporting clients across the UK
            </p>
          </div>
        </section>

        {/* CONTACT */}
        <section className="section" id="contact">
          <div className="container">
            <h2>Get in touch</h2>
            <p className="subhead">
              If you’d like to discuss your bookkeeping or accounting needs,
              send a message and I’ll get back to you.
            </p>

            <form className="form">
              <input type="text" placeholder="Your name" />
              <input type="email" placeholder="Your email address" />
              <textarea
                rows="4"
                placeholder="Tell me briefly how I can help"
              ></textarea>

              <button className="button" type="button">
                Send message
              </button>

              <p className="muted smallText">
                Initial consultations are informal and obligation-free.
              </p>
            </form>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        © {new Date().getFullYear()} Sena Services — Bookkeeping and accounting
        support for small businesses
      </footer>
    </div>
  );
}

export default App;
