import { router } from "expo-router";
import { useState } from "react";
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { emailLogin } from "../../services/emailAuthService";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleEmailLogin = async () => {
    if (!email || !password) {
      alert("Enter email and password");
      return;
    }

    try {
      setLoading(true);
      await emailLogin(email, password);
      router.replace("/(tabs)/home");
    } catch (e: any) {
      alert(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={styles.card}>
        <Text style={styles.title}>Login</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCapitalize="none"
          keyboardType="email-address"
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          onChangeText={setPassword}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handleEmailLogin}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.buttonText}>Login</Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/(auth)/signup")}>
          <Text style={styles.link}>Create Account</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/(auth)/forgot")}>
          <Text style={styles.link}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/(auth)/phone-coming-soon")}>
          <Text style={styles.link}>Login with Phone</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
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
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 16,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 8,
    padding: 12,
    marginBottom: 14,
  },
  button: {
    backgroundColor: "#2563EB",
    padding: 14,
    borderRadius: 8,
    marginTop: 4,
  },
  buttonText: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "600",
  },
  link: {
    textAlign: "center",
    color: "#2563EB",
    marginTop: 12,
  },
});
