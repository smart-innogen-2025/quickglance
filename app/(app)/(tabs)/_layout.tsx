import { Colors } from "@/assets/colors";
import AddShortcutButton from "@/components/add-shortcut-button";
import useAuthStore, { AuthStoreState } from "@/stores/useAuthStore";
import { router, Tabs } from "expo-router";
import { SymbolView } from "expo-symbols";
import { useEffect } from "react";
import { Confetti } from "react-native-fast-confetti";
import { useShallow } from "zustand/react/shallow";

export default function TabLayout() {
  const { isTokenLoaded, token } = useAuthStore<
    Pick<AuthStoreState, "isTokenLoaded" | "token">
  >(
    useShallow((state) => ({
      isTokenLoaded: state.isTokenLoaded,
      token: state.token,
    })),
  );

  // Redirect to welcome screen if no token
  useEffect(() => {
    if (isTokenLoaded && !token) {
      router.push("/(modal)/(welcome)");
    }
  }, [isTokenLoaded, token]);

  return (
    <>
      {token && <Confetti isInfinite={false} />}

      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: Colors.PRIMARY,
          tabBarInactiveTintColor: Colors.SECONDARY,
        }}
      >
        <Tabs.Screen name="index" options={{ href: null }} />
        <Tabs.Screen
          name="(home)"
          options={{
            title: "Home",
            tabBarIcon: ({ color }) => (
              <SymbolView name="house.fill" tintColor={color} />
            ),
          }}
          redirect={!token}
        />
        <Tabs.Screen
          name="(store)"
          options={{
            title: "Store",
            tabBarIcon: ({ color }) => (
              <SymbolView
                name="sparkles.rectangle.stack.fill"
                tintColor={color}
              />
            ),
          }}
          redirect={!token}
        />
        <Tabs.Screen
          name="add-shortcut-index"
          options={{
            tabBarButton: (props) => <AddShortcutButton {...props} />,
          }}
          redirect={!token}
        />
        <Tabs.Screen
          name="(automation)"
          options={{
            title: "Automation",
            tabBarIcon: ({ color }) => (
              <SymbolView name="timer" tintColor={color} />
            ),
          }}
          redirect={!token}
        />
        <Tabs.Screen
          name="(settings)"
          options={{
            title: "Settings",
            tabBarIcon: ({ color }) => (
              <SymbolView name="gear" tintColor={color} />
            ),
          }}
          redirect={!token}
        />
      </Tabs>
    </>
  );
}
