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
var getThumbnail = function (filePath, imageOpts, opts, success, fail) {
  // filePath 图片临时路径 imageOpts 图片宽高  opts 压缩参数：最大宽高压缩比例
  opts = opts || {}
  opts.maxWidth = opts.maxWidth || 160
  opts.maxHeight = opts.maxHeight || 160
  opts.quality = opts.quality || 0.5
  var pos = calcPosition(imageOpts.width, imageOpts.height, opts);
  var canWidth = pos.w > opts.maxWidth ? opts.maxWidth : pos.w;
  var canHeight = pos.h > opts.maxHeight ? opts.maxHeight : pos.h;
  wx.createSelectorQuery()
    .select('#myCanvas')
    .fields({
      node: true,
      size: true
    })
    .exec((res) => {
      // Canvas 对象
      const canvas = res[0].node
      const context = canvas.getContext('2d')
      canvas.width = canWidth
      canvas.height = canHeight
      const image = canvas.createImage()
      image.onload = () => {
        context.clearRect(0, 0, canWidth, canHeight)
        context.drawImage(image, pos.x, pos.y, canWidth, canHeight)
        wx.canvasToTempFilePath({
          x: pos.x,
          y: pos.y,
          width: canWidth,
          height: canHeight,
          destWidth: canWidth,
          destHeight: canHeight,
          quality: opts.quality,
          canvasId: canvas.id,
          canvas: canvas,
          success(image) {
            try {
              const res = wx.getFileSystemManager().readFileSync(image.tempFilePath, 'base64')
              success(res)
            } catch (e) {
              fail(e)
            }
          },
          fail(error) {
            fail(error)
          }
        })
      }
      image.src = filePath // 要加载的图片 url
    })
};
module.exports = getThumbnail