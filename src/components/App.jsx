import '../sass/App.scss';
import Main from './Main'
import Banner from'./Banner'
import Footer from './Footer'

function App() {
  
  return (
    <div className="main">
      <Banner/>
      <Main/>
      <Footer/>   
    </div>
  );
}
export default App;