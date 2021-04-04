class LSystemConfig {

    /**
     * 
     * @type {string}
     */
    axiom = ''


    /**
     * 
     * @type {Object.<string,string>}
     */
    rules = {}

    /**
     * 
     * @param {string} axiom 
     * @param {Object.<string,string>} rules 
     */
    constructor(axiom, rules = []) {
        this.axiom = axiom
        this.rules = rules
    }
}

/**
 * @type {LSystemConfig}
 */
LSystemConfig.BTree = new LSystemConfig('X', {
    'X': 'F[-X][+X]'
})



export default LSystemConfig