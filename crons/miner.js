const axios = require("axios");

function getGlobalStatus() {
  return axios.get("https://www.supportxmr.com/api/miner/44WKND33ynEKtS15EN9DiAbgmLKU2pS87HEDVnJXCGVaBhm6EsuWR9Y4sqc8orLCcsKnhsGAZM1QDhmNPTTuNLg8PeCgWcA/stats")
  .then((data) => {
    let addressData = data.data;
    return addressData;
  })
}

function getIndividualStatus() {
  return axios.get("https://www.supportxmr.com/api/miner/44WKND33ynEKtS15EN9DiAbgmLKU2pS87HEDVnJXCGVaBhm6EsuWR9Y4sqc8orLCcsKnhsGAZM1QDhmNPTTuNLg8PeCgWcA/identifiers")
  .then(async (data) => {
    let identifiers = data.data;
    let identifiersData = [];
    await Promise.all(identifiers.map(async (identifier) => {
      let identifierData = await axios.get(`https://www.supportxmr.com/api/miner/44WKND33ynEKtS15EN9DiAbgmLKU2pS87HEDVnJXCGVaBhm6EsuWR9Y4sqc8orLCcsKnhsGAZM1QDhmNPTTuNLg8PeCgWcA/stats/${identifier}`)
      .then((data) => {
        let identifierData = data.data;
        return identifierData;
      })
      identifiersData.push(identifierData);
    }));
    return { identifiers, identifiersData };
  })
}

axios.all([getGlobalStatus(), getIndividualStatus()])
  .then(axios.spread(function (global, individual) {
    global.individualMines = individual
    console.log(global);
  }));

