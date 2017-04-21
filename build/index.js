'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _flatpickr = require('flatpickr');

var _flatpickr2 = _interopRequireDefault(_flatpickr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DateTimePicker = function (_Component) {
  _inherits(DateTimePicker, _Component);

  function DateTimePicker() {
    _classCallCheck(this, DateTimePicker);

    return _possibleConstructorReturn(this, (DateTimePicker.__proto__ || Object.getPrototypeOf(DateTimePicker)).apply(this, arguments));
  }

  _createClass(DateTimePicker, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      if (props.hasOwnProperty('value')) {
        this.flatpickr.setDate(props.value, false);
      }

      var optionsKeys = Object.getOwnPropertyNames(props.options);

      for (var index = optionsKeys.length - 1; index >= 0; index--) {
        var key = optionsKeys[index];
        this.flatpickr.set(key, props.options[key]);
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var options = _extends({}, this.props.options, {
        onChange: this.props.onChange
      });

      this.flatpickr = new _flatpickr2.default(this.node, options);

      if (this.props.hasOwnProperty('value')) {
        this.flatpickr.setDate(this.props.value, false);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.flatpickr.destroy();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      // ignore onChange
      // eslint-disable-next-line no-unused-vars
      var _props = this.props,
          onChange = _props.onChange,
          options = _props.options,
          defaultValue = _props.defaultValue,
          value = _props.value,
          children = _props.children,
          props = _objectWithoutProperties(_props, ['onChange', 'options', 'defaultValue', 'value', 'children']);

      return options.wrap ? _react2.default.createElement(
        'div',
        _extends({}, props, { ref: function ref(node) {
            _this2.node = node;
          } }),
        children
      ) : _react2.default.createElement('input', _extends({}, props, { defaultValue: defaultValue,
        ref: function ref(node) {
          _this2.node = node;
        } }));
    }
  }]);

  return DateTimePicker;
}(_react.Component);

DateTimePicker.propTypes = {
  defaultValue: _propTypes2.default.string,
  options: _propTypes2.default.object,
  onChange: _propTypes2.default.func,
  value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array, _propTypes2.default.object]),
  children: _propTypes2.default.node
};
DateTimePicker.defaultProps = {
  options: {}
};
exports.default = DateTimePicker;