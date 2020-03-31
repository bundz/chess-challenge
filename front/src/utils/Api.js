import axios from 'axios';

class Api {
  static getPossiblePositions(piece, position, turns) {
    return axios.get(`http://localhost:3001/piece/${piece}?position=${position}&turns=${turns}`)
      .then(res => res.data.data);
  }
}

export default Api;