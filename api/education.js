const { educationHistory } = require('../backend/data');

export default function handler(req, res) {
  res.status(200).json(educationHistory);
}
