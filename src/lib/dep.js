

class Depend {
    constructor () {
        this.subs = []
    }

    add (watcher) {
        this.subs.push(watcher)
    }

    notify () {
        this.subs.forEach(w => w.update())
    }
}


export default Depend;
