"use client";

import { useState } from "react";

const dropdowns = {
  "About": [
    "Dr. Maya Reynolds, PsyD",
    "My Approach",
    "My Office",
  ],
  Specialties: [
    "Anxiety & Panic",
    "Trauma",
    "Burnout",
    "Perfectionism",
  ],
  Methods: [
    "CBT",
    "EMDR",
    "Mindfulness",
    "Body-Oriented Techniques",
  ],
};

const expertise = [
  "Anxiety",
  "Panic",
  "Trauma",
  "Burnout",
  "Perfectionism",
  "Chronic Stress",
  "Emotional Overwhelm",
  "High Internal Pressure",
  "Past Experiences",
  "Self-Confidence",
  "Relationships",
  "Resilience",
];

const specialties = [
  {
    title: "Anxiety & Panic",
    text: "Therapy for constant worry, body tension, sleep difficulty, panic, and the feeling that you are always bracing for what comes next.",
  },
  {
    title: "Trauma & EMDR",
    text: "Trauma work is paced carefully around safety, stabilization, and regulation while creating space to process painful experiences.",
  },
  {
    title: "Burnout",
    text: "Support for high-achieving professionals, entrepreneurs, and creatives who feel exhausted by perfectionism and relentless internal pressure.",
  },
  {
    title: "Mindfulness & Body",
    text: "Mindfulness and body-oriented practices help you notice what is happening in your nervous system and build a steadier relationship with yourself.",
  },
];

