export const dtToTime = (dt) => {
    const date = new Date(dt * 1000);
    let time =
        date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    return time;
};
