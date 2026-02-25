import './LandingPage.css'

function LandingPage() {
  return (
    <div className="landing-page">
      {/* Header */}
      <header className="header">
        <div className="container header-inner">
          <img src="/images/logo_primary.png" alt="BAM Capital" className="header-logo" />
          <a href="#apply" className="btn-primary header-cta">Book an Investment Briefing</a>
        </div>
      </header>

      {/* Hero */}
      <section className="section hero">
        <div className="hero-bg">
          <img src="/images/property_buildings.png" alt="BAM Capital properties" className="hero-bg-img" />
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-content">
          <span className="hero-callout">Accredited Investors Only</span>
          <h1>Access Institutional Multifamily Real Estate. Earn Targeted 15-20% Annualized Returns. Without Managing a Single Property.</h1>
          <p className="hero-sub">BAM Capital has completed $2B+ in transactions, delivered 33%+ average IRR on realized investments, and has never missed a preferred return payment. Watch the video below to see exactly how our vertically integrated model works.</p>
          <a href="#apply" className="btn-primary">Apply for an Investment Briefing</a>

          <div className="vsl-placeholder">
            <div className="vsl-inner">
              <div className="play-icon">&#9654;</div>
              <p>Investment Overview Video</p>
            </div>
          </div>

          <div className="proof-bar">
            <div className="proof-item"><strong>$2B+</strong><span>Transactions</span></div>
            <div className="proof-item"><strong>33%+</strong><span>Avg IRR</span></div>
            <div className="proof-item"><strong>1,600+</strong><span>Investors</span></div>
            <div className="proof-item"><strong>Zero</strong><span>Missed Preferred Returns</span></div>
            <div className="proof-item"><strong>8x</strong><span>Inc. 5000</span></div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="section section-gray">
        <div className="container">
          <h2>Your Portfolio Is More Exposed Than You Think</h2>
          <div className="content-block">
            <p>Most accredited investors have 80-90% of their net worth in public markets. Stocks, bonds, ETFs, and public REITs that all move in the same direction when there is a crisis.</p>
            <p>In 2022, the S&amp;P 500 fell 19%. Public REITs fell over 25%. Bonds lost real purchasing power to inflation. The "diversified" portfolio turned out to be a single bet on public market sentiment.</p>
            <p>You have probably considered real estate. But buying rental properties means becoming a landlord. Managing tenants, maintenance, and vacancy. For someone earning $300K+, that is an incredibly expensive use of your time.</p>
            <p>Public REITs are not the answer either. They trade on the stock exchange, correlate directly to equities, and strip out the direct tax benefits of real property ownership.</p>
            <p><strong>There is a third option that most accredited investors never discover.</strong></p>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="section section-light">
        <div className="container">
          <h2>Institutional Multifamily Real Estate, Managed Entirely For You</h2>
          <div className="solution-layout">
            <div className="solution-text">
              <p>BAM Capital is the private equity arm of The BAM Companies, a vertically integrated real estate owner and operator with $2B+ in total transaction volume.</p>
              <p>When you invest with BAM Capital, you are investing in institutional-quality multifamily properties, Class A and B+ apartment communities in strong Midwest and Southeast markets, managed entirely by our in-house team.</p>
              <p>You put up the capital. We handle everything: acquisition, management, value creation, and exit. You receive quarterly cash distributions and monitor your investment through our dedicated investor portal.</p>
              <p><strong>No tenants. No maintenance calls. No operational headaches. True passive investing.</strong></p>
            </div>
            <div className="solution-visual">
              <img src="/images/property_buildings.png" alt="BAM Capital multifamily properties" className="solution-property-img" />
              <div className="solution-founder">
                <img src="/images/ivan_barratt_headshot.png" alt="Ivan Barratt" className="solution-founder-img" />
                <div>
                  <strong>Ivan Barratt</strong>
                  <span>CEO &amp; Founder</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section section-dark">
        <div className="container">
          <h2>The BAM Vertically Integrated Model</h2>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">01</div>
              <h3>Institutional Deal Sourcing</h3>
              <p>We identify Class A and B+ multifamily properties in the $10M-$100M+ range through our proprietary network and 15+ years of institutional relationships.</p>
            </div>
            <div className="step-card">
              <div className="step-number">02</div>
              <h3>Vertical Integration</h3>
              <p>BAM owns and operates its own property management company. Our in-house team manages every property from day one. Leasing, maintenance, renovations. All under our direct control.</p>
            </div>
            <div className="step-card">
              <div className="step-number">03</div>
              <h3>Value Creation</h3>
              <p>Every property has a defined capital improvement and operational optimization plan. We drive NOI growth through strategic renovations, technology, and operational efficiency.</p>
            </div>
            <div className="step-card">
              <div className="step-number">04</div>
              <h3>Disciplined Exit</h3>
              <p>Every fund has a defined hold period and clear exit strategy. We monitor market conditions continuously and exit at the optimal time to maximize investor returns.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Track Record */}
      <section className="section section-light">
        <div className="container">
          <h2>The Track Record</h2>
          <div className="track-badges">
            <img src="/images/inc5000_badge.png" alt="8x Inc. 5000" className="track-badge" />
            <img src="/images/fund_v_logo.png" alt="BAM Multifamily Growth Fund V" className="track-badge" />
          </div>
          <div className="metrics-grid">
            <div className="metric-card">
              <div className="metric-value">$2B+</div>
              <div className="metric-label">Total Transaction Volume</div>
            </div>
            <div className="metric-card">
              <div className="metric-value">33%+</div>
              <div className="metric-label">Average IRR (Realized)</div>
            </div>
            <div className="metric-card">
              <div className="metric-value">5.08x</div>
              <div className="metric-label">Oakdale Square MOIC</div>
            </div>
            <div className="metric-card">
              <div className="metric-value">Zero</div>
              <div className="metric-label">Missed Preferred Returns</div>
            </div>
            <div className="metric-card">
              <div className="metric-value">1,600+</div>
              <div className="metric-label">Investors</div>
            </div>
            <div className="metric-card">
              <div className="metric-value">6,800+</div>
              <div className="metric-label">Units Under Management</div>
            </div>
            <div className="metric-card">
              <div className="metric-value">8x</div>
              <div className="metric-label">Inc. 5000 Recognition</div>
            </div>
            <div className="metric-card">
              <div className="metric-value">15+</div>
              <div className="metric-label">Years Operating</div>
            </div>
          </div>

          <div className="case-study-box">
            <div className="case-study-inner">
              <div className="case-study-text">
                <h3>Oakdale Square Case Study</h3>
                <p>We acquired Oakdale Square, deployed our vertically integrated value-add strategy, and exited at a <strong>5.08x multiple on invested capital</strong>. For every $100,000 invested, our LPs received over $508,000 back.</p>
                <p className="text-muted" style={{ fontSize: '14px', marginTop: '12px' }}>Past performance is not indicative of future results. All investments carry risk.</p>
              </div>
              <img src="/images/total_distributions.png" alt="BAM Capital total distributions" className="case-study-img" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-hero" id="apply">
        <div className="cta-hero-bg">
          <img src="/images/property_buildings.png" alt="BAM Capital properties" className="cta-hero-bg-img" />
          <div className="cta-hero-overlay"></div>
        </div>
        <div className="container cta-section">
          <img src="/images/fund_v_logo.png" alt="BAM Multifamily Growth Fund V" className="cta-fund-logo" />
          <h2>Ready to Explore Institutional Multifamily Real Estate?</h2>
          <p>BAM Capital is actively raising for Multifamily Growth Fund V. Allocation is limited.</p>
          <p>If you are an accredited investor with $200,000+ in investable capital and you want passive exposure to institutional multifamily real estate, apply for an investment briefing below.</p>
          <a href="#apply" className="btn-primary">Apply for an Investment Briefing</a>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-light">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-list">
            <div className="faq-item">
              <h3>What is the minimum investment?</h3>
              <p>The minimum investment for BAM Multifamily Growth Fund V is $200,000.</p>
            </div>
            <div className="faq-item">
              <h3>Do I need to be an accredited investor?</h3>
              <p>Yes. BAM Capital offerings are available exclusively to accredited investors as defined by the SEC.</p>
            </div>
            <div className="faq-item">
              <h3>What are the targeted returns?</h3>
              <p>Our historical average across realized investments is 33%+ IRR. Target returns for Fund V will be discussed during your investment briefing. Past performance is not indicative of future results.</p>
            </div>
            <div className="faq-item">
              <h3>How long is the hold period?</h3>
              <p>Typical hold periods are 3-5 years, depending on fund strategy and market conditions.</p>
            </div>
            <div className="faq-item">
              <h3>How are distributions paid?</h3>
              <p>Quarterly cash distributions, paid directly to your account.</p>
            </div>
            <div className="faq-item">
              <h3>What makes BAM Capital different from other sponsors?</h3>
              <p>Vertical integration. BAM owns and operates its own property management company. We control the full value chain from acquisition to management to exit.</p>
            </div>
            <div className="faq-item">
              <h3>Do BAM principals invest their own money?</h3>
              <p>Yes. BAM principals co-invest personal capital alongside limited partners in every fund.</p>
            </div>
            <div className="faq-item">
              <h3>What happens if I need my capital back early?</h3>
              <p>Private real estate investments are illiquid. Capital is committed for the duration of the fund. This should be treated as a long-term allocation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-inner">
          <img src="/images/logo_primary.png" alt="BAM Capital" className="footer-logo" />
          <p className="footer-disclaimer">This is not an offer to sell or a solicitation of an offer to buy any security. Offerings are made only to accredited investors through official offering documents. Past performance is not indicative of future results. All investments involve risk, including loss of principal. Securities offered through applicable exemptions under Regulation D.</p>
          <p className="footer-copy">&copy; 2026 BAM Capital. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage
