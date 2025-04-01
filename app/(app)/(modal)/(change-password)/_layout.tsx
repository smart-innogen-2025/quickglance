import { Colors } from "@/assets/colors";
import { DEFAULT_FONT_FAMILY } from "@/components/custom-text/styles";
import pressedOpacity from "@/utils/pressedOpacity";
import { router, Stack } from "expo-router";
import { SymbolView } from "expo-symbols";
import { Pressable } from "react-native";

export default function ChangePasswordLayout() {
  return (
    <Stack
      screenOptions={{
        headerTransparent: true,
        headerBlurEffect: "prominent",
        headerTitleStyle: { fontFamily: DEFAULT_FONT_FAMILY },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Change Password",
          headerLeft: () => (
            <Pressable
              style={({ pressed }) => pressedOpacity({ pressed })}
              onPress={() => router.back()}
            >
              <SymbolView
                name="xmark"
                size={21}
                tintColor={Colors.PRIMARY}
                weight="semibold"
              />
            </Pressable>
          ),
        }}
      />
    </Stack>
  );
}
