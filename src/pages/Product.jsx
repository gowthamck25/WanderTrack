import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />

      <section>
        <img
          src="img-1.jpg"
          alt="person with dog overlooking mountain with sunset"
        />
        <div>
          <h2>About WanderTrack.</h2>
          <p>
            Welcome to WanderTrack, where every journey is a story waiting to be
            told. Our application is designed to be your companion in
            exploration, effortlessly documenting your travel adventures. From
            the bustling streets of urban landscapes to the serene beauty of
            nature, WanderTrack is your digital travel logbook. With a
            user-friendly interface and seamless map integration, our app
            ensures that every destination becomes a cherished memory.
          </p>
          <p>
            Join us on this journey of discovery, where your wanderings are not
            just footsteps but a vibrant tapestry of experiences. Whether you
            are a globetrotter or a weekend explorer, WanderTrack is here to
            make your travels unforgettable.
          </p>
        </div>
      </section>
    </main>
  );
}
