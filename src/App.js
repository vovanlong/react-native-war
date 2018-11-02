import React, {Component} from 'react';
import {MainRouter} from "./navigation/MainRouter";

type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <MainRouter/>
        );
    }
}
