import './Hero.css';

export default function Hero({ title, subtitle, ctaText, image }) {
  return (
    <section className="hero">
      <img src={image} alt="Hero Banner" className="hero-image" />

      <div className="hero-content">
        <h2>{title}</h2>
        <p>{subtitle}</p>
        <button className="hero-button">{ctaText}</button>
      </div>
    </section>
  );
}
