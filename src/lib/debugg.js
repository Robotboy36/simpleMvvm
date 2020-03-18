
class Debugger {
    constructor (perfix) {
        this.perfix = perfix || '输出：'
    }

    log (...args) {
        args.unshift(this.prefix)
        window.console.log.apply(window.console, args)
    }
}

export default Debugger;
