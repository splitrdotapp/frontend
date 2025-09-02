import NotificationCard from "@/components/NotificationCard";
import SearchBar from "@/components/SearchBar";
import { Colors } from "@/constants/Colors";
import StyleDefault from "@/constants/DefaultStyles";
import { MockNotificationData } from "@/constants/mocks/MockNotification";
import { useColorScheme } from "@/hooks/useColorScheme";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import {
  faArrowTrendDown,
  faArrowTrendUp,
  faDollarSign,
  faUserGroup
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

const notificationsData = MockNotificationData;

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const defaultStyles = StyleDefault({ colorScheme });
  const [searchText, setSearchText] = useState("");

  const styles = StyleSheet.create({
    scrollView: {
      flex: 1,
    },
    notificationIcon: {
      padding: 8,
    },
    balanceContainer: {
      flexDirection: "row",
      paddingHorizontal: 20,
      gap: 12,
      marginBottom: 20,
    },
    balanceHeader: {
      flexDirection: "row",
      alignItems: "center",
    },
    trendIconContainer: {
      justifyContent: "center",
      alignItems: "center",
      marginRight: 8,
    },
    balanceLabel: {
      fontSize: 12,
      color: Colors[colorScheme ?? "light"].lighterText,
    },
    balanceRow: {
      flexDirection: "row",
    },
    balanceColumn: {
      gap: 4,
    },
    positiveAmount: {
      fontSize: 18,
      fontWeight: "bold",
      color: Colors[colorScheme ?? "light"].primaryGreen,
    },
    negativeAmount: {
      fontSize: 18,
      fontWeight: "bold",
      color: Colors[colorScheme ?? "light"].primaryRed,
    },
    sectionTitle: {
      fontSize: 14,
      fontWeight: "600",
      color: Colors[colorScheme ?? "light"].text,
      marginBottom: 5,
    },
    actionTitle: {
      fontSize: 14,
      fontWeight: "400",
      color: Colors[colorScheme ?? "light"].text,
      marginBottom: 20,
    },
    actionsRow: {
      flexDirection: "row",
      gap: 12,
    },
    actionText: {
      fontSize: 12,
      marginTop: 12,
      fontWeight: "600",
      color: Colors[colorScheme ?? "light"].text,
      textAlign: "center",
    },
    settlementsHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    settlementsSubtitle: {
      fontSize: 12,
      color: Colors[colorScheme ?? "light"].lighterText,
    },
    resolveButton: {
      backgroundColor: Colors["dark"].primaryBackground,
      borderRadius: 10,
      paddingHorizontal: 12,
      paddingVertical: 8,
    },
    resolveButtonText: {
      color: Colors["light"].secondaryBackground,
      fontSize: 12,
      fontWeight: "500",
    },
    searchContainer: {
      flexDirection: "row",
      paddingHorizontal: 20,
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
    filterButton: {
      backgroundColor: "white",
      borderRadius: 10,
      padding: 8,
      justifyContent: "center",
      alignItems: "center",
      borderColor: "#e5e7eb",
      borderWidth: 1,
    },
    sortButton: {
      backgroundColor: "white",
      borderRadius: 10,
      padding: 8,
      justifyContent: "center",
      alignItems: "center",
      borderColor: "#e5e7eb",
      borderWidth: 1,
    },
    notificationsContainer: {
      paddingHorizontal: 20,
      marginBottom: 100,
      backgroundColor: Colors[colorScheme ?? "light"].secondaryBackground,
      paddingVertical: 20,
      marginHorizontal: 20,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: Colors[colorScheme ?? "light"].borderColor,
    },
    notificationsHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 30,
    },
    notificationsTitle: {
      fontWeight: 400,
      fontSize: 14,
      color: Colors[colorScheme ?? "light"].text,
    },
    clearAllText: {
      fontSize: 14,
      color: Colors[colorScheme ?? "light"].text,
      fontWeight: 600,
    },
    notificationItem: {
      backgroundColor: "white",
      borderRadius: 12,
      padding: 16,
      marginBottom: 12,
      // shadowColor: '#000',
      // shadowOffset: {
      //   width: 0,
      //   height: 2,
      // },
      // shadowOpacity: 0.1,
      // shadowRadius: 8
      elevation: 4,
      borderWidth: 1,
      borderColor: "#e5e7eb",
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
      backgroundColor: "#e5e7eb",
      justifyContent: "center",
      alignItems: "center",
      marginRight: 12,
    },
    avatarText: {
      fontSize: 10,
      fontWeight: "600",
      color: "#374151",
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
      color: "#1a1a1a",
    },
    badge: {
      borderRadius: 6,
      paddingHorizontal: 8,
      paddingVertical: 4,
    },
    requestBadge: {
      backgroundColor: "#c92422",
    },
    paymentBadge: {
      backgroundColor: "#1a1a1a",
    },
    badgeText: {
      fontSize: 10,
      fontWeight: "600",
    },
    requestBadgeText: {
      color: "white",
    },
    paymentBadgeText: {
      color: "white",
    },
    notificationName: {
      fontSize: 12,
      fontWeight: "400",
      color: "#374151",
      marginBottom: 4,
    },
    notificationDescription: {
      fontSize: 12,
      color: "#6b7280",
      marginBottom: 8,
    },
    notificationTime: {
      fontSize: 10,
      color: "#9ca3af",
    },
    closeButton: {
      position: "absolute",
      top: 4,
      right: 12,
      padding: 4,
    },
    closeButtonText: {
      fontSize: 16,
      color: "#9ca3af",
    },
    fab: {
      position: "absolute",
      right: 20,
      bottom: 110,
      width: 56,
      height: 56,
      borderRadius: 28,
      backgroundColor: "#1a1a1a",
      justifyContent: "center",
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.3,
      shadowRadius: 8,
      elevation: 8,
    },
    fabIcon: {
      fontSize: 24,
      color: "white",
      fontWeight: "bold",
    },
  });

  return (
    <SafeAreaView style={defaultStyles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f8f9fa" />
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={defaultStyles.header}>
          <View>
            <Text style={defaultStyles.title}>Hello, Justin Tan!</Text>
            <Text style={defaultStyles.subtitle}>
              Here{"'"}s your financial overview
            </Text>
          </View>
          <TouchableOpacity style={styles.notificationIcon}>
            <FontAwesomeIcon
              size={22}
              icon={faBell}
              color={Colors[colorScheme ?? "light"].text}
            />
          </TouchableOpacity>
        </View>

        {/* Balance Cards */}
        <View style={styles.balanceContainer}>
          <View style={{ padding: 20, flex: 1, ...defaultStyles.largeCard }}>
            <View style={styles.balanceRow}>
              <View style={styles.trendIconContainer}>
                <FontAwesomeIcon
                  icon={faArrowTrendUp}
                  size={20}
                  color={Colors[colorScheme ?? "light"].primaryGreen}
                />
              </View>
              <View style={styles.balanceColumn}>
                <Text style={styles.balanceLabel}>You{"'"}re owed</Text>
                <Text style={styles.positiveAmount}>$142.50</Text>
              </View>
            </View>
          </View>

          <View style={{ padding: 20, flex: 1, ...defaultStyles.largeCard }}>
            <View style={styles.balanceRow}>
              <View style={styles.trendIconContainer}>
                <FontAwesomeIcon
                  icon={faArrowTrendDown}
                  size={20}
                  color={Colors[colorScheme ?? "light"].primaryRed}
                />
              </View>
              <View style={styles.balanceColumn}>
                <Text style={styles.balanceLabel}>You owe</Text>
                <Text style={styles.negativeAmount}>$87.25</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Quick Actions */}
        <View
          style={{
            padding: 20,
            marginBottom: 20,
            marginHorizontal: 20,
            ...defaultStyles.largeCard,
          }}
        >
          <Text style={styles.actionTitle}>Quick Actions</Text>
          <View style={styles.actionsRow}>
            <TouchableOpacity
              style={{
                flex: 1,
                paddingHorizontal: 16,
                paddingVertical: 12,
                alignItems: "center",
                ...defaultStyles.smallCard,
              }}
            >
              <FontAwesomeIcon
                icon={faDollarSign}
                size={18}
                color={Colors[colorScheme ?? "light"].text}
              />
              <Text style={styles.actionText}>Request Payment</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flex: 1,
                paddingHorizontal: 16,
                paddingVertical: 12,
                alignItems: "center",
                ...defaultStyles.smallCard,
              }}
            >
              <FontAwesomeIcon
                icon={faUserGroup}
                size={18}
                color={Colors[colorScheme ?? "light"].text}
              />
              <Text style={styles.actionText}>Split Bill</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Pending Settlements */}
        <View
          style={{
            paddingHorizontal: 16,
            paddingVertical: 20,
            marginHorizontal: 20,
            marginBottom: 20,
            ...defaultStyles.largeCard,
          }}
        >
          <View style={styles.settlementsHeader}>
            <View>
              <Text style={styles.sectionTitle}>Pending Settlements</Text>
              <Text style={styles.settlementsSubtitle}>
                3 transactions need your attention
              </Text>
            </View>
            <TouchableOpacity style={styles.resolveButton}>
              <Text style={styles.resolveButtonText}>Resolve All</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Search Bar */}
        <SearchBar
          searchText={searchText}
          setSearchText={setSearchText}
          placeholder="Search notifications..."
        />

        {/* Notifications */}
        <View style={styles.notificationsContainer}>
          <View style={styles.notificationsHeader}>
            <Text style={styles.notificationsTitle}>Notifications (4)</Text>
            <TouchableOpacity>
              <Text style={styles.clearAllText}>Clear All</Text>
            </TouchableOpacity>
          </View>
          {notificationsData.map((notification) => (
            <NotificationCard
              key={notification.id}
              notification={notification}
            />
          ))}
        </View>
      </ScrollView>

      {/* Floating Action Button */}
      <TouchableOpacity style={styles.fab}>
        <Text style={styles.fabIcon}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
