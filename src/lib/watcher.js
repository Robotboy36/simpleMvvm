
import { compilerUtil } from './compiler'
import Depend from './dep'

class Watcher {
    constructor (expr, vm, cb) {
        this.expr = expr
        this.vm = vm
        this.cb = cb

        Depend.watcher = this;
        this.value = this.getValue()
        Depend.watcher = null
    }

    getValue () {
        return compilerUtil._getValue(this.expr, this.vm);
    }

    update () {
        let newValue = this.getValue()

        if (newValue !== this.oldValue) {
            this.cb(newValue)
        }
    }
}

export default Watcher;
