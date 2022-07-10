import React, { Component } from "react";
import { processListData } from "../utils/workerUtils";

export class List extends Component {
    state = {
        isListprocessing: false,
        list: [],
    };

    componentDidMount() {
        const onSuccess = e => {
            const { list } = e.data;
            this.setState({
                list,
                isListprocessing: false,
            });
            console.timeEnd("TimeTakenByComponent");
        };
        const onError = err => {
            this.setState({
                isListprocessing: false,
            });
            /* eslint no-console: "off" */
            console.error(err);
        };
        processListData([1, 2, 3], {}, onSuccess, onError);
    }

    render() {
        return (
            <>
                <div>List Component</div>
                <code>{JSON.stringify(this.state.list, 4)}</code>
            </>
        );
    }
}
