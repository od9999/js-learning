/**
 * inputTpye	result
 Null	不转换，直接返回
 Undefined	不转换，直接返回
 Number	不转换，直接返回
 Boolean	不转换，直接返回
 String	不转换，直接返回
 Symbol	不转换，直接返回
 Object	按照下列步骤进行转换
 */

/**
 * ToPrimitive(input [, PreferredType])

 1.如果没有传入PreferredType参数，则让hint的值为'default'
 2.否则，如果PreferredType值为String，则让hint的值为'string'
 3.否则，如果PreferredType值为Number，则让hint的值为'number'
 4.如果input对象有@@toPrimitive方法，则让exoticToPrim的值为这个方法，否则让exoticToPrim的值为undefined
 5.如果exoticToPrim的值不为undefined，则
    a.让result的值为调用exoticToPrim后得到的值
    b.如果result是原值，则返回
    c.抛出TypeError错误
 6.否则，如果hint的值为'default'，则把hint的值重新赋为'number'
 7.返回 OrdinaryToPrimitive(input,hint)

 OrdinaryToPrimitive(input,hint)

 1.如果hint的值为'string',则
    a.调用input对象的toString()方法，如果值是原值则返回
    b.否则，调用input对象的valueOf()方法，如果值是原值则返回
    c.否则，抛出TypeError错误
 2.如果hint的值为'number',则
    a.调用input对象的valueOf()方法，如果值是原值则返回
    b.否则，调用input对象的toString()方法，如果值是原值则返回
    c.否则，抛出TypeError错误
 * @type {Array}
 */
