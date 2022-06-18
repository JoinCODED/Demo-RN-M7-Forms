import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, ScrollView } from 'react-native';
import Button from './components/Button';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Signup</Text>

        <View style={styles.view}>
          <Button title="Register" onPress={() => {}} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: { paddingTop: 50, paddingHorizontal: 20 },
  title: { color: '#EF9F9F', fontSize: 40, fontWeight: 'bold' },
  view: { marginVertical: 20 },
});
