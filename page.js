// nextjs-nexauva/app/page.js
import Script from 'next/script';

export default function HomePage() {
  return (
    <>
      <div className="conainer"> {/* Assuming 'conainer' is intentional or to be corrected to 'container' later */}
        <div className="header-container">
          <button
            type="button"
            id="hamburger-menu"
            aria-label="Open navigation menu"
            aria-expanded="false"
          >
            <span /> <span />
            <span />
          </button>
          <div id="site-logo-container">
            <img
              src="/assets/logo-transparent-small.png" // Path updated
              alt="Nexauva Logo"
              className="header-logo"
            />
          </div>
          <div id="nav-bar">
            <div className="nav-btn" data-section="about">About Us</div>
            <div className="nav-btn" data-section="services">Services</div>
            <div className="nav-btn" data-section="projects">Projects</div>
            <div className="nav-btn" data-section="contact">Contact</div>
          </div>
          <div id="back-to-home" />
        </div>

        <div id="loading-dot" />
        <div id="text-overlay">
          <div id="company-name"><span>Nexauva</span></div>
          <div id="tagline">Where Ideas Meet Intelligence</div>
        </div>
        <div id="content-section">
          <div id="content-container">
            {/* Services Section */}
            <div id="services-section" className="section-content">
              <div className="section-header">
                <h1>Our Expertise</h1>
                <p className="section-intro">
                  Nexauva delivers comprehensive intelligent solutions designed to
                  transform your business operations and create strategic
                  advantages in today's competitive market.
                </p>
              </div>

              <div className="services-container">
                <div className="service-card">
                  <div className="service-icon">🤖</div>
                  <h3>AI Product Development</h3>
                  <p>
                    Custom AI solutions built from the ground up, including
                    recommendation systems, predictive analytics, computer vision
                    applications, and natural language processing tools.
                  </p>
                </div>

                <div className="service-card">
                  <div className="service-icon">💼</div>
                  <h3>Enterprise Software Digitalization</h3>
                  <p>
                    Comprehensive digital transformation of legacy systems,
                    workflow automation, and enterprise-wide software integration
                    solutions.
                  </p>
                </div>

                <div className="service-card">
                  <div className="service-icon">📊</div>
                  <h3>Intelligent Analytics</h3>
                  <p>
                    Advanced data processing platforms that convert raw data into
                    actionable insights through machine learning and statistical
                    analysis.
                  </p>
                </div>

                <div className="service-card">
                  <div className="service-icon">💬</div>
                  <h3>Conversational AI</h3>
                  <p>
                    Sophisticated chatbots and virtual assistants that enhance
                    customer service, streamline operations, and provide 24/7
                    support capabilities.
                  </p>
                </div>

                <div className="service-card">
                  <div className="service-icon">🎯</div>
                  <h3>Digital Strategy Consulting</h3>
                  <p>
                    Strategic guidance on implementing AI technologies, digital
                    transformation roadmaps, and innovation management frameworks.
                  </p>
                </div>

                <div className="service-card">
                  <div className="service-icon">⚡</div>
                  <h3>Process Automation</h3>
                  <p>
                    Robotic Process Automation (RPA) and intelligent workflow
                    solutions that reduce manual tasks and optimize business
                    processes.
                  </p>
                </div>
              </div>

              <div className="consulting-section">
                <div className="consulting-content">
                  <h3>AI & Software Engineering Consulting</h3>
                  <p>
                    Unlock the full potential of Artificial Intelligence with
                    expert guidance in infrastructure, integration, and scalable
                    system design. I offer consulting services tailored to
                    companies seeking to integrate AI into their operations,
                    modernize their software architecture, or scale efficiently
                    with data-driven solutions.
                  </p>

                  <div className="expertise-section">
                    <h4>Core Areas of Expertise</h4>
                    <ul className="expertise-list">
                      <li>
                        <strong>AI Infrastructure & Integration:</strong> Design
                        and implement robust AI infrastructure that supports
                        experimentation, deployment, and scaling of AI/ML models
                      </li>
                      <li>
                        <strong>Data Strategy:</strong> Build scalable Data Mesh
                        architectures, modern data warehouses, and centralized
                        data solutions
                      </li>
                      <li>
                        <strong>Workflow & AI Adoption:</strong> Integrate AI into
                        existing workflows and automate key processes using AI/ML
                        technologies
                      </li>
                      <li>
                        <strong>Software Architecture & Cloud Engineering:</strong>
                        Modernize system architecture with scalable,
                        cloud-optimized solutions
                      </li>
                      <li>
                        <strong>Software Engineering and Development:</strong>
                        Provide expert guidance on software engineering best
                        practices, including code quality, testing, and deployment
                      </li>
                    </ul>
                  </div>

                  <div className="pricing-section">
                    <h4>Consulting Rates</h4>
                    <div className="pricing-grid">
                      <div className="price-card">
                        <span className="rate">€200/hour</span>
                        <span className="description">Standard hourly rate</span>
                        <a
                          href="https://buy.stripe.com/bJeeVec1V8BA2kG1lu5Vu01"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="buy-now-btn"
                        >Book Now</a>
                      </div>
                      <div className="price-card featured">
                        <span className="rate">€160/hour</span>
                        <span className="description">5-hour consultation package</span>
                        <span className="savings">Save €200 with package deal</span>
                        <a
                          href="https://buy.stripe.com/eVqdRa4ztdVU4sOd4c5Vu00"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="buy-now-btn featured"
                        >Book Package</a>
                      </div>
                    </div>
                  </div>
                  <div className="schedule-call">
                    <a
                      href="https://calendly.com/hello-nexauva/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="schedule-btn"
                    >
                      Schedule free a 20-Minute Discovery Call
                    </a>
                    <p className="schedule-info">
                      Book a free discovery call to discuss your AI and software
                      needs
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Projects Section */}
            <div id="projects-section" className="section-content">
              <div className="section-header">
                <h1>Our Success Stories</h1>
                <p className="section-intro">
                  Explore how our cutting-edge solutions have delivered measurable
                  impact for our clients across industries. Each project
                  represents our commitment to excellence and innovation.
                </p>
              </div>

              <div className="project-showcase">
                {/* Butterflai Project - Featured */}
                <div className="project-card featured">
                  <div className="project-image">
                    <a
                      href="https://www.butterflai.eu"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/assets/chat.jpg" // Path updated
                        alt="Butterflai Dashboard Screenshot"
                      />
                    </a>
                  </div>
                  <div className="project-details">
                    <h3>Butterflai – AI-Powered Business Intelligence</h3>
                    <p>
                      Developed by Sleed, Butterflai transforms organizational
                      data into actionable insights using advanced AI and NLP. Key
                      features include a Knowledge Agent for instant information
                      retrieval, a customizable Business Dashboard for real-time
                      analytics, and secure document management.
                    </p>
                  </div>
                </div>

                {/* Souk App Project */}
                <div className="project-card">
                  <div className="project-image">
                    <a
                      href="https://souk-app.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="https://souk-app.com/images/shop/landing-page.png" // External URL, no change needed
                        alt="Souk App Interface"
                      />
                    </a>
                  </div>
                  <div className="project-details">
                    <h3>Souk – AI-Enhanced Second-Hand Marketplace</h3>
                    <p>
                      Souk is an innovative e-commerce platform that leverages AI
                      to streamline the buying and selling of second-hand items.
                      Features include geo-based search for local deals,
                      AI-generated product descriptions, and real-time alerts for
                      new listings.
                    </p>
                  </div>
                </div>

                {/* CDOC Project */}
                <div className="project-card">
                  <div className="project-image" />
                  <div className="project-details">
                    <h3>CDOC</h3>
                    <p>
                      Developed a comprehensive AI agentic template filing and
                      document management system that revolutionizes how
                      organizations handle their document workflows and automate
                      filing processes.
                    </p>
                  </div>
                </div>

                {/* SpecWise Project */}
                <div className="project-card">
                  <div className="project-image">
                    <a
                      href="https://spec-wise-livid.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/assets/specwise.png" // Path updated
                        alt="SpecWise File Processor"
                      />
                    </a>
                  </div>
                  <div className="project-details">
                    <h3>SpecWise</h3>
                    <p>
                      Implemented ERP integration and document processing for a
                      leading automotive company, enhancing data accuracy and
                      operational efficiency through intelligent automation and
                      streamlined workflows.
                    </p>
                  </div>
                </div>

                {/* Retail Personalization Engine */}
                <div className="project-card">
                  <div className="project-image" />
                  <div className="project-details">
                    <h3>Retail Personalization Engine</h3>
                    <p>
                      Developed an AI-driven personalization system that increased
                      e-commerce conversion rates by 45% through intelligent
                      product recommendations, dynamic pricing, and behavioral
                      analytics.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div id="contact-section" className="section-content">
              <h1>Get In Touch</h1>
              <p>
                Ready to transform your business with intelligent solutions? Our
                team of experts is here to help you navigate the future of
                technology.
              </p>
              <form className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label> {/* Changed for to htmlFor */}
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label> {/* Changed for to htmlFor */}
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="company">Company</label> {/* Changed for to htmlFor */}
                  <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="Your Company"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label> {/* Changed for to htmlFor */}
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project or inquiry"
                  />
                </div>
                <button type="submit" className="submit-btn">Send Message</button>
              </form>
            </div>

            <div id="about-section" className="section-content">
              <div className="section-header">
                <h1>We Build the Future of Intelligence</h1>
                <p className="intro-text">
                  At Nexauva, we combine cutting-edge
                  <span className="highlight">AI</span> with creative innovation to
                  deliver solutions that transform industries. From advanced
                  <span className="highlight">analytics</span> to
                  <span className="highlight">immersive experiences</span>, we're here
                  to bring your ideas to life.
                </p>
              </div>

              <div className="story-section">
                <div className="story-content">
                  <p>
                    Nexauva has quickly established itself as a pioneer in
                    AI-driven enterprise solutions. Our team of AI researchers,
                    software engineers, and creative designers work in harmony to
                    push the boundaries of what's possible in digital
                    transformation.
                  </p>
                  <p>
                    With our headquarters in Germany, we've assembled a
                    world-className team of engineers and AI specialists who bring
                    decades of combined experience from leading technology
                    companies. Our commitment to excellence and innovation has
                    enabled us to deliver transformative solutions across
                    industries, from automotive to enterprise software.
                  </p>
                  <p>
                    We believe that the future belongs to organizations that can
                    harness the power of artificial intelligence to solve complex
                    problems, streamline operations, and create unprecedented
                    value for their customers. That's why we're dedicated to
                    making AI accessible, practical, and transformative for
                    businesses of all sizes.
                  </p>
                </div>
              </div>

              <div className="team-section">
                <div className="team-header">
                  <h2>Our Expert Team</h2>
                  <p className="intro-text">
                    Based in Germany, our team consists of top-tier engineers and
                    AI specialists with extensive experience from industry leaders
                    and cutting-edge research institutions.
                  </p>
                </div>

                <div className="team-highlights">
                  <div className="team-card">
                    <div className="team-icon">🧠</div>
                    <h3>AI Research & Development</h3>
                    <p>
                      Our AI researchers hold advanced degrees and have published
                      work in leading conferences. They specialize in machine
                      learning, natural language processing, and computer vision.
                    </p>
                  </div>
                  <div className="team-card">
                    <div className="team-icon">⚙️</div>
                    <h3>Software Engineering Excellence</h3>
                    <p>
                      Senior engineers with proven track records in building
                      scalable, enterprise-grade systems. Expert in cloud
                      architecture, distributed systems, and modern development
                      practices.
                    </p>
                  </div>
                  <div className="team-card">
                    <div className="team-icon">🎯</div>
                    <h3>Industry Expertise</h3>
                    <p>
                      Deep domain knowledge across automotive, manufacturing, and
                      enterprise software, enabling us to understand complex
                      business requirements and deliver targeted solutions.
                    </p>
                  </div>
                </div>

                <div className="experience-showcase">
                  <h3>Expertise from Top-Tier Tech and Automotive Leaders</h3>
                  <p className="experience-text">
                    Our team members bring invaluable experience from
                    world-renowned technology and automotive companies, ensuring
                    enterprise-grade quality and industry best practices in every
                    project.
                  </p>
                  {/* <div className="company-logos">
                    <div className="company-logo">Mercedes-Benz</div>
                    <div className="company-logo">Siemens</div>
                    <div className="company-logo">Leading Tech Firms</div>
                  </div> */}
                  <p className="diverse-background-text">
                    This diverse background allows us to approach challenges with
                    proven methodologies while pushing the boundaries of
                    innovation in AI and software engineering.
                  </p>
                </div>
              </div>

              <div className="stats-section">
                {/* <div className="stat-item">
                  <span className="stat-number">2022</span>
                  <div className="stat-label">Founded</div>
                </div> */}
                <div className="stat-item">
                  <span className="stat-number">50+</span>
                  <div className="stat-label">Projects Delivered</div>
                </div>
                <div className="stat-item">
                  <span className="stat-number">100%</span>
                  <div className="stat-label">Client Satisfaction</div>
                </div>
                <div className="stat-item">
                  <span className="stat-number">24/7</span>
                  <div className="stat-label">Support Available</div>
                </div>
              </div>

              <div className="values-grid">
                <div className="value-card">
                  <div className="value-icon">🎯</div>
                  <h3>Our Vision</h3>
                  <p>
                    To become the global leader in intelligent digital solutions,
                    empowering businesses to harness the full potential of AI and
                    drive unprecedented innovation across industries.
                  </p>
                </div>
                <div className="value-card">
                  <div className="value-icon">🚀</div>
                  <h3>Our Mission</h3>
                  <p>
                    Delivering transformative technology solutions that solve
                    complex business challenges through cutting-edge AI,
                    exceptional engineering, and deep industry expertise.
                  </p>
                </div>
                <div className="value-card">
                  <div className="value-icon">💎</div>
                  <h3>Our Values</h3>
                  <p>
                    Excellence, Innovation, Integrity, Collaboration, and
                    Client-Centricity guide everything we do. We believe in
                    building lasting partnerships based on trust and exceptional
                    results.
                  </p>
                </div>
              </div>
              <div className="cta-section">
                <h3>Ready to Start Your Journey with Nexauva?</h3>
                <p>
                  Schedule a complimentary call with our AI and software experts
                  to discuss your business needs
                </p>
                <a
                  href="https://calendly.com/hello-nexauva/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-button"
                >
                  Schedule a 30-Minute Discovery Call
                </a>
              </div>
            </div>
          </div>
        </div>

        <button id="scroll-to-top" aria-label="Scroll to top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </button>
      </div>
      <div id="tooltip">Discover More</div>

      <div className="social-media-container">
        <a
          href="https://www.linkedin.com/in/abdelfettah-latrache/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
            />
          </svg>
        </a>
        <a
          href="https://x.com/AbdelVA"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <svg
            fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px"><path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z" /></svg>
        </a>
        <a
          href="https://calendly.com/hello-nexauva/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line
              x1="16"
              y1="2"
              x2="16"
              y2="6"
              stroke="currentColor"
              strokeWidth="2"
            />
            <line
              x1="8"
              y1="2"
              x2="8"
              y2="6"
              stroke="currentColor"
              strokeWidth="2"
            />
            <line
              x1="3"
              y1="10"
              x2="21"
              y2="10"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </a>
        {/* Instagram and GitHub icons were commented out in original, so kept as comments */}
        {/* <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="social-icon"> ... </a> */}
        {/* <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="social-icon"> ... </a> */}
      </div>
      <div className="legal-links">
        <a href="impressum.html" className="legal-link">Impressum</a>
        <span className="legal-divider">|</span>
        <a href="privacy-policy.html" className="legal-link">Privacy Policy</a>
      </div>

      {/* External Libraries */}
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/gsap.min.js" strategy="lazyOnload" />
      <Script src="https://cdn.jsdelivr.net/npm/emailjs-com@3.2.0/dist/email.min.js" strategy="lazyOnload" />

      {/* Custom Scripts - Ensure correct order if there are dependencies */}
      <Script src="/animation.js" strategy="lazyOnload" />
      <Script src="/index.js" strategy="lazyOnload" /> {/* This script initializes everything */}

      {/* Cookie Banner & Other Scripts */}
      <Script src="/assets/cookie-banner/silktide-consent-manager.js" />
      <Script src="/banner.js" strategy="lazyOnload" />

      {/* Vercel Analytics & Google Tag Manager */}
      <Script defer src="/_vercel/insights/script.js" strategy="afterInteractive" />
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-BFMXJWH6DQ" strategy="afterInteractive" />
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-BFMXJWH6DQ');

          // Vercel Analytics (va) - from original script
          window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
        `}
      </Script>
    </>
  );
}
