import React, { useState } from 'react';
import { View, Text, Animated } from 'react-native';

const Favorites = () => {

  const [largura] = useState(new Animated.Value(50));
  const [altura] = useState(new Animated.Value(50));

  Animated.loop(
    Animated.sequence([
      Animated.timing(largura, { toValue: 360, duration: 2000 }),
      Animated.timing(altura, { toValue: 500, duration: 2000 }),
    ])
  ).start();


  return (
    <View>
      <Text style={{ fontSize: 26, textAlign: 'center', fontWeight: 'bold', margin: 18 }}>Favorites</Text>

      <Animated.Image
        style={{ width: largura, height: altura, alignItems: "center", justifyContent: "center" }}
        source={require('../images/fundo1.jpg')}
      />
    </View>


  );
}
export default Favorites;