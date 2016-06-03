var widgets = require("jupyter-js-widgets");
var _ = require("underscore");
var React = require("react");
var ReactDOM = require("react-dom");
var SampleWidget = require("./widgets/SampleWidget").default;

// Custom Model. Custom widgets models must at least provide default values
// for model attributes, including `_model_name`, `_view_name`, `_model_module`
// and `_view_module` when different from the base class.
//
// When serialiazing entire widget state for embedding, only values different from the
// defaults will be specified.
var HelloModel = widgets.DOMWidgetModel.extend({
  defaults: _.extend({}, widgets.DOMWidgetModel.prototype.defaults, {
    _model_name : "HelloModel",
    _view_name : "HelloView",
    _model_module : "jupyter-react-widgets",
    _view_module : "jupyter-react-widgets",
    value : "Hello World"
  })
});

var sampleWidget;

// Custom View. Renders the widget model.
var HelloView = widgets.DOMWidgetView.extend({
  render: function() {
    sampleWidget = ReactDOM.render(<SampleWidget/>, this.el);
    this.value_changed();
    this.model.on("change:value", this.value_changed, this);
  },

  value_changed: function() {
    sampleWidget.value = this.model.get("value");
  }
});

module.exports = {
  HelloModel : HelloModel,
  HelloView : HelloView
};
