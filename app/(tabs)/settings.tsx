import Avatar from "@/components/Avatar";
import SearchBar from "@/components/SearchBar";
import SegmentedControl from "@/components/SegmentedControl";
import { Colors } from "@/constants/Colors";
import StyleDefault from "@/constants/DefaultStyles";
import { useColorScheme } from "@/hooks/useColorScheme.web";
import { faBell, faCreditCard } from "@fortawesome/free-regular-svg-icons";
import {
  faCheck,
  faQrcode,
  faShieldHalved,
  faUserPlus,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

const SettingsScreen = () => {
  const [activeTab, setActiveTab] = useState("Profile");
  const [searchText, setSearchText] = useState("");
  const colorScheme = useColorScheme();
  const defaultStyles = StyleDefault({ colorScheme });

  const pendingRequests = [
    {
      id: 1,
      name: "Lisa Brown",
      initials: "LB",
      description: "Lunch at cafe downtown",
      amount: "$32.50",
      status: "Requesting",
      avatar: "https://via.placeholder.com/50x50/4A90E2/FFFFFF?text=LB",
    },
    {
      id: 2,
      name: "Tom Garcia",
      initials: "TG",
      description: "Weekend trip expenses",
      amount: "$78.25",
      status: "Submitted",
      avatar: "https://via.placeholder.com/50x50/7ED321/FFFFFF?text=TG",
    },
  ];

  const friends = [
    {
      id: 1,
      name: "Emma Davis",
      initials: "ED",
      trips: "1 trips",
      balance: "+$67.89",
      balanceType: "positive",
      pending: 0,
      avatar: "https://via.placeholder.com/50x50/F5A623/FFFFFF?text=ED",
    },
    {
      id: 2,
      name: "James Wilson",
      initials: "JW",
      trips: "0 trips",
      balance: "$-120.00",
      balanceType: "negative",
      pending: 1,
      avatar: "https://via.placeholder.com/50x50/BD10E0/FFFFFF?text=JW",
    },
  ];

  const styles = StyleSheet.create({
    tabs: {
      marginBottom: 20,
      marginHorizontal: 20,
    },
    tabContent: {
      flex: 1,
      paddingHorizontal: 20,
      marginBottom: 50,
    },
    avatarContainer: {
      marginRight: 20,
    },
    profileInfo: {
      flex: 1,
    },
    profileName: {
      fontSize: 16,
      fontWeight: "bold",
      color: Colors[colorScheme ?? "light"].text,
      marginBottom: 4,
    },
    profileHandle: {
      fontSize: 14,
      color: Colors[colorScheme ?? "light"].lighterText,
      marginBottom: 2,
    },
    profileId: {
      fontSize: 12,
      color: Colors[colorScheme ?? "light"].lightestText,
    },
    editButton: {
      backgroundColor: "#f8f9fa",
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: "#dee2e6",
    },
    editButtonText: {
      fontSize: 12,
      fontWeight: "500",
      color: Colors[colorScheme ?? "light"].text,
    },
    qrSection: {
      backgroundColor: "white",
      padding: 20,
      borderRadius: 12,
      marginBottom: 20,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.05,
      shadowRadius: 4,
      elevation: 2,
    },
    qrHeader: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 30,
    },
    qrIcon: {
      justifyContent: "center",
      alignItems: "center",
      marginRight: 10,
    },
    qrIconText: {
      fontSize: 20,
      color: "#666",
    },
    qrTitle: {
      fontSize: 16,
      fontWeight: "600",
      color: Colors[colorScheme ?? "light"].text,
    },
    qrCodeContainer: {
      alignItems: "center",
    },
    qrCode: {
      width: 120,
      height: 120,
      backgroundColor: Colors[colorScheme ?? "light"].primaryBackground,
      borderRadius: 8,
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 20,
    },
    qrPattern: {
      alignItems: "center",
    },
    qrDescription: {
      fontSize: 12,
      color: Colors[colorScheme ?? "light"].lighterText,
      marginBottom: 30,
    },
    shareButtonText: {
      color: Colors[colorScheme ?? "light"].text,
      fontSize: 12,
      fontWeight: "500",
    },
    accountSection: {
      backgroundColor: "white",
      borderRadius: 12,
      padding: 20,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.05,
      shadowRadius: 4,
      elevation: 2,
      marginBottom: 20,
    },
    sectionTitle: {
      fontSize: 16,
      fontWeight: "600",
      color: Colors[colorScheme ?? "light"].text,
      marginBottom: 15,
    },
    settingItem: {
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: 16,
      gap: 16,
    },
    settingIcon: {
      width: 24,
      height: 24,
      marginRight: 15,
    },
    settingIconText: {
      fontSize: 18,
    },
    settingText: {
      flex: 1,
      fontSize: 14,
      color: Colors[colorScheme ?? "light"].text,
    },
    arrow: {
      fontSize: 18,
      color: Colors[colorScheme ?? "light"].lighterText,
    },
    addFriendIcon: {
      justifyContent: "center",
      alignItems: "center",
      marginRight: 15,
    },
    addFriendInfo: {
      flex: 1,
    },
    addFriendTitle: {
      fontSize: 14,
      fontWeight: "600",
      color: Colors[colorScheme ?? "light"].text,
      marginBottom: 2,
    },
    addFriendSubtitle: {
      fontSize: 12,
      color: Colors[colorScheme ?? "light"].lighterText,
    },
    addFriendButton: {
      backgroundColor: Colors["light"].text,
      paddingHorizontal: 12,
      paddingVertical: 8,
      borderRadius: 8,
      justifyContent: "center",
      alignItems: "center",
    },
    addFriendButtonText: {
      color: "white",
      fontSize: 12,
      fontWeight: "500",
    },
    pendingHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 18,
    },
    pendingTitle: {
      fontSize: 14,
      color: Colors[colorScheme ?? "light"].text,
    },
    acceptAll: {
      fontSize: 14,
      color: Colors[colorScheme ?? "light"].text,
      fontWeight: "600",
    },
    requestAvatar: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginRight: 12,
    },
    requestInfo: {
      flex: 1,
      marginLeft: 20,
    },
    requestName: {
      fontSize: 14,
      fontWeight: "600",
      color: Colors[colorScheme ?? "light"].text,
      marginBottom: 4,
    },
    requestDescription: {
      fontSize: 12,
      color: Colors[colorScheme ?? "light"].lighterText,
      marginBottom: 8,
    },
    requestMeta: {
      flexDirection: "row",
      alignItems: "center",
    },
    amountBadge: {
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 6,
      marginRight: 8,
    },
    requestingBadge: {
      backgroundColor: Colors[colorScheme ?? "light"].primaryRed,
    },
    submittedBadge: {
      backgroundColor: Colors["light"].text,
    },
    amountText: {
      color: "white",
      fontSize: 10,
      fontWeight: "600",
    },
    statusText: {
      fontSize: 10,
      color: Colors[colorScheme ?? "light"].lightestText,
    },
    requestActions: {
      flexDirection: "row",
      gap: 10,
      marginLeft: 8,
    },
    acceptButton: {
      width: 32,
      height: 32,
      backgroundColor: Colors[colorScheme ?? "light"].primaryGreen,
      borderRadius: 16,
      justifyContent: "center",
      alignItems: "center",
    },
    declineButton: {
      width: 32,
      height: 32,
      backgroundColor: "#dc3545",
      borderRadius: 16,
      justifyContent: "center",
      alignItems: "center",
    },
    actionButtonText: {
      color: Colors[colorScheme ?? "light"].text,
      fontWeight: "bold",
      fontSize: 14,
    },
    friendsSection: {
      backgroundColor: "white",
      borderRadius: 12,
      padding: 20,
      marginBottom: 20,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.05,
      shadowRadius: 4,
      elevation: 2,
    },
    friendsTitle: {
      fontSize: 14,
      color: Colors[colorScheme ?? "light"].text,
      marginBottom: 15,
    },
    friendItem: {
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: 12,
    },
    friendInfo: {
      flex: 1,
      marginLeft: 12,
    },
    friendName: {
      fontSize: 14,
      fontWeight: "600",
      color: Colors[colorScheme ?? "light"].text,
      marginBottom: 4,
    },
    friendTrips: {
      fontSize: 12,
      color: Colors[colorScheme ?? "light"].lighterText,
    },
    friendMeta: {
      alignItems: "flex-end",
      marginRight: 10,
    },
    friendBalance: {
      fontSize: 14,
      fontWeight: "600",
      marginBottom: 4,
    },
    positiveBalance: {
      color: Colors[colorScheme ?? "light"].primaryGreen,
    },
    negativeBalance: {
      color: Colors[colorScheme ?? "light"].primaryRed,
    },
    pendingBadge: {
      backgroundColor: Colors[colorScheme ?? "light"].primaryRed,
      paddingHorizontal: 6,
      paddingVertical: 2,
      borderRadius: 6,
    },
    pendingBadgeText: {
      color: "white",
      fontSize: 10,
      fontWeight: "500",
    },
  });

  const ProfileTab = () => (
    <ScrollView style={styles.tabContent}>
      {/* Profile Section */}
      <View
        style={{
          flexDirection: "row",
          padding: 20,
          marginBottom: 20,
          alignItems: "center",
          ...defaultStyles.largeCard,
        }}
      >
        <View style={styles.avatarContainer}>
          <Avatar size={20} initials={"AM"} />
        </View>
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>Alex Morgan</Text>
          <Text style={styles.profileHandle}>@alexmorgan</Text>
          <Text style={styles.profileId}>ID: AM2024001</Text>
        </View>
        <View>
          <TouchableOpacity
            style={{
              paddingHorizontal: 12,
              paddingVertical: 8,
              ...defaultStyles.smallCard,
            }}
          >
            <Text style={styles.editButtonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* QR Code Section */}
      <View
        style={{ padding: 20, marginBottom: 20, ...defaultStyles.largeCard }}
      >
        <View style={styles.qrHeader}>
          <View style={styles.qrIcon}>
            <FontAwesomeIcon
              icon={faQrcode}
              size={16}
              color={Colors[colorScheme ?? "light"].text}
            />
          </View>
          <Text style={styles.qrTitle}>My QR Code</Text>
        </View>

        <View style={styles.qrCodeContainer}>
          <View style={styles.qrCode}>
            <View style={styles.qrPattern}>
              <FontAwesomeIcon
                icon={faQrcode}
                size={100}
                color={Colors[colorScheme ?? "light"].borderColor}
              />
            </View>
          </View>
          <Text style={styles.qrDescription}>
            Share this code for quick payments
          </Text>
          <TouchableOpacity
            style={{
              paddingHorizontal: 20,
              paddingVertical: 10,
              ...defaultStyles.smallCard,
            }}
          >
            <Text style={styles.shareButtonText}>Share QR Code</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Account Settings */}
      <View
        style={{ padding: 20, marginBottom: 20, ...defaultStyles.largeCard }}
      >
        <Text style={styles.sectionTitle}>Account Settings</Text>

        <TouchableOpacity style={styles.settingItem}>
          <FontAwesomeIcon
            icon={faBell}
            color={Colors[colorScheme ?? "light"].text}
          />
          <Text style={styles.settingText}>Notifications</Text>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem}>
          <FontAwesomeIcon
            icon={faShieldHalved}
            color={Colors[colorScheme ?? "light"].text}
          />
          <Text style={styles.settingText}>Privacy & Security</Text>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem}>
          <FontAwesomeIcon
            icon={faCreditCard}
            color={Colors[colorScheme ?? "light"].text}
          />
          <Text style={styles.settingText}>Payment Methods</Text>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );

  const FriendsTab = () => (
    <ScrollView style={styles.tabContent}>
      {/* Add Friend Section */}
      <View
        style={{
          flexDirection: "row",
          padding: 20,
          marginBottom: 20,
          ...defaultStyles.largeCard,
        }}
      >
        <View style={styles.addFriendIcon}>
          <FontAwesomeIcon
            icon={faUserPlus}
            size={24}
            color={Colors[colorScheme ?? "light"].primaryBlue}
          />
        </View>
        <View style={styles.addFriendInfo}>
          <Text style={styles.addFriendTitle}>Add New Friend</Text>
          <Text style={styles.addFriendSubtitle}>
            Send money and split bills
          </Text>
        </View>
        <TouchableOpacity style={styles.addFriendButton}>
          <Text style={styles.addFriendButtonText}>Add Friend</Text>
        </TouchableOpacity>
      </View>

      {/* Pending Requests */}
      <View
        style={{ padding: 20, marginBottom: 20, ...defaultStyles.largeCard }}
      >
        <View style={styles.pendingHeader}>
          <Text style={styles.pendingTitle}>Pending Requests (2)</Text>
          <TouchableOpacity>
            <Text style={styles.acceptAll}>Accept All</Text>
          </TouchableOpacity>
        </View>

        {pendingRequests.map((request) => (
          <View
            key={request.id}
            style={{
              flexDirection: "row",
              padding: 12,
              marginTop: 12,
              alignItems: "center",
              ...defaultStyles.mediumCard,
            }}
          >
            <Avatar initials={request.initials} size={14} />
            <View style={styles.requestInfo}>
              <Text style={styles.requestName}>{request.name}</Text>
              <Text style={styles.requestDescription}>
                {request.description}
              </Text>
              <View style={styles.requestMeta}>
                <View
                  style={[
                    styles.amountBadge,
                    request.status === "Requesting"
                      ? styles.requestingBadge
                      : styles.submittedBadge,
                  ]}
                >
                  <Text style={styles.amountText}>{request.amount}</Text>
                </View>
                <Text style={styles.statusText}>{request.status}</Text>
              </View>
            </View>
            <View style={styles.requestActions}>
              <TouchableOpacity
                style={{ padding: 8, ...defaultStyles.smallCard }}
              >
                <FontAwesomeIcon
                  icon={faCheck}
                  size={14}
                  color={Colors[colorScheme ?? "light"].text}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{ padding: 8, ...defaultStyles.smallCard }}
              >
                <FontAwesomeIcon
                  icon={faXmark}
                  size={14}
                  color={Colors[colorScheme ?? "light"].text}
                />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>

      {/* Search and Filter */}
      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
        placeholder={"Search friends..."}
      />

      {/* Friends List */}
      <View
        style={{ padding: 20, marginBottom: 20, ...defaultStyles.largeCard }}
      >
        <Text style={styles.friendsTitle}>Friends (4)</Text>

        {friends.map((friend) => (
          <TouchableOpacity key={friend.id} style={styles.friendItem}>
            <Avatar size={14} initials={friend.initials}/>
            <View style={styles.friendInfo}>
              <Text style={styles.friendName}>{friend.name}</Text>
              <Text style={styles.friendTrips}>{friend.trips}</Text>
            </View>
            <View style={styles.friendMeta}>
              <Text
                style={[
                  styles.friendBalance,
                  friend.balanceType === "positive"
                    ? styles.positiveBalance
                    : styles.negativeBalance,
                ]}
              >
                {friend.balance}
              </Text>
              {friend.pending > 0 && (
                <View style={styles.pendingBadge}>
                  <Text style={styles.pendingBadgeText}>
                    {friend.pending} pending
                  </Text>
                </View>
              )}
            </View>
            <Text style={styles.arrow}>›</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );

  return (
    <SafeAreaView style={defaultStyles.container}>
      <View style={defaultStyles.header}>
        <View>
          <Text style={defaultStyles.title}>Settings</Text>
          <Text style={defaultStyles.subtitle}>
            Manage your account and connections
          </Text>
        </View>
      </View>

      {/* Tab Navigation */}
      <View style={styles.tabs}>
        <SegmentedControl
          options={["Profile", "Friends"]}
          selectedOption={activeTab}
          onSelectionChange={setActiveTab}
        />
      </View>

      {/* Tab Content */}
      {activeTab === "Profile" ? <ProfileTab /> : <FriendsTab />}
    </SafeAreaView>
  );
};

export default SettingsScreen;
