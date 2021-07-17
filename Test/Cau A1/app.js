const allLongestStrings = (arr = []) => {
    return arr.reduce((acc, val, ind) => {
        if (!ind || acc[0].length < val.length) {
            return [val];
        }
        if (acc[0].length === val.length) {
            acc.push(val);
        }
        return acc;
    }, []);
};

let arr = ["Binh", "Hung", "Phuoc", "Khanh"];
console.log(allLongestStrings(arr));


