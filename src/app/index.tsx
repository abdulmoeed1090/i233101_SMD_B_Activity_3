import { useState } from 'react';
import { Pressable, StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function HomeScreen() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <ThemedView style={styles.container}>
      <ThemedView type="backgroundElement" style={styles.card}>
        <ThemedText type="title">Abdul Moeed</ThemedText>
        <ThemedText style={styles.subtitle} themeColor="textSecondary">
          Software Development Student
        </ThemedText>

        <Pressable
          onPress={() => setShowDetails((previous) => !previous)}
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed,
          ]}>
          <ThemedText style={styles.buttonText}>{showDetails ? 'Hide Details' : 'Show Details'}</ThemedText>
        </Pressable>

        {showDetails && (
          <ThemedView style={styles.infoGroup}>
            <ThemedText style={styles.infoItem}>Roll Number: 23I-3101</ThemedText>
            <ThemedText style={styles.infoItem}>Section: B</ThemedText>
            <ThemedText style={styles.infoItem}>Course: SMD Activity 3</ThemedText>
          </ThemedView>
        )}
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  card: {
    width: '100%',
    maxWidth: 420,
    borderRadius: 24,
    padding: 24,
    alignItems: 'center',
    gap: 12,
  },
  subtitle: {
    textAlign: 'center',
  },
  button: {
    marginTop: 8,
    backgroundColor: '#3c87f7',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 12,
  },
  buttonPressed: {
    opacity: 0.8,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 600,
  },
  infoGroup: {
    width: '100%',
    marginTop: 8,
    paddingTop: 16,
    gap: 10,
    alignItems: 'center',
  },
  infoItem: {
    fontSize: 18,
    fontWeight: 600,
  },
});