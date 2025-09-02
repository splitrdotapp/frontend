import { DropdownOption } from '@/components/Dropdown';
import SegmentedControl from '@/components/SegmentedControl';
import { faArrowDown, faArrowUp, faCircle, faGear, faLocationDot, faMagnifyingGlass, faSliders } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

interface Transaction {
  id: number;
  title: string;
  person: string;
  initials: string;
  amount: string;
  status: 'pending' | 'completed';
  type: 'split' | 'payment';
  category: string;
  time: string;
  isPositive: boolean;
  avatar?: string;
}

interface FilterButtonProps {
  title: string;
  isSelected: boolean;
  onPress: () => void;
}

interface StatusBadgeProps {
  status: 'pending' | 'completed';
}

interface TypeBadgeProps {
  type: 'split' | 'payment';
}

interface AvatarProps {
  initials: string;
  isPositive: boolean;
}

interface TransactionItemProps {
  transaction: Transaction;
}

const TransactionsScreen: React.FC = () => {
  const [searchText, setSearchText] = useState<string>('');
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [statusFilter, setStatusFilter] = useState<string>('All Status');
  const [typeFilter, setTypeFilter] = useState<string>('All Types');
  const [sortOption, setSortOption] = useState<string>('Recent');

  const sortOptions: DropdownOption[] = [
  { label: 'Recent', value: 'recent' },
  { label: 'Amount (High)', value: 'amount_high' },
  { label: 'Amount (Low)', value: 'amount_low' },
];

  const transactions: Transaction[] = [
    {
      id: 1,
      title: 'Dinner at Italian Bistro',
      person: 'Sarah Johnson',
      initials: 'SJ',
      amount: '+$45.50',
      status: 'pending',
      type: 'split',
      category: 'Weekend Getaway',
      time: '2 hours ago',
      isPositive: true,
    },
    {
      id: 2,
      title: 'Gas Station',
      person: 'Mike Chen',
      initials: 'MC',
      amount: '-$67.25',
      status: 'completed',
      type: 'payment',
      category: 'Weekend Getaway',
      time: '4 hours ago',
      isPositive: false,
      avatar: 'https://via.placeholder.com/40x40/4A90E2/FFFFFF?text=MC',
    },
    {
      id: 3,
      title: 'Coffee & Snacks',
      person: 'Emma Davis',
      initials: 'ED',
      amount: '+$28.75',
      status: 'pending',
      type: 'split',
      category: '',
      time: '6 hours ago',
      isPositive: true,
    },
    {
      id: 4,
      title: 'Hotel Booking',
      person: 'James Wilson',
      initials: 'JW',
      amount: '-$150.00',
      status: 'completed',
      type: 'split',
      category: 'Business Conference',
      time: '1 day ago',
      isPositive: false,
    },
    {
      id: 5,
      title: 'Uber Ride',
      person: 'Lisa Brown',
      initials: 'LB',
      amount: '+$23.50',
      status: 'pending',
      type: 'payment',
      category: '',
      time: '1 day ago',
      isPositive: true,
    },
  ];

  const FilterButton: React.FC<FilterButtonProps> = ({ title, isSelected, onPress }) => (
    <TouchableOpacity
      style={[styles.filterButton, isSelected && styles.selectedFilter]}
      onPress={onPress}
    >
      <Text style={[styles.filterText, isSelected && styles.selectedFilterText]}>
        {title}
      </Text>
    </TouchableOpacity>
  );

  const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => (
    <View style={[styles.statusBadge, status === 'pending' ? styles.pendingBadge : styles.completedBadge]}>
      <Text style={[styles.statusText, status === 'pending' ? styles.pendingText : styles.completedText]}>
        {status}
      </Text>
    </View>
  );

  const TypeBadge: React.FC<TypeBadgeProps> = ({ type }) => (
    <View style={styles.typeBadge}>
      <Text style={styles.typeText}>{type}</Text>
    </View>
  );

  const Avatar: React.FC<AvatarProps> = ({ initials, isPositive }) => (
    <View style={styles.avatarContainer}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{initials}</Text>
      </View>
      {isPositive && (
        <View style={[styles.arrowContainer, {backgroundColor: "#e4fbe8"}]}>
            <FontAwesomeIcon icon={faArrowUp} size={10} color={"#4da34c"}/>
        </View>
      )}
      {!isPositive && (
        <View style={[styles.arrowContainer, {backgroundColor: "#f7e3e2"}]}>
            <FontAwesomeIcon icon={faArrowDown} size={10} color={"#c92422"}/>
        </View>
      )}
    </View>
  );

  const TransactionItem: React.FC<TransactionItemProps> = ({ transaction }) => (
    <View style={styles.transactionItem}>
      <Avatar 
        initials={transaction.initials} 
        isPositive={transaction.isPositive}
      />
      
      <View style={styles.transactionContent}>
        <View style={styles.transactionHeader}>
          <Text style={styles.transactionTitle}>{transaction.title}</Text>
          <Text style={[styles.amount, transaction.isPositive ? styles.positiveAmount : styles.negativeAmount]}>
            {transaction.amount}
          </Text>
        </View>
        
        <View style={styles.transactionDetails}>
          <Text style={styles.personName}>{transaction.person}</Text>
          {transaction.category && (
            <>
              <View style={styles.separator}>
                <FontAwesomeIcon icon={faCircle} size={4} color={"#6b7280"}/>
              </View>
              <FontAwesomeIcon icon={faLocationDot} size={10} color={"#6b7280"}/>
              <Text style={styles.category}>{transaction.category}</Text>
            </>
          )}
        </View>
        
        <View style={styles.transactionFooter}>
          <View style={styles.badges}>
            <StatusBadge status={transaction.status} />
            <TypeBadge type={transaction.type} />
          </View>
          <Text style={styles.timeText}>{transaction.time}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Transactions</Text>
        <Text style={styles.subtitle}>Manage incoming and outgoing payments</Text>
      </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
            <View style={styles.searchBar}>
                <FontAwesomeIcon icon={faMagnifyingGlass} size={14} color={"#999"}/>
                  <TextInput
                    style={styles.searchInput}
                    placeholder="Search transactions..."
                    value={searchText}
                    onChangeText={setSearchText}
                    placeholderTextColor="#999"
                  />
            </View>
            <TouchableOpacity style={styles.filterButton}>
                <FontAwesomeIcon icon={faGear} size={16} color={"#1a1a1a"}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sortButton}>
                <FontAwesomeIcon icon={faSliders} size={16} color={"#1a1a1a"}/>
            </TouchableOpacity>
        </View>

      {/* Filter Dropdowns
      <View style={styles.filtersContainer}>
        <Dropdown
            options={sortOptions}
            selectedValue={sortOption}
            onSelectionChange={setSortOption}
        />
        <Dropdown
            options={sortOptions}
            selectedValue={sortOption}
            onSelectionChange={setSortOption}
        />
      </View> */}

      {/* Filter Tabs */}
      <View style={styles.filterTabs}>
        <SegmentedControl
        options={['All', 'Pending', 'Completed']}
        selectedOption={selectedFilter}
        onSelectionChange={setSelectedFilter}
        />
      </View>

      {/* Transactions List */}
      <ScrollView style={styles.transactionsList} showsVerticalScrollIndicator={false}>
        {transactions.map((transaction) => (
          <TransactionItem key={transaction.id} transaction={transaction} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  header: {
    alignItems: 'flex-start',
    padding: 20,
    paddingTop: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
  },
  searchContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 20,
    gap: 8,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f3f3f5',
    borderRadius: 10,
    paddingHorizontal: 12,
    // paddingVertical: 4,
  },
  searchIcon: {
    fontSize: 16,
    marginRight: 8,
    color: '#999',
  },
  searchInput: {
    marginLeft: 8,
    flex: 1,
    fontSize: 14,
    color: '#1a1a1a',
    fontWeight: 300,
  },
  filterIcon: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 12,
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 1 },
    // shadowOpacity: 0.1,
    // shadowRadius: 2,
    // elevation: 2,
  },
  filterIconText: {
    fontSize: 16,
    color: '#666',
  },
  filtersContainer: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    marginBottom: 20,
    gap: 12,
  },
  dropdown: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 1 },
    // shadowOpacity: 0.05,
    // shadowRadius: 1,
    // elevation: 1,
  },
  dropdownText: {
    fontSize: 14,
    color: '#333',
  },
  dropdownArrow: {
    fontSize: 10,
    color: '#999',
  },
  filterTabs: {
    marginBottom: 20,
    marginHorizontal: 20,
  },
  filterButton: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#e5e7eb',
    borderWidth: 1,
  },
  sortButton: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#e5e7eb',
    borderWidth: 1,
  },
  selectedFilter: {
    backgroundColor: '#E8F4FD',
  },
  filterText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  selectedFilterText: {
    color: '#2196F3',
  },
  transactionsList: {
    flex: 1,
    paddingHorizontal: 24,
    marginBottom: 50,
  },
  transactionItem: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 20,
    marginBottom: 12,
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 1 },
    // shadowOpacity: 0.05,
    // shadowRadius: 2,
    // elevation: 1,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  avatarContainer: {
    position: 'relative',
    marginRight: 12,
    justifyContent: "center",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: '#e5e7eb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
  },
  arrowContainer: {
    position: 'absolute',
    marginTop: 35,
    right: 0,
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrow: {
    fontSize: 10,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  transactionContent: {
    flex: 1,
  },
  transactionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  transactionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1A1A1A',
  },
  amount: {
    fontSize: 14,
    fontWeight: '800',
  },
  positiveAmount: {
    color: '#4DA34C',
  },
  negativeAmount: {
    color: '#c92422',
  },
  transactionDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  personName: {
    fontSize: 12,
    color: '#374151',
  },
  separator: {
    marginHorizontal: 6,
  },
  category: {
    fontSize: 10,
    color: '#6b7280',
    marginLeft: 3,
  },
  transactionFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  badges: {
    flexDirection: 'row',
    gap: 8,
  },
  statusBadge: {
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  pendingBadge: {
    backgroundColor: '#c92422',
  },
  completedBadge: {
    backgroundColor: '#1A1A1A',
  },
  statusText: {
    fontSize: 10,
    fontWeight: '600',
  },
  pendingText: {
    color: 'white',
  },
  completedText: {
    color: '#FFFFFF',
  },
  typeBadge: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderColor: '#e5e7eb',
  },
  typeText: {
    fontSize: 10,
    color: "#1A1A1A",
    fontWeight: '600',
  },
  timeText: {
    fontSize: 10,
    color: '#999',
  },
});

export default TransactionsScreen;