import { ScrollView, StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function ExploreScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText type="subtitle">Explore</ThemedText>
        <ThemedText themeColor="textSecondary" style={styles.subtitle}>
          A quick overview of my interests, strengths, and learning goals.
        </ThemedText>
      </ThemedView>

      <ThemedView type="backgroundElement" style={styles.card}>
        <ThemedText type="smallBold">About Me</ThemedText>
        <ThemedText style={styles.text}>
          I am a software development student who enjoys learning how modern mobile apps are built,
          understanding product workflows, and solving real-world problems with clean code.
        </ThemedText>
      </ThemedView>

      <ThemedView type="backgroundElement" style={styles.card}>
        <ThemedText type="smallBold">Skills</ThemedText>
        <ThemedText style={styles.text}>
          {'• Mobile app development\n• Problem solving\n• Team collaboration\n• Quick learning'}
        </ThemedText>
      </ThemedView>

      <ThemedView type="backgroundElement" style={styles.card}>
        <ThemedText type="smallBold">Goals</ThemedText>
        <ThemedText style={styles.text}>
          I want to keep improving my app development skills, build better user experiences, and
          contribute to meaningful software projects in the future.
        </ThemedText>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingVertical: 32,
    gap: 16,
  },
  header: {
    alignItems: 'center',
    gap: 8,
    paddingTop: 12,
  },
  subtitle: {
    textAlign: 'center',
  },
  card: {
    borderRadius: 20,
    padding: 20,
    gap: 8,
  },
  text: {
    lineHeight: 24,
  },
});
