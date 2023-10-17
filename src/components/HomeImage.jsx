import jordyImage from '../assets/images/TomSeager_StillImage_JordySmith.jpg';
import tiaImage from '../assets/images/TomSeager_StillImage_TiaBlanco.jpg';

export default function HomeImage() {
  return (
    <>
      <section className="home-image-section">
        <img
          className="home-image"
          src={jordyImage}
          alt="digital drawings of a male surfer in a black wetsuit in various positions of a turn moving from right to left across the image"
        />
        <a href="https://ar.tom-seager.com" target="_blank">
          Launch Camera
        </a>
      </section>
      <section className="home-image-section">
        <img
          className="home-image"
          src={tiaImage}
          alt="digital drawings of a female surfer in  pink wetsuit in various positions of a turn moving from left to right across the image"
        />
        <a href="https://ar.tom-seager.com" target="_blank">
          Launch Camera
        </a>
      </section>
    </>
  );
}
