
import Mvvm from './lib/index'


new Mvvm({
    el: '#app',
    data () {
        return {
            who: {
                name: '血饮狂刀',
                age: 1000
            },
            manager: '步惊云'
        }
    },

    methods: {
        onSubmit () {
            this.manager = '聂风'
        }
    }
})
