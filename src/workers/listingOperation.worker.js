import { TABLE_HEIGHT } from "../constants";

const processListData = data => {
    // some operation on data
    console.log(data);
    console.log(TABLE_HEIGHT);
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
