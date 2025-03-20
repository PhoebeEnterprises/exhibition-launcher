// @ts-check
// Cynhyrchwyd y ffeil hon yn awtomatig. PEIDIWCH Â MODIWL
// This file is automatically generated. DO NOT EDIT

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: Unused imports
import {Call as $Call, Create as $Create} from "@wailsio/runtime";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: Unused imports
import * as $models from "./models.js";

/**
 * @returns {Promise<void> & { cancel(): void }}
 */
export function GenerateSettings() {
    let $resultPromise = /** @type {any} */($Call.ByID(2304209143));
    return $resultPromise;
}

/**
 * @returns {Promise<$models.Settings> & { cancel(): void }}
 */
export function GetSettings() {
    let $resultPromise = /** @type {any} */($Call.ByID(4104139690));
    let $typingPromise = /** @type {any} */($resultPromise.then(($result) => {
        return $$createType0($result);
    }));
    $typingPromise.cancel = $resultPromise.cancel.bind($resultPromise);
    return $typingPromise;
}

/**
 * @returns {Promise<void> & { cancel(): void }}
 */
export function SaveSettings() {
    let $resultPromise = /** @type {any} */($Call.ByID(488144021));
    return $resultPromise;
}

// Private type creation functions
const $$createType0 = $models.Settings.createFrom;
