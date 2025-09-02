import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme.web";
import React from "react";
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";

interface NotificationCardProps {
  notification: any;
  onClose?: () => void;
}

export default function NotificationCard({
  notification,
  onClose,
}: NotificationCardProps) {
  const colorScheme = useColorScheme();

  const styles = StyleSheet.create({
    container: {
      backgroundColor: Colors[colorScheme ?? "light"].secondaryBackground,
      borderRadius: 12,
      padding: 16,
      marginBottom: 12,
      borderWidth: 1,
      borderColor: Colors[colorScheme ?? "light"].borderColor,
    },
    notificationContent: {
      flexDirection: "row",
      alignItems: "flex-start",
      marginRight: 24,
    },
    avatar: {
      width: 36,
      height: 36,
      borderRadius: 18,
      backgroundColor: Colors[colorScheme ?? "light"].borderColor,
      justifyContent: "center",
      alignItems: "center",
      marginRight: 12,
    },
    avatarText: {
      fontSize: 10,
      fontWeight: "600",
      color: Colors[colorScheme ?? "light"].lighterText,
    },
    notificationDetails: {
      flex: 1,
    },
    notificationHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 4,
    },
    notificationTitle: {
      fontSize: 14,
      fontWeight: "600",
      color: Colors[colorScheme ?? "light"].text,
    },
    badge: {
      borderRadius: 6,
      paddingHorizontal: 8,
      paddingVertical: 4,
    },
    requestBadge: {
      backgroundColor: Colors[colorScheme ?? "light"].primaryRed,
    },
    paymentBadge: {
      backgroundColor: Colors["light"].text,
    },
    badgeText: {
      fontSize: 10,
      fontWeight: "600",
    },
    requestBadgeText: {
      color: Colors["light"].secondaryBackground,
    },
    paymentBadgeText: {
      color: Colors["light"].secondaryBackground,
    },
    notificationName: {
      fontSize: 12,
      fontWeight: "400",
      color: Colors[colorScheme ?? "light"].lighterText,
      marginBottom: 4,
    },
    notificationDescription: {
      fontSize: 12,
      color: Colors[colorScheme ?? "light"].lightestText,
      marginBottom: 8,
    },
    notificationTime: {
      fontSize: 10,
      color: Colors[colorScheme ?? "light"].lightestText,
    },
    closeButton: {
      position: "absolute",
      top: 4,
      right: 12,
      padding: 4,
    },
    closeButtonText: {
      fontSize: 16,
      color: Colors[colorScheme ?? "light"].lightestText,
    },
  });
  
  return (
    <View style={styles.container}>
      <View style={styles.notificationContent}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{notification.initials}</Text>
        </View>
        <View style={styles.notificationDetails}>
          <View style={styles.notificationHeader}>
            <Text style={styles.notificationTitle}>Payment Request</Text>
            <TouchableOpacity
              style={[
                styles.badge,
                notification.type === "request"
                  ? styles.requestBadge
                  : styles.paymentBadge,
              ]}
            >
              <Text
                style={[
                  styles.badgeText,
                  notification.type === "request"
                    ? styles.requestBadgeText
                    : styles.paymentBadgeText,
                ]}
              >
                {notification.type === "request" ? "Request" : "Payment"}
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.notificationName}>{notification.name}</Text>
          <Text style={styles.notificationDescription}>
            {notification.description}
          </Text>
          <Text style={styles.notificationTime}>{notification.time}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.closeButton} onPress={onClose}>
        <Text style={styles.closeButtonText}>×</Text>
      </TouchableOpacity>
    </View>
  );
}
