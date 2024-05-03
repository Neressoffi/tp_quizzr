import React, { useState } from 'react';
import { View, Text, Button, Picker } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const startQuiz = () => {
    // Passage  des options sélectionnées à l'écran de quiz
    navigation.navigate('Quiz', { difficulty: selectedDifficulty, category: selectedCategory });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Accueil - Choisissez vos paramètres de quiz</Text>
      
      {/* Sélection du mode */}
      <Text>Sélectionnez le mode :</Text>
      <Picker
        selectedValue={selectedDifficulty}
        onValueChange={(itemValue) => setSelectedDifficulty(itemValue)}
      >
        <Picker.Item label="Facile" value="easy" />
        <Picker.Item label="Moyen" value="medium" />
        <Picker.Item label="Difficile" value="hard" />
        <Picker.Item label="Tous" value="all" />
      </Picker>

      {/* Sélection de la catégorie */}
      <Text>Sélectionnez une catégorie :</Text>
      <Picker
        selectedValue={selectedCategory}
        onValueChange={(itemValue) => setSelectedCategory(itemValue)}
      >
        {/* Ajoutez ici les différentes catégories en tant qu'éléments Picker.Item */}
      </Picker>
      
      {/* Bouton de démarrage du quiz */}
      <Button title="Démarrer le quiz" onPress={startQuiz} />
    </View>
  );
};

export default HomeScreen;
