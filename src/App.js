import React, { Suspense, lazy } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToTop from './Components/ScrollToTop';
import ConditionalLayout from './Components/ConditionalLayout'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Login = lazy(() => import('./Components/Login'));
const Signup = lazy(() => import('./Components/Signup'));
const Dashboard = lazy(() => import('./Components/Dashboard'));
const CartPage = lazy(() => import('./Components/CartPage'));
const CheckoutPage = lazy(() => import('./Components/CheckoutPage'));
const Self = lazy(() => import('./Pages/Self'));
const Mystery = lazy(() => import('./Pages/Mystery'));
const Autobio = lazy(() => import('./Pages/Autobio'));
const Fictional = lazy(() => import('./Pages/Fictional'));
const Best = lazy(() => import('./Pages/Best'));
const SingleItem = lazy(() => import('./Pages/SingleItem'));
const SingleItem1 = lazy(() => import('./Pages/SingleItem1'));
const SingleItem2 = lazy(() => import('./Pages/SingleItem2'));
const SingleItem3 = lazy(() => import('./Pages/SingleItem3'));
const SingleItem4 = lazy(() => import('./Pages/SingleItem4'));
const AboutUs = lazy(() => import('./Pages/AboutUs'));
const Feedback = lazy(() => import('./Components/Feedback'));
const GenreStats = lazy(() => import('./Components/GenreStats'));
const SearchResults = lazy(() => import('./Components/SearchResults'));

function App() {
  return (
    <div className='container-fluid'>
      <Router>
        <ScrollToTop />
        <ConditionalLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path='/reactjs' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/search" element={<SearchResults />} />
              <Route path='/self' element={<Self />} />
              <Route path='/mystery' element={<Mystery />} />
              <Route path='/autobio' element={<Autobio />} />
              <Route path='/fictional' element={<Fictional />} />
              <Route path='/best' element={<Best />} />
              <Route path='/aboutus' element={<AboutUs />} />
              <Route path='/feedback' element={<Feedback />} />
              <Route path='/genre-stats' element={<GenreStats />} />
              <Route path='/self/:id' element={<SingleItem />} />
              <Route path='/mystery/:id' element={<SingleItem1 />} />
              <Route path='/autobio/:id' element={<SingleItem2 />} />
              <Route path='/fictional/:id' element={<SingleItem3 />} />
              <Route path='/best/:id' element={<SingleItem4 />} />
            </Routes>
          </Suspense>
        </ConditionalLayout>
      </Router>
    </div>
  );
}

export default App;
