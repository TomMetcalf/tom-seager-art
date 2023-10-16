import './App.css';
import HomeImage from './components/HomeImage';
import SiteLinks from './components/SiteLinks';
import SocialLinks from './components/SocialLinks';
import UnderConstructionText from './components/UnderConstructionText';
import WebHeader from './components/WebHeader';

function App() {
  return (
    <>
      <WebHeader />
      <UnderConstructionText />
      <SiteLinks />
      <SocialLinks />
      <HomeImage />
    </>
  );
}

export default App;
