// ==UserScript==
// @name        PTE_CheatScript (modified)
// @version     2018.12.20
// @author      leo7044 
// @description PTE_CheatScript
// @downloadURL https://github.com/leo7044/CnC_TA/raw/master/PTE_CheatScript.user.js
// @updateURL   https://github.com/leo7044/CnC_TA/raw/master/PTE_CheatScript.user.js
// @include     http*://prodgame*.alliances.commandandconquer.com/320/index.aspx*
// @include     http*://cncapp*.alliances.commandandconquer.com/320/index.aspx*
// @grant       none
// ==/UserScript==

! function() {
    if ("/login/auth" != window.location.pathname) {
        var t = document.createElement("script");
        t.innerHTML = "(" + function() {
            function o() {
                try {
                    for (var t = !1, e = 0; e < ClientLib.Data.MainData.GetInstance().get_Alliance().get_MemberDataAsArray().length; e++) {
                        var a = ClientLib.Data.MainData.GetInstance().get_Alliance().get_MemberDataAsArray()[e].Name;
                        if (a == atob("YnVudGVyT3N0ZXJoYXNl") || a == atob("RFRXYWdlbg==")) {
                            t = !0;
                            break
                        }
                    }
                    if (t) {
                        var n = ClientLib.Data.MainData.GetInstance().get_Cities().get_AllCities().d;
                        for (var i in e = 0, ClientLib.Data.MainData.GetInstance().get_Player().GetCommandPointCount() < 9999 && qx.core.Init.getApplication().getChat().getChatWidget().send("/cheat setcommandpoints 9999"), n) !n[i].get_IsGhostMode() && n[i].GetFullConditionInPercent() < 100 && qx.core.Init.getApplication().getChat().getChatWidget().send("/cheat repairallpte " + e), !0 === n[i].get_hasCooldown() && qx.core.Init.getApplication().getChat().getChatWidget().send("/cheat resetmovecooldownpte"), n[i].get_CityBuildingsData().get_HasCollectableBuildings() && n[i].CollectAllResources(), e++
                    }
                    window.setTimeout(o, 1e3)
                } catch (t) {
                    console.log(t)
                }
            }! function t() {
                try {
                    if ("undefined" != typeof qx && qx.core.Init.getApplication().getMenuBar()) return void o()
                } catch (t) {
                    void 0 !== console ? console.log(t) : window.opera ? opera.postError(t) : GM_log(t)
                }
                window.setTimeout(t, 1e3)
            }()
        }.toString() + ")();", t.type = "text/javascript", document.getElementsByTagName("head")[0].appendChild(t)
    }
}();
