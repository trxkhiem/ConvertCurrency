import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import AUCountryCurrency from './components/AUCurrencyItem';
import CurrencyItem from './components/CurrencyItem';
import DisplayModal from './components/DisplayModal';
import HistoricalExchangeRate from './components/HistoricalExchangeRate';



export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };
  return (
    <SafeAreaView style={styles.container}>
      {/* // Header */}
      <View style={styles.viewHeader}>
        <Text style={styles.textHeader}> Convert</Text>
      </View>

      {/* Body View */}
      <View >
        {/* AUD container view   */}
        <AUCountryCurrency />
        <TouchableOpacity onPress={handleOpenModal}>
            <CurrencyItem />
        </TouchableOpacity>
        <DisplayModal isVisible={isModalVisible} onClose={handleCloseModal} component={<HistoricalExchangeRate /> } />
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


});
