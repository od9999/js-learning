const promisify = cb => {
    return (...args) => {
        return new Promise((resolve, reject) => {
            cb(...args, (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    };
};