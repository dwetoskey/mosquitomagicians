import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from './components/Header';
import Facts from './components/Facts';
import Lead from './components/TopCarousel';

function App() {
  return (
    <div className="App">
      <header>

        <Header>

        </Header>

      </header>

      <body>
        <Lead></Lead>

        <Facts> </Facts>

      </body>

    </div>
  );
}

export default App;
