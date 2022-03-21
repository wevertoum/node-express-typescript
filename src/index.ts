
import axios from 'axios';

const getCoords = async (addressName: string) => {
  const { data } = await axios.get(
    `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(addressName)}&format=json`
  );
  return data;
}

getCoords("Goiânia - Hospital Araújo Jorge").then(console.log);