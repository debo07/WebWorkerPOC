export const processListData = (list, reqData, onSuccess, onError) => {
    const worker = new window.Worker(
        new URL("../workers/listingOperation.worker.js", import.meta.url),
        { type: "module" },
    );
    worker.postMessage({ list: list, params: reqData });
    worker.onerror = err => {
        onError(err);
        worker.terminate();
    };
    worker.onmessage = e => {
        onSuccess(e);
        worker.terminate();
    };
};
