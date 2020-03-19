
import { isObject } from './util'
import Depend from './dep';

class Observer {
    constructor (data) {
        this.observe(data);
    }

    // 遍历绑定get, set
    observe (data) {
        for (const prop in data) {
            this.defineReactive(data, prop, data[prop])
        }
    }

    // 绑定getter 与 setter
    defineReactive (data, prop, value) {
        const _this = this,
            dep = new Depend();
        
        Object.defineProperty(data, prop, {
            get () {
                // 添加观察者
                Depend.watcher && dep.add(Depend.watcher)
                return value;
            },

            set (newValue) {
                if (newValue !== value) {
                    value = newValue;

                    dep.notify();
                    // 如果是对象
                    isObject(value) && _this.observe(data, prop, value)
                }
            }
        })

        // 递归绑定
        isObject(value) && this.observe(value)
    }
}

export default Observer;
