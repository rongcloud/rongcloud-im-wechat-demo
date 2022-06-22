var calcPosition = function (width, height, opts) {
    var isheight = width < height;
    var scale = isheight ? height / width : width / height;
    var zoom, x = 0,
        y = 0,
        w, h;
    var gtScale = function () {
        if (isheight) {
            zoom = width / 100;
            w = 100;
            h = height / zoom;
            y = (h - opts.maxHeight) / 2;
        } else {
            zoom = height / 100;
            h = 100;
            w = width / zoom;
            x = (w - opts.maxWidth) / 2;
        }
        return {
            w: w,
            h: h,
            x: -x,
            y: -y
        };
    };
    var ltScale = function () {
        if (isheight) {
            zoom = height / opts.maxHeight;
            h = opts.maxHeight;
            w = width / zoom;
        } else {
            zoom = width / opts.maxWidth;
            w = opts.maxWidth;
            h = height / zoom;
        }
        return {
            w: w,
            h: h,
            x: -x,
            y: -y
        };
    };
    return scale > opts.scale ? gtScale() : ltScale();
};
var getThumbnail =  function (filePath, imageOpts, opts) {
    // filePath 图片临时路径 imageOpts 图片宽高  opts 压缩参数：最大宽高压缩比例
    opts = opts || {}
    opts.maxWidth = opts.maxWidth || 160
    opts.maxHeight = opts.maxHeight || 160
    opts.quality = opts.quality || 0.5
    var pos = calcPosition(imageOpts.width, imageOpts.height, opts);
    var canWidth = pos.w > opts.maxWidth ? opts.maxWidth : pos.w;
    var caneight = pos.h > opts.maxHeight ? opts.maxHeight : pos.h;
    // 创建离屏 2D canvas 实例
    const canvas = wx.createOffscreenCanvas({type: '2d', width: canWidth, height: caneight})
    // 获取 context。注意这里必须要与创建时的 type 一致
    const context = canvas.getContext('2d')
    // 创建一个图片
    const image = canvas.createImage()
    // 等待图片加载
    return new Promise((resolve, reject) => {
        image.onload = () =>{
            // 把图片画到离屏 canvas 上
            context.clearRect(0, 0, canWidth, caneight)
            context.drawImage(image, pos.x, pos.y, canWidth, caneight)
            wx.canvasToTempFilePath({
                x: pos.x,
                y: pos.y,
                width: canWidth,
                height: caneight,
                destWidth: canWidth,
                destHeight: caneight,
                quality: opts.quality,
                canvas: canvas,
                success(image) {
                    try {
                        const res = wx.getFileSystemManager().readFileSync(image.tempFilePath, 'base64')
                        resolve(res)
                    } catch (e) {
                        reject(e)
                    }
                }
            })
        }
        image.src = filePath // 要加载的图片 url
    })
};
module.exports = getThumbnail