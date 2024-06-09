export const validateUserLoginForm = ({username, password}) => {
    const errors = {};
    if (!username) {
        errors.username = 'Must be longer that 6 characters';
    }
    else if (username.length < 6) {
        errors.username = 'Must be longer than 6 characters';
    }
    else if (username.length > 15) {
        errors.username = 'Must be less than 15 characters';
    }
    if (!password) {
        errors.password = 'Must be longer than 8 characters';
    }
    else if (password.length < 8) {
        errors.password = 'Must be longer than 8 characters';
    }
    return errors;
}

