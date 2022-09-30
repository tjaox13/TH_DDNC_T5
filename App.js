import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList,  TextInput, Modal, TouchableHighlight,Image  } from 'react-native';
import Data from './Data';

export default class List extends Component {
    constructor(props) {
        super(props);
        this.initData = Data
        this.state = {
            data: this.initData,
      isModalVisible: false,
            inputText: '',
            editedItem: 0, 
        };
    }

    setModalVisible = (bool) => {
        this.setState({ isModalVisible: bool })
    }

    setInputText = (text) => {
        this.setState({ inputText: text })
    }

    setEditedItem = (id) => {
        this.setState({ editedItem: id })
    }

    handleEditItem = (editedItem) => {
        const newData = this.state.data.map( item => {
            if (item.id === editedItem ) {
                item.text = this.state.inputText
                return item
            }
            return item
        })
        this.setState({ data: newData })
    }

    renderItem = ({item}) => (
        <TouchableHighlight onPress={() => {this.setModalVisible(true); this.setInputText(item.text), this.setEditedItem(item.id)}}
            underlayColor={'#f1f1f1'}> 
            <View style={styles.item} >
                <View style={styles.marginLeft}>
                    <Image style={{
            resizeMode: "cover",
            height: 74,
            width: 74
          }} source={item.logo} />
                </View>
                <Text style={styles.text}> {item.text}, {item.text2} </Text>
            </View>
        </TouchableHighlight>
    )
    
    render() {
        return (
            <View style={styles.contentContainer}>
                <View style={styles.header}>
                    <Text style={styles.headerText}> Chat </Text>
                </View>
                <View style={styles.wonder}>
                    <Text style={styles.wonderText}> Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chat với shop! </Text>
                </View>
                <FlatList 
                    data={this.state.data}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={this.renderItem}
                />
                <View style={styles.bottom}>
                    <Text style={styles.bottomText}> Bottom </Text>
                </View>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    header: {
        height: 42,
        backgroundColor: '#1BA9FF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    wonder: {
        height: 46,
        backgroundColor: '#E5E5E5',
        alignItems: 'center',
        justifyContent: 'center',
    },
    wonderText: {
        color: 'black',
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
        height:74,
        alignItems: 'center',
    },
    
    marginLeft: {
        marginLeft: 5,
        width: 74,
        height: 74,
    },
    text: {
        marginVertical: 30,
        fontSize: 17,
        marginLeft: 10,
    },
})