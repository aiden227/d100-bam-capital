import './ThankYouPage.css'

function ThankYouPage() {
  return (
    <div className="thankyou-page">
      {/* Header */}
      <header className="header">
        <div className="container header-inner">
          <img src="/images/logo_primary.png" alt="BAM Capital" className="header-logo" />
        </div>
      </header>

      {/* Confirmation Hero */}
      <section className="section ty-hero">
        <div className="ty-hero-bg">
          <img src="/images/property_altitude_banner.jpg" alt="BAM Capital properties" className="ty-hero-bg-img" />
          <div className="ty-hero-overlay"></div>
        </div>
        <div className="container ty-hero-content">
          <div className="ty-check">&#10003;</div>
          <h1>Your Investment Briefing Application Has Been Submitted.</h1>
          <p>Our investor relations team will be in touch within 24 hours to schedule your briefing. In the meantime, complete the prep below to make the most of our conversation.</p>
          <div className="ty-video-placeholder">
            <div className="ty-video-inner">
              <div className="video-play">&#9654;</div>
              <span className="ty-video-label">Thank You Video</span>
            </div>
          </div>
          <a href="#prep" className="btn-primary">Complete Your Pre-Call Prep</a>
          <p className="ty-reschedule">Need to reschedule? <a href="#">Click here</a></p>
        </div>
      </section>

      {/* Breakout Videos */}
      <section className="section section-light">
        <div className="container">
          <h2>Watch These While You Wait</h2>
          <div className="videos-grid">
            <div className="video-card">
              <div className="video-placeholder">
                <img src="/images/ivan_barratt_headshot.png" alt="Ivan Barratt" className="video-avatar" />
                <div className="video-play">&#9654;</div>
              </div>
              <h3>Here Is Exactly What Happens Next</h3>
              <p className="text-muted">2 min</p>
            </div>
            <div className="video-card">
              <div className="video-placeholder">
                <img src="/images/ivan_barratt_headshot.png" alt="Ivan Barratt" className="video-avatar" />
                <div className="video-play">&#9654;</div>
              </div>
              <h3>Is BAM Capital Right For You?</h3>
              <p className="text-muted">2 min</p>
            </div>
            <div className="video-card">
              <div className="video-placeholder">
                <img src="/images/ivan_barratt_headshot.png" alt="Ivan Barratt" className="video-avatar" />
                <div className="video-play">&#9654;</div>
              </div>
              <h3>How BAM Generates 33%+ Avg IRR</h3>
              <p className="text-muted">2 min</p>
            </div>
            <div className="video-card">
              <div className="video-placeholder">
                <img src="/images/ivan_barratt_headshot.png" alt="Ivan Barratt" className="video-avatar" />
                <div className="video-play">&#9654;</div>
              </div>
              <h3>Your Top 3 Questions Answered</h3>
              <p className="text-muted">2 min</p>
            </div>
            <div className="video-card">
              <div className="video-placeholder">
                <img src="/images/ivan_barratt_headshot.png" alt="Ivan Barratt" className="video-avatar" />
                <div className="video-play">&#9654;</div>
              </div>
              <h3>Do This Before Our Call</h3>
              <p className="text-muted">2 min</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section section-light">
        <div className="container">
          <h2>Here Is Exactly What Happens From Here</h2>
          <div className="timeline-layout">
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-marker">1</div>
                <div className="timeline-content">
                  <strong>Now</strong>
                  <p>You receive a confirmation email with your research resources</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker">2</div>
                <div className="timeline-content">
                  <strong>Within 24 hours</strong>
                  <p>Our investor relations team reaches out to schedule your briefing</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker">3</div>
                <div className="timeline-content">
                  <strong>Days 2-6</strong>
                  <p>You receive a series of emails with fund details, case studies, and FAQ answers</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker">4</div>
                <div className="timeline-content">
                  <strong>Day before call</strong>
                  <p>You receive a reminder with your prep checklist</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker">5</div>
                <div className="timeline-content">
                  <strong>1 hour before call</strong>
                  <p>Final reminder with calendar link and dial-in details</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker">6</div>
                <div className="timeline-content">
                  <strong>Call time</strong>
                  <p>20-30 minute briefing covering fund details, your questions, and next steps</p>
                </div>
              </div>
            </div>
            <div className="timeline-team">
              <h3>Your Investor Relations Team</h3>
              <div className="team-member">
                <img src="/images/jim_fox_headshot.png" alt="Jim Fox" className="team-headshot" />
                <div>
                  <strong>Jim Fox</strong>
                  <span>Investor Relations</span>
                </div>
              </div>
              <div className="team-member">
                <img src="/images/emilee_meyers_headshot.png" alt="Emilee Meyers" className="team-headshot" />
                <div>
                  <strong>Emilee Meyers</strong>
                  <span>Investor Relations</span>
                </div>
              </div>
              <div className="team-member">
                <img src="/images/greg_sylvester_headshot.png" alt="Greg Sylvester" className="team-headshot" />
                <div>
                  <strong>Greg Sylvester</strong>
                  <span>Investor Relations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="section section-gray">
        <div className="container">
          <h2>BAM Capital Is Built for a Specific Type of Investor</h2>
          <div className="fit-grid">
            <div className="fit-column fit-yes">
              <h3 className="text-accent">You Are a Fit If:</h3>
              <ul>
                <li>You are an accredited investor (income $200K+/individual or $300K+/joint, or net worth $1M+ excluding primary residence)</li>
                <li>You have $200,000+ in liquid capital available to deploy</li>
                <li>You have a 3-5 year investment horizon</li>
                <li>You want passive quarterly income from institutional multifamily real estate</li>
                <li>You are ready to have a direct, transparent conversation about your portfolio</li>
              </ul>
            </div>
            <div className="fit-column fit-no">
              <h3>You Are Not a Fit If:</h3>
              <ul>
                <li>You need your capital back within 12 months</li>
                <li>You are looking for guaranteed returns</li>
                <li>You are not an accredited investor</li>
                <li>You are looking for a speculative, high-risk trading opportunity</li>
                <li>You are not prepared to make a decision within a reasonable timeframe</li>
              </ul>
            </div>
          </div>
          <p className="fit-note">If you realize this is not the right fit, no hard feelings. You can reschedule or cancel using the link in your confirmation email.</p>
        </div>
      </section>

      {/* Mechanism */}
      <section className="section section-dark">
        <div className="container">
          <h2>How BAM Capital Has Delivered 33%+ Average IRR</h2>
          <div className="mechanism-hero-img">
            <img src="/images/property_crossing5_banner.png" alt="BAM Capital Crossing 5 property" />
          </div>
          <div className="mechanism-steps">
            <div className="mechanism-step">
              <div className="mechanism-number">01</div>
              <h3>Institutional Deal Sourcing</h3>
              <p>Class A and B+ multifamily properties, $10M-$100M+ range, sourced through 15+ years of institutional relationships.</p>
              <div className="mechanism-kpi">KPI: Acquisition basis below replacement cost in target markets</div>
            </div>
            <div className="mechanism-step">
              <div className="mechanism-number">02</div>
              <h3>Vertical Integration</h3>
              <p>BAM manages every property with its own in-house team. No third-party management. Full control over operations, expenses, and the resident experience.</p>
              <div className="mechanism-kpi">KPI: NOI growth through direct operational control</div>
            </div>
            <div className="mechanism-step">
              <div className="mechanism-number">03</div>
              <h3>Value Creation &amp; Disciplined Exit</h3>
              <p>Defined capital improvement plans, operational optimization, and strategic exits at optimal market timing.</p>
              <div className="mechanism-kpi">KPI: 33%+ average IRR on realized investments. 5.08x MOIC on Oakdale Square.</div>
            </div>
          </div>
          <p className="mechanism-disclaimer">Past performance is not indicative of future results. All investments carry risk.</p>
        </div>
      </section>

      {/* Objection Handling */}
      <section className="section section-light">
        <div className="container">
          <h2>Common Questions</h2>
          <div className="qa-list">
            <div className="qa-item">
              <h3>Is my capital safe?</h3>
              <p>All investments carry risk. BAM mitigates risk through institutional underwriting, vertical integration, and structural alignment. BAM only collects carried interest after your preferred return is paid first. Principals co-invest in every fund. Zero missed preferred returns in company history.</p>
            </div>
            <div className="qa-item">
              <h3>What about liquidity?</h3>
              <p>Private real estate is illiquid. Typical hold periods are 3-5 years. In exchange for that illiquidity, you access an asset class with historically stronger risk-adjusted returns than public markets, plus direct tax benefits.</p>
            </div>
            <div className="qa-item">
              <h3>How is BAM different from other sponsors?</h3>
              <p>Vertical integration. BAM owns its property management company. Most sponsors outsource to third parties. With 6,800+ units managed in-house and $2B+ in transactions, our operational control is a proven differentiator.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Prep Section */}
      <section className="section section-gray" id="prep">
        <div className="container">
          <div className="prep-header">
            <img src="/images/ivan_barratt_headshot.png" alt="Ivan Barratt" className="prep-founder-img" />
            <div>
              <h2>How to Prepare for Your Investment Briefing</h2>
              <p className="prep-subtitle">From Ivan Barratt, CEO &amp; Founder</p>
            </div>
          </div>
          <div className="prep-grid">
            <div className="prep-item">
              <div className="prep-icon">&#128176;</div>
              <h3>Know Your Capital</h3>
              <p>Our minimum is $200,000. Know how much liquid capital you have available and what percentage you are considering allocating to real estate.</p>
            </div>
            <div className="prep-item">
              <div className="prep-icon">&#127919;</div>
              <h3>Define Your Goals</h3>
              <p>Are you optimizing for cash flow, total return, tax advantages, or diversification? Knowing this helps us tailor the conversation.</p>
            </div>
            <div className="prep-item">
              <div className="prep-icon">&#10067;</div>
              <h3>Prepare Questions</h3>
              <p>The briefing is not a pitch. It is a conversation. Prepare 2-3 specific questions about the fund, strategy, or team.</p>
            </div>
            <div className="prep-item">
              <div className="prep-icon">&#128231;</div>
              <h3>Check Your Email</h3>
              <p>We will send you resources between now and your briefing. Review them so we can have a deeper, more productive conversation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section section-dark">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Complete Your Prep. Show Up Ready.</h2>
          <div style={{ marginTop: '24px', display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#" className="btn-primary">Add Briefing to Calendar</a>
            <a href="#" className="btn-secondary" style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'var(--color-white)' }}>Need to Reschedule?</a>
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

export default ThankYouPage
