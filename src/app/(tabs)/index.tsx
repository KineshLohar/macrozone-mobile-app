import HomeHeader from "@/components/HomeHeader";
import MacroGrid from "@/components/MacroGrid";
import { globalStyles } from "@/styles/globals";
import { ScrollView, Text } from "react-native";

export default function Index() {
  return (
    <ScrollView style={globalStyles.container}>
      <Text>Macrozone</Text>
      <HomeHeader />
      <MacroGrid />
    </ScrollView>
  );
}


