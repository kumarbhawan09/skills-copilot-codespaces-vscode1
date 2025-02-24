function skillsMember() {
    return {
    restrict: 'E', 
    templateUrl: 'views/skills-member.html',
    controller: 'SkillsMemberController',
    controllerAs: 'vm',
    bindToController: true,
    scope: {
      member: '='   

    }
    };
}