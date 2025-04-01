import { Colors } from "@/assets/colors";
import { DEFAULT_FONT_FAMILY } from "@/components/custom-text/styles";
import { Stack } from "expo-router";

export default function StoreLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Shortcut Gallery",
          headerLargeTitle: true,
          headerLargeTitleShadowVisible: false,
          headerLargeTitleStyle: { fontFamily: DEFAULT_FONT_FAMILY },
          headerTitleStyle: { fontFamily: DEFAULT_FONT_FAMILY },
          contentStyle: { backgroundColor: "white" },
        }}
      />
      <Stack.Screen
        name="[service]"
        options={{
          headerBackTitle: "Services",
          headerLargeTitle: true,
          headerTintColor: Colors.PRIMARY,
          headerLargeTitleStyle: {
            color: "black",
            fontFamily: DEFAULT_FONT_FAMILY,
          },
          headerTitleStyle: { color: "black", fontFamily: DEFAULT_FONT_FAMILY },
          headerBackTitleStyle: { fontFamily: DEFAULT_FONT_FAMILY },
          headerTransparent: true,
          headerBlurEffect: "prominent",
        }}
      />
    </Stack>
  );
}
