import { Colors } from "@/constants/Colors";
import StyleDefault from "@/constants/DefaultStyles";
import {
  faGear,
  faMagnifyingGlass,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";

interface SearchBarProps {
  searchText: string;
  setSearchText: (value: string) => void;
  placeholder?: string;
}

export default function SearchBar({
  searchText,
  setSearchText,
  placeholder,
}: SearchBarProps) {
  const colorScheme = useColorScheme();
  const defaultStyles = StyleDefault({ colorScheme });

  const styles = StyleSheet.create({
    searchContainer: {
      flexDirection: "row",
      marginBottom: 20,
      gap: 8,
    },
    searchBar: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: Colors[colorScheme ?? "light"].searchBar,
      borderRadius: 10,
      paddingHorizontal: 12,
      // paddingVertical: 4,
    },
    searchIcon: {
      fontSize: 12,
    },
    searchInput: {
      marginLeft: 8,
      flex: 1,
      fontSize: 14,
      color: Colors[colorScheme ?? "light"].text,
      fontWeight: 300,
    },
  });

  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchBar}>
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          size={14}
          color={Colors[colorScheme ?? "light"].searchText}
        />
        <TextInput
          style={styles.searchInput}
          placeholder={placeholder}
          value={searchText}
          onChangeText={setSearchText}
          placeholderTextColor={Colors[colorScheme ?? "light"].searchText}
        />
      </View>
      <TouchableOpacity
        style={{
          padding: 8,
          justifyContent: "center",
          alignItems: "center",
          ...defaultStyles.smallCard,
        }}
      >
        <FontAwesomeIcon
          icon={faGear}
          size={16}
          color={Colors[colorScheme ?? "light"].text}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          padding: 8,
          justifyContent: "center",
          alignItems: "center",
          ...defaultStyles.smallCard,
        }}
      >
        <FontAwesomeIcon
          icon={faSliders}
          size={16}
          color={Colors[colorScheme ?? "light"].text}
        />
      </TouchableOpacity>
    </View>
  );
}
