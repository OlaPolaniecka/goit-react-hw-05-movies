import { lazy } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Suspense } from 'react';

const Home = lazy(() => import('./pages/Home/Home'));
const Movies = lazy(() => import('./pages/Movies/Movies'));
const MovieDetails = lazy(() => import('./pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./components/Cast/Cast'));
const Reviews = lazy(() => import('./components/Reviews/Reviews'));

const App = () => {
  return (
    <Router>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Route exact path="/" element={Home} />
          <Route exact path="/movies" element={Movies} />
          <Route exact path="/movies/:movieId" element={MovieDetails} />
          <Route exact path="/movies/:movieId/cast" element={Cast} />
          <Route exact path="/movies/:movieId/reviews" component={Reviews} />
          <Route path="*" />
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
