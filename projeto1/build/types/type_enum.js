"use strict";
var DesignColors;
(function (DesignColors) {
    DesignColors["white"] = "#fff";
    DesignColors["black"] = "#000";
    DesignColors["red"] = "#f00";
    DesignColors["green"] = "#0f0";
    DesignColors["blue"] = "#00f";
})(DesignColors || (DesignColors = {}));
console.log(DesignColors.red);
var statusPermission;
(function (statusPermission) {
    statusPermission[statusPermission["ADMIN"] = 0] = "ADMIN";
    statusPermission[statusPermission["USER"] = 1] = "USER";
    statusPermission[statusPermission["SUPPORT"] = 2] = "SUPPORT";
})(statusPermission || (statusPermission = {}));
console.log(statusPermission.ADMIN, statusPermission.USER, statusPermission.SUPPORT);
