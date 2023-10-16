import stillImage from '../assets/images/TomSeager_StillImage_OscarLangburne.jpg';

export default function HomeImage() {
  return (
    <section>
      <img
        className="home-image"
        src={stillImage}
        alt="Black outline of surfer on a white background"
      />
      <br />
      <a href="./surfer-ar.html" target="_blank">
        Launch Camera
      </a>
    </section>
  );
}
