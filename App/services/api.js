import axios from 'axios';

const BASE_URL = 'https://opentdb.com/api.php';

// Fonction pour récupérer les questions du quiz
export const fetchQuizQuestions = async (amount, difficulty, category) => {
  try {
    const response = await axios.get(`${BASE_URL}?amount=${amount}&difficulty=${difficulty}&category=${category}&type=multiple`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching quiz questions:', error);
    return [];
  }
};
