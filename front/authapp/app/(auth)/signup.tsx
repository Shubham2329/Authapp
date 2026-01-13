import { router } from "expo-router";
import { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { emailSignup, logout } from "../../services/emailAuthService";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    if (password.length < 6) {
      Alert.alert("Error", "Password must be at least 6 characters");
      return;
    }

    setLoading(true);
    try {
      await emailSignup(email, password);
      
      // Sign out the user immediately after signup
      await logout();
      
      Alert.alert(
        "Verification Email Sent! ✉️",
        "Please check your email and click the verification link. After verifying, you can login.",
        [
          {
            text: "OK",
            onPress: () => router.replace("/(auth)")
          }
        ]
      );
    } catch (e: any) {
      let errorMessage = "Signup failed";
      
      if (e.code === "auth/email-already-in-use") {
        errorMessage = "This email is already registered";
      } else if (e.code === "auth/invalid-email") {
        errorMessage = "Invalid email address";
      } else if (e.code === "auth/weak-password") {
        errorMessage = "Password is too weak";
      }
      
      Alert.alert("Error", errorMessage);
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
        <Text style={styles.title}>Create Account</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#999"
          autoCapitalize="none"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
          editable={!loading}
        />

        <TextInput
          style={styles.input}
          placeholder="Password (min 6 characters)"
          placeholderTextColor="#999"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          editable={!loading}
        />

        <TouchableOpacity
          style={[styles.button, loading && styles.buttonDisabled]}
          onPress={handleSignup}
          disabled={loading}
        >
          <Text style={styles.buttonText}>
            {loading ? "Creating Account..." : "Sign Up"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={() => router.back()}
          disabled={loading}
        >
          <Text style={styles.link}>Already have an account? Login</Text>
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
    backgroundColor: "#FFF",
    padding: 24,
    borderRadius: 12,
    elevation: 3
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
    marginBottom: 14,
    color: "#000"
  },
  button: {
    backgroundColor: "#2563EB",
    padding: 14,
    borderRadius: 8,
    marginTop: 10
  },
  buttonDisabled: {
    backgroundColor: "#9CA3AF"
  },
  buttonText: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "600"
  },
  link: {
    textAlign: "center",
    color: "#2563EB",
    marginTop: 12
  }
});
