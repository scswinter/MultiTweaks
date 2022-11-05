/*:
 * @target MZ
 * @plugindesc [MultiTweaks] [v1.8.0] [General, map, zoom, battle, audio, options...]
 * @author ScSWinter (other contributors: Arthran)
 *
 * @help
 * =======================================================
 * Information
 * =======================================================
 * This script allows you to incorporate many improvements
 * to your game. Most of the options are self-explanatory.
 * In this section we will explain these features:
 *   - Enemies use actor classes (enemy notetag).
 *   - Map zoom (map notetag and event plugin command).
 *
 * -------------- Enemies use actor classes --------------
 * When activated the power of the enemies are scaled using
 * actor classes. Specify the actor class using in the enemy
 * notetag box the notetag
 *    EnemyRole:X
 * where X is the number of the actor class. If it's not
 * specified the default enemy stats will be used. Note
 * that, in order to allow boss-enemy types, the HP stat
 * is always multiplied by 10.
 *
 * ---------------------- Map zoom -----------------------
 * This script allows you to show maps with a default zoom.
 * When activated the zoom of the map changes. Specify the
 * map zoom using in the map notetag box the notetag
 *    Zoom:X
 * where X is a number greater than 1. If the notetag is not
 * specified the default zoom is the one at the options.
 *
 * You also have a [plugin command] usable in events to create
 * dinamically zoom effects. Note that enter in the menu will
 * reset the zoom to the map default one.
 *
 * Fixes by Arthran:
 * I have edited this plugin to fix the camera issue. It
 * is no longer necessary to use free camera with the zoom.
 * If the "Always Free Camera" option is set to "False",
 * then the camera will now behave normally when zoomed.
 * I have also fixed some bugs that were causing the camera
 * to potentially become increasingly un-centered during
 * map transfers. My edit has the same license (MIT) as the
 * original, so feel free to do whatever you want with it.
 *
 * ---- Compatibility with VisuStella Options Script ----
 * If you use VisuMZ Options Script, the options section of
 * this script won't work, but it won't interfere with the
 * VisuMZ Options Script. All changes to options must be done
 * from their script (and, as I know, all can be done).
 *
 * Optimization game option: If you use VisuMZ Options, you
 * need to add the option from their script using the symbol
 * optimGame. To do so, you can copy and modify an ON/OFF option.
 *
 * =======================================================
 * Credits
 * =======================================================
 * Please, credit to "ScSWinter" in the credits of your game.
 *
 * =======================================================
 * License: The MIT License
 * =======================================================
 * Copyright 2020 ScSWinter
 * This plugin is released under MIT license.
 * http://opensource.org/licenses/mit-license.php
 *
 *
 * @param --- General ---
 * @desc
 *
 * @param Start in fullscreen mode
 * @type boolean
 * @parent --- General ---
 * @on Yes
 * @off No
 * @desc Start in fullscreen mode? Only in nwjs.
 * @default true
 *
 * @param Optimize game
 * @type boolean
 * @parent --- General ---
 * @on Yes
 * @off No
 * @desc Render only half of computed frames to speedup
 * the game with almost no visible drawback.
 * @default true
 *
 * @param Add option (optimGame)
 * @type text
 * @parent Optimize game
 * @desc Leave it blank for not do it. If you use VisuMZ Options,
 * you need to add the option from their script.
 * @default Improve performance
 *
 * @param Effekseer frame skip
 * @type number
 * @parent Optimize game
 * @min 2
 * @max 999999
 * @desc % of frames skipped during Effekseer. 2 half, 3
 * one third, etc, 999999 to disable (default 2).
 * @default 2
 *
 * @param Battle frame skip
 * @type number
 * @parent Optimize game
 * @min 2
 * @max 999999
 * @desc % of frames skipped during Battle. 2 half, 3
 * one third, etc, 999999 to disable (default 3).
 * @default 3
 *
 * @param General frame skip
 * @type number
 * @parent Optimize game
 * @min 2
 * @max 999999
 * @desc % of frames skipped in general. 2 half, 3
 * one third, etc, 999999 to disable (default 6).
 * @default 6
 *
 * @param Blink selection effect
 * @type boolean
 * @parent --- General ---
 * @on Yes
 * @off No
 * @desc Show the blink selection effect?
 * @default false
 *
 * @param Disable F5 and F8
 * @type boolean
 * @parent --- General ---
 * @on Yes
 * @off No
 * @desc Disable F5 and F8 buttons?
 * @default true
 *
 * @param Disable FastFoward
 * @type boolean
 * @parent --- General ---
 * @on Yes
 * @off No
 * @desc Disable FastFoward?
 * @default true
 *
 * @param Disable scrollbars
 * @type boolean
 * @parent --- General ---
 * @on Yes
 * @off No
 * @desc Disable scrollbars?
 * @default true
 *
 * @param Pixel rendering
 * @parent --- General ---
 * @type boolean
 * @on Yes
 * @off No
 * @desc Render the entire game pixelated?
 * @default false
 *
 * @param Extreme pixel rendering
 * @parent Pixel rendering
 * @type boolean
 * @on Yes
 * @off No
 * @desc Render pixelated also fonts and windows?
 * @default false
 *
 * @param --- Map ---
 * @desc
 *
 * @param Tilemap animation speed
 * @type number
 * @parent --- Map ---
 * @min 1
 * @max 3
 * @desc Auto-tiles tilemap animation speed (default 2).
 * @default 2
 *
 * @param Default zoom for maps
 * @parent --- Map ---
 * @type number
 * @min 1.00
 * @max 9.00
 * @decimals 2
 * @desc The default zoom when none is specified as notetag.
 * @default 1
 *
 * @param Fix sprite black lines
 * @parent Default zoom for maps
 * @type boolean
 * @on Yes
 * @off No
 * @desc Fix sprite black lines? This option will cut the
 * sprites one pixel in each side.
 * @default true
 *
 * @param Fix map encounter zoom
 * @parent Default zoom for maps
 * @type boolean
 * @on Yes
 * @off No
 * @desc Fix map encounter zoom? Deactivate this option if
 * you changed the default encounter zoom effect.
 * @default true
 *
 * @param Always free camera
 * @type boolean
 * @parent --- Map ---
 * @on Yes
 * @off No
 * @desc When activated, the camera will never be blocked by
 * the edges of the map (as it works with the zoom on).
 * @default false
 *
 * @command Zoom
 * @text Zoom
 * @desc Custom. display and vanish without wait.
 *
 * @arg FramesToZoom
 * @text Frames to Zoom
 * @desc The number of frames needed to perform the zoom.
 * @type number
 * @default 1
 * @min 1
 * @max 300
 *
 * @arg ZoomValue
 * @text Zoom Value
 * @desc The zoom value that will be performed.
 * @type number
 * @min 1.00
 * @max 9.00
 * @decimals 2
 * @default 1.50
 *
 * @param --- Options ---
 * @desc
 *
 * @param Options ON text
 * @type text
 * @parent --- Options ---
 * @desc Text for ON, shown in options menu.
 * If you use VisuMZ Options Script it won't work.
 * @default Yes
 *
 * @param Options OFF text
 * @type text
 * @parent --- Options ---
 * @desc Text for OFF, shown in options menu.
 * If you use VisuMZ Options Script it won't work.
 * @default No
 *
 * @param Remove general options
 * @type string[]
 * @parent --- Options ---
 * @desc Remove options from the menu using their symbol.
 * If you use VisuMZ Options Script leave it in blank.
 * @default ["touchUI"]
 *
 * @param Default ON options
 * @type string[]
 * @parent --- Options ---
 * @desc Activate by default the options using their symbol.
 * If you use VisuMZ Options Script leave it in blank.
 * @default ["alwaysDash", "touchUI"]
 *
 * @param Default OFF options
 * @type string[]
 * @parent --- Options ---
 * @desc Deactivate by default the options using their symbol.
 * If you use VisuMZ Options Script leave it in blank.
 * @default ["commandRemember"]
 *
 * @param Add a global volume
 * @type boolean
 * @parent --- Options ---
 * @on Yes
 * @off No
 * @desc Add a global volume control on the options window.
 * If you use VisuMZ Options Script leave it to false.
 * @default true
 *
 * @param Remove secondary volumes
 * @type boolean
 * @parent Add a global volume
 * @on Yes
 * @off No
 * @desc Remove secondary volume controls from options window.
 * If you use VisuMZ Options Script it won't work.
 * @default true
 *
 * @param Use quadratic volume
 * @type boolean
 * @parent Add a global volume
 * @on Yes
 * @off No
 * @desc Improve perception, when the volume is changed, using
 * a quadratic function.
 * @default true
 *
 * @param Global volume name
 * @parent Add a global volume
 * @desc The name that will have the global menu option.
 * @default Volume
 *
 * @param --- Battle ---
 * @desc
 *
 * @param Weather in battle
 * @type boolean
 * @parent --- Battle ---
 * @on Yes
 * @off No
 * @desc Show the current weather in battle?
 * @default true
 *
 * @param Auto select targets
 * @type boolean
 * @parent --- Battle ---
 * @on Yes
 * @off No
 * @desc Auto select targets in battle? Only when
 * there is one enemy/actor or target all.
 * @default true
 *
 * @param Heal on level up
 * @parent --- Battle ---
 * @on Yes
 * @off No
 * @desc Heal actors on level up?
 * @default true
 *
 * @param Actor battler zoom
 * @parent --- Battle ---
 * @type number
 * @min 1.00
 * @max 3.00
 * @decimals 2
 * @desc The actor battler zoom, if desired.
 * @default 1.00
 *
 * @param Center battler animations
 * @parent Actor battler zoom
 * @type boolean
 * @on Yes
 * @off No
 * @desc Center animations over the scaled battler?
 * @default true
 *
 * @param Enemies use actor classes
 * @type boolean
 * @parent --- Battle ---
 * @on Yes
 * @off No
 * @desc Scale the power of the enemies using actor classes?
 * @default false
 *
 * @param Enemy experience
 * @type select
 * @option Enemy value
 * @option Next-level class value
 * @option Enemy value x Level
 * @parent Enemies use actor classes
 * @desc Scale the power of the enemies using actor classes?
 * @default Enemy value x Level
 *
 * @param Gold obtained
 * @type select
 * @option Enemy value
 * @option Next-level class value
 * @option Enemy value x Level
 * @parent Enemies use actor classes
 * @desc Scale the power of the enemies using actor classes?
 * @default Enemy value x Level
 *
 * @param --- Audio ---
 * @desc
 *
 * @param Stop out-focus audio
 * @type boolean
 * @parent --- Audio ---
 * @on Yes
 * @off No
 * @desc Stop audio when the game is out focus?
 * @default true
 *
 * @param Force map bgm and bgs
 * @type struct<MapSoundForced>[]
 * @parent --- Audio ---
 * @desc Force to play a specified Bgm and Bgs when a
 * switch is ON.
 * @default []
 *
 * @param Cache of used audios
 * @type boolean
 * @parent --- Audio ---
 * @on Yes
 * @off No
 * @desc Store in cache the recently used audio files?
 * Deactivate this if you use MUSH Audio engine.
 * @default true
 *
 * @param BGM cache size
 * @type number
 * @parent Cache of used audios
 * @min 2
 * @max 12
 * @desc Maximum number of BGM stored (default 7).
 * Increase this number reduces lag but increases memory.
 * @default 7
 *
 * @param BGS cache size
 * @type number
 * @parent Cache of used audios
 * @min 2
 * @max 12
 * @desc Maximum number of BGS stored (default 5).
 * Increase this number reduces lag but increases memory.
 * @default 5
 *
 * @param ME cache size
 * @type number
 * @parent Cache of used audios
 * @min 2
 * @max 12
 * @desc Maximum number of ME stored (default 3).
 * Increase this number reduces lag but increases memory.
 * @default 3
 *
 * @param SE cache size
 * @type number
 * @parent Cache of used audios
 * @min 5
 * @max 40
 * @desc Maximum number of SE stored (default 20).
 * Increase this number reduces lag but increases memory.
 * @default 20
 *
 * @param Preemptive event cache
 * @type boolean
 * @parent Cache of used audios
 * @on Yes
 * @off No
 * @desc Store in cache audios that may be used in events in
 * the future? Requires "Yes" in "Cache of used audios".
 * @default true
 *
 * @param Preemptive battle cache
 * @type boolean
 * @parent Cache of used audios
 * @on Yes
 * @off No
 * @desc Store in cache audios that may be used in battle in
 * the future? Requires "Yes" in "Cache of used audios".
 * @default true
 *
 * @param Preemp. boot/map cache
 * @type boolean
 * @parent Cache of used audios
 * @on Yes
 * @off No
 * @desc Store in cache audios as soon as possible in boot and
 * map changes? Requires "Yes" in "Cache of used audios".
 * @default true
 *
 */
