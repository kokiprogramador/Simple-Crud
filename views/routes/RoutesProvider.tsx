import {
  LocationProvider,
  Router,
  lazy,
  Route
} from "preact-iso";


/*Remember create other routes.*/

const Home = lazy(() => import('../pages/Home'))

export const RoutesProvider = () => {
  return (
    <LocationProvider>
      <Router>{[<Route path="/" component={Home} />]}</Router>
    </LocationProvider>
    /*I spent 30 minutes in learning how to render my component lol*/ 
  );
};

export default RoutesProvider;
