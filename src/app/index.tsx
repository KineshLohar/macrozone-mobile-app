import { globalStyles } from "@/styles/globals";
import { Link } from "expo-router";
import { ScrollView, Text } from "react-native";

export default function Index() {
  return (
    <ScrollView style={globalStyles.container}>
      <Text>Macrozone</Text>
      <Link href='/meals' style={{
        fontSize: 18,
        color: '#007bff'
      }}>
        Go to meals
      </Link>
      <Link href='/add-meal' style={{
        fontSize: 18,
        color: '#007bff'
      }}>
        Add meals
      </Link>
    </ScrollView>
  );
}


