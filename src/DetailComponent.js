import React, {Component} from 'react';
import {
    View,
    StyleSheet, Text, TouchableOpacity
} from 'react-native';

export default class DetailComponent extends Component {

    render() {
        const item = this.props.navigation.state.params && this.props.navigation.state.params.item || {name: ''};
        const callback = this.props.navigation.state.params && this.props.navigation.state.params.callback;
        return (
            <View style={styles.container}>
                <Text style={{fontSize: 30}}>{item.name}</Text>
                <TouchableOpacity
                    style={{
                        marginTop: 40
                    }}
                    onPress={() => {
                        callback && callback({name: 'React native'});
                        this.props.navigation.pop(1);
                    }}
                >
                    <Text>Back</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

