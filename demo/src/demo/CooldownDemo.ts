declare var window: any
export default class CooldownDemo {
    private _view: fgui.GComponent;
    private _btn0: fgui.GProgressBar;
    private _btn1: fgui.GProgressBar;

    constructor() {
        // fgui.UIPackage.loadPackage("res/UI/Cooldown", Laya.Handler.create(this, this.onUILoaded));
        if (window.engine) {
            // 加载微信小游戏pro的3d场景
            window.engine.loader.load('engineTutorial/layaFairyGUITutorial/wxEngineAssets/game3d.scene').promise.then(function (scene) {
                // 播放微信小游戏pro的3d场景
                window.engine.game.playScene(scene)
            })

            // 加载微信小游戏pro的2d场景
            window.engine.loader.load('engineTutorial/layaFairyGUITutorial/wxEngineAssets/game2d.scene').promise.then(function (scene) {
                // 播放微信小游戏pro的3d场景
                window.engine.game.playScene(scene)
            })
        }
    }

    onUILoaded() {
        // this._view = fgui.UIPackage.createObject("Cooldown", "Main").asCom;
        // this._view.makeFullScreen();
        // fgui.GRoot.inst.addChild(this._view);

        // this._btn0 = this._view.getChild("b0").asProgress;
        // this._btn1 = this._view.getChild("b1").asProgress;
        // this._btn0.getChild("icon").icon = "res/icons/k0.png";
        // this._btn1.getChild("icon").icon = "res/icons/k1.png";

        // fgui.GTween.to(0, 100, 5).setTarget(this._btn0, "value").setRepeat(-1);
        // fgui.GTween.to(10, 0, 10).setTarget(this._btn1, "value").setRepeat(-1);
    }

    destroy() {
        if (window.engine) {
            // 清除微信小游戏pro的3d场景
            window.engine.game.clearScene(true, false)
        }
    }
}
