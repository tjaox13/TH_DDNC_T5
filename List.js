import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList } from 'react-native';
import Data from './Data';

export default class List extends Component {

    renderItem = ({item}) => (
        <View style={styles.item}>
            <View style={styles.marginLeft}>
                <View style={[styles.menu, { backgroundColor: item.color }]}></View>
                <View style={[styles.menu, { backgroundColor: item.color }]}></View>
                <View style={[styles.menu, { backgroundColor: item.color }]}></View>
            </View>
            <Text style={styles.text}> {item.text} </Text>
        </View>
    )
    
    render() {
        return (
            <View style={styles.contentContainer}>
                <View style={styles.header}>
                    <Text style={styles.headerText}> List Header </Text>
                </View>
                <FlatList 
                    data={Data}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={this.renderItem}
                />
                <View style={styles.bottom}>
                    <Text style={styles.bottomText}>Header</Text>
                </View>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    header: {
        height: 60,
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    bottom: {
        height: 60,
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottomText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    contentContainer: {
        backgroundColor: 'white',
    },
    item: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        alignItems: 'center',
    },
    marginLeft: {
        marginLeft: 5,
    },
    menu: {
        width: 20,
        height: 2,
        backgroundColor: '#111',
        margin: 2,
        borderRadius: 3,
    },
    text: {
        marginVertical: 30,
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10
,    }
}) 