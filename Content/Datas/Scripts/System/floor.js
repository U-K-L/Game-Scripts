/*
    RPG Paper Maker Copyright (C) 2017 Marie Laporte

    This file is part of RPG Paper Maker.

    RPG Paper Maker is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    RPG Paper Maker is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with Foobar.  If not, see <http://www.gnu.org/licenses/>.
*/

// -------------------------------------------------------
//
//  CLASS Floor
//
// -------------------------------------------------------

/** @class
*   A floor in the map.
*   @property {number[]} texture Texture rect of the floor.
*/
function Floor() {
    Land.call(this);
}

Floor.prototype = {

    /** Read the JSON associated to the floor.
    *   @param {Object} json Json object describing the object.
    */
    read: function(json) {
        Land.prototype.read.call(this, json);
    },

    /** Update the geometry associated to this floor.
    *   @returns {THREE.Geometry}
    */
    updateGeometry: function(geometry, position, width, height, i) {
        Land.prototype.updateGeometry.call(this,geometry, position, width, height, i);
    }
}
