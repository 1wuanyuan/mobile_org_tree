(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mobile-org"] = factory();
	else
		root["mobile-org"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "0b0d":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "529e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileOrg_vue_vue_type_style_index_0_id_8563526a_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0b0d");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileOrg_vue_vue_type_style_index_0_id_8563526a_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileOrg_vue_vue_type_style_index_0_id_8563526a_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "b5ce":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileOrg_vue_vue_type_style_index_1_id_8563526a_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d46d");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileOrg_vue_vue_type_style_index_1_id_8563526a_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileOrg_vue_vue_type_style_index_1_id_8563526a_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "d46d":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4a22769c-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MobileOrg/MobileOrg.vue?vue&type=template&id=8563526a&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "mobile-org",
    on: {
      "touchstart": _vm.gtouchstart,
      "touchend": _vm.gtouchend
    }
  }, [_c('div', {
    staticClass: "search"
  }, [_c('form', {
    staticClass: "search-form",
    attrs: {
      "action": "javascript:return true"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.searchKey,
      expression: "searchKey"
    }],
    attrs: {
      "type": "search",
      "placeholder": _vm.searchPlaceholder
    },
    domProps: {
      "value": _vm.searchKey
    },
    on: {
      "input": [function ($event) {
        if ($event.target.composing) return;
        _vm.searchKey = $event.target.value;
      }, _vm.handleSearch],
      "compositionstart": _vm.handleComposionstart,
      "compositionend": _vm.handleComposionend
    }
  }), _vm.isShowClearBtn && _vm.searchKey ? _c('button', {
    staticClass: "clear-search-key-btn",
    attrs: {
      "type": "button",
      "aria-label": "清空搜索"
    },
    on: {
      "click": _vm.clearSearchKey
    }
  }, [_vm._v(" × ")]) : _vm._e()])]), _c('div', {
    staticClass: "org-content"
  }, [_c('div', {
    staticClass: "org-content__current"
  }, [_c('div', {
    staticClass: "org-content__current__nav"
  }, [_c('button', {
    staticClass: "breadcrumb-btn",
    attrs: {
      "type": "button"
    },
    on: {
      "click": function ($event) {
        return _vm.handleCurrentListClick(-1);
      }
    }
  }, [_vm._v(" 全部 ")]), _vm._l(_vm.currentData, function (item, index) {
    return _c('button', {
      key: index,
      staticClass: "breadcrumb-btn",
      attrs: {
        "type": "button"
      },
      on: {
        "click": function ($event) {
          return _vm.handleCurrentListClick(index);
        }
      }
    }, [_vm._v(" " + _vm._s(item[_vm.label]) + " ")]);
  })], 2), _vm._t("switch-show-type-btn", function () {
    return [_c('div', {
      staticClass: "org-content__current__switchBtn"
    }, [_c('button', {
      staticClass: "btn",
      on: {
        "click": _vm.switchShowType
      }
    }, [_vm._v(" " + _vm._s(_vm.showType == "org" ? _vm.orgText : _vm.roleText) + " ")])])];
  }, {
    "showType": _vm.showType
  })], 2), _c('div', {
    staticClass: "org-content__warp"
  }, [_c('ul', {
    staticClass: "org-content__ul"
  }, [_vm.isLoading ? [_c('li', {
    staticClass: "empty"
  }, [_c('small', [_vm._v(_vm._s(_vm.loadingText))])])] : _vm.loadError ? [_c('li', {
    staticClass: "empty"
  }, [_c('small', [_vm._v(_vm._s(_vm.loadErrorText))]), _vm.enableRetry && _vm.lastLoadAction ? _c('button', {
    staticClass: "retry-btn",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.retryLastLoad
    }
  }, [_vm._v(" " + _vm._s(_vm.retryText) + " ")]) : _vm._e()])] : _vm.renderData.length > 0 ? [_vm._t("content-area", function () {
    return _vm._l(_vm.renderData, function (item) {
      return _c('li', {
        key: item[_vm.nodeKey],
        staticClass: "org-content__item"
      }, [_vm.selectTypes.includes(item.type) ? _c('input', {
        staticClass: "item-checkbox",
        style: {
          'border-radius': _vm.checkboxStyle === 'square' ? '' : '50%'
        },
        attrs: {
          "type": "checkbox",
          "name": "check"
        },
        domProps: {
          "checked": _vm.isChecked(item)
        },
        on: {
          "click": function ($event) {
            return _vm.handleItemClick(item);
          }
        }
      }) : _vm._e(), _vm.isShowIcon ? _c('img', {
        staticClass: "avatar",
        style: {
          visibility: item[_vm.icon] || _vm.defaultIcon ? '' : 'hidden'
        },
        attrs: {
          "src": item[_vm.icon] || _vm.defaultIcon
        },
        on: {
          "click": function ($event) {
            return _vm.handleItemClick(item);
          }
        }
      }) : _vm._e(), _c('span', {
        staticClass: "org-content__item-text",
        on: {
          "click": function ($event) {
            return _vm.handleItemClick(item);
          }
        }
      }, [_vm._v(" " + _vm._s(item[_vm.label]) + " ")]), item.hasOwnProperty(_vm.children) ? _c('button', {
        staticClass: "org-content__item-child",
        attrs: {
          "type": "button",
          "disabled": _vm.isLoading,
          "aria-label": "查看下级"
        },
        on: {
          "click": function ($event) {
            return _vm.handleItemChildClick(item);
          }
        }
      }, [_vm._v(" > ")]) : _vm._e()]);
    });
  }, {
    "renderData": _vm.renderData
  })] : [_vm._t("empty-tips", function () {
    return [_c('li', {
      staticClass: "empty"
    }, [_c('small', [_vm._v("暂无" + _vm._s(_vm.searchKey ? `与 '${_vm.searchKey}' 相关` : "") + "数据")])])];
  })]], 2)]), _c('div', {
    staticClass: "org-content__operation"
  }, [_vm._t("selected-list", function () {
    return [_c('div', {
      staticClass: "selected-item-list"
    }, _vm._l(_vm.selectedItems, function (item, index) {
      return _c('span', {
        key: index,
        staticClass: "seleted-item"
      }, [_vm._v(" " + _vm._s(item[_vm.label]) + " "), _c('i', {
        staticClass: "close-icon",
        on: {
          "click": function ($event) {
            return _vm.delItem(item);
          }
        }
      })]);
    }), 0)];
  }, {
    "selectedItems": _vm.selectedItems
  }), _c('div', {
    staticClass: "result-display"
  }, [_vm._t("result-area", function () {
    return [_c('div', {
      staticClass: "result-area__display"
    }, [!_vm.selectedItems.length ? _c('span', [_vm._v("暂无选择")]) : _vm._e(), _vm.selectedItems.length ? _c('span', [_vm._v("已选择 " + _vm._s(_vm.selectedItems.length) + " 项")]) : _vm._e()]), _c('div', {
      staticClass: "result-area__operation"
    }, [_c('button', {
      staticClass: "cancel-btn",
      attrs: {
        "type": "button"
      },
      on: {
        "click": _vm.handleCancel
      }
    }, [_vm._v(" " + _vm._s(_vm.cancelText) + " ")]), _c('button', {
      staticClass: "submit-btn",
      attrs: {
        "type": "button"
      },
      on: {
        "click": _vm.handleSubmit
      }
    }, [_vm._v(" " + _vm._s(_vm.submitText) + " ")])])];
  }, {
    "selectedItems": _vm.selectedItems
  })], 2)], 2)])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/MobileOrg/MobileOrg.vue?vue&type=template&id=8563526a&scoped=true

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MobileOrg/MobileOrg.vue?vue&type=script&lang=js
/* harmony default export */ var MobileOrgvue_type_script_lang_js = ({
  name: "MobileOrg",
  props: {
    // v-model support
    // When provided, this component becomes controlled by `value`.
    value: {
      type: Array,
      required: false
    },
    data: {
      type: Array,
      default: () => []
    },
    selectTypes: {
      type: Array,
      default: () => ["user", "org", "role"]
    },
    defaultIcon: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: "name"
    },
    nodeKey: {
      type: String,
      default: "id"
    },
    children: {
      type: String,
      default: "children"
    },
    icon: {
      type: String,
      default: "avatar"
    },
    isShowClearBtn: {
      type: Boolean,
      default: true
    },
    searchPlaceholder: {
      type: String,
      default: "搜索"
    },
    // search debounce delay (ms). 0 means no debounce.
    searchDebounce: {
      type: Number,
      default: 0
    },
    submitText: {
      type: String,
      default: "提交"
    },
    cancelText: {
      type: String,
      default: "取消"
    },
    isShowIcon: {
      type: Boolean,
      default: false
    },
    isMultiple: {
      type: Boolean,
      default: true
    },
    isSelectRequired: {
      type: Boolean,
      default: true
    },
    // When required selection is enabled and no items are selected,
    // emit on-submit-invalid and optionally show a native alert.
    invalidSelectText: {
      type: String,
      default: "未做任何选择，请选择后重试。"
    },
    useNativeAlert: {
      type: Boolean,
      default: false
    },
    selectedList: {
      type: Array,
      default: () => []
    },
    slideDistance: {
      type: Number,
      default: 100
    },
    // 显示状态
    defaultShowType: {
      type: String,
      default: "org"
    },
    // 显示状态
    checkboxStyle: {
      type: String,
      default: "round"
    },
    orgText: {
      type: String,
      default: "组织"
    },
    roleText: {
      type: String,
      default: "角色"
    },
    // Optional async request handlers.
    // If provided, the component will manage loading/error state and rollback UI on failure.
    expandRequest: {
      type: Function,
      required: false
    },
    navRequest: {
      type: Function,
      required: false
    },
    loadingText: {
      type: String,
      default: "加载中..."
    },
    loadErrorText: {
      type: String,
      default: "加载失败"
    },
    retryText: {
      type: String,
      default: "重试"
    },
    enableRetry: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      // 当前数据
      currentData: [],
      // 已选择的数据集合
      selectedItems: [],
      // Fast lookup for selected items by nodeKey
      selectedKeySet: new Set(),
      // 用来渲染的数据源
      renderData: [],
      // 搜索关键词
      searchKey: "",
      // 鼠标按下时候的初始 x 坐标
      startX: 0,
      showType: "",
      isTyping: false,
      searchDebounceTimer: null,
      // Async load state (used only when expandRequest/navRequest are provided)
      isLoading: false,
      loadError: null,
      lastLoadAction: null
    };
  },
  mounted() {
    this.renderData = this.data;
  },
  methods: {
    async runAsyncRequest(action, requestFn, arg, rollbackCurrentData) {
      if (typeof requestFn !== "function") {
        return;
      }
      if (this.isLoading) {
        return;
      }
      this.isLoading = true;
      this.loadError = null;
      this.lastLoadAction = {
        action,
        arg,
        rollbackCurrentData
      };
      this.$emit("on-load-start", {
        action,
        arg
      });
      try {
        await Promise.resolve(requestFn(arg));
        this.$emit("on-load-end", {
          action,
          arg
        });
      } catch (error) {
        if (typeof rollbackCurrentData === "function") {
          rollbackCurrentData();
        }
        this.loadError = error || new Error("load failed");
        this.$emit("on-load-error", {
          action,
          arg,
          error: this.loadError
        });
      } finally {
        this.isLoading = false;
      }
    },
    retryLastLoad() {
      const last = this.lastLoadAction;
      if (!last) {
        return;
      }
      const fn = last.action === "expand" ? this.expandRequest : this.navRequest;
      this.runAsyncRequest(last.action, fn, last.arg, last.rollbackCurrentData);
    },
    normalizeSelectedItem(row) {
      if (!row || typeof row !== "object") {
        return row;
      }
      const cloned = {
        ...row
      };
      if (cloned && Object.prototype.hasOwnProperty.call(cloned, this.children)) {
        delete cloned[this.children];
      }
      return cloned;
    },
    syncSelectedKeySet() {
      const next = new Set();
      (this.selectedItems || []).forEach(item => {
        if (item && item[this.nodeKey] != null) {
          next.add(item[this.nodeKey]);
        }
      });
      this.selectedKeySet = next;
    },
    emitSelectionChange(meta) {
      // v-model
      this.$emit("input", this.selectedItems);
      // selectedList.sync (optional convenience)
      this.$emit("update:selectedList", this.selectedItems);

      // Standard change event (library-style)
      this.$emit("change", {
        selectedItems: this.selectedItems,
        ...(meta || {})
      });
    },
    // 手指按下
    gtouchstart(e) {
      // // 获取x 坐标
      // e.targetTouches[0].clientX;
      // // 获取y 坐标
      // e.targetTouches[0].clientX;
      this.startX = e.targetTouches[0].clientX;
    },
    // 手指松开
    gtouchend(e) {
      // window.console.log("手指松开啦", e);
      if (e.changedTouches[0].clientX - this.startX >= this.slideDistance) {
        // console.log("移动距离大于" + this.slideDistance, this.currentData);
        const targetIndex = this.currentData.length - 2;
        this.handleCurrentListClick(targetIndex >= 0 ? targetIndex : -1);
        this.$emit("on-slide");
      }
    },
    // 切换组织/角色
    switchShowType() {
      if (this.isLoading) {
        return;
      }
      switch (this.showType) {
        case "org":
          this.showType = "role";
          this.currentData = [];
          this.searchKey = "";
          break;
        case "role":
          this.showType = "org";
          this.currentData = [];
          this.searchKey = "";
          break;
        default:
          break;
      }
      this.$emit("on-switch-show-type", this.showType);
    },
    // 是否显示选中状态
    isChecked(data) {
      if (!data) {
        return false;
      }
      return this.selectedKeySet.has(data[this.nodeKey]);
    },
    // 点击选项
    handleItemClick(row) {
      if (this.isLoading) {
        return;
      }
      if (!this.selectTypes.includes(row.type)) {
        return;
      }
      const meta = {
        sourceItem: row,
        action: "select"
      };
      // 多选
      if (this.isMultiple) {
        const data = this.normalizeSelectedItem(row);
        const key = data ? data[this.nodeKey] : null;
        const isExist = key != null && this.selectedKeySet.has(key);
        if (isExist) {
          meta.action = "deselect";
          // 存在当前项，则取消选择
          this.selectedItems = this.selectedItems.filter(res => {
            return res[this.nodeKey] !== key;
          });
        } else {
          // 不存在当前项，则将其加入到所选列表中
          this.selectedItems.push(data);
        }
      } else {
        meta.action = "select";
        // 单选
        this.selectedItems = [];
        this.selectedItems.push(this.normalizeSelectedItem(row));
      }
      this.syncSelectedKeySet();
      this.emitSelectionChange(meta);
      this.$emit("on-select", row);
    },
    // 点击下级按钮获取下级目录及人员
    async handleItemChildClick(row) {
      if (this.isLoading) {
        return;
      }
      const prevCurrentData = this.currentData.slice();
      this.currentData.push(row);
      this.$emit("on-expand", row);
      await this.runAsyncRequest("expand", this.expandRequest, row, () => {
        this.currentData = prevCurrentData;
      });
    },
    // 点击面包屑导航触发
    async handleCurrentListClick(index) {
      if (this.isLoading) {
        return;
      }

      // index == -1 means "全部"
      // Clicking current breadcrumb should be a no-op.
      if (index === this.currentData.length - 1) {
        return;
      }

      // Clicking "全部" when already at root should be a no-op.
      if (index === -1 && this.currentData.length === 0) {
        return;
      }
      this.searchKey = "";
      const prevCurrentData = this.currentData.slice();
      if (index > -1) {
        this.currentData = this.currentData.slice(0, index + 1);
        this.$emit("on-nav", this.currentData[index]);
        await this.runAsyncRequest("nav", this.navRequest, this.currentData[index], () => {
          this.currentData = prevCurrentData;
        });
      } else {
        this.currentData = [];
        this.$emit("on-nav", -1);
        await this.runAsyncRequest("nav", this.navRequest, -1, () => {
          this.currentData = prevCurrentData;
        });
      }
    },
    // 删除已选列表中的item
    delItem(data) {
      // console.log(data);
      this.selectedItems = this.selectedItems.filter(item => {
        return item[this.nodeKey] !== data[this.nodeKey];
      });
      this.syncSelectedKeySet();
      this.emitSelectionChange({
        sourceItem: data,
        action: "delete"
      });
    },
    // 提交
    handleSubmit() {
      if (this.isSelectRequired && !this.selectedItems.length) {
        const payload = {
          reason: "required",
          message: this.invalidSelectText,
          selectedItems: this.selectedItems
        };
        this.$emit("on-submit-invalid", payload);
        if (this.useNativeAlert) {
          alert(this.invalidSelectText);
        }
        return;
      }
      // 触发父组件绑定事件，将值传回去
      this.$emit("on-submit", this.selectedItems);
    },
    // 取消
    handleCancel() {
      this.$emit("on-cancel");
    },
    // 开始搜索
    handleSearch() {
      if (this.isTyping) {
        return;
      }
      const emitSearch = () => {
        this.$emit("on-search", this.searchKey.trim());
      };
      if (!this.searchDebounce) {
        emitSearch();
        return;
      }
      if (this.searchDebounceTimer) {
        clearTimeout(this.searchDebounceTimer);
      }
      this.searchDebounceTimer = setTimeout(emitSearch, this.searchDebounce);
    },
    // 输入中文ing
    handleComposionstart() {
      this.isTyping = true;
    },
    // 输入中文end
    handleComposionend() {
      this.isTyping = false;
    },
    // 清楚搜索
    clearSearchKey() {
      if (this.isLoading) {
        return;
      }
      this.searchKey = "";
      this.$emit("on-clear");
    }
  },
  watch: {
    defaultShowType: {
      handler(newVal, oldVal) {
        this.showType = newVal;
      },
      immediate: true
    },
    value: {
      handler(val) {
        // If v-model is not used, `value` will be undefined.
        if (val === undefined) {
          return;
        }
        if (Array.isArray(val)) {
          this.selectedItems = val.map(item => this.normalizeSelectedItem(item));
        } else {
          this.selectedItems = [];
        }
        this.syncSelectedKeySet();
      },
      immediate: true
    },
    selectedList: {
      handler(val) {
        // v-model takes precedence when provided
        if (this.value !== undefined) {
          return;
        }
        if (Array.isArray(val)) {
          this.selectedItems = val.map(item => this.normalizeSelectedItem(item));
        } else {
          this.selectedItems = [];
        }
        this.syncSelectedKeySet();
      },
      immediate: true
    },
    // 监听父组件传来的值
    data: {
      handler(val) {
        this.renderData = val;
      },
      immediate: true
    }
  }
});
// CONCATENATED MODULE: ./src/components/MobileOrg/MobileOrg.vue?vue&type=script&lang=js
 /* harmony default export */ var MobileOrg_MobileOrgvue_type_script_lang_js = (MobileOrgvue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/MobileOrg/MobileOrg.vue?vue&type=style&index=0&id=8563526a&prod&scoped=true&lang=css
var MobileOrgvue_type_style_index_0_id_8563526a_prod_scoped_true_lang_css = __webpack_require__("529e");

// EXTERNAL MODULE: ./src/components/MobileOrg/MobileOrg.vue?vue&type=style&index=1&id=8563526a&prod&scoped=true&lang=css
var MobileOrgvue_type_style_index_1_id_8563526a_prod_scoped_true_lang_css = __webpack_require__("b5ce");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/MobileOrg/MobileOrg.vue







/* normalize component */

var component = normalizeComponent(
  MobileOrg_MobileOrgvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "8563526a",
  null
  
)

/* harmony default export */ var MobileOrg = (component.exports);
// CONCATENATED MODULE: ./src/components/MobileOrg/index.js

const MobileOrg_MobileOrg = {
  install: function (Vue) {
    Vue.component("MobileOrg", MobileOrg);
  }
};
/* harmony default export */ var components_MobileOrg = (MobileOrg_MobileOrg);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (components_MobileOrg);



/***/ })

/******/ });
});