import { useMemo, useState } from 'react';
import {
  ArrowUpRight,
  Award,
  BookOpen,
  BriefcaseBusiness,
  ChefHat,
  Download,
  ExternalLink,
  GraduationCap,
  Contact,
  Mail,
  MapPin,
  Menu,
  Phone,
  Quote,
  Sparkles,
  Star,
  Utensils,
  X,
} from 'lucide-react';

const asset = (fileName: string) => `${import.meta.env.BASE_URL}assets/${fileName}`;

type GalleryFilter = 'All' | 'Plated Work' | 'Pastry & Dessert' | 'Events & Displays' | 'Production';

type GalleryItem = {
  title: string;
  category: Exclude<GalleryFilter, 'All'>;
  image: string;
  description: string;
  featured?: boolean;
};

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Showcase', href: '#showcase' },
  { label: 'Credentials', href: '#credentials' },
  { label: 'Contact', href: '#contact' },
];

const heroImages = [
  asset('hero-charcuterie.webp'),
  asset('hero-bao.webp'),
  asset('hero-plated-lamb.webp'),
  asset('hero-cake.webp'),
];

const galleryItems: GalleryItem[] = [
  {
    title: 'Composed Lamb Plate',
    category: 'Plated Work',
    image: asset('hero-plated-lamb.webp'),
    description: 'A refined savory plate focused on color, balance, and controlled garnish placement.',
    featured: true,
  },
  {
    title: 'Carved Steak with Garden Vegetables',
    category: 'Plated Work',
    image: asset('dish-steak-garden.webp'),
    description: 'Rich protein cookery paired with vegetables and a structured plate presentation.',
  },
  {
    title: 'Shrimp Entrée with Sauce Detail',
    category: 'Plated Work',
    image: asset('dish-shrimp-plating.webp'),
    description: 'A bright seafood plate with sauce work, height, and clean negative space.',
  },
  {
    title: 'Cream Pasta Plate',
    category: 'Plated Work',
    image: asset('dish-cream-pasta.webp'),
    description: 'Comfort-driven pasta presentation with a polished restaurant-style finish.',
  },
  {
    title: 'Crispy Rice Bowl',
    category: 'Plated Work',
    image: asset('dish-crispy-rice.webp'),
    description: 'Layered savory elements arranged for texture, contrast, and immediate visual impact.',
  },
  {
    title: 'Fish Composition',
    category: 'Plated Work',
    image: asset('dish-composed-fish.webp'),
    description: 'Cleanly arranged fillets with vegetables and a precise linear presentation.',
  },
  {
    title: 'Charcuterie Grazing Board',
    category: 'Events & Displays',
    image: asset('hero-charcuterie.webp'),
    description: 'A generous hospitality board built around abundance, rhythm, color, and sharing.',
    featured: true,
  },
  {
    title: 'Cordon Bleu Display',
    category: 'Events & Displays',
    image: asset('event-cordon-bleu.webp'),
    description: 'A competition-style plated dish with a cultural table setting and menu card styling.',
  },
  {
    title: 'Filipino-Inspired Competition Plate',
    category: 'Events & Displays',
    image: asset('event-filipino-kare.webp'),
    description: 'A curated cultural plate designed for food display, storytelling, and presentation value.',
  },
  {
    title: 'Pastry Display Setup',
    category: 'Events & Displays',
    image: asset('event-pastry-display.webp'),
    description: 'A showcase table arrangement highlighting pastry, display height, and event styling.',
  },
  {
    title: 'Strawberry Celebration Cake',
    category: 'Pastry & Dessert',
    image: asset('cake-pink-strawberry.webp'),
    description: 'A celebratory cake with bold color, piped details, and decorative fruit accents.',
    featured: true,
  },
  {
    title: 'Caramel Nut Tart',
    category: 'Pastry & Dessert',
    image: asset('dessert-caramel-nut-tart.webp'),
    description: 'A glossy dessert piece focused on texture, caramel sheen, and nut garnish.',
  },
  {
    title: 'Cinnamon Rolls',
    category: 'Pastry & Dessert',
    image: asset('dessert-cinnamon-rolls.webp'),
    description: 'Baked pastry work showing consistency, spiral definition, and warm product finish.',
  },
  {
    title: 'Floral Cupcake Bouquet',
    category: 'Pastry & Dessert',
    image: asset('cake-floral-cupcakes.webp'),
    description: 'Decorative piping work arranged as an edible bouquet with soft floral tones.',
  },
  {
    title: 'Fruit Dessert Plate',
    category: 'Pastry & Dessert',
    image: asset('dessert-fruit-plate.webp'),
    description: 'Fresh fruit, cream, and garnish arranged for a light plated dessert direction.',
  },
  {
    title: 'Canapés with Avocado Detail',
    category: 'Production',
    image: asset('dish-canape.webp'),
    description: 'Small-bite production work emphasizing repetition, uniformity, and clean garnish.',
  },
  {
    title: 'Radish Garden Bites',
    category: 'Production',
    image: asset('dish-radish-bites.webp'),
    description: 'A composed small-plate setup with delicate toppings and a fresh color palette.',
  },
  {
    title: 'Rolls Production Tray',
    category: 'Production',
    image: asset('dish-rolls-production.webp'),
    description: 'Batch preparation work that reflects consistency, speed, and kitchen organization.',
  },
];

