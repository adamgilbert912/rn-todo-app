import React from 'react'
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'

const ListItem = props => {
    return (
    <TouchableOpacity onPress={props.onDelete}>
        <View style={styles.listItem}>
            <Text style={{textAlign: 'center'}}>{props.text}</Text>
        </View>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        margin: 10,
        backgroundColor: 'grey',
        borderColor: 'black',
        borderWidth: 3
      } 
})

export default ListItem;