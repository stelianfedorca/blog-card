import { Button } from '../Button/Button';
import './Card.css';

export function Card() {
  return (
    <div className="max-width-wrapper">
      <div className="card">
        <img
          src={'spacejoy-YqFz7UMm8qE-unsplash.jpg'}
          className="image"
          alt="blog card image"
        />

        <span className="card-content-badge">Interior</span>

        <div className="card-content">
          <h1>Top 5 Living Room Inspirations</h1>
          <p className="card-content-description">
            Curated vibrants colors for your living, make it pop & calm in the
            same time.
          </p>
          <Button title="Read more" />
        </div>
      </div>
    </div>
  );
}
