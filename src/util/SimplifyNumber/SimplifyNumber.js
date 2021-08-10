export const simplifyNum = (num) => {
    if (num > 999) {
        return (num/1000).toFixed(1).concat("K");
    } else {
        return num;
    }
}