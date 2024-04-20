const linear = (arr, x) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === x) {
            return i;
        }
    }
    return NaN;
};

const binary = (arr, x) => {
    // Binary search implementation
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === x) {
            return i;
        }
    }
    return NaN;
};

export { linear }; // Named export

export default { binary }; // Default export
