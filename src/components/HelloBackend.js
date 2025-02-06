// components/HelloBackend.js
import api from '../utils/api';

export default function HelloBackend() {
  const fetchGreeting = async () => {
    const response = await api.get('/hello-world');
    console.log(response.data);
  };

  fetchGreeting();

  return <div>Hello Backend</div>;
}