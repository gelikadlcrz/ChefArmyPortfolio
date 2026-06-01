import { type CSSProperties, useMemo, useState } from 'react';
import heroCharcuterieBackground from './assets/hero-charcuterie.webp';
import brunchBoardBackground from './assets/dish-brunch-board.webp';
import {
  ArrowUpRight,
  Award,
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
  Utensils,
  X,
} from 'lucide-react';

const asset = (fileName: string) => `${import.meta.env.BASE_URL}assets/${fileName}`;

type GalleryFilter = 'All' | 'Savory Plates' | 'Pastry & Dessert' | 'Displays & Service' | 'Production & Prep';

type GalleryItem = {
  title: string;
  category: Exclude<GalleryFilter, 'All'>;
  image: string;
  description: string;
  featured?: boolean;
};

type CredentialItem = {
  title: string;
  issuer: string;
  year: string;
  image: string;
  note: string;
};

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Showcase', href: '#showcase' },
  { label: 'Credentials', href: '#credentials' },
  { label: 'Contact', href: '#contact' },
];

const heroImages = [
  asset('dish-charcuterie-board.webp'),
  asset('dish-bao-sandwiches.webp'),
  asset('dish-grilled-lamb-plate.webp'),
  asset('dessert-pink-strawberry-cake.webp'),
];

