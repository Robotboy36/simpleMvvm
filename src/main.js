
import Mvvm from './lib/index'


new Mvvm({
    el: '#app',
    data () {
        return {
            who: {
                name: '血饮狂刀',
                age: 1000
            },
            manager: '步惊云',
            boss: '雄霸',
            inputType: 'password',
            index: 0
        }
    },

    methods: {
        onClick () {
            this.manager = '聂风:' + this.index
            this.index++
            this.inputType = this.index % 2 ? 'text' : 'password'
        }
    }
})
