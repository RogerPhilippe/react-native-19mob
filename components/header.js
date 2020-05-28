import React from 'react';

import { View, Image, StyleSheet, Text } from 'react-native';

import f1logo from '../assets/f1-logo.png'

const styles = StyleSheet.create({
    tinyLogo: {
      width: 64,
      height: 32,
    }
});

const Header = () => {
    return (
        <View>
            <Image 
                style={styles.tinyLogo}
                source={require('../assets/f1-logo.png')} 
            />
        </View>
    );
}

export default Header;