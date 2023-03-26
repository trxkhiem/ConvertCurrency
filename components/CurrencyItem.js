import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import CountryFlag from './CountryFlag';
import Icon from 'react-native-vector-icons/FontAwesome';
import EntypoIcons from 'react-native-vector-icons/Entypo';

const CurrencyItem = ({item}) => {
    return (
        <View style={styles.currencyItem}>
        {/* current view */}
        <View style={styles.leftView}>
          <CountryFlag countryCode={item.countryCode} size={50} />
          <Text style={{ fontSize: 16, fontWeight: "bold"}}>{item.countryCode}</Text>
         
        </View>

        {/* value view */}
        <View style={styles.rightView}>
          <View style={styles.viewText}> 
            <Text style={styles.valueText}>{item.currencyUnit} 1,000.00</Text>
            <Text style={styles.subText}>
                1 AUD = 0.9154 {item.countryCode}
            </Text>
          </View>

          {/* empty box  */}
          <View style={styles.line}></View>

        </View>
      </View>
      );
};


const styles = StyleSheet.create({
   
    currencyItem: {
      // alignItems: 'flex-start',
      justifyContent: 'space-between',
      flexDirection: 'row',
      marginVertical: 10,
      marginHorizontal: 16,
      backgroundColor: '#ffffff',
      borderRadius: 10,
      elevation: 5, // Set the elevation to 5
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
      borderWidth: 1,
      borderColor: '#D3D3D3',
      height: 65
    },
  
  
    leftView:{
      marginLeft: 18,
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center',
    },
  
    
  
    rightView: {
      justifyContent: 'center',
      flexDirection: 'row',
    },
  
  
    viewText: {
      justifyContent: 'center',
      alignItems: 'flex-end'
    },
  
    valueText:{
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 16
    },
  
    subText:{
        color: "#AEAEAE",
        fontWeight: "700",
        fontSize: 14,
        marginTop: 4
    },

     // to create a line
    line:{
        borderLeftWidth: 1, 
        marginRight: 0, 
        marginLeft: 10, 
        borderColor: '#D3D3D3', 
        height: '100%',
        justifyContent:'center',
        alignItems: 'center',
        width: 50
    }
  });
  


export default CurrencyItem;