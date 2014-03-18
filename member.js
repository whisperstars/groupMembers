function Member(name) {
    var info = {
            'name': ''
        };

    function start() {
        this.set('name', name);
    }

    this.set = function(property, value) {
        if(info[property] !== undefined) {
            info[property] = value;
        }

        return this;
    };

    this.get = function(property) {
        if(info[property] !== undefined) {
            return info[property];
        }
    };

    start.call(this);

    return this;
}