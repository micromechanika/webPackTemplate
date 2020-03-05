module.exports = class Test {
    constructor() {
        this.msg = "Using ES2015+ syntax";
        this.date = new Date();
    }

    get toString() {
        return JSON.stringify({
            message: this.msg,
            date: this.date.toJSON()
        }, null, 2)
    }
}

