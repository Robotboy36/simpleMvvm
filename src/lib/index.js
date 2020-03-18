
import Debugger from './debugg'
import Compiler from './compiler'
import { isFunction } from './util';

const debug = new Debugger('main')

/**
 * 构造器
 */
class Mvvm {
    // 1, 生成dom碎片
    // 2, 编译指令
    // 3, 替换原有dom
    constructor (opt) {
        this.$el = document.querySelector(opt.el);
        this.$data = isFunction(opt.data) ? opt.data() : opt.data;
        this.$options = opt;
        
        if (!this.$el) {
            throw new Error('元素必传');
        }

        this.compiler(this.$el, this)
    }

    compiler (el, vm) {
        debug.log('compiler')
        new Compiler(el, vm)
    }
}

export default Mvvm;
