import stillImage from '../assets/images/TomSeager_StillImage_JordySmith.jpg';

export default function HomeImage() {
  return (
    <section className='home-image-section'>
      <img
        className="home-image"
        src={stillImage}
        alt="Black outline of surfer on a white background"
      />
       <a href="https://ar.tom-seager.com" target="_blank">Launch Camera</a>
    </section>
  );
}
