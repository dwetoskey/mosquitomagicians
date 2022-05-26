import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from './components/Header';
import Facts from './components/Facts';
import Lead from './components/TopCarousel';
import About from './components/About';
import What from './components/What';
import Footer from './components/Footer';
import mosqlogolt from './images/mosqleft.png';
import mosqlogort from './images/mosqright.png'

function App() {
  return (
    <div className="App">
      <header>

        <Header>

        </Header>

        <div className='d-flex justify-content-center align-items-center headbg'>
        <h2 className='desktop'><img className="puff-out-hor mosqlogoheaddesktop p-2 m-auto" alt="mosquito magicians banner and mosquito" src={mosqlogort} />Make Mosquitos Disappear<img className="puff-out-hor mosqlogoheaddesktop p-2 m-auto" alt="mosquito magicians banner and mosquito" src={mosqlogolt} /></h2>
      <h4 className='mobile'><img className="puff-out-hor mosqlogoheadmobile p-2 m-auto" alt="mosquito magicians banner and mosquito" src={mosqlogort} />Make Mosquitos Disappear<img className="puff-out-hor mosqlogoheadmobile p-2 m-auto" alt="mosquito magicians banner and mosquito" src={mosqlogolt} /></h4>

      </div>
    
      </header>

      <body>
        <Lead></Lead>
        <br />
        <About></About>
        <br />
        <What></What>
        <br />
        <Facts> </Facts>

      </body>
      <footer>
        <Footer></Footer>
      </footer>

    </div>
  );
}

export default App;