const filters: GalleryFilter[] = ['All', 'Plated Work', 'Pastry & Dessert', 'Events & Displays', 'Production'];

const credentials = [
  {
    title: 'Best Food Display — Champion',
    issuer: 'Our Lady of Fatima University',
    year: '2025',
    image: asset('cert-best-food-display.webp'),
    note: 'Awarded for an innovative, aesthetic, and sustainable food display booth.',
  },
  {
    title: 'Junior Chef de Partie Recognition',
    issuer: 'Sauveur Prestige / OLFU CHIM',
    year: '2025',
    image: asset('cert-junior-chef.webp'),
    note: 'Recognition connected to culinary performance and hands-on kitchen readiness.',
  },
  {
    title: 'Introduction to Hospitality & Tourism',
    issuer: 'American Hospitality Academy',
    year: '2025',
    image: asset('cert-aha.webp'),
    note: 'Completed with honors as part of international hospitality development.',
  },
  {
    title: 'Work Health and Safety Procedures',
    issuer: 'eVersity Online Campus',
    year: '2025',
    image: asset('cert-eversity.webp'),
    note: 'Training in workplace safety standards, procedures, and professional conduct.',
  },
];

const skills = [
  'Food preparation',
  'Kitchen organization',
  'Menu testing',
  'Plating design',
  'Food safety',
  'Guest service',
  'Team coordination',
  'Multitasking',
  'Creative problem-solving',
  'Culinary presentation',
];

const milestones = [
  {
    icon: GraduationCap,
    title: 'Culinary Arts Student',
    meta: 'Our Lady of Fatima University · 2024–Present',
    text: 'Currently pursuing Bachelor of Science in International Hospitality Management, specializing in Culinary Arts.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Lead Cook',
    meta: "Army's Diner · Palayan City",
    text: 'Assisted with menu development, recipe testing, day-to-day cooking, order-taking, and guest-facing service.',
  },
  {
    icon: Utensils,
    title: 'Laboratory Kitchen Experience',
    meta: 'Culinary laboratory classes',
    text: 'Prepared dishes under food safety standards while developing technique, timing, teamwork, and plating discipline.',
  },
];