const galleryItems: GalleryItem[] = [
  {
    title: 'Charcuterie Grazing Board',
    category: 'Displays & Service',
    image: asset('dish-charcuterie-board.webp'),
    description: 'A generous display built around color, texture, and shared dining.',
    featured: true,
  },
  {
    title: 'Grilled Lamb Plate',
    category: 'Savory Plates',
    image: asset('dish-grilled-lamb-plate.webp'),
    description: 'A composed savory plate with clean garnish and balanced portions.',
    featured: true,
  },
  {
    title: 'Pink Strawberry Cake',
    category: 'Pastry & Dessert',
    image: asset('dessert-pink-strawberry-cake.webp'),
    description: 'A celebration cake with bold color, fruit detail, and piped finishing.',
  },
  {
    title: 'Brunch Grazing Board',
    category: 'Displays & Service',
    image: asset('display-brunch-grazing-board.webp'),
    description: 'A breakfast-style spread arranged for abundance and visual warmth.',
  },
  {
    title: 'Golden Spoon Canapés',
    category: 'Production & Prep',
    image: asset('dish-golden-spoon-canapes.webp'),
    description: 'Small bites prepared with repetition, color, and neat garnish work.',
  },
  {
    title: 'Baked Casserole Tray',
    category: 'Production & Prep',
    image: asset('dish-baked-casserole-tray.webp'),
    description: 'Batch-style preparation with an even baked finish.',
  },
  {
    title: 'Carved Steak with Vegetables',
    category: 'Savory Plates',
    image: asset('dish-carved-steak-vegetables.webp'),
    description: 'A hearty protein plate with vegetables and simple restaurant styling.',
  },
  {
    title: 'Baked Lasagna Plate',
    category: 'Savory Plates',
    image: asset('dish-baked-lasagna-plate.webp'),
    description: 'Classic comfort food plated with a clean, finished look.',
  },
  {
    title: 'Braised Meat Plate',
    category: 'Savory Plates',
    image: asset('dish-braised-meat-plate.webp'),
    description: 'A warm savory plate with sauce, vegetables, and a composed finish.',
  },
  {
    title: 'Bao Sandwiches',
    category: 'Production & Prep',
    image: asset('dish-bao-sandwiches.webp'),
    description: 'Soft handheld pieces prepared with consistent filling and garnish.',
  },
  {
    title: 'Beef with Green Beans',
    category: 'Savory Plates',
    image: asset('dish-beef-green-beans.webp'),
    description: 'A family-style savory dish focused on flavor and service readiness.',
  },
  {
    title: 'Terrine Board',
    category: 'Displays & Service',
    image: asset('dish-terrine-board-alt.webp'),
    description: 'A plated board with fruit, garnish, and a polished service layout.',
  },
  {
    title: 'Pastry Table Display',
    category: 'Displays & Service',
    image: asset('display-pastry-table.webp'),
    description: 'A dessert and display setup arranged for event presentation.',
  },
  {
    title: 'Cream Pasta with Bacon',
    category: 'Savory Plates',
    image: asset('dish-cream-pasta-bacon.webp'),
    description: 'A simple pasta plate finished for individual service.',
  },
  {
    title: 'Rolls Production Tray',
    category: 'Production & Prep',
    image: asset('production-rolls-tray.webp'),
    description: 'Volume prep work showing consistency and kitchen organization.',
  },
  {
    title: 'Crispy Rice with Egg',
    category: 'Savory Plates',
    image: asset('dish-crispy-rice-egg.webp'),
    description: 'A plated savory dish with height, sauce, and garnish contrast.',
  },
  {
    title: 'Breakfast Sandwich Plate',
    category: 'Savory Plates',
    image: asset('dish-breakfast-sandwich-plate.webp'),
    description: 'A café-style plate prepared with a complete service setup.',
  },
  {
    title: 'Sandwich with Dip',
    category: 'Savory Plates',
    image: asset('dish-sandwich-dip.webp'),
    description: 'A toasted handheld dish paired with sauce for a casual plated finish.',
  },
  {
    title: 'Seafood Appetizer',
    category: 'Savory Plates',
    image: asset('dish-seafood-appetizer.webp'),
    description: 'A light seafood plate with fresh garnish and controlled spacing.',
  },
  {
    title: 'Cream Soup with Toast',
    category: 'Savory Plates',
    image: asset('dish-cream-soup-toast.webp'),
    description: 'A soup course presented with toast and a clean central garnish.',
  },
  {
    title: 'Seafood Plate with Sauce Detail',
    category: 'Savory Plates',
    image: asset('dish-seafood-dotted-sauce.webp'),
    description: 'A bright plate with sauce accents and careful color placement.',
  },
  {
    title: 'Canapé Row',
    category: 'Production & Prep',
    image: asset('dish-canape-row.webp'),
    description: 'Repeated small-bite plating with consistent topping and garnish.',
  },
  {
    title: 'Slider Canapés',
    category: 'Production & Prep',
    image: asset('dish-slider-canapes.webp'),
    description: 'Miniature savory pieces made for event-style service.',
  },
  {
    title: 'Event Appetizer Plate',
    category: 'Displays & Service',
    image: asset('dish-event-appetizer.webp'),
    description: 'A competition or event plate with a more formal table setting.',
  },
  {
    title: 'Paired Entrée Plates',
    category: 'Savory Plates',
    image: asset('dish-paired-entree-plates.webp'),
    description: 'Two matching plates prepared for consistent service presentation.',
  },
  {
    title: 'Competition Chicken Plate',
    category: 'Displays & Service',
    image: asset('dish-competition-chicken-plate.webp'),
    description: 'A cultural display plate styled with menu-card presentation.',
  },
  {
    title: 'Creamy Risotto Plate',
    category: 'Savory Plates',
    image: asset('dish-creamy-risotto-plate.webp'),
    description: 'A warm rice course presented with a simple garnish finish.',
  },
  {
    title: 'Noodle and Egg Plate',
    category: 'Savory Plates',
    image: asset('dish-noodle-egg-plate.webp'),
    description: 'A colorful savory plate with egg, vegetables, and height.',
  },
  {
    title: 'Dumpling Soup Course',
    category: 'Savory Plates',
    image: asset('dish-dumpling-soup-course.webp'),
    description: 'A comforting plated course presented with a service card.',
  },
  {
    title: 'Roasted Beef Plate',
    category: 'Savory Plates',
    image: asset('dish-roasted-beef-plate.webp'),
    description: 'A composed meat plate with pastry, vegetables, and sauce.',
  },
  {
    title: 'Floral Cupcake Bouquet',
    category: 'Pastry & Dessert',
    image: asset('dessert-floral-cupcake-bouquet.webp'),
    description: 'Decorative piping arranged like an edible bouquet.',
  },
  {
    title: 'Mini Blueberry Cakes',
    category: 'Pastry & Dessert',
    image: asset('dessert-mini-blueberry-cakes.webp'),
    description: 'Small-format dessert work with fruit topping and clean portions.',
  },
  {
    title: 'Caramel Swirl Cake',
    category: 'Pastry & Dessert',
    image: asset('dessert-caramel-swirl-cake.webp'),
    description: 'A dessert cake with a glossy top and swirl decoration.',
  },
  {
    title: 'Garden Sheet Cake',
    category: 'Pastry & Dessert',
    image: asset('dessert-garden-sheet-cake.webp'),
    description: 'A playful decorated cake with flowers and outdoor-inspired details.',
  },
  {
    title: 'Cinnamon Rolls',
    category: 'Pastry & Dessert',
    image: asset('dessert-cinnamon-rolls.webp'),
    description: 'Baked pastry work with soft spirals and an even finish.',
  },
  {
    title: 'Caramel Nut Tart',
    category: 'Pastry & Dessert',
    image: asset('dessert-caramel-nut-tart.webp'),
    description: 'A glossy dessert with caramel shine, nuts, and texture.',
  },
  {
    title: 'Fruit Cream Plate',
    category: 'Pastry & Dessert',
    image: asset('dessert-fruit-cream-plate.webp'),
    description: 'A light plated dessert with fruit, cream, and garnish.',
  },
  {
    title: 'Blueberry Cream Plate',
    category: 'Pastry & Dessert',
    image: asset('dessert-blueberry-cream-plate.webp'),
    description: 'A plated dessert with berry color and a soft cream finish.',
  },
];

