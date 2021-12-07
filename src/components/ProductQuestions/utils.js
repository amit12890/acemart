export const getDateString = (dateNumber) => {
    const dayCount = Number(dateNumber);

    if (!dayCount || dayCount < 0) {
        return "today";
    }
    if (dayCount < 31) {
        return `${dayCount} days ago`;
    }
    else if (dayCount <= 365) {
        return `${Math.round(dayCount / 30)} months ago`;
    }
    else {
        let months = Math.round((dayCount % 365) / 30);
        months = months ? `and ${months} months ago` : "";
        return `${Math.floor(dayCount / 365)} years ${months}`
    }
}