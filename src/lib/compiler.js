

import Debugger from './debugg'
const debug = new Debugger('compiler')

class Compiler {
    constructor (el, vm) {
        this.el = el
        this.vm = vm

        const fragment = this.createFragment(el)
        debug.log('Compiler', fragment)
    }


    // 生成碎片
    createFragment (el) {
        let fragNode = document.createDocumentFragment(),
            firstChild = null;
        while (firstChild = el.firstChild) {
            fragNode.appendChild(firstChild)
        }

        return fragNode;
    }
}

export default Compiler;