const filters: GalleryFilter[] = ['All', 'Savory Plates', 'Pastry & Dessert', 'Displays & Service', 'Production & Prep'];

const credentials: CredentialItem[] = [
  {
    title: 'Best Food Display',
    issuer: 'Our Lady of Fatima University',
    year: '2025',
    image: asset('cert-best-food-display.webp'),
    note: 'Recognition for “Flavors of the World, Threads of Tomorrow,” a sustainable culture and gastronomy display.',
  },
  {
    title: 'Junior Chef de Partie',
    issuer: 'Sauveur Prestige / OLFU CHIM',
    year: '2025',
    image: asset('cert-junior-chef-de-partie.webp'),
    note: 'Accepted and recognized with a Junior Chef de Partie rank for culinary readiness and performance.',
  },
  {
    title: 'Hiraya Manawari Micro-Badges',
    issuer: 'Global Professional Advancement',
    year: '2025',
    image: asset('cert-hiraya-microbadges.webp'),
    note: 'Completed three micro-badges under the Industry Experiential Study Program.',
  },
  {
    title: 'Introduction to Hospitality & Tourism',
    issuer: 'American Hospitality Academy',
    year: '2025',
    image: asset('cert-aha-hospitality-tourism.webp'),
    note: 'Professional development certificate completed with honors.',
  },
  {
    title: 'Australian Work Health and Safety Procedures',
    issuer: 'eVersity Online Campus',
    year: '2025',
    image: asset('cert-eversity-work-health-safety.webp'),
    note: 'Training focused on workplace safety standards, procedures, and professional conduct.',
  },
  {
    title: 'Work Health and Safety Competency Badge',
    issuer: 'eVersity Online Campus',
    year: '2025',
    image: asset('cert-whs-competency-badge.webp'),
    note: 'Competency badge covering safety, employability, documentation, and workplace communication skills.',
  },
];


const skills = [
  'Food preparation',
  'Plating design',
  'Kitchen organization',
  'Menu testing',
  'Food safety',
  'Guest service',
  'Leadership',
  'Critical thinking',
  'Multitasking',
  'Creative problem-solving',
  'Team coordination',
  'Hospitality communication',
];