/*~struct~MapSoundForced:
 * @param Switch Id
 * @type switch
 * @desc Mandatory. When this switch is ON, the plugin will force
 * all maps to play the Bgm and Bgs specified.
 *
 * @param Play Bgm
 * @type file
 * @dir audio/bgm/
 * @require 1
 * @desc The Bgm to play when the switch is ON.
 * Leave blank to mantain the map Bgm.
 *
 * @param Play Bgs
 * @type file
 * @dir audio/bgs/
 * @require 1
 * @desc The Bgs to play when the switch is ON.
 * Leave blank to mantain the map Bgs.
 *
 */

/*====================================================
                 PART: Tweaks Plugin
 ====================================================*/
(function () {
    "use strict";
    window.ScSWinter = window.ScSWinter || {};
    if (!("params" in ScSWinter)) {
        ScSWinter.params = PluginManager.parameters("MultiTweaks");
    }

    Graphics._defaultStretchMode = function () {
        return true;
    };
    ScSWinter.Scene_Boot_start_focus = Scene_Boot.prototype.start;
    Scene_Boot.prototype.start = function () {
        ScSWinter.Scene_Boot_start_focus.call(this);
        if (Utils.isNwjs()) {
            var win = nw.Window.get();
            win.show(true);
            win.focus();
            window.focus();
        }
    };

    ScSWinter.WeatherBattle = ScSWinter.params["Weather in battle"] == "true";
    if (ScSWinter.WeatherBattle) {
        ScSWinter.Spriteset_Battle_createLowerLayer = Spriteset_Battle.prototype.createLowerLayer;
        Spriteset_Battle.prototype.createLowerLayer = function () {
            ScSWinter.Spriteset_Battle_createLowerLayer.call(this);
            this._weather = new Weather();
            this.addChild(this._weather);
        };
        ScSWinter.Spriteset_Battle_update = Spriteset_Battle.prototype.update;
        Spriteset_Battle.prototype.update = function () {
            ScSWinter.Spriteset_Battle_update.call(this);
            this._weather.power = $gameScreen.weatherPower();
            this._weather.type = $gameScreen.weatherType();
        };
    }

    ScSWinter.BlinkSelection = ScSWinter.params["Blink selection effect"] == "true";
    if (!ScSWinter.BlinkSelection) {
        Window.prototype._makeCursorAlpha = function () {
            return this.contentsOpacity / 255;
        };
    }

    ScSWinter.OptionON = ScSWinter.params["Options ON text"] || "Yes";
    ScSWinter.OptionOFF = ScSWinter.params["Options OFF text"] || "No";
    Window_Options.prototype.booleanStatusText = function (value) {
        return value ? ScSWinter.OptionON : ScSWinter.OptionOFF;
    };

    ScSWinter.DisableF58 = ScSWinter.params["Disable F5 and F8"] == "true";
    if (ScSWinter.DisableF58) {
        SceneManager.onKeyDown = function (event) {};
    }

    ScSWinter.Graphics_isFullScreen = Graphics._isFullScreen;
    Graphics._isFullScreen = function () {
        if (Utils.isNwjs()) {
            var win = nw.Window.get();
            return win.isFullscreen;
        } else {
            return ScSWinter.Graphics_isFullScreen.call(this);
        }
    };
    ScSWinter.Graphics_requestFullScreen = Graphics._requestFullScreen;
    Graphics._requestFullScreen = function () {
        if (Graphics._isFullScreen()) return;
        if (Utils.isNwjs()) {
            var win = nw.Window.get();
            win.enterFullscreen();
        } else {
            ScSWinter.Graphics_requestFullScreen.call(this);
        }
    };
    ScSWinter.Graphics_cancelFullScreen = Graphics._cancelFullScreen;
    Graphics._cancelFullScreen = function () {
        if (Utils.isNwjs()) {
            var win = nw.Window.get();
            win.leaveFullscreen();
        } else {
            ScSWinter.Graphics_cancelFullScreen.call(this);
        }
    };

    ScSWinter.StartFullScreen = ScSWinter.params["Start in fullscreen mode"] == "true";
    if (Utils.isNwjs() && ScSWinter.StartFullScreen) {
        ScSWinter.Scene_Boot_start = Scene_Boot.prototype.start;
        Scene_Boot.prototype.start = function () {
            ScSWinter.Scene_Boot_start.call(this);
            Graphics._requestFullScreen();
        };
    }

    try {
        ScSWinter.DefaultON = JSON.parse(ScSWinter.params["Default ON options"]) || JSON.parse("[]");
    } catch (e) {
        ScSWinter.DefaultON = [];
    }
    if (ScSWinter.DefaultON.length > 0) {
        for (var i = 0; i < ScSWinter.DefaultON.length; i++) {
            ConfigManager[ScSWinter.DefaultON[i]] = true;
        }
    }

    try {
        ScSWinter.DefaultOFF = JSON.parse(ScSWinter.params["Default OFF options"]) || JSON.parse("[]");
    } catch (e) {
        ScSWinter.DefaultOFF = [];
    }
    if (ScSWinter.DefaultOFF.length > 0) {
        for (var i = 0; i < ScSWinter.DefaultOFF.length; i++) {
            ConfigManager[ScSWinter.DefaultOFF[i]] = false;
        }
    }

    try {
        ScSWinter.RemoveOptions = JSON.parse(ScSWinter.params["Remove general options"]) || JSON.parse("[]");
    } catch (e) {
        ScSWinter.RemoveOptions = [];
    }
    if (ScSWinter.RemoveOptions.length > 0) {
        ScSWinter.Window_Options_addGeneralOptions = Window_Options.prototype.addGeneralOptions;
        Window_Options.prototype.addGeneralOptions = function () {
            ScSWinter.Window_Options_addGeneralOptions.call(this);
            this._list = this._list.filter(function (item) {
                return !ScSWinter.RemoveOptions.includes(item.symbol);
            });
        };
    }

    ScSWinter.AutoSelectBattle = ScSWinter.params["Auto select targets"] == "true";
    if (ScSWinter.AutoSelectBattle) {
        ScSWinter.Scene_Battle_startEnemySelection = Scene_Battle.prototype.startEnemySelection;
        Scene_Battle.prototype.startEnemySelection = function () {
            ScSWinter.Scene_Battle_startEnemySelection.call(this);
            if (this._enemyWindow.active) {
                var action = BattleManager.inputtingAction();
                if (this._enemyWindow.maxItems() == 1 || action.isForAll()) {
                    this.onEnemyOk();
                }
            }
        };
        ScSWinter.Scene_Battle_startActorSelection = Scene_Battle.prototype.startActorSelection;
        Scene_Battle.prototype.startActorSelection = function () {
            ScSWinter.Scene_Battle_startActorSelection.call(this);
            if (this._actorWindow.active) {
                var action = BattleManager.inputtingAction();
                if (this._actorWindow.maxItems() == 1 || action.isForAll()) {
                    this.onActorOk();
                }
            }
        };
    }

    ScSWinter.OptimActive = ScSWinter.params["Optimize game"] == "true";
    if (ScSWinter.OptimActive) {
        ScSWinter.OptimOption = ScSWinter.params["Add option (optimGame)"] || "";
        ConfigManager._optimGame = true;
        if (ScSWinter.OptimOption.length > 0) {
            ScSWinter.Window_Options_addGeneralOptions_2 = Window_Options.prototype.addGeneralOptions;
            Window_Options.prototype.addGeneralOptions = function () {
                ScSWinter.Window_Options_addGeneralOptions_2.call(this);
                this.addCommand(ScSWinter.OptimOption, "optimGame");
            };
            Object.defineProperty(ConfigManager, "optimGame", {
                get: function () {
                    return ConfigManager._optimGame;
                },
                set: function (value) {
                    ConfigManager._optimGame = value;
                },
                configurable: true
            });
        }
        Graphics._skipNorm = parseInt(ScSWinter.params["General frame skip"]) || 6;
        Graphics._skipBatt = parseInt(ScSWinter.params["Battle frame skip"]) || 3;
        Graphics._skipEffe = parseInt(ScSWinter.params["Effekseer frame skip"]) || 2;
        Graphics._throttle = 0;
        Graphics._isEffect = false;
        Graphics._isBattle = false;
        Graphics._isStageX = false;
        ScSWinter.Graphics_onTick = Graphics._onTick;
        Graphics._onTick = function (deltaTime) {
            if (!ConfigManager._optimGame) {
                return ScSWinter.Graphics_onTick.call(this, deltaTime);
            }
            this._fpsCounter.startTick();
            Graphics._isEffect = false;
            if (this._tickHandler) {
                this._tickHandler(deltaTime);
            }
            Graphics._isStageX = !!this._app.stage;
            if (Graphics._isStageX) {
                Graphics._isBattle = "updateBattleProcess" in SceneManager._scene;
                Graphics._throttle =
                    (Graphics._throttle + 1) %
                    (Graphics._isEffect
                        ? Graphics._skipEffe
                        : Graphics._isBattle
                        ? Graphics._skipBatt
                        : Graphics._skipNorm);
            }
            if (this._canRender()) {
                this._app.render();
            }
            this._fpsCounter.endTick();
        };
        Graphics._canRender = function () {
            if (ConfigManager._optimGame) {
                return Graphics._isStageX ? Graphics._throttle > 0 : false;
            } else {
                return !!this._app.stage;
            }
        };
        ScSWinter.Sprite_Animation_updateMain = Sprite_Animation.prototype.updateMain;
        Sprite_Animation.prototype.updateMain = function () {
            ScSWinter.Sprite_Animation_updateMain.call(this);
            Graphics._isEffect = true;
        };
    }

    ScSWinter.DisableFF = ScSWinter.params["Disable FastFoward"] == "true";
    if (ScSWinter.DisableFF) {
        Scene_Map.prototype.isFastForward = function () {
            return false;
        };
    }

    ScSWinter.TilemapSpeed = parseInt(ScSWinter.params["Tilemap animation speed"]);
    if (ScSWinter.TilemapSpeed > 1) {
        Tilemap.prototype.update = function () {
            this.animationCount += ScSWinter.TilemapSpeed;
            this.animationFrame = Math.floor(this.animationCount / 30);
            for (const child of this.children) {
                if (child.update) {
                    child.update();
                }
            }
        };
    }

    ScSWinter.FixScrollBars = ScSWinter.params["Disable scrollbars"] == "true";
    if (ScSWinter.FixScrollBars) {
        try {
            document.documentElement.style.overflowX = "hidden";
            document.documentElement.style.overflowY = "hidden";
            document.body.style.overflowX = "hidden";
            document.body.style.overflowY = "hidden";
        } catch (e) {}
    }

    ScSWinter.PixelRendering = ScSWinter.params["Pixel rendering"] == "true";
    ScSWinter.ExtremePixelRendering = ScSWinter.params["Extreme pixel rendering"] == "true";
    ScSWinter.Graphics_updateCanvas = Graphics._updateCanvas;
    Graphics._updateCanvas = function () {
        ScSWinter.Graphics_updateCanvas.call(this);
        if (ScSWinter.PixelRendering) {
            if (ScSWinter.ExtremePixelRendering) {
                this._canvas.style.imageRendering = "pixelated";
                this._canvas.style.webkitFontSmoothing = "none";
                this._canvas.style.fontSmoothing = "none";
                this._canvas.imageSmoothingEnabled = false;
            }
            PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;
        } else {
            this._canvas.style.imageRendering = "auto";
            PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.LINEAR;
            this._canvas.imageSmoothingEnabled = true;
        }
        PIXI.settings.ROUND_PIXELS = ScSWinter.PixelRendering;
    };
    ScSWinter.Bitmap_onLoad = Bitmap.prototype._onLoad;
    Bitmap.prototype._onLoad = function () {
        ScSWinter.Bitmap_onLoad.call(this);
        this._smooth = !ScSWinter.PixelRendering;
        this._updateScaleMode();
    };

    ScSWinter.BattlerZoom = parseFloat(ScSWinter.params["Actor battler zoom"]) || 1.0;
    ScSWinter.BattlerZoomAnim = ScSWinter.params["Center battler animations"] == "true";
    if (ScSWinter.BattlerZoom > 1.0) {
        ScSWinter.Sprite_Actor_initMembers = Sprite_Actor.prototype.initMembers;
        Sprite_Actor.prototype.initMembers = function () {
            ScSWinter.Sprite_Actor_initMembers.call(this);
            this._mainSprite.scale.set(ScSWinter.BattlerZoom, ScSWinter.BattlerZoom);
            this._shadowSprite.scale.set(ScSWinter.BattlerZoom, ScSWinter.BattlerZoom);
            this._weaponSprite.scale.set(ScSWinter.BattlerZoom, ScSWinter.BattlerZoom);
            this._stateSprite.scale.set(ScSWinter.BattlerZoom, ScSWinter.BattlerZoom);
        };
        Sprite_Actor.prototype.damageOffsetY = function () {
            return -((this.height * ScSWinter.BattlerZoom) / 2) + 48;
        };
        Sprite_Enemy.prototype.damageOffsetY = function () {
            return -(this.height / 2) + 48;
        };
        if (ScSWinter.BattlerZoomAnim) {
            ScSWinter.Sprite_Animation_targetSpritePosition = Sprite_Animation.prototype.targetSpritePosition;
            Sprite_Animation.prototype.targetSpritePosition = function (sprite) {
                if ("setActorHome" in sprite) {
                    const point = new Point(0, -(sprite.height * ScSWinter.BattlerZoom) / 2);
                    sprite.updateTransform();
                    return sprite.worldTransform.apply(point);
                } else {
                    return ScSWinter.Sprite_Animation_targetSpritePosition.call(this, sprite);
                }
            };
        }
    }

    ScSWinter.HealLevelUp = ScSWinter.params["Heal on level up"] == "true";
    if (ScSWinter.HealLevelUp) {
        ScSWinter.Game_Actor_levelUp = Game_Actor.prototype.levelUp;
        Game_Actor.prototype.levelUp = function () {
            ScSWinter.Game_Actor_levelUp.call(this);
            this.recoverAll();
            this.refresh();
        };
    }
})();

