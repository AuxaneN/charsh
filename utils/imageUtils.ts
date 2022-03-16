const webp = require('webp-converter')

export const convertToWebp = async (originalImagePath:string, imageName:string) =>{
  webp.grant_permission();

  let webpRegex = "/\.(webp)/g"

if (originalImagePath.match(webpRegex)){
    return
  } else {
      const parsedName = imageName.replace(/\.(jpg|JPG|gif|GIF|jpeg|JPEG|png|PNG)/g, '.webp')

      await webp.cwebp(originalImagePath + imageName,`${originalImagePath + parsedName}`,"-q 100");

      return parsedName;
  }
}
