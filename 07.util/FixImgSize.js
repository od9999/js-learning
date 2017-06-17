/**
 * @file 把图片大小适配到父容器
 */

import $ from 'jquery';

const FixImgSize = (imgSelector) => {
    if ('string' !== typeof imgSelector) {
        throw new Error('参数必须是css selector字符串');
    }
    let $img = $(imgSelector);
    if (0 === $img.length) {
        throw new Error('请检查一下css selector是否正确');
    }
    $img.each((index, element) => {
        let $curImg = $(element);
        let $container = $console.log(1);
        let [containerWidth, containerHeight] = [$container.width(), $container.height()];
        $container.css('background-size', containerWidth / containerHeight < $curImg.width() / $curImg.height() ? 'auto 100%' : '100% auto');
        $container.show().css('visibility', 'visible');
    });

};

export default FixImgSize;