/*====================================================
             PART: Enemy Class MZ Plugin
====================================================*/
(function () {
    "use strict";
    window.ScSWinter = window.ScSWinter || {};
    if (!("params" in ScSWinter)) {
        ScSWinter.params = PluginManager.parameters("MultiTweaks");
    }

    var s_extractNoteValue = function (notes, ntag) {
        var s_tags = notes.split(/[\r\n]+/),
            s_val = "0";
        for (var i = 0; i < s_tags.length; i++) {
            if (s_tags[i].indexOf(ntag) > -1) {
                var id = s_tags[i].split(":");
                s_val = id[1];
            }
        }
        return s_val;
    };

    ScSWinter.EnemiesClass = ScSWinter.params["Enemies use actor classes"] == "true";
    if (ScSWinter.EnemiesClass) {
        var PB_Game_Enemy_setup = Game_Enemy.prototype.setup;
        Game_Enemy.prototype.setup = function (enemyId, x, y) {
            this.s_bparam = {};
            this.s_enemyId = enemyId;
            this.s_roleid = parseInt(s_extractNoteValue($dataEnemies[this.s_enemyId].note, "EnemyRole:"));
            this.s_level = $gameParty.highestLevel();
            this.s_calcExpQuant();
            this.s_calcGoldQuant();
            PB_Game_Enemy_setup.call(this, enemyId, x, y);
        };

        var s_fExp = function (level, basis, extra, acc_a, acc_b) {
            return Math.round(
                (basis * Math.pow(level - 1, 0.9 + acc_a / 250) * level * (level + 1)) /
                    (6 + Math.pow(level, 2) / 50 / acc_b) +
                    (level - 1) * extra
            );
        };

        ScSWinter.EnemyExpGained = ScSWinter.params["Enemy experience"];
        Game_Enemy.prototype.s_calcExpQuant = function () {
            if (ScSWinter.EnemyExpGained == "Next-level class value" && this.s_roleid > 0) {
                var bexp = $dataClasses[this.s_roleid].expParams;
                this.s_exp =
                    s_fExp(this.s_level + 1, bexp[0], bexp[1], bexp[2], bexp[3]) -
                    s_fExp(this.s_level, bexp[0], bexp[1], bexp[2], bexp[3]);
            } else if (ScSWinter.EnemyExpGained == "Enemy value x Level") {
                this.s_exp = $dataEnemies[this.s_enemyId].exp * this.s_level;
            } else {
                this.s_exp = $dataEnemies[this.s_enemyId].exp;
            }
        };

        ScSWinter.EnemyGoldGained = ScSWinter.params["Gold obtained"];
        Game_Enemy.prototype.s_calcGoldQuant = function () {
            if (ScSWinter.EnemyGoldGained == "Next-level class value" && this.s_roleid > 0) {
                var bexp = $dataClasses[this.s_roleid].expParams;
                this.s_gold =
                    s_fExp(this.s_level + 1, bexp[0], bexp[1], bexp[2], bexp[3]) -
                    s_fExp(this.s_level, bexp[0], bexp[1], bexp[2], bexp[3]);
            } else if (ScSWinter.EnemyGoldGained == "Enemy value x Level") {
                this.s_gold = $dataEnemies[this.s_enemyId].gold * this.s_level;
            } else {
                this.s_gold = $dataEnemies[this.s_enemyId].gold;
            }
        };

        Game_Enemy.prototype.s_bparamCalc = function (paramId) {
            var s_mult = paramId == 0 ? 10 : 1;
            if (this.s_roleid > 0 && paramId < $dataClasses[this.s_roleid].params.length) {
                this.s_bparam[paramId] = Math.floor($dataClasses[this.s_roleid].params[paramId][this.s_level] * s_mult);
            } else {
                this.s_bparam[paramId] = Math.floor($dataEnemies[this.s_enemyId].params[paramId]);
            }
            return this.s_bparam[paramId];
        };

        Game_Enemy.prototype.paramBase = function (paramId) {
            return this.s_bparam[paramId] || this.s_bparamCalc(paramId);
        };

        Game_Enemy.prototype.exp = function () {
            return this.s_exp;
        };

        Game_Enemy.prototype.gold = function () {
            return this.s_gold;
        };
    }
})();

