function MemberView() {
    var member;

    this.render = function() {
        return '<li class="member">' + member.get('name') + '</li>';
    };

    this.setMember = function(member_instance) {
        member = member_instance;

        return this;
    };

    return this;
}