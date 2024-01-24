/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// main.ts
var main_exports = {};
__export(main_exports, {
  default: () => NotesDaterPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");
var NotesDaterPlugin = class extends import_obsidian.Plugin {
  async onload() {
    const statusBarCreatedOn = this.addStatusBarItem();
    const statusBarUpdatedOn = this.addStatusBarItem();
    this.setStatusBarDateValues(statusBarCreatedOn, statusBarUpdatedOn);
    this.registerEvent(
      this.app.workspace.on("active-leaf-change", async () => {
        this.setStatusBarDateValues(statusBarCreatedOn, statusBarUpdatedOn);
      })
    );
  }
  async onunload() {
  }
  setStatusBarDateValues(statusBarCreatedOn, statusBarUpdatedOn) {
    const activeView = this.app.workspace.getActiveViewOfType(import_obsidian.FileView);
    const activeFile = this.app.workspace.getActiveFile();
    if (activeView && activeFile) {
      const stats = activeFile == null ? void 0 : activeFile.stat;
      const createdDate = (0, import_obsidian.moment)(stats.ctime).format("DD MMM YYYY");
      const updatedDate = (0, import_obsidian.moment)(stats.mtime).format("DD MMM YYYY");
      statusBarCreatedOn.setText(`Created on: ${createdDate}`);
      statusBarUpdatedOn.setText(`Updated on: ${updatedDate}`);
    }
  }
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibWFpbi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgUGx1Z2luLCBtb21lbnQsIEZpbGVWaWV3IH0gZnJvbSAnb2JzaWRpYW4nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb3Rlc0RhdGVyUGx1Z2luIGV4dGVuZHMgUGx1Z2luIHtcbiAgYXN5bmMgb25sb2FkKCkge1xuXG4gICAgY29uc3Qgc3RhdHVzQmFyQ3JlYXRlZE9uID0gdGhpcy5hZGRTdGF0dXNCYXJJdGVtKCk7XG4gICAgY29uc3Qgc3RhdHVzQmFyVXBkYXRlZE9uID0gdGhpcy5hZGRTdGF0dXNCYXJJdGVtKCk7XG5cbiAgICAvLyBTZXQgaW5pdGlhbCB2YWx1ZXNcbiAgICB0aGlzLnNldFN0YXR1c0JhckRhdGVWYWx1ZXMoc3RhdHVzQmFyQ3JlYXRlZE9uLCBzdGF0dXNCYXJVcGRhdGVkT24pO1xuXG5cbiAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoXG4gICAgICB0aGlzLmFwcC53b3Jrc3BhY2Uub24oJ2FjdGl2ZS1sZWFmLWNoYW5nZScsIGFzeW5jICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0dXNCYXJEYXRlVmFsdWVzKHN0YXR1c0JhckNyZWF0ZWRPbiwgc3RhdHVzQmFyVXBkYXRlZE9uKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIGFzeW5jIG9udW5sb2FkKCkge1xuICB9XG5cbiAgc2V0U3RhdHVzQmFyRGF0ZVZhbHVlcyhzdGF0dXNCYXJDcmVhdGVkT24sIHN0YXR1c0JhclVwZGF0ZWRPbikge1xuICAgIGNvbnN0IGFjdGl2ZVZpZXcgPSB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0QWN0aXZlVmlld09mVHlwZShGaWxlVmlldyk7XG4gICAgY29uc3QgYWN0aXZlRmlsZSA9IHRoaXMuYXBwLndvcmtzcGFjZS5nZXRBY3RpdmVGaWxlKCk7XG4gICAgaWYgKGFjdGl2ZVZpZXcgJiYgYWN0aXZlRmlsZSkge1xuICAgICAgY29uc3Qgc3RhdHMgPSBhY3RpdmVGaWxlPy5zdGF0XG4gICAgICBjb25zdCBjcmVhdGVkRGF0ZSA9IG1vbWVudChzdGF0cy5jdGltZSkuZm9ybWF0KCdERCBNTU0gWVlZWScpO1xuICAgICAgY29uc3QgdXBkYXRlZERhdGUgPSBtb21lbnQoc3RhdHMubXRpbWUpLmZvcm1hdCgnREQgTU1NIFlZWVknKTtcbiAgICAgIHN0YXR1c0JhckNyZWF0ZWRPbi5zZXRUZXh0KGBDcmVhdGVkIG9uOiAke2NyZWF0ZWREYXRlfWApO1xuICAgICAgc3RhdHVzQmFyVXBkYXRlZE9uLnNldFRleHQoYFVwZGF0ZWQgb246ICR7dXBkYXRlZERhdGV9YCk7XG4gICAgfVxuICB9XG5cbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFBeUM7QUFFekMsSUFBcUIsbUJBQXJCLGNBQThDLHVCQUFPO0FBQUEsRUFDbkQsTUFBTSxTQUFTO0FBRWIsVUFBTSxxQkFBcUIsS0FBSyxpQkFBaUI7QUFDakQsVUFBTSxxQkFBcUIsS0FBSyxpQkFBaUI7QUFHakQsU0FBSyx1QkFBdUIsb0JBQW9CLGtCQUFrQjtBQUdsRSxTQUFLO0FBQUEsTUFDSCxLQUFLLElBQUksVUFBVSxHQUFHLHNCQUFzQixZQUFZO0FBQ3RELGFBQUssdUJBQXVCLG9CQUFvQixrQkFBa0I7QUFBQSxNQUNwRSxDQUFDO0FBQUEsSUFDSDtBQUFBLEVBQ0Y7QUFBQSxFQUVBLE1BQU0sV0FBVztBQUFBLEVBQ2pCO0FBQUEsRUFFQSx1QkFBdUIsb0JBQW9CLG9CQUFvQjtBQUM3RCxVQUFNLGFBQWEsS0FBSyxJQUFJLFVBQVUsb0JBQW9CLHdCQUFRO0FBQ2xFLFVBQU0sYUFBYSxLQUFLLElBQUksVUFBVSxjQUFjO0FBQ3BELFFBQUksY0FBYyxZQUFZO0FBQzVCLFlBQU0sUUFBUSx5Q0FBWTtBQUMxQixZQUFNLGtCQUFjLHdCQUFPLE1BQU0sS0FBSyxFQUFFLE9BQU8sYUFBYTtBQUM1RCxZQUFNLGtCQUFjLHdCQUFPLE1BQU0sS0FBSyxFQUFFLE9BQU8sYUFBYTtBQUM1RCx5QkFBbUIsUUFBUSxlQUFlLGFBQWE7QUFDdkQseUJBQW1CLFFBQVEsZUFBZSxhQUFhO0FBQUEsSUFDekQ7QUFBQSxFQUNGO0FBRUY7IiwKICAibmFtZXMiOiBbXQp9Cg==
