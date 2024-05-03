import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import axios from 'axios';

const QuizScreen = ({ route }) => {
  const { difficulty, category } = route.params;

  const [question, setQuestion] = useState('');
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    fetchQuestion();
  }, []);

  const fetchQuestion = async () => {
    try {
      const response = await axios.get(`https://opentdb.com/api.php?amount=1&type=multiple&difficulty=${difficulty}&category=${category}`);
      const data = response.data.results[0];
      setQuestion(data.question);
      setAnswers([...data.incorrect_answers, data.correct_answer].sort(() => Math.random() - 0.5));
    } catch (error) {
      console.error('Error fetching question:', error);
    }
  };

  const handleAnswer = (selectedAnswer) => {
    if (selectedAnswer === data.correct_answer) {
      setScore(score + 1);
    }
    fetchQuestion();
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Question: {question}</Text>
      {answers.map((answer, index) => (
        <Button key={index} title={answer} onPress={() => handleAnswer(answer)} />
      ))}
      <Text>Score: {score}</Text>
    </View>
  );
};

export default QuizScreen;
