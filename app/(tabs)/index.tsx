import { Image, StyleSheet, Platform, ScrollView, Text, View, TextInput } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useEffect } from 'react';


export default function HomeScreen() {
 
  return (
    <View>
      <Text style={styles.main}>
        Hey
      </Text>
      <TextInput style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}/>
    </View>
  );
}

const styles = StyleSheet.create({
  main : {
    color: "black",
    marginTop: 25,
    marginLeft: 10 
  }
});
