export function validator(data, config) {
    const errors = {};
    function validate(validateMethod, data, config) {
        let statusValidate;
        switch (validateMethod) {
            case "isRequired":
                statusValidate = data.trim() === "";
                break;

            case "isEmail": {
                const emailRegExp = /^\S+@\S+\.\S+$/g;
                statusValidate = !emailRegExp.test(data);
                break;
            }
            case "isCapitalSymbol": {
                const capitalRegExp = /[A-Z]+/g;
                statusValidate = !capitalRegExp.test(data);
                break;
            }
            case "isContainDigit": {
                const digitRegExp = /\d+/g;
                statusValidate = !digitRegExp.test(data);
                break;
            }
            case "min": {
                statusValidate = data.length < config.value;
                break;
            }

            default:
                break;
        }
        if (statusValidate) return config.message;
    }

    for (const filedName in data) {
        for (const validateMetod in config[filedName]) {
            const error = validate(
                validateMetod,
                data[filedName],
                config[filedName][validateMetod]
            );
            if (error && !errors[filedName]) {
                errors[filedName] = error;
            }
        }
    }
    return errors;
}
