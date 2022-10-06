import React, {Component} from 'react';
import { StyleSheet, Button, Text, View, FlatList, TouchableOpacity, TextInput, Modal, TouchableHighlight,Image  } from 'react-native';
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
            height: 72,
            width: 72
          }} source={item.logo} />
                </View >
                <View style={{ flex: 4 }}>
                    <Text style={styles.text}> {item.text}</Text>
                    <Text style={styles.text}> {item.shop}</Text>
                </View>
                    
                <View>
                    <View style={styles.fixToText}>
                        <Button
                            color="#F31111"
                            title="Chat"
                        />
                    </View>
                </View>
            </View>
        </TouchableHighlight>
    )
    
    render() {
        return (
            <View style={styles.contentContainer}>
                <View style={styles.header}>
                    <View>
                        <Image style={{
                        marginRight: 150,
                        resizeMode: "cover",
                        height: 20,
                        width: 20 }} source={require('./assets/back.png')} />
                    </View>
                    <View >
                        <Text style={styles.headerText}>Chat</Text>
                    </View>
                    <View>
                        <Image style={{
                            marginLeft: 150,
                            resizeMode: "cover",
                            height: 20,
                            width: 20
                        }} source={require('./assets/shopping-cart.png')} />
                    </View>
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
                    <Image style={{
                        marginRight: 150,
                        resizeMode: "cover",
                        height: 25,
                        width: 25
                    }} source={require('./assets/menu.png')} />
                    <Image style={{
                        marginLeft: 0,
                        resizeMode: "cover",
                        height: 25,
                        width: 25
                    }} source={require('./assets/home.png')} />
                    <Image style={{
                        marginLeft: 150,
                        resizeMode: "cover",
                        height: 25,
                        width: 25
                    }} source={require('./assets/undo.png')} />
                </View>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    header: {
        height: 42,
        flexDirection: 'row',
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
        height: 49,
        flexDirection: 'row',
        backgroundColor: '#1BA9FF',
        justifyContent: 'center',
        alignItems: 'center',
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
        marginVertical: 0,
        fontSize: 17,
        marginLeft: 10,
        marginBottom: 10,
    },
    fixToText: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 'auto',
        width: 100,
        height: 55,
        
    },
    
})