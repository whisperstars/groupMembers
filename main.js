
addEvent(window, 'load', function() {
    var members_group_view = new MembersGroupView(document.getElementById('group')),
        members_group = new MembersGroup();

    members_group.addMember(new Member('Дмитрий'));
    members_group.addMember(new Member('Андрей'));
    members_group.addMember(new Member('Богдан'));
    members_group.addMember(new Member('Юлия'));
    members_group.addMember(new Member('Роксолана'));
    members_group.addMember(new Member('Георг'));
    members_group.addMember(new Member('Сергей'));
    members_group.addMember(new Member('Артем'));

    members_group_view.setMembersGroup(members_group).render();
});