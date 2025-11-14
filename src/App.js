import { motion } from 'framer-motion';
import './App.css';

const services = [
  { title: 'Films & Series', detail: 'Narrative, documentary and branded content with cinematic polish.' },
  { title: 'Commercials', detail: 'High-impact campaigns that translate stories into sales.' },
  { title: 'Music Videos', detail: 'Stylised visuals and choreography synced perfectly to sound.' },
  { title: 'Live Experiences', detail: 'Stage, touring and immersive media that elevates every event.' },
];

const projects = [
  {
    title: 'Midnight City Lights',
    category: 'Music Video',
    description: 'A neon-drenched journey through Mumbai’s midnight pulse.',
    palette: ['#ff9a3c', '#ff4d5d'],
  },
  {
    title: 'Desert Pulse',
    category: 'Commercial',
    description: 'Fashion in motion with lenses cutting through desert heat.',
    palette: ['#f9f871', '#ff9e9e'],
  },
  {
    title: 'Echoes of Lumen',
    category: 'Short Film',
    description: 'Sci-fi romance framed with reflective light choreography.',
    palette: ['#7f7aff', '#2d27ff'],
  },
];

const reels = [
  { label: 'Luxury', value: '09', gradient: 'linear-gradient(135deg, #f8d064, #ff6a3c)' },
  { label: 'Music', value: '14', gradient: 'linear-gradient(135deg, #9c6bff, #ff57d2)' },
  { label: 'Fashion', value: '11', gradient: 'linear-gradient(135deg, #50e0ff, #3a8dff)' },
];

function App() {
  return (
    <div className="page-shell">
      <div className="noise-layer" aria-hidden />
      <div className="grid-layer" aria-hidden />

      <nav className="nav-bar">
        <div className="brand">
          <span className="brand-ring" />
          <div>
            <p>SmileX</p>
            <strong>Media</strong>
          </div>
        </div>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#studio">Studio</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="cta" href="https://www.instagram.com/smilexmedia/" target="_blank" rel="noreferrer">
          Book a Shoot →
        </a>
      </nav>

      <main>
        <section className="hero" id="home">
          <motion.div
            className="hero-copy"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            <p className="eyebrow">Cinematic Production House</p>
            <h1>Stories captured like a shutter-click of pure light.</h1>
            <p className="lede">
              SmileXMedia crafts tactile visuals for artists, brands and dreamers. We blend film craft,
              lighting design and editorial rhythm to deliver frames that feel alive.
            </p>
            <div className="hero-actions">
              <a
                className="primary"
                href="https://www.instagram.com/smilexmedia/"
                target="_blank"
                rel="noreferrer"
              >
                Watch Latest Reel
              </a>
              <button className="ghost">Schedule a Discovery Call</button>
            </div>
            <div className="stats">
              <article>
                <strong>120+</strong>
                <span>Productions done</span>
              </article>
              <article>
                <strong>18</strong>
                <span>Festival selections</span>
              </article>
              <article>
                <strong>7</strong>
                <span>Countries filmed</span>
              </article>
            </div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.1, ease: 'easeOut', delay: 0.2 }}
          >
            <div className="hero-lights">
              <span />
              <span />
            </div>
            <div className="hero-shutter">
              {Array.from({ length: 6 }).map((_, index) => (
                <span key={index} style={{ '--index': index }} />
              ))}
            </div>
            <div className="hero-frame">
              <p>Next up</p>
              <strong>Studio Short · “Aurora Bloom”</strong>
              <small>Shot on Alexa Mini | Prime lenses</small>
            </div>
          </motion.div>
        </section>

        <section className="reels" id="work">
          {reels.map((item) => (
            <article key={item.label} style={{ background: item.gradient }}>
              <span>{item.label} reels</span>
              <strong>{item.value}</strong>
              <small>2024 / 25</small>
            </article>
          ))}
        </section>

        <section className="projects">
          <header>
            <p className="eyebrow">Featured Frames</p>
            <h2>Three projects that still feel electric.</h2>
          </header>
          <div className="project-grid">
            {projects.map((project) => (
              <motion.article
                key={project.title}
                style={{
                  backgroundImage: `linear-gradient(145deg, ${project.palette[0]}, ${project.palette[1]})`,
                }}
                whileHover={{ translateY: -6, rotate: -0.5 }}
              >
                <div className="project-meta">
                  <span>{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                <button>
                  View cuts <span>↗</span>
                </button>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="services" id="services">
          <header>
            <p className="eyebrow">Capabilities</p>
            <h2>End-to-end production, start-to-finish magic.</h2>
          </header>
          <div className="service-grid">
            {services.map((service) => (
              <article key={service.title}>
                <div className="beam" aria-hidden />
                <h3>{service.title}</h3>
                <p>{service.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="studio" id="studio">
          <div className="studio-copy">
            <p className="eyebrow">Inside SmileXMedia</p>
            <h2>We build light camps everywhere.</h2>
            <p>
              Pop-up desert stages, rooftop light rigs, LED caves or intimate artist retreats. Our teams move
              fast, travel lean and deliver premium finishing with in-house post, grade and audio partners.
            </p>
            <ul>
              <li>Camera: Alexa Mini LF, RED V-Raptor, Sony FX line</li>
              <li>Glass: Cooke Anamorphic / Zeiss Supreme prime sets</li>
              <li>Motion: Bolt high-speed, gimbal crews, FPV drone unit</li>
            </ul>
          </div>
          <div className="studio-visual">
            <div className="tent-glow" />
            <div className="tent-structure">
              <span />
              <span />
              <span />
            </div>
            <p>Mobile light tent · Ready in 45 mins</p>
          </div>
        </section>

        <section className="contact" id="contact">
          <header>
            <h2>Have a story? Let’s lens it.</h2>
            <p>Share a brief, moodboard or just an impulse. We’ll reply within 24 hours.</p>
          </header>
          <form className="contact-form">
            <input placeholder="Name / Collective" />
            <input placeholder="Email or Instagram handle" />
            <textarea placeholder="Tell us about the project, timeline, vibe." rows={4} />
            <button type="submit">Send message</button>
          </form>
          <div className="contact-links">
            <a href="mailto:hello@smilexmedia.com">hello@smilexmedia.com</a>
            <a href="https://www.instagram.com/smilexmedia/" target="_blank" rel="noreferrer">
              Instagram @smilexmedia
            </a>
            <span>Mumbai · Goa · Wherever your light needs us</span>
          </div>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} SmileXMedia · Crafting bold visuals.</span>
        <span>Built with love & lens flares.</span>
      </footer>
    </div>
  );
}

export default App;
