export const incNo = (num) => {
    return {
        type: 'INCREMENT',
        payload: num
    }
}

export const decNo = () => {
    return {
        type: 'DECREMENT'
    }
};
