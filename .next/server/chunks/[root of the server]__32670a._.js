module.exports = {

"[externals]/next/dist/compiled/next-server/pages-api.runtime.dev.js [external] (next/dist/compiled/next-server/pages-api.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("next/dist/compiled/next-server/pages-api.runtime.dev.js", () => require("next/dist/compiled/next-server/pages-api.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/fs [external] (fs, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("fs", () => require("fs"));

module.exports = mod;
}}),
"[externals]/path [external] (path, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("path", () => require("path"));

module.exports = mod;
}}),
"[externals]/ytdl-core [external] (ytdl-core, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("ytdl-core", () => require("ytdl-core"));

module.exports = mod;
}}),
"[externals]/child_process [external] (child_process, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("child_process", () => require("child_process"));

module.exports = mod;
}}),
"[project]/utils/videoProcessing.js [api] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// utils/videoProcessing.js
// utils/videoProcessing.js
__turbopack_esm__({
    "cleanupTempFiles": (()=>cleanupTempFiles),
    "downloadVideo": (()=>downloadVideo),
    "transcribeVideo": (()=>transcribeVideo)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_import__("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_import__("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$ytdl$2d$core__$5b$external$5d$__$28$ytdl$2d$core$2c$__cjs$29$__ = __turbopack_import__("[externals]/ytdl-core [external] (ytdl-core, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$child_process__$5b$external$5d$__$28$child_process$2c$__cjs$29$__ = __turbopack_import__("[externals]/child_process [external] (child_process, cjs)");
;
;
;
;
// Helper function to validate YouTube URL
function getYoutubeVideoId(url) {
    try {
        const videoId = __TURBOPACK__imported__module__$5b$externals$5d2f$ytdl$2d$core__$5b$external$5d$__$28$ytdl$2d$core$2c$__cjs$29$__["default"].getVideoID(url);
        return videoId;
    } catch (error) {
        console.error('Invalid YouTube URL:', error);
        return null;
    }
}
async function downloadVideo(videoUrl, outputPath) {
    try {
        console.log('Validating video URL:', videoUrl);
        // Validate YouTube URL first
        const videoId = getYoutubeVideoId(videoUrl);
        if (!videoId) {
            throw new Error('Invalid YouTube URL format');
        }
        console.log('Initiating video download. Video ID:', videoId);
        return new Promise(async (resolve, reject)=>{
            try {
                // Get video info with extended timeout
                const videoInfo = await __TURBOPACK__imported__module__$5b$externals$5d2f$ytdl$2d$core__$5b$external$5d$__$28$ytdl$2d$core$2c$__cjs$29$__["default"].getInfo(videoId, {
                    requestOptions: {
                        timeout: 30000
                    }
                });
                console.log('Video info retrieved successfully');
                // Select the best format that includes both audio and video
                let format = __TURBOPACK__imported__module__$5b$externals$5d2f$ytdl$2d$core__$5b$external$5d$__$28$ytdl$2d$core$2c$__cjs$29$__["default"].chooseFormat(videoInfo.formats, {
                    quality: '18',
                    filter: (format)=>format.container === 'mp4' && format.hasAudio && format.hasVideo
                });
                if (!format) {
                    // Fallback to any MP4 format if the preferred format isn't available
                    format = __TURBOPACK__imported__module__$5b$externals$5d2f$ytdl$2d$core__$5b$external$5d$__$28$ytdl$2d$core$2c$__cjs$29$__["default"].chooseFormat(videoInfo.formats, {
                        filter: (format)=>format.container === 'mp4'
                    });
                }
                if (!format) {
                    throw new Error('No suitable video format found');
                }
                console.log('Selected format:', format.qualityLabel);
                // Create write stream
                const writeStream = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].createWriteStream(outputPath);
                // Download with the selected format
                const stream = __TURBOPACK__imported__module__$5b$externals$5d2f$ytdl$2d$core__$5b$external$5d$__$28$ytdl$2d$core$2c$__cjs$29$__["default"].downloadFromInfo(videoInfo, {
                    format
                });
                let downloadedBytes = 0;
                const totalBytes = format.contentLength;
                stream.on('data', (chunk)=>{
                    downloadedBytes += chunk.length;
                    if (totalBytes) {
                        const progress = (downloadedBytes / totalBytes * 100).toFixed(2);
                        console.log(`Download progress: ${progress}%`);
                    }
                });
                writeStream.on('finish', ()=>{
                    console.log('Download completed');
                    resolve(true);
                });
                stream.on('error', (error)=>{
                    console.error('Download stream error:', error);
                    reject(new Error(`Download stream error: ${error.message}`));
                });
                writeStream.on('error', (error)=>{
                    console.error('Write stream error:', error);
                    reject(new Error(`Write stream error: ${error.message}`));
                });
                // Pipe the download to the file
                stream.pipe(writeStream);
            } catch (error) {
                console.error('Error in download process:', error);
                reject(error);
            }
        });
    } catch (error) {
        console.error('Error in downloadVideo:', error);
        throw new Error(`Failed to download video: ${error.message}`);
    }
}
async function transcribeVideo(videoPath) {
    console.log('Starting transcription for video:', videoPath);
    // Verify the video file exists and has content
    if (!__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(videoPath)) {
        throw new Error('Video file not found');
    }
    const stats = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].statSync(videoPath);
    if (stats.size === 0) {
        throw new Error('Video file is empty');
    }
    return new Promise((resolve, reject)=>{
        const pythonScript = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), 'transcribe_video.py');
        // Use python3 explicitly and add error checking
        const pythonProcess = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$child_process__$5b$external$5d$__$28$child_process$2c$__cjs$29$__["spawn"])('python', [
            pythonScript,
            videoPath
        ], {
            env: {
                ...process.env,
                PYTHONIOENCODING: 'utf-8',
                PYTHONUNBUFFERED: '1'
            }
        });
        let transcriptData = '';
        let errorData = '';
        pythonProcess.stdout.on('data', (data)=>{
            const output = data.toString();
            console.log('Transcription output:', output);
            transcriptData += output;
        });
        pythonProcess.stderr.on('data', (data)=>{
            const error = data.toString();
            console.error('Transcription error:', error);
            errorData += error;
        });
        pythonProcess.on('error', (error)=>{
            console.error('Failed to start Python process:', error);
            reject(error);
        });
        pythonProcess.on('close', (code)=>{
            console.log(`Python process exited with code: ${code}`);
            if (code === 0 && transcriptData.trim()) {
                resolve(transcriptData.trim());
            } else {
                reject(new Error(`Transcription failed: ${errorData || 'No transcript generated'}`));
            }
        });
    });
}
function cleanupTempFiles(filePath) {
    try {
        if (__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(filePath)) {
            __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].unlinkSync(filePath);
            console.log('Cleaned up temp file:', filePath);
        }
    } catch (error) {
        console.error('Error cleaning up temp file:', error);
    }
}
}}),
"[project]/pages/api/transcribe.js [api] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// pages/api/transcribe.js
__turbopack_esm__({
    "config": (()=>config),
    "default": (()=>handler)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$videoProcessing$2e$js__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/utils/videoProcessing.js [api] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_import__("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_import__("[externals]/fs [external] (fs, cjs)");
;
;
;
const config = {
    api: {
        bodyParser: {
            sizeLimit: '500mb'
        },
        responseLimit: '500mb'
    }
};
async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({
            error: "Method not allowed"
        });
    }
    let tempVideoPath = null;
    try {
        const { videoUrl } = req.body;
        if (!videoUrl) {
            return res.status(400).json({
                error: "No video URL provided"
            });
        }
        console.log('Processing request for video URL:', videoUrl);
        // Ensure temp directory exists
        const tempDir = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), 'temp');
        if (!__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(tempDir)) {
            __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].mkdirSync(tempDir, {
                recursive: true
            });
        }
        // Create unique filename
        const tempFileName = `video-${Date.now()}.mp4`;
        tempVideoPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(tempDir, tempFileName);
        console.log('Starting video download to:', tempVideoPath);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$videoProcessing$2e$js__$5b$api$5d$__$28$ecmascript$29$__["downloadVideo"])(videoUrl, tempVideoPath);
        } catch (downloadError) {
            console.error('Download error:', downloadError);
            throw new Error(`Video download failed: ${downloadError.message}`);
        }
        // Verify the downloaded file
        if (!__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(tempVideoPath)) {
            throw new Error('Video file was not created');
        }
        const fileStats = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].statSync(tempVideoPath);
        if (fileStats.size === 0) {
            throw new Error('Downloaded video file is empty');
        }
        console.log('Video downloaded successfully, starting transcription...');
        try {
            const transcript = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$videoProcessing$2e$js__$5b$api$5d$__$28$ecmascript$29$__["transcribeVideo"])(tempVideoPath);
            if (!transcript || typeof transcript !== 'string' || transcript.trim().length === 0) {
                throw new Error('No valid transcript generated');
            }
            console.log('Transcription completed successfully');
            // Clean up the temp file
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$videoProcessing$2e$js__$5b$api$5d$__$28$ecmascript$29$__["cleanupTempFiles"])(tempVideoPath);
            return res.status(200).json({
                transcript
            });
        } catch (transcribeError) {
            throw new Error(`Transcription failed: ${transcribeError.message}`);
        }
    } catch (error) {
        console.error('Error in transcribe API:', error);
        // Clean up temp file on error
        if (tempVideoPath && __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(tempVideoPath)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$videoProcessing$2e$js__$5b$api$5d$__$28$ecmascript$29$__["cleanupTempFiles"])(tempVideoPath);
        }
        return res.status(500).json({
            error: error.message,
            details: ("TURBOPACK compile-time truthy", 1) ? error.stack : ("TURBOPACK unreachable", undefined)
        });
    }
}
}}),
"[project]/node_modules/next/dist/esm/server/route-modules/pages-api/module.compiled.js [api] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    if ("TURBOPACK compile-time truthy", 1) {
        module.exports = __turbopack_require__("[externals]/next/dist/compiled/next-server/pages-api.runtime.dev.js [external] (next/dist/compiled/next-server/pages-api.runtime.dev.js, cjs)");
    } else {
        "TURBOPACK unreachable";
    }
} //# sourceMappingURL=module.compiled.js.map
}}),
"[project]/node_modules/next/dist/esm/server/route-kind.js [api] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "RouteKind": (()=>RouteKind)
});
var RouteKind = /*#__PURE__*/ function(RouteKind) {
    /**
   * `PAGES` represents all the React pages that are under `pages/`.
   */ RouteKind["PAGES"] = "PAGES";
    /**
   * `PAGES_API` represents all the API routes under `pages/api/`.
   */ RouteKind["PAGES_API"] = "PAGES_API";
    /**
   * `APP_PAGE` represents all the React pages that are under `app/` with the
   * filename of `page.{j,t}s{,x}`.
   */ RouteKind["APP_PAGE"] = "APP_PAGE";
    /**
   * `APP_ROUTE` represents all the API routes and metadata routes that are under `app/` with the
   * filename of `route.{j,t}s{,x}`.
   */ RouteKind["APP_ROUTE"] = "APP_ROUTE";
    /**
   * `IMAGE` represents all the images that are generated by `next/image`.
   */ RouteKind["IMAGE"] = "IMAGE";
    return RouteKind;
}({}); //# sourceMappingURL=route-kind.js.map
}}),
"[project]/node_modules/next/dist/esm/build/templates/helpers.js [api] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/**
 * Hoists a name from a module or promised module.
 *
 * @param module the module to hoist the name from
 * @param name the name to hoist
 * @returns the value on the module (or promised module)
 */ __turbopack_esm__({
    "hoist": (()=>hoist)
});
function hoist(module, name) {
    // If the name is available in the module, return it.
    if (name in module) {
        return module[name];
    }
    // If a property called `then` exists, assume it's a promise and
    // return a promise that resolves to the name.
    if ('then' in module && typeof module.then === 'function') {
        return module.then((mod)=>hoist(mod, name));
    }
    // If we're trying to hoise the default export, and the module is a function,
    // return the module itself.
    if (typeof module === 'function' && name === 'default') {
        return module;
    }
    // Otherwise, return undefined.
    return undefined;
} //# sourceMappingURL=helpers.js.map
}}),
"[project]/node_modules/next/dist/esm/build/templates/pages-api.js { INNER_PAGE => \"[project]/pages/api/transcribe.js [api] (ecmascript)\" } [api] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "config": (()=>config),
    "default": (()=>__TURBOPACK__default__export__),
    "routeModule": (()=>routeModule)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$pages$2d$api$2f$module$2e$compiled$2e$js__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/route-modules/pages-api/module.compiled.js [api] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/route-kind.js [api] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/build/templates/helpers.js [api] (ecmascript)");
// Import the userland code.
var __TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$api$2f$transcribe$2e$js__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/pages/api/transcribe.js [api] (ecmascript)");
;
;
;
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$5b$api$5d$__$28$ecmascript$29$__["hoist"])(__TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$api$2f$transcribe$2e$js__$5b$api$5d$__$28$ecmascript$29$__, 'default');
const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$5b$api$5d$__$28$ecmascript$29$__["hoist"])(__TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$api$2f$transcribe$2e$js__$5b$api$5d$__$28$ecmascript$29$__, 'config');
const routeModule = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$pages$2d$api$2f$module$2e$compiled$2e$js__$5b$api$5d$__$28$ecmascript$29$__["PagesAPIRouteModule"]({
    definition: {
        kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$api$5d$__$28$ecmascript$29$__["RouteKind"].PAGES_API,
        page: "/api/transcribe",
        pathname: "/api/transcribe",
        // The following aren't used in production.
        bundlePath: '',
        filename: ''
    },
    userland: __TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$api$2f$transcribe$2e$js__$5b$api$5d$__$28$ecmascript$29$__
}); //# sourceMappingURL=pages-api.js.map
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__32670a._.js.map