/*====================================================
 PART: BetterAudio MV Plugin -> BetterAudio MZ Plugin
====================================================*/
(function () {
    var BetterAudio = {
        outfocus: { bgm: null, bgs: null, sav: false },
        saved: {
            bgs: {},
            bgm: {},
            me: {},
            se: {},
            cmax: { bgs: 2, bgm: 2, me: 2, se: 2 },
            tmax: { bgs: 0, bgm: 0, me: 0, se: 0 }
        },
        debug: false,
        forced: []
    };
    BetterAudio.debug = false;

    BetterAudio.params = PluginManager.parameters("MultiTweaks");
    BetterAudio.params["Stop out-focus audio"] = BetterAudio.params["Stop out-focus audio"] == "true";
    BetterAudio.params["Add a global volume"] = BetterAudio.params["Add a global volume"] == "true";
    BetterAudio.params["Remove secondary volumes"] = BetterAudio.params["Remove secondary volumes"] == "true";
    BetterAudio.params["Use quadratic volume"] = BetterAudio.params["Use quadratic volume"] == "true";
    BetterAudio.params["Global volume name"] = String(BetterAudio.params["Global volume name"]);
    BetterAudio.params["Cache of used audios"] = BetterAudio.params["Cache of used audios"] == "true";
    BetterAudio.params["Preemptive event cache"] = BetterAudio.params["Preemptive event cache"] == "true";
    BetterAudio.params["Preemptive battle cache"] = BetterAudio.params["Preemptive battle cache"] == "true";
    BetterAudio.params["Preemp. boot/map cache"] = BetterAudio.params["Preemp. boot/map cache"] == "true";
    BetterAudio.saved.cmax.bgm = parseInt(BetterAudio.params["BGM cache size"]);
    BetterAudio.saved.cmax.bgs = parseInt(BetterAudio.params["BGS cache size"]);
    BetterAudio.saved.cmax.me = parseInt(BetterAudio.params["ME cache size"]);
    BetterAudio.saved.cmax.se = parseInt(BetterAudio.params["SE cache size"]);
    try {
        BetterAudio.forced = JSON.parse(BetterAudio.params["Force map bgm and bgs"]) || JSON.parse("[]");
        for (var i = 0; i < BetterAudio.forced.length; i++) {
            BetterAudio.forced[i] = JSON.parse(BetterAudio.forced[i]);
        }
    } catch (e) {
        BetterAudio.forced = [];
    }

    if (BetterAudio.debug) {
        BetterAudio.showDebug = function (content) {
            console.log("[BetterAudio] " + content);
        };
        console.log("=== Updated BetterAudio Object ===");
        console.log(BetterAudio);
        console.log("=== ===");
    } else {
        BetterAudio.showDebug = function (content) {};
    }

    if (BetterAudio.params["Stop out-focus audio"]) {
        if (Utils.isNwjs()) {
            WebAudio._shouldMuteOnHide = function () {
                return false;
            };
            var win = nw.Window.get();
            win.on("focus", function () {
                WebAudio._fadeIn(0.3);
            });
            win.on("blur", function () {
                WebAudio._fadeOut(0.3);
            });
        } else {
            WebAudio._shouldMuteOnHide = function () {
                return true;
            };
            WebAudio._onHide = function () {
                this._fadeOut(0.3);
            };
            WebAudio._onShow = function () {
                this._fadeIn(0.3);
            };
        }
    } else {
        WebAudio._shouldMuteOnHide = function () {
            return false;
        };
    }

    if (BetterAudio.params["Add a global volume"]) {
        AudioManager._globalVolume = 100;
        Object.defineProperty(AudioManager, "globalVolume", {
            get: function () {
                return this._globalVolume;
            },
            set: function (value) {
                this._globalVolume = value;
                this.updateBgmParameters(this._currentBgm);
                this.updateBgsParameters(this._currentBgs);
                this.updateMeParameters(this._currentMe);
            },
            configurable: true
        });

        Object.defineProperty(ConfigManager, "globalVolume", {
            get: function () {
                return AudioManager.globalVolume;
            },
            set: function (value) {
                AudioManager.globalVolume = value;
            },
            configurable: true
        });

        BetterAudio.originalMakeData = ConfigManager.makeData;
        ConfigManager.makeData = function () {
            var config = BetterAudio.originalMakeData.call(this);
            config.globalVolume = this.globalVolume;
            return config;
        };

        BetterAudio.originalApplyData = ConfigManager.applyData;
        ConfigManager.applyData = function (config) {
            this.globalVolume = this.readVolume(config, "globalVolume");
            BetterAudio.originalApplyData.call(this, config);
        };

        AudioManager.updateBufferParameters = function (buffer, configVolume, audio) {
            if (buffer && audio) {
                var globalVolume = this.globalVolume || 0;
                if (BetterAudio.params["Use quadratic volume"]) {
                    globalVolume = parseInt((globalVolume * globalVolume) / 100) / 100;
                } else globalVolume = globalVolume / 100;
                BetterAudio.showDebug("Called updateBufferParameters with real global volume of " + globalVolume);
                buffer.volume = (globalVolume * configVolume * (audio.volume || 0)) / 10000;
                buffer.pitch = (audio.pitch || 0) / 100;
                buffer.pan = (audio.pan || 0) / 100;
            }
        };

        Window_Options.prototype.addVolumeOptions = function () {
            this.addCommand(BetterAudio.params["Global volume name"], "globalVolume");
            if (!BetterAudio.params["Remove secondary volumes"]) {
                this.addCommand(TextManager.bgmVolume, "bgmVolume");
                this.addCommand(TextManager.bgsVolume, "bgsVolume");
                this.addCommand(TextManager.meVolume, "meVolume");
                this.addCommand(TextManager.seVolume, "seVolume");
            }
        };
    }

    if (BetterAudio.params["Cache of used audios"]) {
        BetterAudio.updateIndexSaved = function (buffer, toItem) {
            var keys = Object.keys(buffer);
            for (var i = 0; i < keys.length; i++) {
                var number = buffer[keys[i]][1];
                if (number == toItem) {
                    buffer[keys[i]][1] = 1;
                } else if (number < toItem) {
                    buffer[keys[i]][1] = number + 1;
                }
            }
        };

        BetterAudio.deleteOldSaved = function (buffer, max) {
            var keys = Object.keys(buffer);
            for (var i = 0; i < keys.length; i++) {
                var number = buffer[keys[i]][1];
                if (number > max) {
                    var k = keys[i];
                    if (!buffer[k][0].isPlaying()) buffer[k][0].destroy();
                    delete buffer[k];
                }
            }
        };

        BetterAudio.restartBufferCount = function () {
            BetterAudio.saved.tmax = { bgs: 0, bgm: 0, me: 0, se: 0 };
        };

        BetterAudio.addNewToBuffer = function (btype, aname) {
            if (typeof aname === "undefined" || aname === null || aname == "") return;
            if (BetterAudio.saved.tmax[btype] < BetterAudio.saved.cmax[btype]) {
                AudioManager.createBuffer(btype, aname);
                BetterAudio.saved.tmax[btype] += 1;
            }
        };

        AudioManager.originalCreateBuffer = AudioManager.createBuffer;
        AudioManager.createBuffer = function (folder, name) {
            folder = folder.replace("/", "").replace("/", "").replace("/", "");
            if (name in BetterAudio.saved[folder]) {
                BetterAudio.showDebug("Served " + folder + " cached file: " + name);
            } else {
                BetterAudio.saved[folder][name] = [
                    AudioManager.originalCreateBuffer.call(this, folder + "/", name),
                    999
                ];
                BetterAudio.showDebug("Cached new " + folder + " file: " + name);
            }
            BetterAudio.updateIndexSaved(BetterAudio.saved[folder], BetterAudio.saved[folder][name][1]);
            BetterAudio.deleteOldSaved(BetterAudio.saved[folder], BetterAudio.saved.cmax[folder]);
            return BetterAudio.saved[folder][name][0];
        };

        /* Fix cursor sound bug #1 */
        AudioManager.loadStaticSe = function (se) {
            if (se.name && !this.isStaticSe(se)) {
                const buffer = AudioManager.originalCreateBuffer("se/", se.name);
                this._staticBuffers.push(buffer);
            }
        };

        AudioManager.stopBgm = function () {
            if (this._bgmBuffer) {
                if (!(this._bgmBuffer.name in BetterAudio.saved["bgm"])) this._bgmBuffer.destroy();
                else this._bgmBuffer.stop();
                this._bgmBuffer = null;
                this._currentBgm = null;
            }
        };
        AudioManager.stopBgs = function () {
            if (this._bgsBuffer) {
                if (!(this._bgsBuffer.name in BetterAudio.saved["bgs"])) this._bgsBuffer.destroy();
                else this._bgsBuffer.stop();
                this._bgsBuffer = null;
                this._currentBgs = null;
            }
        };
        AudioManager.stopMe = function () {
            if (this._meBuffer) {
                if (!(this._meBuffer.name in BetterAudio.saved["me"])) this._meBuffer.destroy();
                else this._meBuffer.stop();
                this._meBuffer = null;
                if (this._bgmBuffer && this._currentBgm && !this._bgmBuffer.isPlaying()) {
                    this._bgmBuffer.play(true, this._currentBgm.pos);
                    this._bgmBuffer.fadeIn(this._replayFadeTime);
                }
            }
        };
        AudioManager.cleanupSe = function () {
            for (const buffer of this._seBuffers) {
                if (!buffer.isPlaying() && !(buffer.name in BetterAudio.saved["se"])) {
                    buffer.destroy();
                }
            }
            this._seBuffers = this._seBuffers.filter((buffer) => buffer.isPlaying());
        };
        AudioManager.stopSe = function () {
            for (const buffer of this._seBuffers) {
                if (!(buffer.name in BetterAudio.saved["se"])) buffer.destroy();
                else buffer.stop();
            }
            this._seBuffers = [];
        };
    }

    if (BetterAudio.params["Cache of used audios"] && BetterAudio.params["Preemptive event cache"]) {
        BetterAudio.originalSetup = Game_Interpreter.prototype.setup;
        Game_Interpreter.prototype.setup = function (list, eventId) {
            BetterAudio.originalSetup.call(this, list, eventId);
            BetterAudio.showDebug("Analyzing commands of event " + eventId);
            BetterAudio.restartBufferCount();
            for (var i = 0; i < this._list.length; i++) {
                var com = this._list[i];
                if (com.code == 241) {
                    BetterAudio.showDebug("Detected start bgm in event");
                    BetterAudio.addNewToBuffer("bgm", com.parameters[0].name);
                } else if (com.code == 245) {
                    BetterAudio.showDebug("Detected start bgs in event");
                    BetterAudio.addNewToBuffer("bgs", com.parameters[0].name);
                } else if (com.code == 249) {
                    BetterAudio.showDebug("Detected play me in event");
                    BetterAudio.addNewToBuffer("me", com.parameters[0].name);
                } else if (com.code == 250) {
                    BetterAudio.showDebug("Detected play se in event");
                    BetterAudio.addNewToBuffer("se", com.parameters[0].name);
                } else if (com.code == 301) {
                    BetterAudio.showDebug("Detected start battle in event");
                    BetterAudio.addNewToBuffer("bgm", $gameSystem.battleBgm().name);
                    BetterAudio.addNewToBuffer("me", $gameSystem.victoryMe().name);
                    BetterAudio.addNewToBuffer("me", $gameSystem.defeatMe().name);
                } else if (com.code == 132) {
                    BetterAudio.showDebug("Detected change battle BGM");
                    BetterAudio.addNewToBuffer("bgm", com.parameters[0].name);
                } else if (com.code == 133) {
                    BetterAudio.showDebug("Detected change victory ME");
                    BetterAudio.addNewToBuffer("me", com.parameters[0].name);
                }
            }
        };
    }

    if (BetterAudio.params["Cache of used audios"] && BetterAudio.params["Preemptive battle cache"]) {
        BetterAudio.preloadAnimation = function (animationId) {
            if (animationId <= 0 || animationId >= $dataAnimations.length) return;
            BetterAudio.showDebug("Try to preload battle animation " + animationId);
            BetterAudio.restartBufferCount();
            var mytimings = $dataAnimations[animationId].soundTimings;
            for (var i = 0; i < mytimings.length; i++) {
                if (mytimings[i].se) {
                    BetterAudio.showDebug("Detected se in battle animation");
                    BetterAudio.addNewToBuffer("se", mytimings[i].se.name);
                }
            }
        };

        BetterAudio.originalStartAction = BattleManager.startAction;
        BattleManager.startAction = function () {
            var skill = this._subject.currentAction().item();
            BetterAudio.showDebug("Start preload in battle by startAction");
            BetterAudio.preloadAnimation(skill.animationId);
            BetterAudio.originalStartAction.call(this);
        };

        BetterAudio.originalOnSkillOk = Scene_Battle.prototype.onSkillOk;
        Scene_Battle.prototype.onSkillOk = function () {
            var skill = this._skillWindow.item();
            BetterAudio.showDebug("Start preload in battle by onSkillOk");
            BetterAudio.preloadAnimation(skill.animationId);
            BetterAudio.originalOnSkillOk.call(this);
        };

        BetterAudio.originalOnItemOk = Scene_Battle.prototype.onItemOk;
        Scene_Battle.prototype.onItemOk = function () {
            var skill = this._itemWindow.item();
            BetterAudio.showDebug("Start preload in battle by onItemOk");
            BetterAudio.preloadAnimation(skill.animationId);
            BetterAudio.originalOnItemOk.call(this);
        };
    }

    if (BetterAudio.forced.length > 0) {
        BetterAudio.forceMapBgmAndBgs = function (object) {
            for (var i = 0; i < BetterAudio.forced.length; i++) {
                var mfe = BetterAudio.forced[i];
                if ($gameSwitches.value(mfe["Switch Id"]) == true) {
                    if (mfe["Play Bgm"] != "") {
                        BetterAudio.showDebug("Changed map Bgm to " + mfe["Play Bgm"] + " by " + mfe["Switch Id"]);
                        object.autoplayBgm = true;
                        object.bgm = { name: mfe["Play Bgm"], pan: 0, pitch: 100, volume: 90 };
                    }
                    if (mfe["Play Bgs"] != "") {
                        BetterAudio.showDebug("Changed map Bgs to " + mfe["Play Bgs"] + " by " + mfe["Switch Id"]);
                        object.autoplayBgs = true;
                        object.bgs = { name: mfe["Play Bgs"], pan: 0, pitch: 100, volume: 90 };
                    }
                    return true;
                }
            }
            return false;
        };
    } else {
        BetterAudio.forceMapBgmAndBgs = function (object) {};
    }

    if (BetterAudio.params["Cache of used audios"] && BetterAudio.params["Preemp. boot/map cache"]) {
        BetterAudio.originalDataManagerOnLoad = DataManager.onLoad;
        DataManager.onLoad = function (object) {
            if (object) {
                BetterAudio.restartBufferCount();
                if (object === $dataMap) {
                    BetterAudio.forceMapBgmAndBgs(object);
                    if ($gameSystem) {
                        BetterAudio.addNewToBuffer("bgm", $gameSystem.battleBgm().name);
                    }
                    if (object.bgm && object.bgm.name) {
                        BetterAudio.showDebug("Detected map changing, so preloading " + object.bgm.name);
                        BetterAudio.addNewToBuffer("bgm", object.bgm.name);
                    }
                    if (object.bgs && object.bgs.name) {
                        BetterAudio.showDebug("Detected map changing, so preloading " + object.bgs.name);
                        BetterAudio.addNewToBuffer("bgs", object.bgs.name);
                    }
                } else if (object === $dataSystem) {
                    if (object.titleBgm && object.titleBgm.name) {
                        Utils.setEncryptionInfo(
                            !!object.hasEncryptedImages,
                            !!object.hasEncryptedAudio,
                            object.encryptionKey
                        );
                        BetterAudio.showDebug("Detected system loading, so preloading " + object.titleBgm.name);
                        BetterAudio.addNewToBuffer("bgm", object.titleBgm.name);
                    }
                }
            }
            BetterAudio.originalDataManagerOnLoad.call(this, object);
        };
    } else if (BetterAudio.forced.length > 0) {
        BetterAudio.originalDataManagerOnLoad = DataManager.onLoad;
        DataManager.onLoad = function (object) {
            if (object) {
                if (object === $dataMap) {
                    BetterAudio.forceMapBgmAndBgs(object);
                }
            }
            BetterAudio.originalDataManagerOnLoad.call(this, object);
        };
    }
})();

