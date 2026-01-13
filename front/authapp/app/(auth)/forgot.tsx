import { router } from "expo-router";
import { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform
} from "react-native";
import { resetPassword } from "../../services/emailAuthService";

export default function Forgot() {
  const [email, setEmail] = useState("");

  const handleReset = async () => {
    if (!email) {
      alert("Please enter your email");
      return;
    }

    try {
      await resetPassword(email);
      alert("Password reset email sent");
      router.replace("/");
    } catch (err: any) {
      alert(err.message || "Something went wrong");
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={styles.card}>
        <Text style={styles.title}>Reset Password</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#999"
          autoCapitalize="none"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handleReset}
        >
          <Text style={styles.buttonText}>Send Reset Email</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.replace("/")}>
          <Text style={styles.link}>Back to Login</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
    justifyContent: "center",
    padding: 20
  },
  card: {
    backgroundColor: "#FFFFFF",
    padding: 24,
    borderRadius: 12,
    elevation: 4
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 20,
    textAlign: "center",
    color: "#000"
  },
  input: {
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    color: "#000"
  },
  button: {
    backgroundColor: "#2563EB",
    padding: 14,
    borderRadius: 8
  },
  buttonText: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "600"
  },
  link: {
    marginTop: 16,
    textAlign: "center",
    color: "#2563EB",
    fontWeight: "500"
  }
});
