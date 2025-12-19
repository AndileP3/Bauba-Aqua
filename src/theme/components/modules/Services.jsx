import {
  ModuleFields,
  TextField,
  ImageField,
} from "@hubspot/cms-components/fields";
import styles from "../../styles/services.module.css";


import bottle500 from "../../assets/1bottle.png";
import bottle1L from "../../assets/500ML.png";
import bottle5L from "../../assets/1L.png";
import bottle20L from "../../assets/5L.png";

/* ================= SVG ICONS (HUBSPOT SAFE) ================= */

const WaterIcon = () => (
  <svg viewBox="0 0 24 24" width="42" height="42" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M12 2s6 7 6 12a6 6 0 1 1-12 0c0-5 6-12 6-12z"/>
  </svg>
);

const BrandingIcon = () => (
  <svg viewBox="0 0 24 24" width="42" height="42" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M3 21l3-1 12-12-2-2L4 18l-1 3z"/>
    <path d="M14 6l2 2"/>
  </svg>
);

const BuildingIcon = () => (
  <svg viewBox="0 0 24 24" width="42" height="42" fill="none" stroke="currentColor" strokeWidth="1.6">
    <rect x="3" y="3" width="18" height="18" rx="2"/>
    <path d="M9 9h.01M15 9h.01M9 15h.01M15 15h.01"/>
  </svg>
);

const DeliveryIcon = () => (
  <svg viewBox="0 0 24 24" width="42" height="42" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M3 7h13v10H3z"/>
    <path d="M16 10h4l1 2v5h-5z"/>
    <circle cx="7.5" cy="19" r="1.5"/>
    <circle cx="18.5" cy="19" r="1.5"/>
  </svg>
);


export function Component({ fieldValues }) {
  const { heading, introText } = fieldValues;

const services = [
  {
    icon: WaterIcon,
    title: "Premium Bottled Water",
    text: "Reliable bulk water delivery for homes, offices, and events."
  },
  {
    icon: BrandingIcon,
    title: "Custom Branded Bottles",
    text: "Personalized bottled water solutions for businesses and special occasions."
  },
  {
    icon: BuildingIcon,
    title: "Bulk Water Supply",
    text: "High-quality water solutions tailored for residential and commercial needs."
  },
  {
    icon: DeliveryIcon,
    title: "Reliable Delivery",
    text: "Timely and efficient water delivery services to keep you hydrated."
  }
];

  const products = [
    {
      img: bottle500,
      name: "BaubAqua Still Water",
      liter: "250ml",
      price: "R6.50",
      badge: "Best Seller"
    },
    {
      img: bottle1L,
      name: "BaubAqua Still Water",
      liter: "500ml",
      price: "R10.00",
      badge: "Popular"
    },
    {
      img: bottle5L,
      name: "BaubAqua Family Pack",
      liter: "1L",
      price: "R25.00",
    },
    {
      img: bottle20L,
      name: "BaubAqua 5L Bottle",
      liter: "5L",
      price: "R55.00",
    },
  ];

  return (
    <section className={styles.servicesSection}>

      {/* ================= BANNER ================= */}
      <div className={styles.topHeadingWrapper}>
        <h2 className={styles.heading}>{heading}</h2>
        <p className={styles.intro}>{introText}</p>
      </div>

      {/* ================= OUR SERVICES ================= */}
      <div className={styles.servicesBlock}>
        <h3>Our Services</h3>

        <div className={styles.servicesGrid}>
      {services.map((service, i) => {
  const Icon = service.icon;

  return (
    <div key={i} className={styles.serviceCard}>
      <div className={styles.iconWrapper}>
        <Icon size={42} strokeWidth={1.6} className={styles.icon} />
      </div>
      <h4>{service.title}</h4>
      <p>{service.text}</p>
    </div>
  );
})}

        </div>
      </div>

      {/* ================= OUR PRODUCTS ================= */}
      <div className={styles.productsBlock}>
        <h3>Our Products</h3>

        <div className={styles.productsGrid}>
          {products.map((product, i) => (
            <div key={i} className={styles.productCard}>
              {product.badge && (
                <span className={styles.badge}>{product.badge}</span>
              )}

              <img src={product.img} alt={product.name} />

              <h4>{product.name}</h4>
              <p className={styles.liter}>{product.liter}</p>

              {/* <div className={styles.priceRow}>
                <span className={styles.price}>{product.price}</span>
              </div> */}

              <a href="/contact-us" className={styles.buyBtn}>
                Order Now
              </a>
            </div>
          ))}
        </div>
      </div>
      

      <div className={styles.valuesWrapper1}>
              <h3>Ready To Drink? Order Yours Now</h3>
              <p className={styles.valuesText1}>For more information on how we can help assist you with your bottled water requirements and support your promotions or events.</p>
              <a href="/contact-us" className={styles.button1}>
                Order Now
              </a>
            </div>
    </section>
  );
}

/* ================= HUBSPOT FIELDS ================= */
export const fields = (
  <ModuleFields>
    <TextField
      name="heading"
      label="Page Heading"
      default="Our Services & Products"
    />
    <TextField
      name="introText"
      label="Intro Text"
      default="Pure water solutions designed for homes, businesses and events — delivered with care, quality and reliability."
      multiple
    />
  </ModuleFields>
);

export const meta = {
  label: "Services – Water Company",
  icon: "water",
};

export default Component;
