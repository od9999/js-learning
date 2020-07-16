const PENDING = 'pending';
const RESOLVED = 'resolved';
const REJECTED = 'rejected';

class Promise {
    constructor(executor) {
        this.status = PENDING;
        this.value = undefined;
        this.reason = undefined;
        this.resolvedCallbacks = [];
        this.rejectedCallbacks = [];
        const resolve = value => {
            if (this.status === PENDING) {
                this.value = value;
                this.status = RESOLVED;
                this.resolvedCallbacks.forEach(cb => {
                    cb();
                });
            }
        };
        const reject = reason => {
            if (this.status === PENDING) {
                this.reason = reason;
                this.status = REJECTED;
                this.rejectedCallbacks.forEach(cb => {
                    cb();
                });
            }
        };
        try {
            executor(resolve, reject);
        } catch (error) {
            reject(error);
        }
        
    }
    then(onResolve, onReject) {
        if (this.status === RESOLVED) {
            onResolve(this.value);
        } else if (this.status === REJECTED) {
            onReject(this.reason);
        } else if (this.status === PENDING) {
            this.resolvedCallbacks.push(() => {
                onResolve(this.value);
            });
            this.rejectedCallbacks.push(() => {
                onReject(this.reason);
            });
        }
    }
}