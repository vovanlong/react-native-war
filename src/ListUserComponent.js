import React, {Component} from 'react';
import {
    View,
    StyleSheet, TextInput, Image, FlatList, Dimensions
} from 'react-native';

import icon_search from './res/img/ic_search.png';
import UserItem from "./UserItem";

const {width, height} = Dimensions.get('window');

const URL = 'https://jsonplaceholder.typicode.com/users';

export default class ListUserComponent extends Component {

    getData = async () => {
        // fetch(URL).then(res => {
        //     return res.json();
        // }).then(data => {
        //     return data;
        // }).catch(error => {
        //     throw error;
        // });
        try {
            const response = await fetch(URL);
            const data = await response.json();
            this.setState({data});
        } catch (e) {
            console.log(e);
        }
    };

    componentDidMount() {
        this.getData();
    }

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View
                    style={styles.shadow}
                >
                    <TextInput
                        style={[styles.input]}
                        placeholder={'Input user name ...'}
                    />

                    <Image
                        style={styles.icon_search}
                        source={icon_search}
                    />
                </View>

                <FlatList
                    style={{flex: 1}}
                    data={this.state.data}
                    renderItem={this.renderItem}
                    keyExtractor={this.keyExtractor}
                />
            </View>
        );
    }

    renderItem = ({item}) => {
        return <UserItem item={item}/>
    };

    keyExtractor = item => item.id.toString();
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40,
        alignItems: 'center',
        backgroundColor: '#dddddd'
    },
    shadow: {
        width: width * 0.9,
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 1,
        justifyContent: 'center'
    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: '#ffffff',
        paddingLeft: 10,
    },
    icon_search: {
        width: 30,
        height: 30,
        position: 'absolute',
        right: 10
    }
});

