<template>
  <div @touchstart="gtouchstart" @touchend="gtouchend" class="mobile-org">
    <!-- 上方搜索栏 -->
    <div class="search">
      <!-- 搜索form -->
      <form action="javascript:return true" class="search-form">
        <!-- 搜索输入框 -->
        <input
          type="search"
          :placeholder="searchPlaceholder"
          v-model="searchKey"
          @input="handleSearch"
          @compositionstart="handleComposionstart"
          @compositionend="handleComposionend"
        />
        <!-- 清空搜索按钮 -->
        <button
          type="button"
          class="clear-search-key-btn"
          @click="clearSearchKey"
          v-if="isShowClearBtn && searchKey"
          aria-label="清空搜索"
        >
          ×
        </button>
      </form>
    </div>
    <!-- 下方内容显示区 -->
    <div class="org-content">
      <!--  面包屑导航 -->
      <div class="org-content__current">
        <!-- 导航区 -->
        <div class="org-content__current__nav">
          <button
            type="button"
            class="breadcrumb-btn"
            @click="handleCurrentListClick(-1)"
          >
            全部
          </button>
          <button
            type="button"
            class="breadcrumb-btn"
            v-for="(item, index) in currentData"
            :key="index"
            @click="handleCurrentListClick(index)"
          >
            {{ item[label] }}
          </button>
        </div>
        <slot name="switch-show-type-btn" :showType="showType">
          <!-- 切换按钮 -->
          <div class="org-content__current__switchBtn">
            <!-- 角色 / 组织  切换 -->
            <button @click="switchShowType" class="btn">
              {{ showType == "org" ? orgText : roleText }}
            </button>
          </div>
        </slot>
      </div>
      <!-- 内容显示区 -->
      <div class="org-content__warp">
        <ul class="org-content__ul">
          <template v-if="isLoading">
            <li class="empty">
              <small>{{ loadingText }}</small>
            </li>
          </template>
          <template v-else-if="loadError">
            <li class="empty">
              <small>{{ loadErrorText }}</small>
              <button
                v-if="enableRetry && lastLoadAction"
                type="button"
                class="retry-btn"
                @click="retryLastLoad"
              >
                {{ retryText }}
              </button>
            </li>
          </template>
          <template v-else-if="renderData.length > 0">
            <slot name="content-area" :renderData="renderData">
              <li
                class="org-content__item"
                v-for="item in renderData"
                :key="item[nodeKey]"
              >
                <!-- 复选框 -->
                <input
                  v-if="selectTypes.includes(item.type)"
                  type="checkbox"
                  @click="handleItemClick(item)"
                  :checked="isChecked(item)"
                  name="check"
                  class="item-checkbox"
                  :style="{
                    'border-radius': checkboxStyle === 'square' ? '' : '50%',
                  }"
                />
                <!-- 头像 -->
                <img
                  v-if="isShowIcon"
                  @click="handleItemClick(item)"
                  class="avatar"
                  :style="{
                    visibility: item[icon] || defaultIcon ? '' : 'hidden',
                  }"
                  :src="item[icon] || defaultIcon"
                />
                <!--  名称显示 -->
                <span
                  @click="handleItemClick(item)"
                  class="org-content__item-text"
                >
                  {{ item[label] }}
                </span>
                <!-- 下级按钮 -->
                <button
                  type="button"
                  v-if="item.hasOwnProperty(children)"
                  @click="handleItemChildClick(item)"
                  class="org-content__item-child"
                  :disabled="isLoading"
                  aria-label="查看下级"
                >
                  >
                </button>
              </li>
            </slot>
          </template>
          <!-- 无数据提示:两种：1.数据源压根儿没数据 2.搜索结果没数据 -->
          <template v-else>
            <slot name="empty-tips">
              <li class="empty">
                <small
                  >暂无{{
                    searchKey ? `与 '${searchKey}' 相关` : ""
                  }}数据</small
                >
              </li>
            </slot>
          </template>
        </ul>
      </div>
      <div class="org-content__operation">
        <!-- 已选择项目 -->
        <slot name="selected-list" :selectedItems="selectedItems">
          <!--  已选择的项目列表 -->
          <div class="selected-item-list">
            <span
              class="seleted-item"
              v-for="(item, index) in selectedItems"
              :key="index"
            >
              {{ item[label] }}
              <i @click="delItem(item)" class="close-icon"></i>
            </span>
          </div>
        </slot>
        <!-- 已选数量及操作区 -->
        <div class="result-display">
          <slot name="result-area" :selectedItems="selectedItems">
            <div class="result-area__display">
              <span v-if="!selectedItems.length">暂无选择</span>
              <span v-if="selectedItems.length"
                >已选择 {{ selectedItems.length }} 项</span
              >
            </div>
            <div class="result-area__operation">
              <button type="button" class="cancel-btn" @click="handleCancel">
                {{ cancelText }}
              </button>
              <button type="button" class="submit-btn" @click="handleSubmit">
                {{ submitText }}
              </button>
            </div>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "MobileOrg",

  props: {
    // v-model support
    // When provided, this component becomes controlled by `value`.
    value: {
      type: Array,
      required: false,
    },

    data: {
      type: Array,
      default: () => [],
    },
    selectTypes: {
      type: Array,
      default: () => ["user", "org", "role"],
    },
    defaultIcon: {
      type: String,
      default: "",
    },

    label: {
      type: String,
      default: "name",
    },

    nodeKey: {
      type: String,
      default: "id",
    },

    children: {
      type: String,
      default: "children",
    },

    icon: {
      type: String,
      default: "avatar",
    },

    isShowClearBtn: {
      type: Boolean,
      default: true,
    },

    searchPlaceholder: {
      type: String,
      default: "搜索",
    },

    // search debounce delay (ms). 0 means no debounce.
    searchDebounce: {
      type: Number,
      default: 0,
    },

    submitText: {
      type: String,
      default: "提交",
    },

    cancelText: {
      type: String,
      default: "取消",
    },

    isShowIcon: {
      type: Boolean,
      default: false,
    },

    isMultiple: {
      type: Boolean,
      default: true,
    },

    isSelectRequired: {
      type: Boolean,
      default: true,
    },

    // When required selection is enabled and no items are selected,
    // emit on-submit-invalid and optionally show a native alert.
    invalidSelectText: {
      type: String,
      default: "未做任何选择，请选择后重试。",
    },

    useNativeAlert: {
      type: Boolean,
      default: false,
    },

    selectedList: {
      type: Array,
      default: () => [],
    },

    slideDistance: {
      type: Number,
      default: 100,
    },

    // 显示状态
    defaultShowType: {
      type: String,
      default: "org",
    },
    // 显示状态
    checkboxStyle: {
      type: String,
      default: "round",
    },

    orgText: {
      type: String,
      default: "组织",
    },

    roleText: {
      type: String,
      default: "角色",
    },

    // Optional async request handlers.
    // If provided, the component will manage loading/error state and rollback UI on failure.
    expandRequest: {
      type: Function,
      required: false,
    },

    navRequest: {
      type: Function,
      required: false,
    },

    loadingText: {
      type: String,
      default: "加载中...",
    },

    loadErrorText: {
      type: String,
      default: "加载失败",
    },

    retryText: {
      type: String,
      default: "重试",
    },

    enableRetry: {
      type: Boolean,
      default: true,
    },
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
      lastLoadAction: null,
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
        rollbackCurrentData,
      };

      this.$emit("on-load-start", { action, arg });

      try {
        await Promise.resolve(requestFn(arg));
        this.$emit("on-load-end", { action, arg });
      } catch (error) {
        if (typeof rollbackCurrentData === "function") {
          rollbackCurrentData();
        }
        this.loadError = error || new Error("load failed");
        this.$emit("on-load-error", { action, arg, error: this.loadError });
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
      const cloned = { ...row };
      if (cloned && Object.prototype.hasOwnProperty.call(cloned, this.children)) {
        delete cloned[this.children];
      }
      return cloned;
    },

    syncSelectedKeySet() {
      const next = new Set();
      (this.selectedItems || []).forEach((item) => {
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
        ...(meta || {}),
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
        action: "select",
      };
      // 多选
      if (this.isMultiple) {
        const data = this.normalizeSelectedItem(row);
        const key = data ? data[this.nodeKey] : null;
        const isExist = key != null && this.selectedKeySet.has(key);
        if (isExist) {
          meta.action = "deselect";
          // 存在当前项，则取消选择
          this.selectedItems = this.selectedItems.filter((res) => {
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

      await this.runAsyncRequest(
        "expand",
        this.expandRequest,
        row,
        () => {
          this.currentData = prevCurrentData;
        }
      );
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

        await this.runAsyncRequest(
          "nav",
          this.navRequest,
          this.currentData[index],
          () => {
            this.currentData = prevCurrentData;
          }
        );
      } else {
        this.currentData = [];
        this.$emit("on-nav", -1);

        await this.runAsyncRequest(
          "nav",
          this.navRequest,
          -1,
          () => {
            this.currentData = prevCurrentData;
          }
        );
      }
    },

    // 删除已选列表中的item
    delItem(data) {
      // console.log(data);
      this.selectedItems = this.selectedItems.filter((item) => {
        return item[this.nodeKey] !== data[this.nodeKey];
      });
      this.syncSelectedKeySet();
      this.emitSelectionChange({
        sourceItem: data,
        action: "delete",
      });
    },

    // 提交
    handleSubmit() {
      if (this.isSelectRequired && !this.selectedItems.length) {
        const payload = {
          reason: "required",
          message: this.invalidSelectText,
          selectedItems: this.selectedItems,
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
    },
  },

  watch: {
    defaultShowType: {
      handler(newVal, oldVal) {
        this.showType = newVal;
      },
      immediate: true,
    },

    value: {
      handler(val) {
        // If v-model is not used, `value` will be undefined.
        if (val === undefined) {
          return;
        }
        if (Array.isArray(val)) {
          this.selectedItems = val.map((item) => this.normalizeSelectedItem(item));
        } else {
          this.selectedItems = [];
        }
        this.syncSelectedKeySet();
      },
      immediate: true,
    },

    selectedList: {
      handler(val) {
        // v-model takes precedence when provided
        if (this.value !== undefined) {
          return;
        }
        if (Array.isArray(val)) {
          this.selectedItems = val.map((item) => this.normalizeSelectedItem(item));
        } else {
          this.selectedItems = [];
        }
        this.syncSelectedKeySet();
      },
      immediate: true,
    },

    // 监听父组件传来的值
    data: {
      handler(val) {
        this.renderData = val;
      },
      immediate: true,
    },
  },
};
</script>

<style scoped>
.mobile-org {
  position: absolute;
  inset: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  /* Theme tokens (override on the host element to customize) */
  --mo-font-size: 20px;
  --mo-font-size-sm: 15px;
  --mo-radius-pill: 25px;
  --mo-radius-sm: 4px;
  --mo-border-color: #eee;
  --mo-border-color-soft: #f7ecec;
  --mo-text-muted: #999;
  --mo-text-muted-strong: #808080;
  --mo-bg: #fff;
  --mo-primary: #5284ea;
  --mo-link: #409eff;
  --mo-checkbox-checked: #1673ff;
  --mo-action: #3c6eb7;
  --mo-selected-bg: #ecf5ff;
  --mo-selected-border: #d9ecff;
  --mo-selected-text: #409eff;
  --mo-clear-bg: rgb(214 190 190);
  --mo-clear-text: #fff;
}

.mobile-org * {
  box-sizing: border-box;
}

.mobile-org button {
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
}

.mobile-org button:focus-visible,
.mobile-org input[type="search"]:focus-visible {
  outline: 2px solid var(--mo-primary);
  outline-offset: 2px;
}

.mobile-org .search {
  display: flex;
  height: 40px;
  justify-content: space-between;
  margin-bottom: 10px;
}

.mobile-org .search .search-form {
  height: 100%;
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
}

input[type="search"] {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: var(--mo-radius-pill);
  border: 1px solid var(--mo-border-color-soft);
  text-align: center;
}

input[type="search"]::-webkit-search-cancel-button {
  display: none;
}

.clear-search-key-btn {
  line-height: 15px;
  position: absolute;
  right: 0px;
  margin-right: 10px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  text-align: center;
  background: var(--mo-clear-bg);
  color: var(--mo-clear-text);
  font-weight: 600;
  border: none;
  padding: 0;
  cursor: pointer;
}

.org-content * {
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: var(--mo-font-size);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.org-content {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid var(--mo-border-color);
  flex: 1;
  min-height: 0;
}

.org-content .org-content__current {
  display: flex;
  word-break: keep-all;
  font-size: 14px;
  /* padding: 0 10px; */
  flex: none;
  padding: 5px;
  align-items: center;
  box-shadow: 0px 0px 2px 2px var(--mo-border-color);
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  justify-content: space-between;
}

.org-content .org-content__current .breadcrumb-btn {
  background: transparent;
  border: none;
  padding: 0;
  font: inherit;
  color: inherit;
  cursor: pointer;
  position: relative;
  margin-right: 10px;
}

.org-content .org-content__current .breadcrumb-btn::after {
  display: block;
  position: absolute;
  content: "/";
  top: 0;
  right: -10px;
}

.org-content .org-content__current .breadcrumb-btn:last-child {
  color: var(--mo-text-muted-strong);
}

/* switch org/role button style */
.org-content .org-content__current .org-content__current__switchBtn .btn {
  border: 1px solid var(--mo-primary);
  border-radius: 5px;
  padding: 0 5px;
  background: var(--mo-bg);
  color: var(--mo-primary);
}
.org-content .org-content__current .breadcrumb-btn:last-child::after {
  display: none;
}

.org-content .org-content__warp {
  flex: 1;
  overflow-y: auto;
  border-top: 1px solid var(--mo-border-color);
  min-height: 0;
  -webkit-overflow-scrolling: touch;
}

.org-content .org-content__warp .empty {
  padding: 20px 0;
  color: var(--mo-text-muted);
  text-align: center;
}

.org-content .org-content__warp .empty .retry-btn {
  background: transparent;
  border: none;
  font: inherit;
  cursor: pointer;
  padding: 6px 10px;
  margin-left: 8px;
  color: var(--mo-action);
}

.org-content .org-content__warp .empty .retry-btn:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

.org-content .org-content__warp .org-content__ul {
  overflow: auto;
}
.org-content .org-content__warp .org-content__item {
  border-bottom: 1px solid var(--mo-border-color);
  height: 38px;
  margin: 0 10px;
  display: flex;
  align-items: center;
  padding: 8px 0;
  box-sizing: border-box;
}

.org-content .org-content__warp .org-content__item:last-child {
  border: none;
}

.org-content .org-content__warp .org-content__item:first-child {
  border-top: none;
}

/*复选框样式 */
.org-content .org-content__warp .org-content__item .item-checkbox:checked {
  background: var(--mo-checkbox-checked);
}

.org-content .org-content__warp .org-content__item .item-checkbox {
  width: 15px;
  height: 15px;
  background-color: var(--mo-bg);
  border: solid 1px #dddddd;
  font-size: 0.8rem;
  margin: 0 5px 0 0;
  padding: 0;
  position: relative;
  display: inline-block;
  vertical-align: top;
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
  -webkit-user-select: none;
  user-select: none;
  -webkit-transition: background-color ease 0.1s;
  transition: background-color ease 0.1s;
}

.org-content .org-content__warp .org-content__item .avatar {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 5px;
}

.org-content
  .org-content__warp
  .org-content__item
  .item-checkbox:checked::after {
  content: "";
  top: 3px;
  left: 2px;
  position: absolute;
  background: transparent;
  border: #fff solid 2px;
  border-top: none;
  border-right: none;
  height: 3px;
  width: 7px;
  -moz-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

.org-content .org-content__warp .org-content__item input {
  margin-right: 5px;
}

.org-content .org-content__warp .org-content__item .org-content__item-text {
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.org-content .org-content__warp .org-content__item .org-content__item-count {
  width: 45px;
  padding-right: 5px;
  text-align: center;
  color: var(--mo-text-muted);
}

.org-content .org-content__warp .org-content__item .org-content__item-child {
  padding: 0 8px;
  width: max-content;
  color: var(--mo-link);
  border-left: 1px solid var(--mo-border-color);
  box-sizing: border-box;
  cursor: pointer;
  font-weight: 600;
  background: transparent;
  border: none;
}

.org-content .org-content__operation {
  flex: none;
  padding-bottom: env(safe-area-inset-bottom);
}

.org-content .org-content__operation .result-display {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-top: 1px solid var(--mo-border-color-soft);
}

.org-content
  .org-content__operation
  .result-display
  .result-area__operation
  .cancel-btn {
  background: transparent;
  border: none;
  font: inherit;
  cursor: pointer;
  width: 40px;
  margin-right: 10px;
  padding: 0;
  color: var(--mo-action);
  text-align: center;
}

.org-content
  .org-content__operation
  .result-display
  .result-area__operation
  .submit-btn {
  background: transparent;
  border: none;
  font: inherit;
  cursor: pointer;
  width: 40px;
  padding: 0;
  color: var(--mo-action);
  text-align: center;
}
</style>
<style scoped>
.selected-item-list {
  height: 4rem;
  overflow: auto;
}

.seleted-item {
  background-color: var(--mo-selected-bg);
  display: inline-block;
  /* height: 1.3rem; */
  padding: 0 5px;
  line-height: 1.3rem;
  font-size: var(--mo-font-size-sm);
  color: var(--mo-selected-text);
  border: 1px solid var(--mo-selected-border);
  border-radius: 4px;
  box-sizing: border-box;
  white-space: nowrap;
  margin: 5px;
}

.close-icon:before {
  content: "\2716";
  font-size: xx-small;
  font-style: normal;
  opacity: 0.5;
}
</style>

<!-- less / scss -->
<!-- 为了通用型考虑暂时不启用 -->
<!-- <style lang="less" scoped> -->
<!-- 
<style lang="scss" scoped>
.org-content {
  height: 100%;
  display: flex;
  flex-direction: column;
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    font-size: 14px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .org-content__current {
    font-size: 14px;
    padding: 10px 0;
    box-shadow: 0px 0px 2px 2px #eee;
    span {
      position: relative;
      margin-right: 20px;
      &::after {
        display: block;
        position: absolute;
        content: "/";
        top: 0;
        right: -10px;
      }
      &:last-child {
        color: #808080;
        &::after {
          display: none;
        }
      }
    }
  }
  .org-content__warp {
    flex: 1;
    overflow-y: auto;
    border-top: 1px solid #eee;
    .empty {
      padding: 20px 0;
      color: #999;
      text-align: center;
    }
    .org-content__item {
      border-bottom: 1px solid #eee;
      height: 38px;
      margin: 0 10px;
      display: flex;
      align-items: center;
      padding: 8px 0;
      box-sizing: border-box;
      .org-content__item-text {
        flex: 1;
      }
      .org-content__item-count {
        width: 45px;
        padding-right: 5px;
        text-align: center;
        color: #999;
      }
      .org-content__item-child {
        padding: 0 8px;
        width: max-content;
        color: #409eff;
        border-left: 1px solid #eee;
        box-sizing: border-box;
        cursor: pointer;
      }
    }
  }
}
</style>
-->
