import Reacotron from 'reactotron-react-js';

if (process.env.NODE_ENV === 'development') {
  const tron = Reacotron.configure().connect();

  tron.clear();

  console.tron = tron;
}
