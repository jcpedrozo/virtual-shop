import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Login, RecoveryPassword, NotFound, SendEmail, NewPassword, MyAccount, CreateAccount, Checkout, Orders } from '../pages'
import Layout from '../containers/Layout';
import '../styles/Global.css'
import AppContext from '../context/AppContext'
import useInitialState from '../hooks/useInitialState';

function App() {
  const initialState = useInitialState()
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/recovery-password' element={<RecoveryPassword />} />
            <Route path='/send-email' element={<SendEmail />} />
            <Route path='/new-password' element={<NewPassword />} />
            <Route path='/account' element={<MyAccount />} />
            <Route path='/signup' element={<CreateAccount />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/orders' element={<Orders />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;