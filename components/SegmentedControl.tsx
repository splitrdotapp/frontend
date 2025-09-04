import { Colors } from "@/constants/Colors";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, useColorScheme, View } from "react-native";

interface SegmentedControlProps {
  options: string[];
  selectedOption: string;
  onSelectionChange: (option: string) => void;
}

const SegmentedControl: React.FC<SegmentedControlProps> = ({
  options,
  selectedOption,
  onSelectionChange,
}) => {
  const colorScheme = useColorScheme();

  const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: Colors[colorScheme ?? "light"].borderColor,
    borderRadius: 25,
    padding: 4,
  },
  segment: {
    flex: 1,
    paddingVertical: 8,
    // paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  firstSegment: {
    borderTopLeftRadius: 21,
    borderBottomLeftRadius: 21,
  },
  lastSegment: {
    borderTopRightRadius: 21,
    borderBottomRightRadius: 21,
  },
  selectedSegment: {
    backgroundColor: Colors[colorScheme ?? "light"].secondaryBackground,
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 1 },
    // shadowOpacity: 0.1,
    // shadowRadius: 2,
    // elevation: 2,
    borderRadius: 20,
  },
  segmentText: {
    fontSize: 12,
    fontWeight: "500",
    color: Colors[colorScheme ?? "light"].lighterText,
  },
  selectedSegmentText: {
    color: Colors[colorScheme ?? "light"].text,
    fontWeight: "600",
  },
});

  return (
    <View style={styles.container}>
      {options.map((option, index) => (
        <TouchableOpacity
          key={option}
          style={[
            styles.segment,
            index === 0 && styles.firstSegment,
            index === options.length - 1 && styles.lastSegment,
            selectedOption === option && styles.selectedSegment,
          ]}
          onPress={() => onSelectionChange(option)}
          activeOpacity={0.7}
        >
          <Text
            style={[
              styles.segmentText,
              selectedOption === option && styles.selectedSegmentText,
            ]}
          >
            {option}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};


export default SegmentedControl;
