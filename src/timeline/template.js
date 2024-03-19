/**
 *  Sample for Timeline template
 */
this.default = function () {
    var gitHubRoadmap = [
        { icon: "sf-icon-commit", message: "Created 10 commits in 5 repositories" },
        { icon: "sf-icon-create", message: "Created 1 repository" },
        { icon: "sf-icon-pull", message: "Created a pull request in <u>organization/new-control-roadmap</u>" },
        { icon: "sf-icon-review", message: "Reviewed 3 pull requests in 2 repositories" }
    ];

    var timelineItems = gitHubRoadmap.map(function(item) {
        return {
            dotCss: item.icon,
            content: item.message
        };
    });
    
    var templateTimeline = new ej.layouts.Timeline({
        items: timelineItems,
        cssClass: 'custom-timeline',
        template: '#custom-template'
    });
    templateTimeline.appendTo('#template');
};