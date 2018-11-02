import {createStackNavigator} from 'react-navigation';
import ListUserComponent from "../ListUserComponent";
import DetailComponent from "../DetailComponent";

export const MainRouter = createStackNavigator({
    Main: {
        screen: ListUserComponent
    },
    Detail: {
        screen: DetailComponent
    }
}, {
    initialRouteName: 'Main',
    navigationOptions: {
        // headerStyle: {
        //     backgroundColor: '#f4511e',
        // },
        // headerTintColor: '#fff',
        // headerTitleStyle: {
        //     fontWeight: 'bold',
        // },

        //Disable ToolBar
        header: null
    },
});