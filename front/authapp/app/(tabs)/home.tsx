import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { logout } from "../../services/emailAuthService";

export default function Home() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logout();
      // The auth context will handle the redirect automatically
    } catch (e: any) {
      alert(e.message || "Logout failed");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome 🎉</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={handleLogout}
      >
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 20,
    color: "#000"
  },
  button: {
    backgroundColor: "#EF4444",
    padding: 14,
    borderRadius: 8,
    width: "100%",
    maxWidth: 300
  },
  buttonText: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "600"
  }
});