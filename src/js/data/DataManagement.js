const Storage_Key = "URL_LIST";

export let urls = [];

const DataManagement = {
    isStorageExist() {
        if (typeof Storage === undefined) {
            alert("Your browser do not support Local Storage");
            return false;
        }
        return true;
    },

    saveUrlData() {
        const parsedData = JSON.stringify(urls);
        localStorage.setItem(Storage_Key, parsedData);
    },
    loadUrlData() {
        const serializedData = localStorage.getItem(Storage_Key);
        let urlData = JSON.parse(serializedData);
        urlData !== null ? (urls = urlData) : "";
    },

    isUrlsLenghtBiggerThanThree() {
        if (urls.length >= 3) {
            return true;
        }
        return false;
    },

    updateStorageData() {
        this.isStorageExist ? this.saveUrlData() : "";
    },

    composeUrlObject(originalUrl, shortenUrl) {
        let shortedOriginalUrl = originalUrl.substr(0, 32) + "...";
        return {
            id: +new Date(),
            shortedOriginalUrl,
            shortenUrl,
        };
    },
};

export { DataManagement };
