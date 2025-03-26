import globalStyles from "@/assets/global-styles";
import LineSeparator from "@/components/line-separator";
import UploadedShortcutItem from "@/components/uploaded-shortcut-item";
import { SAMPLE_SHORTCUTS } from "@/constants/sampleShortcuts";
import { FlatList, ScrollView } from "react-native";
import styles from "./styles";
import useSearch from "@/hooks/useSearch";

export default function UploadedShortcuts() {
  const search = useSearch();

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={[globalStyles.container, { paddingTop: 15 }]}
    >
      <FlatList
        data={SAMPLE_SHORTCUTS.filter((shortcut) =>
          shortcut.name.toLowerCase().includes(search.toLowerCase()),
        )}
        renderItem={({ item }) => <UploadedShortcutItem item={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.contentContainer}
        ItemSeparatorComponent={() => <LineSeparator leading={20} />}
        scrollEnabled={false}
      />
    </ScrollView>
  );
}
