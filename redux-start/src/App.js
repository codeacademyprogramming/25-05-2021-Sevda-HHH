import { HoverCount } from './components/Counter/Hover'
import { CounterHoc } from './components/Counter/index';
import { Header } from './components/Counter/Header'
import { UserProvider } from './context/userContext';
// import { GlobContextProvider } from './context/globContext';
import { Shop } from './components/Shop/index'
import { AddProduct } from './components/Shop/AddProduct'
import './App.scss';

function App() {

  return (
    <div className="App">
      <div className="container">
        <UserProvider>
          <Shop></Shop>
          <AddProduct />
        </UserProvider>
      </div>
    </div>
  );
}

export default App;