/*====================================================
                PART: MZ Map Zoom Plugin
====================================================*/
(function () {
    "use strict";
    window.ScSWinter = window.ScSWinter || {};
    if (!("params" in ScSWinter)) {
        ScSWinter.params = PluginManager.parameters("MultiTweaks");
    }
    var s_extractNoteValue = function (notes, ntag) {
        var s_tags = notes.split(/[\r\n]+/),
            s_val = "0";
        for (var i = 0; i < s_tags.length; i++) {
            if (s_tags[i].indexOf(ntag) > -1) {
                var id = s_tags[i].split(":");
                s_val = id[1];
            }
        }
        return s_val;
    };

    /* Optional fixes */
    ScSWinter.FixSprites = ScSWinter.params["Fix sprite black lines"] == "true";
    if (ScSWinter.FixSprites) {
        Sprite_Character.prototype.setFrame = function (x, y, width, height) {
            if ($gameMap._currentZoom > 1.0) {
                width = width == 0 ? 0 : width - 2;
                height = height == 0 ? 0 : height - 2;
                Sprite.prototype.setFrame.call(this, x + 1, y + 1, width, height);
            } else Sprite.prototype.setFrame.call(this, x, y, width, height);
        };
    }
    ScSWinter.FixEncounter = ScSWinter.params["Fix map encounter zoom"] == "true";
    if (ScSWinter.FixEncounter) {
        Scene_Map.prototype.updateEncounterEffect = function () {
            if (this._encounterEffectDuration > 0) {
                this._encounterEffectDuration--;
                const speed = this.encounterEffectSpeed();
                const n = speed - this._encounterEffectDuration;
                const p = n / speed;
                var q = ((p - 1) * 20 * p + 5) * p + 1;
                q = q * $gameMap._currentZoom;
                const zoomX = $gamePlayer.screenX();
                const zoomY = $gamePlayer.screenY() - 24;
                if (n === 2) {
                    $gameScreen.setZoom(zoomX, zoomY, 1);
                    this.snapForBattleBackground();
                    this.startFlashForEncounter(speed / 2);
                }
                $gameScreen.setZoom(zoomX, zoomY, q);
                if (n === Math.floor(speed / 6)) {
                    this.startFlashForEncounter(speed / 2);
                }
                if (n === Math.floor(speed / 2)) {
                    BattleManager.playBattleBgm();
                    this.startFadeOut(this.fadeSpeed());
                }
            }
        };
    }
    ScSWinter.FreeCamera = ScSWinter.params["Always free camera"] == "true";

    /* Game_Map */
    Game_Map.prototype.extraScreenTile = function (zoom) {
        const zoomTileX = Math.round((Graphics.width / (this.tileWidth() * zoom)) * 16) / 16;
        const zoomTileY = Math.round((Graphics.height / (this.tileHeight() * zoom)) * 16) / 16;
        this._extraScreenTileX = (this.screenTileX() - zoomTileX) / 2;
        this._extraScreenTileY = (this.screenTileY() - zoomTileY) / 2;
        this._currentZoom = zoom;
    };
    Game_Map.prototype.canvasToMapX = function (x) {
        const tileWidth = this.tileWidth() * this._currentZoom;
        const originX = (this._displayX + this._extraScreenTileX) * tileWidth;
        const mapX = Math.floor((originX + x) / tileWidth);
        return this.roundX(mapX);
    };
    Game_Map.prototype.canvasToMapY = function (y) {
        const tileHeight = this.tileHeight() * this._currentZoom;
        const originY = (this._displayY + this._extraScreenTileY) * tileHeight;
        const mapY = Math.floor((originY + y) / tileHeight);
        return this.roundY(mapY);
    };
    /* Without a correct initial camera position, this code is not useful.
     It works only when we start in middle of a not-looped map. */
    Game_Map.prototype.scrollLeft = function (distance) {
        if (this.isLoopHorizontal()) {
            this._displayX += $dataMap.width - distance;
            this._displayX %= $dataMap.width;
            if (this._parallaxLoopX) {
                this._parallaxX -= distance;
            }
        } else if (ScSWinter.FreeCamera) {
            const lastX = this._displayX;
            this._displayX -= distance;
            this._parallaxX += this._displayX - lastX;
        } else if (this.width() + this._extraScreenTileX * 2 >= this.screenTileX()) {
            const lastX = this._displayX;
            this._displayX = Math.max(this._displayX - distance, this._extraScreenTileX * -1);
            this._parallaxX += this._displayX - lastX;
        }
    };
    Game_Map.prototype.scrollRight = function (distance) {
        if (this.isLoopHorizontal()) {
            this._displayX += distance;
            this._displayX %= $dataMap.width;
            if (this._parallaxLoopX) {
                this._parallaxX += distance;
            }
        } else if (ScSWinter.FreeCamera) {
            const lastX = this._displayX;
            this._displayX += distance;
            this._parallaxX += this._displayX - lastX;
        } else if (this.width() + this._extraScreenTileX * 2 >= this.screenTileX()) {
            const lastX = this._displayX;
            this._displayX = Math.min(
                this._displayX + distance,
                this.width() - this.screenTileX() + this._extraScreenTileX
            );
            this._parallaxX += this._displayX - lastX;
        }
    };
    Game_Map.prototype.scrollUp = function (distance) {
        if (this.isLoopVertical()) {
            this._displayY += $dataMap.height - distance;
            this._displayY %= $dataMap.height;
            if (this._parallaxLoopY) {
                this._parallaxY -= distance;
            }
        } else if (ScSWinter.FreeCamera) {
            const lastY = this._displayY;
            this._displayY -= distance;
            this._parallaxY += this._displayY - lastY;
        } else if (this.height() + this._extraScreenTileY * 2 >= this.screenTileY()) {
            const lastY = this._displayY;
            this._displayY = Math.max(this._displayY - distance, this._extraScreenTileY * -1);
            this._parallaxY += this._displayY - lastY;
        }
    };
    Game_Map.prototype.scrollDown = function (distance) {
        if (this.isLoopVertical()) {
            this._displayY += distance;
            this._displayY %= $dataMap.height;
            if (this._parallaxLoopY) {
                this._parallaxY += distance;
            }
        } else if (ScSWinter.FreeCamera) {
            const lastY = this._displayY;
            this._displayY += distance;
            this._parallaxY += this._displayY - lastY;
        } else if (this.height() + this._extraScreenTileY * 2 >= this.screenTileY()) {
            const lastY = this._displayY;
            this._displayY = Math.min(
                this._displayY + distance,
                this.height() - this.screenTileY() + this._extraScreenTileY
            );
            this._parallaxY += this._displayY - lastY;
        }
    };
    Game_Map.prototype.setDisplayPos = function (x, y) {
        if (this.isLoopHorizontal()) {
            this._displayX = x.mod(this.width());
            this._parallaxX = x;
        } else if (ScSWinter.FreeCamera) {
            this._displayX = x;
            this._parallaxX = x;
        } else {
            const endX = this.width() - this.screenTileX() + this._extraScreenTileX * 2;
            this._displayX =
                endX < 0
                    ? endX / 2 - this._extraScreenTileX
                    : x.clamp(this._extraScreenTileX * -1, endX - this._extraScreenTileX);
            this._parallaxX = this._displayX;
        }
        if (this.isLoopVertical()) {
            this._displayY = y.mod(this.height());
            this._parallaxY = y;
        } else if (ScSWinter.FreeCamera) {
            this._displayY = y;
            this._parallaxY = y;
        } else {
            const endY = this.height() - this.screenTileY() + this._extraScreenTileY * 2;
            this._displayY =
                endY < 0
                    ? endY / 2 - this._extraScreenTileY
                    : y.clamp(this._extraScreenTileY * -1, endY - this._extraScreenTileY);
            this._parallaxY = this._displayY;
        }
    };

    /* Scene_Map */
    ScSWinter.DefaultZoom = parseFloat(ScSWinter.params["Default zoom for maps"]) || 1.0;
    Scene_Map.prototype.onMapLoaded = function () {
        var s_zoom = parseFloat(s_extractNoteValue($dataMap.note, "Zoom:")) || 0.0;
        if (s_zoom < 0.5) s_zoom = ScSWinter.DefaultZoom;
        if (s_zoom > 1.0) $gameMap.extraScreenTile(s_zoom);
        else $gameMap.extraScreenTile(1);
        if (this._transfer) {
            $gamePlayer.performTransfer();
        }
        if (s_zoom > 1.0) {
            $gameScreen.setZoom(Graphics.width / 2, Graphics.height / 2, s_zoom);
        } else $gameScreen.clearZoom();
        this.createDisplayObjects();
    };

    /* Game_Screen */
    Game_Screen.prototype.updateZoom = function () {
        if (this._zoomDuration > 0) {
            const d = this._zoomDuration;
            const t = this._zoomScaleTarget;
            this._zoomScale = (this._zoomScale * (d - 1) + t) / d;
            $gameMap.extraScreenTile(this._zoomScale);
            this._zoomDuration--;
        }
    };

    /* PluginManager */
    PluginManager.registerCommand("MultiTweaks", "Zoom", (args) => {
        const frameToZoom = +args.FramesToZoom;
        const valueZoom = +args.ZoomValue;
        $gameMap.extraScreenTile(valueZoom);
        $gameScreen.startZoom(
            $gamePlayer.screenX(),
            $gamePlayer.screenY() - $gameMap.tileWidth() / 2,
            valueZoom,
            frameToZoom
        );
    });
})();
