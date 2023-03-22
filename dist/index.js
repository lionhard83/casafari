"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFeed = exports.deleteFeed = exports.createFeed = exports.getFeeds = exports.getTypes = exports.setToken = void 0;
const axios_1 = __importDefault(require("axios"));
const baseUrl = "https://api.casafari.com/v1";
const config = { headers: { Authorization: "" } };
const setToken = (token) => {
    config.headers.Authorization = token;
};
exports.setToken = setToken;
const getTypes = () => __awaiter(void 0, void 0, void 0, function* () { return (yield axios_1.default.get(`${baseUrl}/references/types`, config)).data; });
exports.getTypes = getTypes;
const getFeeds = () => __awaiter(void 0, void 0, void 0, function* () { return (yield axios_1.default.get(`${baseUrl}/listing-alerts/feeds`, config)).data; });
exports.getFeeds = getFeeds;
const createFeed = (body) => __awaiter(void 0, void 0, void 0, function* () {
    return (yield axios_1.default.post(`${baseUrl}/listing-alerts/feeds`, body, config)).data;
});
exports.createFeed = createFeed;
const deleteFeed = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return (yield axios_1.default.delete(`${baseUrl}/listing-alerts/feeds/${id}`, config)).data;
});
exports.deleteFeed = deleteFeed;
const getFeed = (id) => __awaiter(void 0, void 0, void 0, function* () { return (yield axios_1.default.get(`${baseUrl}/listing-alerts/feeds/${id}`, config)).data; });
exports.getFeed = getFeed;
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        (0, exports.setToken)("Token 2147832dfafc6cf1e5ad619cb1c255b5ebbf722c");
        // console.log(await getTypes());
        // console.log(
        //   await createFeed({ name: "Test request", filter: { operation: "sale" } })
        // );
        console.log(yield (0, exports.deleteFeed)(31227));
        console.log(yield (0, exports.getFeeds)());
    }
    catch (err) {
        console.error(err);
    }
}))();
