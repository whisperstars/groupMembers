function MembersGroup() {
    var members = [];

    this.addMember = function(member_instance) {
        members.push(member_instance);

        return this;
    };

    this.removeMember = function(id) {
        members.splice(id, 1);
    };

    this.getMembers = function() {
        return members;
    };

    return this;
}