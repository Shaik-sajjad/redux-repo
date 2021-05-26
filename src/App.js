import CakeContainer from './components/CakeContainer'
import {Provider} from 'react-redux'
import store from './redux/store'
import HooksCakeContainer from './components/HooksCakeContainer'
import IceContainer from './components/IceContainer'
import NewContainer from './components/NewContainer'
import ItemContainer from './components/ItemContainer'
import UserContainer from './components/UserContainer'
function App() {
  return (
    <Provider store={store}>
    <div className='nng'>
       {/*<HooksCakeContainer />
      <CakeContainer />
      <IceContainer />
      <NewContainer />
      <ItemContainer cake />
      <ItemContainer  /> */}
      <UserContainer />

    </div>
    </Provider>
  );
  
}


export default App;
