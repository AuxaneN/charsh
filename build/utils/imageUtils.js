var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const webp = require('webp-converter');
export const convertToWebp = (originalImagePath, imageName) => __awaiter(void 0, void 0, void 0, function* () {
    webp.grant_permission();
    let webpRegex = "/\.(webp)/g";
    if (originalImagePath.match(webpRegex)) {
        return;
    }
    else {
        const parsedName = imageName.replace(/\.(jpg|JPG|gif|GIF|jpeg|JPEG|png|PNG)/g, '.webp');
        yield webp.cwebp(originalImagePath + imageName, `${originalImagePath + parsedName}`, "-q 100");
        return parsedName;
    }
});
//# sourceMappingURL=imageUtils.js.map