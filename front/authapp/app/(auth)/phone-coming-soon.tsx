import { router } from "expo-router";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function PhoneComingSoon() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Login with Phone</Text>

        <Text style={styles.subtitle}>
          🚧 Feature Coming Soon
        </Text>

        <Text style={styles.message}>
          Phone number verification is not available yet.
          {"\n\n"}
          We are working on it and it will be added in a future update.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.replace("/")}
        >
          <Text style={styles.buttonText}>Back to Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

/* ================= STYLES ================= */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
    justifyContent: "center",
    padding: 20,
  },
  card: {
    backgroundColor: "#FFF",
    padding: 24,
    borderRadius: 12,
    elevation: 3,
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 8,
    color: "#000",
  },
  subtitle: {
    textAlign: "center",
    fontSize: 14,
    color: "#2563EB",
    marginBottom: 16,
    fontWeight: "500",
  },
  message: {
    fontSize: 15,
    textAlign: "center",
    color: "#444",
    lineHeight: 22,
    marginBottom: 24,
  },
  button: {
    backgroundColor: "#2563EB",
    padding: 14,
    borderRadius: 8,
  },
  buttonText: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "600",
    fontSize: 16,
  },
});
