'use strict';

(async () => {
    console.log(this);
})();

(async function () {
    console.log(this === global);
    console.log(this);
})();