import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Dimensions, ScrollView, Touchable} from 'react-native';

const OPTIONS = ['paket 1','paket 2','paket 3','paket 4','paket 5','paket 6','paket 7', 'paket 8', 'paket 9','paket 10'];
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const ModalPicker = (props) => {
    
    const onPressItem = (option) => {
        props.changeModalVisibility(false);
        props.setData(option);
    }

    const option = OPTIONS.map((item, index) => {
        return(
            <TouchableOpacity 
            style={styles.option}
            key={index}
            onPress={() => onPressItem(item)}
            >
                <Text style={styles.text}>
                    {item}
                </Text>
            </TouchableOpacity>
        )
    })

    return(
        <TouchableOpacity onPress={() => props.changeModalVisibility(false)} style={styles.container}>
            <View style={styles.modal}>
                <ScrollView>
                    {option}
                </ScrollView>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    modal: {
        backgroundColor: 'white',
        borderRadius: 10,
        width: width-20,
        height: height/2
    },
    option: {
        alignItems: 'flex-start'
    },
    text: {
        margin: 20,
        fontSize: 20,
        fontWeight: 'bold'
    }
})

export default ModalPicker;