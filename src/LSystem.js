import LSystemConfig from './LSystemConfig'

class LSystem {

    /**
     * @private
     * @type {LSystemConfig}
     */
    config = null

    state = ''

    iteration = 0

    /**
     * 
     * @param {LSystemConfig} config 
     */
    constructor(config) {
        this.config = config
        this.state += config.axiom
    }

    iterate() {
        let sequence = ''
        for (let rule of this.state.split('')) {
            let resolved = this.config.rules[rule]
            if (typeof resolved !== 'string') {
                sequence += rule
                continue
            }
            sequence += resolved
        }
        ++this.iteration
        this.state = sequence
        return sequence
    }
}

export default LSystem