const milestones = [
  {
    icon: GraduationCap,
    title: 'Culinary Arts Student',
    meta: 'Our Lady of Fatima University · 2024–Present',
    text: 'I am pursuing a Bachelor of Science in International Hospitality Management, specializing in Culinary Arts.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Lead Cook Experience',
    meta: "Army's Diner · Palayan City",
    text: 'I assisted with menu development, recipe testing, cooking, order-taking, and guest-facing service.',
  },
  {
    icon: Utensils,
    title: 'Kitchen Laboratory Training',
    meta: 'Culinary laboratory classes',
    text: 'I continue to build discipline in food preparation, cooking methods, plating, timing, teamwork, and food safety.',
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
            <h1>Plated with intention.</h1>
            <p>
              I create food with care, discipline, and a strong sense of hospitality. My work focuses on clean
              preparation, thoughtful presentation, and dining experiences that feel polished from the first look.
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
              <img src={asset('army-portrait-chef.webp')} alt="Army S. Barnachea in chef uniform" />
              <div>
                <span>Current focus</span>
                <strong>Technique · plating · service</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="section intro-band" aria-label="Portfolio highlights">
          <div className="stat-card">
            <span>01</span>
            <strong>Kitchen discipline</strong>
            <p>I train through hands-on preparation, cooking methods, and food safety standards.</p>
          </div>
          <div className="stat-card highlighted">
            <span>02</span>
            <strong>Awarded display work</strong>
            <p>My food display work was recognized for cultural storytelling, sustainability, and presentation.</p>
          </div>
          <div className="stat-card">
            <span>03</span>
            <strong>Hospitality mindset</strong>
            <p>I value warm service, teamwork, attention to detail, and memorable guest experiences.</p>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="section-heading split-heading">
            <div>
              <span className="eyebrow">About me</span>
              <h2>I am building a culinary path through technique, service, and presentation.</h2>
            </div>
            <p>
              As a culinary arts student, I am developing my foundation through laboratory kitchens, restaurant-style
              service, food display projects, and international hospitality coursework. I enjoy work that combines
              creativity with order: a clean station, a well-planned plate, and food that feels intentional.
            </p>
          </div>

          <div className="about-grid">
            <article
              className="about-card large-card"
              style={{ '--card-image': `url(${heroCharcuterieBackground})` } as CSSProperties}
            >
              <Quote size={34} />
              <h3>Every plate should feel cared for.</h3>
              <p>
                I want my work to show discipline without losing warmth. Whether I am preparing savory dishes,
                desserts, or displays, I focus on details that make food feel thoughtful and memorable.
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
            <img src={asset('army-portrait-kitchen.webp')} alt="Army S. Barnachea in a culinary laboratory" />
            <div>
              <span className="eyebrow">Career direction</span>
              <h2>Growing toward professional kitchen environments.</h2>
              <p>
                I am seeking opportunities where I can strengthen my cooking techniques, improve kitchen management
                habits, learn from experienced chefs, and contribute to a team that cares about quality and service.
              </p>
              <div className="signature-line">
                <ChefHat size={20} />
                <span>Technique guided by creativity, culture, and service.</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section showcase-section" id="showcase">
          <div className="section-heading centered">
            <span className="eyebrow">Complete culinary archive</span>
            <h2>Showcase</h2>
            <p>
              A full gallery of my savory plates, pastries, desserts, display work, and production pieces.
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
            {filteredGallery.map((item) => {
              const isFeatured = activeFilter === 'All' && item.featured;

              return (
                <article
                  className={isFeatured ? 'gallery-card featured' : 'gallery-card'}
                  data-title={item.title}
                  key={item.title}
                >
                  <img src={item.image} alt={item.title} loading="lazy" />
                  <div className="gallery-card-content">
                    <span>{item.category}</span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="section skills-section">
          <div className="skills-copy">
            <span className="eyebrow">Working strengths</span>
            <h2>I work best where preparation, teamwork, and detail matter.</h2>
            <p>
              My strengths include leadership, critical thinking, resourcefulness, collaboration, and calm multitasking.
              I am especially interested in cooking, baking, exploring cuisines, and learning how professional kitchens
              turn ideas into consistent guest experiences.
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
              <span className="eyebrow">Awards, certificates & documents</span>
              <h2>Training, recognition, and proof of readiness.</h2>
            </div>
            <p>
              These credentials reflect my growing foundation in hospitality, culinary preparation, food safety,
              workplace safety, leadership, and professional service.
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
              <strong>Additional listed coursework</strong>
              <p>
                My resume also lists Australian Standards for Serving Alcohol Responsibly and Australian/New Zealand
                Standards for Safe Food Handling Procedures, alongside my hospitality and safety training.
              </p>
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div
            className="contact-card"
            style={{ '--card-image': `url(${brunchBoardBackground})` } as CSSProperties}
          >
            <div className="contact-copy">
              <span className="eyebrow">Availability</span>
              <h2>I am open to culinary internships, kitchen training, and hospitality opportunities.</h2>
              <p>
                For internship coordination, culinary training, or hospitality opportunities, you may reach me through
                email, phone, or LinkedIn.
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
