// src/theme/components/islands/WhyUsIsland.jsx
import { useEffect, useRef } from "react";
import styles from "../../styles/whyus.module.css";

export default function WhyUsIsland({ fieldValues = {} }) {
  const { heading, valueProps } = fieldValues;

  const scrollerRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const animationRef = useRef(null);

  const fallbackProps = [
    { title: "Pure & Safe Drinking Water", 
      description: "Our water is carefully filtered and purified using advanced treatment processes to remove impurities, ensuring every drop is clean, safe, and refreshing." },
    { title: "Quality You Can Trust", 
      description: "We adhere to strict quality control standards and regular testing, giving you peace of mind that your water meets the highest safety and hygiene standards." },
    { title: "Reliable Delivery", 
      description: "From homes to businesses, we deliver water on time, every time. Our dependable distribution ensures you never run out of clean drinking water." },
    { title: "Affordable Pricing", 
      description: "We believe access to clean water should be affordable. Our pricing is fair, transparent, and designed to suit both households and businesses." },
    { title: "Eco-Friendly Practices", 
      description: "We are committed to sustainability through responsible water sourcing, recyclable packaging, and environmentally conscious operations." },
    { title: "Customer-Focused Service", 
      description: "Your satisfaction matters to us. Our friendly support team is always ready to assist, ensuring a smooth and pleasant experience from order to delivery." },
  ];

  const cards =
    Array.isArray(valueProps) && valueProps.length > 0
      ? valueProps
      : fallbackProps;

  /* AUTO SCROLL LOOP */
  useEffect(() => {
    const scroller = scrollerRef.current;

    const animate = () => {
      if (!isDragging.current) {
        scroller.scrollLeft += 0.4;

        if (scroller.scrollLeft >= scroller.scrollWidth / 2) {
          scroller.scrollLeft = 0;
        }
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  /* DRAG FUNCTIONS — REQUIRED */
  const handleMouseDown = (e) => {
    isDragging.current = true;
    scrollerRef.current.classList.add(styles.dragging);
    startX.current = e.pageX - scrollerRef.current.offsetLeft;
    scrollLeft.current = scrollerRef.current.scrollLeft;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    scrollerRef.current.classList.remove(styles.dragging);
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
    scrollerRef.current.classList.remove(styles.dragging);
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();

    const x = e.pageX - scrollerRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.4;
    scrollerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <section className={styles.valuePropsSection}>
      {heading && <h2 className={styles.heading}>{heading}</h2>}

      <div
        ref={scrollerRef}
        className={styles.scroller}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        <div className={styles.track}>
          {[...cards, ...cards].map((item, idx) => (
            <div key={idx} className={styles.card}>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardText}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
