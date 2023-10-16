import './App.css';
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
    </>
  );
}

export default App;
