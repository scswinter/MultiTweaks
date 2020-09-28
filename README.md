# MultiTweaks
Rpg Maker MZ plugin - MultiTweaks: general, map, zoom, battle, enemies, audio, options, efficiency, etc.


# Description

This script allows you to incorporate some improvements in the game engine (as the needs of my game requires it). Now this script can do the next things:

## General

 * Start in fullscreen mode. This plugin rewrites the standard fullscreen to natively perform it in nwjs.
 * Show or hide the blink selection effect.
 * Render half of computed frames to avoid effekseer lag only when effekseer animation is playing. In other cases will render 2 of 3 frames to get more fluid experience in mid-devices. Now you can configure it from the plugin options!
 * Added an in-game option to turno on/off the optimization.
 * Disable F5 and F8.
 * Disable fastfoward.
 * Force disable scrollbars.
 * Pixel-rendering, with two levels of pixelating.

## Map

 * Define the tilemap animation speed.
 * Map zoom. This script allows you to show maps with a default zoom. When activated the zoom of the map changes. Specify the map zoom using in the map notetag box the notetag Zoom:X where X is a decimal number greater than 1. You also have a plugin command usable in events to create dinamically zoom effects. Note that enter in the menu will reset the zoom to the map default one.
 * Fix sprite black lines? This option will cut the sprites one pixel in each side.
 * Fix map encounter zoom? Deactivate this option if you changed the default encounter zoom effect.
 * Always free camera. When activated, the camera will never be blocked by the edges of the map (as it works with the zoom on).

## Options (won't work, but not interfere, with VisuMZ Options Plugin)

 * Configure the ON/OFF options text. Remove options and set the default values of them.
 * Added a "Global Volume" option to the window options, and the possibility to hide the secondary volume controls. Also, the option can work in a quadratic function, improving the perception of changing volume.

## Battle

 * Weather in battle.
 * Auto select targets when only are one actor/enemy or when skill/item targets to all.
 * Enemies use actor classes (scaling their power and rewards). When activated the power of the enemies are scaled using actor classes. Specify the actor class using in the enemy notetag box the notetag EnemyRole:X where X is the number of the actor class. If it's not specified the default enemy stats will be used. Note that, in order to allow boss-enemy types, the HP stat always is multiplied by 10.
 * Actor battler image zoom. You can configure some aspects of this feature.

## Audio

 * Stop the audio and music when the game is out focus in all platforms.
 * Audio cache system that stores in cache recently used audio files, and also adds the possibility of preemptive cache future-audio files in events, map and battle (skills and items).
 * Force to play a specified Bgm and Bgs on all maps when a switch is ON. The list of bgm, bgs and switches can be specify in the parameters of the plugin.


# License

The MIT License. Credits to ScSWinter.


# Known bugs

* Now, zoomed maps can only be both-sides looped maps or free-camera no-looped maps. I just don't get with the cámera jumps at the edge of the map, when open a new scene or in map transfers. Any idea?


# Note and Changelog

Please put in this thread your experience with the plugin, errors that arise or anything else related.
* v1.7.2 Minor fixes.
* v1.7.1 Added option to hide the scrollbars.
* v1.6.7 Revamped pixel option and solved bugs.
* v1.6.1 Added battler zoom options and bugfixes.
* v1.5.3 Multiple audio playing bugfix.
* v1.5.2 Improved optimization and option added.
* v1.4.3 Native fullscreen, zoom fixes and better game optimization.
* v1.3.5 Fixed event zoom command. It works now!
* v1.3.3 Zoom options not readed fixed.
* v1.3.2 Lots of bugfixes.
* v1.3.0 Incorporating the zoom plugin.
* v1.1.0 Performance option.
* v1.0.2 Fix audio replaying bug.
* v1.0.1 Initial public release.

