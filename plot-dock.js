$(function () {
    $.widget("dock.plotDock", $.earthserver.dock, {
        options: {
            position: "right",
            toggleIcon: "images/icons/diagram(h100).png"
        },
        _create: function () {
            var self = this;
            this.element.addClass("plot-dock");
            this._super();
            this.element.append($("<span>", {class: "remove-plot"})
                .append($("<span>", {class: "remove-plot-icon glyphicon glyphicon-remove-circle"}))
                .click(function() {
                    self.close();
                    self.plotPanel.empty();
                }));
            this.dockToggleIconWrapper.append(
                $("<img>", {class: "dock-toggle-icon", src: this.options.toggleIcon})
            );
            this.plotPanel = this.addEmptyPanel();
        }
    })
});