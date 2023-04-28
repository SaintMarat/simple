import Banner from './components/home/banner';
import './App.scss';
import Info from './components/home/info';
import Menu from './components/home/products';
import Avokado from './components/home/avokado';
import Footer from './components/home/footer'
import { Route } from 'react-router-dom';
function App() {
  return (
    <div className='contain'>
      <Banner />
      <Info />
      <Menu />
      <Avokado />
      <Footer />
    </div>

{/* <Routes>
<Route element={<HomePage/>} path='/'/>
<Route element={<ChangeTextColor/>} path='/changetextcolor'/>
<Route element={<NumberedList/>} path='/numberedlist'/>
<Route element={<ProductsList/>} path='/productlist'/>
<Route element={<DarkMode/>} path='/darkmode'/>
<Route element={<Navigate to={'/'}/>} path='*'/>
</Routes> */}

  );
}

export default App;
