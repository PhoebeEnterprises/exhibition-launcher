// @ts-check
// Cynhyrchwyd y ffeil hon yn awtomatig. PEIDIWCH Â MODIWL
// This file is automatically generated. DO NOT EDIT

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: Unused imports
import {Create as $Create} from "@wailsio/runtime";

export class ApiGame {
    /**
     * Creates a new ApiGame instance.
     * @param {Partial<ApiGame>} [$$source = {}] - The source object to create the ApiGame.
     */
    constructor($$source = {}) {
        if (!("id" in $$source)) {
            /**
             * @member
             * @type {number}
             */
            this["id"] = 0;
        }
        if (!("name" in $$source)) {
            /**
             * @member
             * @type {string}
             */
            this["name"] = "";
        }
        if (!("cover" in $$source)) {
            /**
             * @member
             * @type {number}
             */
            this["cover"] = 0;
        }

        Object.assign(this, $$source);
    }

    /**
     * Creates a new ApiGame instance from a string or object.
     * @param {any} [$$source = {}]
     * @returns {ApiGame}
     */
    static createFrom($$source = {}) {
        let $$parsedSource = typeof $$source === 'string' ? JSON.parse($$source) : $$source;
        return new ApiGame(/** @type {Partial<ApiGame>} */($$parsedSource));
    }
}

export class Image {
    /**
     * Creates a new Image instance.
     * @param {Partial<Image>} [$$source = {}] - The source object to create the Image.
     */
    constructor($$source = {}) {
        if (!("url" in $$source)) {
            /**
             * @member
             * @type {string}
             */
            this["url"] = "";
        }

        Object.assign(this, $$source);
    }

    /**
     * Creates a new Image instance from a string or object.
     * @param {any} [$$source = {}]
     * @returns {Image}
     */
    static createFrom($$source = {}) {
        let $$parsedSource = typeof $$source === 'string' ? JSON.parse($$source) : $$source;
        return new Image(/** @type {Partial<Image>} */($$parsedSource));
    }
}
