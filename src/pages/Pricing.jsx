// Uses the same styles as Product
import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />

      <section>
        <div>
          <h2>
            {/* Simple pricing. */}
            Limited Time Offer.
            <br />
            {/* Just $9/month. */}
            Join for free.
          </h2>
          <p>
            Discover the richness of your travel experiences with our free
            limited-time offer – no cost, no commitments. Immerse yourself in an
            interactive map experience, effortlessly recording every
            destination. Enjoy unlimited location entries and a user-friendly
            dashboard, all with the simplicity and affordability you deserve.
            Your travel data is securely stored, ensuring accessibility anytime.
            Embrace this complimentary opportunity, join us for a limited
            period, and start mapping your memories today without any cost.
          </p>
        </div>
        <img src="img-2.jpg" alt="overview of a large city with skyscrapers" />
      </section>
    </main>
  );
}