function Dropdown({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="nav-dropdown"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className="nav-dropdown-trigger"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {title}
        <span className={`dropdown-arrow ${open ? "open" : ""}`}>⌄</span>
      </button>

      <div className={`dropdown-panel ${open ? "visible" : ""}`}>
        {items.map((item) => (
          <a href="#reference-content" key={item}>
            {item}
          </a>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main>
      {/* ==================================================
          HEADER
      ================================================== */}
      <header className="original-header">
        <div className="original-header-inner">
          <a href="#" className="original-logo">
            <span className="original-logo-title">Dr. Maya Reynolds</span>
            <span className="original-logo-subtitle">Clinical Psychology</span>
          </a>

          <nav className="original-desktop-nav">
            <a href="#about">About</a>

            <Dropdown
              title="How I Help"
              items={[
                "Individual Therapy",
                "High-Achieving Professionals",
                "People Navigating Change",
              ]}
            />

            <Dropdown
              title="Specialties"
              items={dropdowns.Specialties}
            />

            <Dropdown
              title="Methods"
              items={dropdowns.Methods}
            />

            <a href="#faqs">FAQs</a>
          </nav>

          <a href="#contact" className="original-contact-button">
            Contact
          </a>

          <button
            type="button"
            className="original-mobile-toggle"
            aria-label="Toggle navigation"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((value) => !value)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="original-mobile-menu">
            <a href="#about" onClick={() => setMobileMenuOpen(false)}>
              About
            </a>

            <details>
              <summary>How I Help</summary>
              <div>
                {dropdowns["About"].map((item) => (
                  <a href="#reference-content" key={item}>
                    {item}
                  </a>
                ))}
              </div>
            </details>

            <details>
              <summary>Specialties</summary>
              <div>
                {dropdowns.Specialties.map((item) => (
                  <a href="#reference-content" key={item}>
                    {item}
                  </a>
                ))}
              </div>
            </details>

            <details>
              <summary>Methods</summary>
              <div>
                {dropdowns.Methods.map((item) => (
                  <a href="#reference-content" key={item}>
                    {item}
                  </a>
                ))}
              </div>
            </details>

            <a href="#faqs" onClick={() => setMobileMenuOpen(false)}>
              FAQs
            </a>

            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </a>
          </div>
        )}
      </header>

      {/* ==================================================
          HERO
      ================================================== */}
      <section className="original-hero">
        <div className="original-hero-grid">

          {/* LEFT IMAGE */}
          <div className="hero-side-image hero-side-image-left">
            <img
              src="/images/section1.png"
              alt="A warm, natural scene reflecting calm and groundedness"
            />
          </div>

          {/* CENTER CONTENT */}
          <div className="original-hero-copy">

            <p className="original-eyebrow">
              IN-PERSON THERAPY IN SANTA MONICA
              <br />
              &amp; TELEHEALTH ACROSS CALIFORNIA
            </p>

            <h1>
              Therapy for anxiety, trauma <span className="hero-amp">&amp;</span>
              <br />
              burnout, with room to
              <br />
              <span className="accent-script">breathe</span>.
            </h1>

            <p className="hero-description">
              Warm, grounded therapy for adults navigating anxiety, panic,
              trauma, burnout, and the pressure to keep everything together.
            </p>

            <a href="#contact" className="original-primary-button">
              Book an Appointment
            </a>

          </div>

          {/* RIGHT IMAGE */}
          <div className="hero-side-image hero-side-image-right">
            <img
              src="/images/section_1.png"
              alt="A warm, peaceful setting reflecting comfort and safety"
            />
          </div>

        </div>
      </section>

      {/* ==================================================
          INTRO
      ================================================== */}
      {/* ==================================================
          SECTION 2 — WELCOME
      ================================================== */}
      <section id="about" className="original-intro section-two">
        <div className="section-two-inner">

          {/* LEFT — TEXT */}
          <div className="section-two-copy">

            <h2>
              You don’t have to keep pushing through.
            </h2>

            <p>
              Therapy can be a place to slow down, understand what is happening, and begin to feel like yourself again.
            </p>

            <p>
              I work with adults who feel overwhelmed by anxiety, stress, panic, burnout, or the lingering effects of past experiences. My approach is warm, collaborative, structured, and reflective.
            </p>

          </div>

          {/* RIGHT — IMAGE */}
          <div className="section-two-image">
            <img
              src="/images/section2.png"
              alt="A warm family moment by the water"
            />
          </div>

        </div>
      </section>

      {/* ==================================================
          WHO WE HELP
      ================================================== */}
      {/* ==================================================
          SECTION 3 — WHO WE HELP
      ================================================== */}
      <section id="faqs" className="original-who-help section-three">

        <div className="section-three-heading">
          <h2>
            Who I <span className="accent-script">support</span>
          </h2>
        </div>

        <div className="section-three-grid">

          {/* ADULTS */}
          <article className="section-three-card">
            <div className="section-three-image">
              <img
                src="/images/adults.png"
                alt="Adult woman in a warm, grounded setting"
              />
            </div>

            <h3>Adults</h3>

            <p>
              Thoughtful, self-aware adults who feel internally exhausted can find a place to slow down, understand their patterns, and build practical tools for change.
            </p>
          </article>

          {/* COUPLES */}
          <article className="section-three-card">
            <div className="section-three-image">
              <img
                src="/images/working professionals.png"
                alt="Professional reflecting during a quiet moment"
              />
            </div>

            <h3>High-Achieving Professionals</h3>

            <p>
              Entrepreneurs, creatives, and professionals can explore perfectionism, high internal pressure, and the habits that make sustainable living and working feel difficult.
            </p>
          </article>

          {/* CHILDREN & TEENS */}
          <article className="section-three-card">
            <div className="section-three-image">
              <img
                src="/images/navigating people.png"
                alt="People moving forward together through nature"
              />
            </div>

            <h3>People Navigating Change</h3>

            <p>
              Therapy can help when past experiences affect relationships, confidence, safety, or your ability to feel settled in the present.
            </p>
          </article>

        </div>

      </section>

      {/* ==================================================
          STATEMENT / IMAGE
      ================================================== */}
      {/* ==================================================
          SECTION 4 — IMAGE + STATEMENT
      ================================================== */}
      <section className="section-four">
        <img
          src="/images/longImg4.jpg"
          alt="A peaceful path through a deep green landscape"
        />

        <div className="section-four-overlay"></div>

        <div className="section-four-message">
          <span>
            You may look like you have everything together while feeling exhausted inside.
          </span>{" "}
          <em>Therapy can give you room to breathe, reflect, and reconnect.</em>
        </div>
      </section>

      {/* ==================================================
          EXPERTISE
      ================================================== */}
      {/* ==================================================
          SECTION 5 — OUR AREAS OF EXPERTISE
      ================================================== */}
      <section className="section-five" id="reference-content">
        <div className="section-five-inner">

          <div className="section-five-heading">
            <h2>
              My areas of
              <span className="accent-script">focus</span>
            </h2>
          </div>

          <div className="section-five-list">
            {expertise.map((item) => (
              <div key={item} className="section-five-item">
                <span>{item}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ==================================================
          HOW WE WORK
      ================================================== */}
      {/* ==================================================
          SECTION 6 — HOW WE WORK
      ================================================== */}
      <section className="section-six">
        <div className="section-six-inner">

          <div className="section-six-top">
            <p className="original-eyebrow dark">MY APPROACH</p>

            <h2>
              Therapy that is warm, collaborative &amp; grounded.
            </h2>
          </div>

          <div className="section-six-main">

            <div className="section-six-text">
              <div className="section-six-column">
                <p className="section-six-lead">
                  PRACTICAL TOOLS, REFLECTIVE WORK, AND A PACE THAT RESPECTS YOUR NERVOUS SYSTEM.
                </p>

                <p>
                  I use CBT, EMDR, mindfulness-based practices, and body-oriented techniques to help you understand patterns, regulate stress, and make meaningful changes. Our work is collaborative and tailored rather than one-size-fits-all.
                </p>
              </div>

              <div className="section-six-column">
                <p>
                  For trauma work, we move carefully through safety, stabilization, and regulation before processing. Whether your experiences were a single incident or long-standing, the goal is to build insight, resilience, and a stronger relationship with yourself.
                </p>
              </div>
            </div>

            <div className="section-six-image">
              <img
                src="/images/maya.jpg"
                alt="Dr. Maya Reynolds"
              />
            </div>
            <p className="section-six-image-name">Dr. Maya Reynolds</p>

          </div>

          <a
            href="#about"
            className="section-six-link"
          >
            Explore my approach
          </a>

        </div>
      </section>

      {/* ==================================================
          SPECIALTIES
      ================================================== */}
      <section className="section-seven">
        <div className="section-seven-inner">

          <div className="section-seven-copy">
            <h2>
              Making space for where you’ve been{" "}
              <span className="accent-script">&amp;</span>{" "}
              creating room for what comes next.
            </h2>
          </div>

          <div className="section-eight-image">
            <img
              src="/images/calm.png"
              alt="A calm, misty green landscape"
            />
          </div>

        </div>
      </section>

      {/* ==================================================
          specialties
      ================================================== */}
      <section className="section-eight">
        <div className="section-eight-inner">
           
          <div className="section-eight-heading">
            <h2>
              Therapy for <span className="accent-script">real life</span>
              <br />
              and what comes <br /> with it...
            </h2>
          </div>

          <div className="section-eight-grid">

            <div className="section-eight-card">
              <h3>Anxiety &amp; Panic</h3>
              <p>
                Constant worry, panic, body tension, and difficulty sleeping can leave you feeling like you are always bracing. Therapy can help you build steadier ways of responding.
              </p>
              <a href="#contact" className="section-eight-link">
                Learn more
              </a>
            </div>

            <div className="section-eight-card">
              <h3>Trauma &amp; EMDR</h3>
              <p>
                Trauma work is paced carefully and begins with safety, stabilization, and regulation so you can process difficult experiences without rushing the work.
              </p>
              <a href="#contact" className="section-eight-link">
                Learn more
              </a>
            </div>

            <div className="section-eight-card">
              <h3>Burnout &amp; Perfectionism</h3>
              <p>
                When achievement comes with relentless internal pressure, therapy can help you reconnect with what matters and build a more sustainable way of living and working.
              </p>
              <a href="#contact" className="section-eight-link">
                Learn more
              </a>
            </div>

            <div className="section-eight-card">
              <h3>Mindfulness &amp; Body</h3>
              <p>
                Mindfulness and body-oriented techniques can help you notice stress responses, reconnect with yourself, and develop practical ways to feel more grounded.
              </p>
              <a href="#contact" className="section-eight-link">
                Learn more
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 9 — MY OFFICE
      ================================================== */}
      <section className="maya-office">
        <div className="maya-office-grid">

          {/* LEFT IMAGE */}
          <div className="maya-office-image maya-office-image-left">
            <img
              src="/images/office-1.jpg"
              alt="Maya's therapy office"
            />
          </div>

          {/* CENTER CONTENT */}
          <div className="maya-office-copy">

            <p className="maya-office-eyebrow">
              MY OFFICE
            </p>

            <h2>
              A quiet place to
              <br />
              <span className="accent-script">breathe</span>.
            </h2>

            <p className="maya-office-description">
              My Santa Monica office is private, calm, naturally lit, and
              intentionally uncluttered — a grounding space for thoughtful
              therapy work.
            </p>

            <p className="maya-office-address">
              123TH STREET 45 W
              <br />
              SANTA MONICA, CA 90401
            </p>

            <p className="maya-office-details">
              In-person sessions in Santa Monica &amp; secure telehealth
              throughout California.
            </p>

          </div>

          {/* RIGHT IMAGE */}
          <div className="maya-office-image maya-office-image-right">
            <img
              src="/images/office-2.jpg"
              alt="Maya's therapy office seating area"
            />
          </div>

        </div>
      </section>

      {/* ==================================================
          CONTACT
      ================================================== */}
      <section className="section-nine" id="contact">
        <div className="section-nine-left-image">
          <img
            src="/images/section11.png"
            alt="A warm, grounded moment in nature"
          />
        </div>

        <div className="section-nine-copy">
          <p className="original-eyebrow">SCHEDULE AN APPOINTMENT</p>

          <h2>
            A calmer, more sustainable way forward may begin with{" "}
            <span className="accent-script">you</span>.
          </h2>

          <p>
            If you feel overwhelmed by anxiety, stress, panic, trauma, or burnout, therapy can be a place to slow down and understand what is underneath the pressure. I offer in-person sessions in Santa Monica and secure telehealth throughout California.
          </p>

          <p>
            Reach out to begin the conversation.
          </p>

          <a href="#" className="section-nine-button">
            Book now
          </a>
        </div>

        <div className="section-nine-right-image">
          <img
            src="/images/section_11.png"
            alt="A peaceful natural landscape"
          />
        </div>
      </section>

      {/* ==================================================
          FOOTER
      ================================================== */}
      {/* SECTION 10 — FOOTER */}
      <section className="section-ten">
        <div className="section-ten-inner">

          <div className="section-ten-brand">
            <div className="section-ten-logo">
              <span className="section-ten-logo-title">Dr. Maya Reynolds</span>
              <span className="section-ten-logo-subtitle">
                Clinical Psychology
              </span>
            </div>

            <p>
              A quiet, private office in Santa Monica for in-person therapy, with secure telehealth available throughout California.
            </p>
          </div>

          <div className="section-ten-column">
            <h3>NAVIGATE</h3>
            <a href="#">Home</a>
            <a href="#about">About</a>
            <a href="#">FAQs</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="section-ten-column">
            <h3>FOCUS</h3>
            <a href="#reference-content">Anxiety &amp; Panic</a>
            <a href="#reference-content">Trauma &amp; EMDR</a>
            <a href="#reference-content">Burnout</a>
            <a href="#reference-content">Perfectionism</a>
          </div>

          <div className="section-ten-column section-ten-contact">
            <h3>CONTACT</h3>

            <p>
              123th Street 45 W<br />
              Santa Monica, CA 90401
            </p>

            <a href="mailto:hello@mayareynoldspsych.com">
              hello@mayareynoldspsych.com
            </a>

            <a href="tel:+13105550123">
              310.555.0123
            </a>

            <p className="section-ten-serving">
              Serving Santa Monica and clients throughout California via secure telehealth
            </p>
          </div>

        </div>
      </section>

      {/* SECTION 11 — BOTTOM BAR */}
      <footer className="section-eleven">
        <div className="section-eleven-inner">
          Terms | Privacy Policy | Disclaimer | Dr. Maya Reynolds
        </div>
      </footer>
  </main>
  );
}

