import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import store from './store/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import AdPage from './components/AdPage';

const appRoutrer = createBrowserRouter([{
  path: "/",
  element: <Body />,
  children: [
    {
    path: "/",
    element: <MainContainer />
  },
  {
    path: "watch",
    element: <WatchPage />
  },
  {
    path: "adv",
    element: <AdPage />
  }
  ]
}])

function App() {
  return (
    <Provider store={store}>
    <div className="App font-roboto font-arial font-sans">
      <Header />
      <RouterProvider router={appRoutrer} />
      {/* <Body /> */}
    </div>
    </Provider>
  );
}

export default App;
