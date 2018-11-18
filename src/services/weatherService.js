import Network from '../utils/Network';

export const getWeather = (city = 'Antwerp') => {
  return Network.get(`/data/2.5/weather?q=${city}&units=metric&APPID=1d4cad2f608dd23c5a060ce1a6383eab`);
};
