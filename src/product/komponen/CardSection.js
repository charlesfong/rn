import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => (
  <View style={styles.containerStyle}>
    {props.children}
  </View>
    );

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        marginTop:10,
        // padding: 5,
        // paddingleft: 15,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
};

export default CardSection;
