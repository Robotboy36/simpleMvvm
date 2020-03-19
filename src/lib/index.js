
import Debugger from './debugg'
import Compiler from './compiler'
import Observer from './observer'
import { isFunction } from './util';

const debug = new Debugger('Main').debug()

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
        this.$options = opt
        this.$methods = opt.methods
        
        if (!this.$el) {
            throw new Error('元素必传');
        }

        this.observe(this.$data)
        this.compiler(this.$el, this)

        this.proxy(this.$data)
    }

    observe (data) {
        new Observer(data)
    }

    compiler (el, vm) {
        new Compiler(el, vm)
    }

    // 代理data的 getter 与 setter
    proxy (data) {
        for (const prop in data) {
            Object.defineProperty(this, prop, {
                get () {
                    return data[prop]
                },

                set (newValue) {
                    data[prop] = newValue;
                }
            })
        }
    }
}

export default Mvvm;
