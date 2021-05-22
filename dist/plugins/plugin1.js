"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Plugin1 = /** @class */ (function () {
    function Plugin1() {
        this.pluginName = "EmailPlugin";
    }
    Plugin1.prototype.sendEmail = function (email, subject, message) {
        console.log("Email: " + email + "\n                Subject: " + subject + "\n                Message; " + message);
    };
    return Plugin1;
}());
exports.default = Plugin1;
//# sourceMappingURL=plugin1.js.map