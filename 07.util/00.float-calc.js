const FloatCalc = (() => {
    const add = (num1, num2) => {
        let length1, length2, temp;
        try {
            length1 = num1.toString().split('.')[1].length;
        } catch (error) {
            length1 = 0;
        }
        try {
            length2 = num2.toString().split('.')[1].length;
        } catch (error) {
            length2 = 0;
        }
        let max = Math.max(length1, length2);

        temp = Math.pow(10, max);
        let result = (Math.round(num1 * temp + num2 * temp) / temp).toFixed(max);
        console.log(typeof result);
        return result;
    };

    const sub = (num1, num2) => {
        let length1, length2, temp;
        try {
            length1 = num1.toString().split('.')[1].length;
        } catch (error) {
            length1 = 0;
        }
        try {
            length2 = num2.toString().split('.')[1].length;
        } catch (error) {
            length2 = 0;
        }
        let max = Math.max(length1, length2)
        temp = Math.pow(10, max);

        let result = (Math.round(num1 * temp - num2 * temp) / temp).toFixed(max);
        console.log(typeof result);
        return result;
    };

    const mul = (num1, num2) => {
        let length = 0;
        let int1;
        let int2;
        let intDot1;
        let intDot2;

        try {
            let numArr1 = num1.toString().split('.');
            int1 = Number(numArr1[0]);
            length += numArr1[1].length;
        } catch (error) { }
        try {
            let numArr2 = num2.toString().split('.');
            int2 = Number(numArr2[0]);
            length += numArr2[1].length;


        } catch (error) { }

        intDot1 = Number(num1.toString().replace(/^\d*\./, ''));
        intDot2 = Number(num2.toString().replace(/^\d*\./, ''));
        let result = int1 * int2 + (intDot1 * intDot2 / Math.pow(10, length));
        console.log(typeof result);
        return result.toString();
    };

    const div = (num1, num2) => {
        var t1, t2, r1, r2;
        try {
            t1 = num1.toString().split('.')[1].length;
        } catch (error) {
            t1 = 0;
        }

        try {
            t2 = num2.toString().split('.')[1].length;
        } catch (error) {
            t2 = 0;
        }
        r1 = Number(num1.toString().replace('.', ''));
        r2 = Number(num2.toString().replace('.', ''));
        let result = (r1 / r2) * Math.pow(10, t2 - t1);
        console.log(typeof result);
        return result.toString();

    };
    return {
        add,
        sub,
        mul,
        div
    }

})();

console.log(FloatCalc.add(-2.1, 0.2));
console.log(FloatCalc.sub(3.3, 0.1));
console.log(FloatCalc.mul(2.3, 5.2));
console.log(FloatCalc.div(2.4, 0.2));
