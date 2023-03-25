import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* // Header */}
      <View style={styles.viewHeader}>
        <Text style={styles.textHeader}> Convert</Text>
      </View>

      {/* Body View */}
      <View >

      {/* AUD container view   */}
      <View style={styles.currencyItem}>
        {/* current view */}
        <View>
          <Text>AUD</Text>
        </View>

        {/* value view */}
        <View>
          <Text>$1,000.00</Text>
        </View>

      </View>

      
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    
  },
  viewHeader: {
    backgroundColor: '#ffffff',
    alignItems: "center",
    paddingVertical: 16,
    // Set up elevation for header
    elevation: 3, // Set the elevation to 1
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },

  textHeader: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
  },

  viewBody: {
    
  },

  currencyItem: {
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: 40,
    marginHorizontal: 16,
    paddingHorizontal: 20,
    paddingVertical: 24,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    elevation: 5, // Set the elevation to 5
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  }
});
