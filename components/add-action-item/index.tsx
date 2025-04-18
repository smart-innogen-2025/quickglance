import { Action } from "@/constants/types";
import { Pressable, useWindowDimensions, View } from "react-native";
import Animated, { ZoomIn } from "react-native-reanimated";
import styles from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { SymbolView } from "expo-symbols";
import globalStyles from "@/assets/global-styles";
import pressedOpacity from "@/utils/pressedOpacity";
import CustomText from "../custom-text";

type AddActionItemProps = {
  item: Action;
  index: number;
  onActionEdit?: (action: Action) => void;
  onActionDelete?: (action: Action) => void;
};

export default function AddActionItem({
  item,
  index,
  onActionEdit,
  onActionDelete,
}: AddActionItemProps) {
  const { height } = useWindowDimensions();
  const itemHeight = height * 0.13;

  return (
    <View style={[{ height: itemHeight }, styles.container]}>
      <View style={styles.indexContainer}>
        <CustomText style={styles.indexText}>{index + 1}</CustomText>
      </View>

      <Animated.View
        entering={ZoomIn.duration(150)}
        style={styles.animatedContainer}
      >
        <LinearGradient
          colors={[item.gradientStart, item.gradientEnd]}
          style={styles.contentContainer}
        >
          <View style={globalStyles.rowBetween}>
            <SymbolView name={item.icon} size={30} tintColor="white" />

            <View
              style={{
                columnGap: 10,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              {onActionDelete && (
                <Pressable
                  style={({ pressed }) => [
                    globalStyles.transparentButton,
                    pressedOpacity({ pressed }),
                  ]}
                  onPress={() => onActionDelete(item)}
                >
                  <SymbolView name="xmark" size={15} tintColor="white" />
                </Pressable>
              )}

              {onActionEdit && (
                <Pressable
                  style={({ pressed }) => [
                    globalStyles.transparentButton,
                    pressedOpacity({ pressed }),
                  ]}
                  onPress={() => onActionEdit(item)}
                >
                  <SymbolView name="pencil" size={15} tintColor="white" />
                </Pressable>
              )}
            </View>
          </View>

          <CustomText style={styles.label}>{item.name}</CustomText>
        </LinearGradient>
      </Animated.View>
    </View>
  );
}
