import React from 'react';

import { View, Image, StyleSheet, Text } from 'react-native';

import f1logo from '../assets/f1-logo.png'

const styles = StyleSheet.create({
    tinyLogo: {
      width: 64,
      height: 32,
    }
});

const Header = ({ title, showImage }) => {
    return (
        <View>
            { showImage ? <Image 
                style={styles.tinyLogo}
                source={f1logo} 
            /> : null }
            <Text>{ title }</Text>
        </View>
    );
}

export default Header;