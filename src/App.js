import { Navigate, Route, Routes } from 'react-router-dom';
import styles from './App.module.css';
import Header from './components/header/Header';
import StartScreen from './components/startScreen/StartScreen';
import CallScreen from './components/callScreen/CallScreen';

const App = () => {
  return (
    <div className={styles.App}>
      <Header />

      <Routes>

        <Route path={'/'} element={<StartScreen />} />
        <Route path={'/room/:id'} element={<CallScreen />} />
        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>

    </div >
  );
}

export default App;
