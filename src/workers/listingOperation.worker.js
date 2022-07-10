import { TABLE_HEIGHT } from "../constants";
import get from "lodash/get";

const processListData = data => {
    console.log(data);
    console.log(TABLE_HEIGHT);
    console.log(get(data, "list.0"));
    return data.list.map(n => n * 2);
};

addEventListener("message", e => {
    try {
        console.time("TimeTakenByWorker");
        self.postMessage({
            list: processListData(e.data),
        });
        console.timeEnd("TimeTakenByWorker");
    } catch (error) {
        console.error(error);
    }
});
