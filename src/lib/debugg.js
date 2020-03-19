
class Debugger {
    constructor (prefix, color) {
        this.prefix = prefix || 'Debugger'
        this.color = color || '#ec7259'
    }

    debug () {
        let me = this

        return function (...args) {
            args.unshift(
                `%c${me.prefix}:`,
                `color: ${me.color};`
            )
            window.console.log.apply(window.console, args)
        }
    }
}

export default Debugger;
