/**
 * Resolve link properties
 *
 * @param {string} link
 */
export default link => {
console.log("🚀 ~ file: resolveLinkProps.js ~ line 7 ~ link", link)
    let isExternalUrl;
    const linkProps = {};

    try {
        const baseUrlObj = new URL(process.env.MAGENTO_BACKEND_URL);
        const urlObj = new URL(link);
        isExternalUrl = baseUrlObj.host !== urlObj.host;

        if (isExternalUrl) {
            linkProps['href'] = link;
        } else {
            // linkProps['to'] = urlObj.pathname;
            linkProps['to'] = link;
        }
    } catch (e) {
        linkProps['href'] = link;
    }

    return linkProps;
};
