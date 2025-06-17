/* ------------------------------------------------------------
 * 文件名称: xiaohongshu_v8.82.js
 * 功能描述：小红书搜索页优化;
 * 版本要求：小红书_v8.82;
 * ------------------------------------------------------------ */


/**
 *  定义全局配置
 */
define("version", "10.0.u2069324");
define("resolution", "1080 * 1920");
define("requireVersion", "3.4.0");

var device = Device.searchObject(sigmaConst.DevSelectOne);
if (!device) throw "Can not find device";
var deviceName = device.name;

var logEntries = [];
var lockPath = "C:/log/lock.xlsx";
var directoryPath = "C:/Lock/lockpath";
var fs = require("fs");

var UI_MAP = {
    SEARCH_ICON: "C:.Button&&R:.hnh",
    SEARCH_TEXT: "C:.Button&&R:.fbe",
    SEARCHPAGE_TITLE: "C:.TextView&&R:/.g9j|.j4/&&ST:YX",
    IMAGE_TITLE: "C:.TextView&&R:.g9l",
    IMAGE_BACK: "C:.Button&&R:.a2q",
    VIDEO_BACK: "C:.ImageView&&R:.fzk",
    NET_BUTTON: "C:.Button&&R:.f55",
    DISCOVER_IDS: "C:.ImageView&&R:.e77"
};