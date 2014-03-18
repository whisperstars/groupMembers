function MembersGroupView(elem) {
    var members_group = new MembersGroup(),
        member_view = new MemberView();

    this.setMembersGroup = function(members_group_instance) {
        members_group = members_group_instance;

        return this;
    };

    this.setMemberView = function(member_view_instance) {
        member_view = member_view_instance;

        return this;
    };

    this.render = function() {
        var members = members_group.getMembers(),
            i;

        elem.innerHTML = '';

        for (i = 0; i < members.length; i++) {
            member_view.setMember(members[i]);
            elem.innerHTML += member_view.render();
        };
    };

    return this;
}