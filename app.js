import { Text, View, Button } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [pontosTimeA, atualizarPontosTimeA] = useState(0);
  const [pontosTimeB, atualizarPontosTimeB] = useState(0);

  return (
    <View>
      <Text> A </Text>
      <Text>{pontosTimeA}</Text>

      <Button
        title="+"
        onPress={() => {
          if (pontosTimeA == 24) alert('primeiro set ganho!');
          atualizarPontosTimeA(pontosTimeA + 1);
        }}
      />
      <Button
        title="-"
        onPress={() => {
          if (pontosTimeA > 0) atualizarPontosTimeA(pontosTimeA - 1);
        }}
      />
      <Button
        title="zerar"
        onPress={() => {
          if (pontosTimeA > 0) atualizarPontosTimeA(0);
        }}
      />
      <Text> B </Text>
      <Text>{pontosTimeB}</Text>

      <Button
        title="+"
        onPress={() => {
          if (pontosTimeB == 24) alert('primeiro set ganho!');
          atualizarPontosTimeB(pontosTimeB + 1);
        }}
      />
      <Button
        title="-"
        onPress={() => {
          if (pontosTimeB > 0) atualizarPontosTimeB(pontosTimeB - 1);
        }}
      />

      <Button
        title="zerar"
        onPress={() => {
          atualizarPontosTimeB(0);
        }}
      />
    </View>
  );
}
