import { useIntl } from "react-intl";
const bundle = {};
bundle.getText = function (id) {
    try {
        const intl = useIntl();
        const text = intl.formatMessage({ id });
        return text ? text : id;
    } catch (error) {
        return id;
    }
};

module.exports = bundle;