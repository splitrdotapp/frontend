import { faCalendar, faClock } from "@fortawesome/free-regular-svg-icons";
import {
  faDollarSign,
  faGear,
  faMagnifyingGlass,
  faPlus,
  faSliders,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

// Mock data for trips
const tripsData = [
  {
    id: 1,
    title: "Weekend Getaway",
    description:
      "A relaxing weekend trip to the mountains with friends. Including accommodation, meals, and activities.",
    date: "Mar 15-17, 2024",
    people: 3,
    amount: 450.75,
    status: "active",
    pendingCount: 3,
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop",
    participants: [
      { id: 1, avatar: "https://i.pravatar.cc/40?img=1" },
      { id: 2, avatar: "https://i.pravatar.cc/40?img=2" },
      { id: 3, avatar: "https://i.pravatar.cc/40?img=3" },
    ],
  },
  {
    id: 2,
    title: "Business Conference",
    description:
      "Annual tech conference in San Francisco. Covering flights, hotel, and meals.",
    date: "Apr 22-25, 2024",
    people: 5,
    amount: 0,
    status: "upcoming",
    pendingCount: 0,
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=200&fit=crop",
    participants: [
      { id: 1, avatar: "https://i.pravatar.cc/40?img=4" },
      { id: 2, avatar: "https://i.pravatar.cc/40?img=5" },
    ],
  },
];

const TripsScreen: React.FC = () => {
  const [searchText, setSearchText] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("Recent");
  const [selectedStatus, setSelectedStatus] = useState("All Status");

  const totalPending = tripsData.reduce((sum, trip) => sum + trip.amount, 0);
  const activeTripsCount = tripsData.filter(
    (trip) => trip.status === "active"
  ).length;

  const StatusBadge: React.FC<{ status: string }> = ({ status }) => (
    <View
      style={[
        styles.statusBadge,
        { backgroundColor: status === "active" ? "#000" : "#6B7280" },
      ]}
    >
      <Text style={styles.statusText}>{status}</Text>
    </View>
  );

  const PendingBadge: React.FC<{ count: number }> = ({ count }) => (
    <View style={styles.pendingBadge}>
      <Text style={styles.pendingText}>{count} pending</Text>
    </View>
  );

  const ParticipantAvatars: React.FC<{ participants: any[] }> = ({
    participants,
  }) => (
    <View style={styles.avatarsContainer}>
      {participants.map((participant, index) => (
        <Image
          key={participant.id}
          source={{ uri: participant.avatar }}
          style={[styles.avatar, { marginLeft: index > 0 ? -10 : 0 }]}
        />
      ))}
    </View>
  );

  const TripCard: React.FC<{ trip: any }> = ({ trip }) => (
    <TouchableOpacity style={styles.tripCard}>
      <View style={styles.cardHeader}>
        <Image source={{ uri: trip.image }} style={styles.tripImage} />
        <StatusBadge status={trip.status} />
      </View>

      <View style={styles.cardContent}>
        <Text style={styles.tripTitle}>{trip.title}</Text>
        <Text style={styles.tripDescription}>{trip.description}</Text>

        <View style={styles.tripDetails}>
          <View style={{ flexDirection: "row", gap: 4 }}>
            <FontAwesomeIcon icon={faCalendar} size={16} color={"#666"} />
            <Text style={styles.dateText}>{trip.date}</Text>
          </View>
          <View style={{ flexDirection: "row", gap: 4 }}>
            <FontAwesomeIcon icon={faUserGroup} size={16} color={"#666"} />
            <Text style={styles.peopleText}>{trip.people} people</Text>
          </View>
        </View>

        <View style={styles.cardFooter}>
          <ParticipantAvatars participants={trip.participants} />
          <View style={styles.rightSection}>
            {trip.amount > 0 && (
              <Text style={styles.amountText}>${trip.amount.toFixed(2)}</Text>
            )}
            {trip.pendingCount > 0 && (
              <PendingBadge count={trip.pendingCount} />
            )}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f8f9fa" />

      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>Trips</Text>
          <Text style={styles.headerSubtitle}>Manage travel expenses</Text>
        </View>
        <TouchableOpacity style={styles.newTripButton}>
          <FontAwesomeIcon icon={faPlus} color={"white"} size={12} />
          <Text style={styles.newTripText}>New Trip</Text>
        </TouchableOpacity>
      </View>

      {/* Stats Cards */}
      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <FontAwesomeIcon icon={faClock} size={20} color={"#435ff2"} />
          <View style={{ marginLeft: 8, gap: 4 }}>
            <Text style={styles.statLabel}>Active Trips</Text>
            <Text style={styles.statValue}>{activeTripsCount}</Text>
          </View>
        </View>

        <View style={styles.statCard}>
          <FontAwesomeIcon icon={faDollarSign} size={20} color={"#4da34c"} />
          <View style={{ marginLeft: 8, gap: 4 }}>
            <Text style={styles.statLabel}>Total Pending</Text>
            <Text style={styles.statValue}>${totalPending.toFixed(0)}</Text>
          </View>
        </View>
      </View>

      {/* Search and Filters */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <FontAwesomeIcon icon={faMagnifyingGlass} size={14} color={"#999"} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search notifications..."
            value={searchText}
            onChangeText={setSearchText}
            placeholderTextColor="#999"
          />
        </View>
        <TouchableOpacity style={styles.filterButton}>
          <FontAwesomeIcon icon={faGear} size={16} color={"#1a1a1a"} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.sortButton}>
          <FontAwesomeIcon icon={faSliders} size={16} color={"#1a1a1a"} />
        </TouchableOpacity>
      </View>

      {/* Trips List */}
      <ScrollView
        style={styles.tripsContainer}
        showsVerticalScrollIndicator={false}
      >
        {tripsData.map((trip) => (
          <TripCard key={trip.id} trip={trip} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    paddingTop: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1a1a1a",
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 14,
    color: "#666",
  },
  newTripButton: {
    backgroundColor: "#1a1a1a",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  newTripText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
    marginLeft: 4,
  },
  statsContainer: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingBottom: 20,
    gap: 12,
  },
  statCard: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    flexDirection: "row",
    alignItems: "center",
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 1 },
    // shadowOpacity: 0.05,
    // shadowRadius: 2,
    // elevation: 2,
  },
  statIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#EEF2FF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  statIconText: {
    fontSize: 18,
  },
  statLabel: {
    fontSize: 12,
    color: "#6B7280",
  },
  statValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#111827",
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
    backgroundColor: "#f3f3f5",
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
    color: "#1a1a1a",
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
  filtersRow: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingBottom: 16,
    gap: 12,
  },
  filterText: {
    fontSize: 14,
    color: "#374151",
  },
  filterArrow: {
    fontSize: 12,
    color: "#6B7280",
  },
  tripsContainer: {
    flex: 1,
    paddingHorizontal: 20,
    marginBottom: 50,
  },
  tripCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 16,
    borderWidth: 1,
    overflow: "hidden",
    borderColor: "#e5e7eb",
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.1,
    // shadowRadius: 4,
    // elevation: 3,
  },
  cardHeader: {
    position: "relative",
  },
  tripImage: {
    width: "100%",
    height: 120,
    resizeMode: "cover",
  },
  statusBadge: {
    position: "absolute",
    top: 12,
    right: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  statusText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },
  cardContent: {
    padding: 16,
  },
  tripTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1a1a1a",
    marginBottom: 8,
  },
  tripDescription: {
    fontSize: 12,
    color: "#666",
    lineHeight: 16,
    marginBottom: 12,
  },
  tripDetails: {
    marginBottom: 16,
    flexDirection: "row",
    gap: 16,
    alignItems: "center",
  },
  dateText: {
    fontSize: 12,
    color: "#666",
    fontWeight: 300,
  },
  peopleText: {
    fontSize: 12,
    color: "#666",
    fontWeight: 300,
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  avatarsContainer: {
    flexDirection: "row",
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: "#fff",
  },
  rightSection: {
    alignItems: "flex-end",
  },
  amountText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1a1a1a",
    marginBottom: 4,
  },
  pendingBadge: {
    backgroundColor: "#c92422",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  pendingText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },
});

export default TripsScreen;
