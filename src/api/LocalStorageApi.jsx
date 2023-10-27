class LocalStorageApi  {
    static save(question, answer) {
        localStorage.setItem(question, answer);
    }
    static read() {
        let archive = [],
            keys = Object.keys(localStorage),
            i = 0, key;
        for (; key = keys[i]; i++) {
            archive.push( key + '=' + localStorage.getItem(key));
        }

        archive.sort((a, b) => a.length - b.length);

        return archive;
    }
}

export default LocalStorageApi