const processListData = data => {
    // some operation on data
    console.log(data);
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
