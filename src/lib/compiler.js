

import Debugger from './debugg'
import Watcher from './watcher';

const debug = new Debugger('Compiler').debug()
const directivePatt = /\{\{(.+?)\}\}/

// 编译方法
export const compilerUtil = {
    _getValue (expr, vm) {
        return expr.split('.').reduce((data, prop) => {
            return data[prop]
        }, vm.$data);
    },

    _setValue (expr, vm, newValue) {
        return expr.split('.').reduce((data, prop) => {
            data[prop] = newValue
        }, vm.$data);
    },

    // 获取 {{expr}} 内容
    _getContentValue (expr, vm) {
        return expr.replace(/\{\{(.+?)\}\}/g, (_, $1) => {
            return this._getValue($1, vm)
        })
    },

    text (node, expr, vm) {
        let data = '';

        // {{expr}} - {{expr}}
        if (directivePatt.test(expr)) {
            data = this._getContentValue(expr, vm)

            // 针对每一个指令，绑定一个监听
            expr.replace(/\{\{(.+?)\}\}/g, (_, $1) => {
                new Watcher($1, vm, () => {
                    this.updater.textUpdater(node, this._getContentValue(expr, vm))
                })
            })
        }
        // v-text
        else {
            data = this._getValue(expr, vm)
            // 添加观察者
            new Watcher(expr, vm, v => this.updater.textUpdater(node, v))
        }

        this.updater.textUpdater(node, data)
    },

    html (node, expr, vm) {
        let data = this._getValue(expr, vm)
        // 添加观察者
        new Watcher(expr, vm, v => this.updater.htmlUpdater(node, v))
        this.updater.htmlUpdater(node, data)
    },

    value (node, expr, vm) {
        let data = this._getValue(expr, vm)
        // 添加观察者
        new Watcher(expr, vm, v => this.updater.modelUpdater(node, v))
        this.updater.modelUpdater(node, data)
    },

    model (node, expr, vm) {
        this.value(node, expr, vm)

        // view => data
        node.addEventListener('input', e => {
            this._setValue(expr, vm, e.target.value)
        }, false)
    },

    bind (node, expr, vm, dirName) {
        if (dirName === 'value') {
            this.value(node, expr, vm)
            return;
        }

        let data = this._getValue(expr, vm)
        console.log('bind', expr, dirName, data);
        // 添加观察者
        new Watcher(expr, vm, v => this.updater.attrUpdater(node, dirName, v))
        this.updater.attrUpdater(node, dirName, data)
    },

    on (node, expr, vm, evtName) {
        node.addEventListener(evtName, e => {
            vm.$methods[expr].call(vm, e)
        }, false)
    },

    updater: {
        textUpdater (node, text) {
            node.textContent = text;
        },

        htmlUpdater (node, html) {
            node.innerHTML = html;
        },
        
        modelUpdater (node, value) {
            node.value = value;
        },

        attrUpdater (node, attr, value) {
            node.setAttribute(attr, value)
        }
    }
}


// 编译类
class Compiler {
    constructor (el, vm) {
        this.el = el
        this.vm = vm

        // 创建碎片
        const fragment = this.createFragment(el)

        // 编译
        this.compiler(fragment, vm)

        // 添加至页面
        el.appendChild(fragment);
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

    /**
     * 编译node, 解析模板
     * @param {元素节点} node 
     * @param {实例对象} vm 
     */
    compiler (node, vm) {
        let childs = node.childNodes;
        [...childs].forEach(el => {
            // 元素节点
            if (this.isNode(el)) {
                this.compilerElement(el)
            }
            // 文本节点
            else {
                this.compilerText(el)
            }

            if (el.childNodes && el.childNodes.length) {
                this.compiler(el, vm)
            }
        })
    }

    /**
     * 编译元素
     * @param {元素对象} el 
     */
    compilerElement (el) {
        const attrs = el.attributes;

        [...attrs].forEach(attr => {
            const {name, value} = attr
            if (this.isDirective(name)) {
                let [simpleDirective, directive] = name.split(/\-/)
                let [dirType, dirName] = (directive || simpleDirective).split(/:|@/)

                // @click
                if (/@/.test(simpleDirective)) {
                    dirType = 'on'
                }

                // :type, 
                else if (/:/.test(simpleDirective)) {
                    dirType = 'bind'
                }

                // v-text, v-html, v-model
                // v-on:click, v-bind:type, 
                compilerUtil[dirType](el, value, this.vm, dirName)
                
                // 删除指令属性
                el.removeAttribute(name)
            }
        })
    }


    /**
     * 编译文本
     * @param {文本元素} el 
     */
    compilerText (el) {
        let content = el.textContent
        if (directivePatt.test(content)) {
            compilerUtil['text'](el, content, this.vm)
        }
    }


    // 检测是否是指令
    isDirective (param) {
        return /^(v\-)|@|:/.test(param)
    }

    // 是否是元素
    isNode (el) {
        return el.nodeType === 1;
    }
}

export default Compiler;
