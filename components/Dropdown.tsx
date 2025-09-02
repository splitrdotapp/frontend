import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export interface DropdownOption {
  label: string;
  value: string;
}

interface DropdownProps {
  options: DropdownOption[];
  selectedValue: string;
  onSelectionChange: (value: string) => void;
  placeholder?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  selectedValue,
  onSelectionChange,
  placeholder = "Select option",
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const selectedOption = options.find(
    (option) => option.value === selectedValue
  );

  const handleSelect = (value: string) => {
    onSelectionChange(value);
    setIsOpen(false);
  };

  return (
    <View style={styles.container}>
      {/* Dropdown Trigger */}
      <TouchableOpacity
        style={styles.trigger}
        onPress={() => setIsOpen(!isOpen)}
        activeOpacity={0.7}
      >
        <Text style={styles.triggerText}>
          {selectedOption?.label || placeholder}
        </Text>
        <Text style={[styles.arrow, isOpen && styles.arrowUp]}>▼</Text>
      </TouchableOpacity>

      {/* Dropdown Options */}
      {isOpen && (
        <>
          <TouchableOpacity
            style={styles.overlay}
            onPress={() => setIsOpen(false)}
            activeOpacity={1}
          />
          <View style={styles.dropdown}>
            {options.map((option, index) => (
              <TouchableOpacity
                key={option.value}
                style={[
                  styles.option,
                  selectedValue === option.value && styles.selectedOption,
                  index === options.length - 1 && styles.lastOption,
                ]}
                onPress={() => handleSelect(option.value)}
                activeOpacity={0.7}
              >
                <Text
                  style={[
                    styles.optionText,
                    selectedValue === option.value && styles.selectedOptionText,
                  ]}
                >
                  {option.label}
                </Text>
                {selectedValue === option.value && (
                  <Text style={styles.checkmark}>✓</Text>
                )}
              </TouchableOpacity>
            ))}
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    position: "relative",
    zIndex: 1000,
  },
  trigger: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: "#E5E5E5",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  triggerText: {
    fontSize: 14,
    color: "#333",
    fontWeight: "500",
  },
  arrow: {
    fontSize: 10,
    color: "#999",
    transform: [{ rotate: "0deg" }],
  },
  arrowUp: {
    transform: [{ rotate: "180deg" }],
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "transparent",
  },
  dropdown: {
    position: "absolute",
    top: 52, // Position below the trigger
    left: 0,
    right: 0,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 8,
    borderWidth: 1,
    borderColor: "#E5E5E5",
    overflow: "hidden",
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  lastOption: {
    borderBottomWidth: 0,
  },
  selectedOption: {
    backgroundColor: "#F8F9FA",
  },
  optionText: {
    fontSize: 14,
    color: "#333",
    fontWeight: "400",
  },
  selectedOptionText: {
    color: "#2196F3",
    fontWeight: "500",
  },
  checkmark: {
    fontSize: 14,
    color: "#2196F3",
    fontWeight: "bold",
  },
  exampleContainer: {
    flex: 1,
    backgroundColor: "#F8F9FA",
    padding: 24,
    paddingTop: 100,
  },
  exampleTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1A1A1A",
    marginBottom: 16,
  },
  selectedText: {
    fontSize: 14,
    color: "#666",
    marginTop: 16,
  },
});

export default Dropdown;