function App() {
  const [activeFilter, setActiveFilter] = useState<GalleryFilter>('All');
  const [menuOpen, setMenuOpen] = useState(false);

  const filteredGallery = useMemo(() => {
    if (activeFilter === 'All') return galleryItems;
    return galleryItems.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Army S. Barnachea home" onClick={closeMenu}>
          <span className="brand-mark">A</span>
          <span>
            <strong>Army S. Barnachea</strong>
            <small>Culinary Portfolio</small>
          </span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-ambient" aria-hidden="true" />
          <div className="hero-copy">
            <span className="eyebrow">International Hospitality Management · Culinary Arts</span>
            <h1>Refined culinary storytelling, plated with intention.</h1>
            <p>
              I am Army S. Barnachea, an aspiring culinary professional developing a portfolio
              built on hands-on kitchen discipline, thoughtful presentation, and memorable guest experiences.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#showcase">
                View showcase <ArrowUpRight size={18} />
              </a>
              <a className="button button-ghost" href={asset('army-barnachea-resume.pdf')} target="_blank" rel="noreferrer">
                Resume <Download size={18} />
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-label="Culinary portfolio collage">
            <div className="hero-grid">
              {heroImages.map((image, index) => (
                <img src={image} alt="Curated culinary work" key={image} className={`hero-img hero-img-${index + 1}`} />
              ))}
            </div>
            <div className="portrait-card">
              <img src={asset('portrait-primary.webp')} alt="Army S. Barnachea in chef uniform" />
              <div>
                <span>Current focus</span>
                <strong>Technique · plating · hospitality</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="section intro-band" aria-label="Portfolio highlights">
          <div className="stat-card">
            <span>01</span>
            <strong>Kitchen-ready training</strong>
            <p>Hands-on laboratory experience in food preparation, cooking technique, and food safety.</p>
          </div>
          <div className="stat-card highlighted">
            <span>02</span>
            <strong>Champion display work</strong>
            <p>Recognized for a sustainability-driven cultural and gastronomic food display.</p>
          </div>
          <div className="stat-card">
            <span>03</span>
            <strong>Hospitality mindset</strong>
            <p>Guest-facing experience, collaborative service, and consistent attention to detail.</p>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="section-heading split-heading">
            <div>
              <span className="eyebrow">About the chef-in-training</span>
              <h2>A calm, detail-first culinary student with a strong eye for presentation.</h2>
            </div>
            <p>
              Army is building her foundation through culinary laboratory work, restaurant-style service,
              food display projects, and international hospitality courses. Her work highlights careful
              execution, clean plating, and a growing confidence in both savory and pastry preparation.
            </p>
          </div>

          <div className="about-grid">
            <article className="about-card large-card">
              <Quote size={34} />
              <h3>Food should feel intentional before the first bite.</h3>
              <p>
                This portfolio presents Army as an emerging culinary professional who values structure,
                creativity, discipline, and the small decisions that turn a dish into a memorable dining moment.
              </p>
            </article>

            {milestones.map((milestone) => {
              const Icon = milestone.icon;
              return (
                <article className="about-card" key={milestone.title}>
                  <Icon size={28} />
                  <span>{milestone.meta}</span>
                  <h3>{milestone.title}</h3>
                  <p>{milestone.text}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="section craft-section">
          <div className="craft-panel">
            <img src={asset('portrait-secondary.webp')} alt="Army S. Barnachea in a culinary laboratory" />
            <div>
              <span className="eyebrow">Career direction</span>
              <h2>From student kitchen to high-end culinary environments.</h2>
              <p>
                Her short-term goal is to strengthen practical kitchen performance through internship work,
                advanced cooking techniques, and disciplined kitchen management. Long term, she aims to grow
                into a professional chef capable of developing signature dishes and elevated dining experiences.
              </p>
              <div className="signature-line">
                <ChefHat size={20} />
                <span>Technique guided by service, culture, and presentation.</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section showcase-section" id="showcase">
          <div className="section-heading centered">
            <span className="eyebrow">Selected culinary work</span>
            <h2>Showcase</h2>
            <p>
              A curated gallery of plated dishes, pastry work, production pieces, and event displays selected
              from Army’s image archive.
            </p>
          </div>

          <div className="filter-bar" role="tablist" aria-label="Gallery filters">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                className={activeFilter === filter ? 'filter-button active' : 'filter-button'}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="gallery-grid">
            {filteredGallery.map((item) => (
              <article className={item.featured ? 'gallery-card featured' : 'gallery-card'} key={item.title}>
                <img src={item.image} alt={item.title} loading="lazy" />
                <div className="gallery-card-content">
                  <span>{item.category}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section skills-section">
          <div className="skills-copy">
            <span className="eyebrow">Working strengths</span>
            <h2>Built for busy kitchens, careful prep, and collaborative service.</h2>
            <p>
              Army’s profile combines food preparation, leadership, critical thinking, resourcefulness,
              and interpersonal skills with a strong interest in cooking, baking, traveling, and exploring cuisines.
            </p>
          </div>
          <div className="skills-list" aria-label="Skills list">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </section>

        <section className="section credentials-section" id="credentials">
          <div className="section-heading split-heading">
            <div>
              <span className="eyebrow">Awards & certifications</span>
              <h2>Formal training with visible proof of excellence.</h2>
            </div>
            <p>
              The credential section is designed to look like a premium culinary press kit: clean, focused,
              and easy for internship coordinators or employers to scan.
            </p>
          </div>

          <div className="credentials-grid">
            {credentials.map((credential) => (
              <article className="credential-card" key={credential.title}>
                <a href={credential.image} target="_blank" rel="noreferrer" aria-label={`Open ${credential.title} certificate`}>
                  <img src={credential.image} alt={credential.title} loading="lazy" />
                </a>
                <div>
                  <span>{credential.year} · {credential.issuer}</span>
                  <h3>{credential.title}</h3>
                  <p>{credential.note}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="credential-note">
            <Award size={28} />
            <div>
              <strong>Additional coursework</strong>
              <p>
                Includes Australian standards for serving alcohol responsibly, Australian work health and safety
                procedures, and Australian/New Zealand standards for safe food handling procedures.
              </p>
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="contact-card">
            <div className="contact-copy">
              <span className="eyebrow">Availability</span>
              <h2>Open to culinary internships, kitchen training, and hospitality opportunities.</h2>
              <p>
                For collaborations, internship coordination, or culinary work opportunities, Army can be reached
                through email, phone, or LinkedIn.
              </p>
            </div>

            <div className="contact-links">
              <a href="mailto:asbarnachea1807cab@student.fatima.edu.ph">
                <Mail size={19} />
                <span>asbarnachea1807cab@student.fatima.edu.ph</span>
              </a>
              <a href="tel:+639989234822">
                <Phone size={19} />
                <span>+63 998 923 4822</span>
              </a>
              <a href="https://www.linkedin.com/in/army-barnachea-415980386" target="_blank" rel="noreferrer">
                <Contact size={19} />
                <span>LinkedIn profile</span>
                <ExternalLink size={16} />
              </a>
              <span className="location-line">
                <MapPin size={19} />
                Cabanatuan City, Nueva Ecija, Philippines
              </span>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <Sparkles size={18} />
          <span>Army S. Barnachea · Culinary Arts Portfolio</span>
        </div>
        <a href="#home">Back to top</a>
      </footer>
    </div>
  );
}

export default App;
