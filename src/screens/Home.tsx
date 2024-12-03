import { View, Text } from "react-native";

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

import { HabitDay, DAY_SIZE } from "../components/HabitDay";
import { Header } from "../components/Header";

export function Home() {
  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <Header />

      <View>
        {weekDays.map((weekDay, i) => (
          <Text>
            {weekDay}
          </Text>
        ))}
      </View>

      <HabitDay />
    </View>
  )
}