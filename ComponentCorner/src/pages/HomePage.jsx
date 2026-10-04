import Hero from "../components/Hero";
import BannerImage from "../assets/ComponentsBanner.png";
import "./HomePage.css";


function HomePage() {
  return (
    <div className="home-container">
      <Hero
        title="Welcome to Cogdell Component Corner"
        subtitle="High‑quality components for every build"
        ctaText="Shop Now"
        image={BannerImage}
      />

      <div className="home-intro">
        <h2>Why Shop With Us?</h2>
        <p>
          At Cogdell Component Corner, we focus on quality, reliability, and great customer service.
          Whether you're building a new setup or upgrading your current gear, we offer trusted
          components at fair prices. Our goal is to make your shopping experience simple and enjoyable.
        </p>
      </div>
    </div>
  );
}

export default HomePage;
