import React from 'react'
import { Button, View, Text, TextInput, StyleSheet, Modal } from 'react-native'

const TextButtonView = props => {
    return (
        <Modal visible={props.isVisible} animationType='slide'>
            <View style={styles.textButtonView}>
                <TextInput placeholder="Enter Course Goal" style={styles.textInput} onChangeText={props.onChangeText} value={props.value} />
                <View style={styles.buttonView}>
                    <View style={styles.button}><Button title="ADD" onPress={props.onPress} /></View>
                    <View style={styles.button}><Button title='CANCEL' color='red' onPress={props.onCancel} /></View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({

    textButtonView: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    },

    textInput: {
        fontSize: 20,
        padding: 10,
        borderColor: 'black',
        borderWidth: 3,
        marginHorizontal: '5%',
        marginBottom: '3%'
    },

    buttonView: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-evenly',
        marginHorizontal: '5%',
    },

    button: {
        width: '25%'
    }
})

export default TextButtonView;
