export const useValidationErrors = (errors) => {
    return errors.reduce((acc, value) => {
        let editedMessage = ''
        switch (value.$message) {
            case 'Value is required':
                editedMessage = 'Field is required';
                break;
            case 'Value is not a valid email address':
                editedMessage = 'Enter a valid email address';
                break;
            default: editedMessage = value.$message
        }
        return { ...acc, [value.$property]: editedMessage }
    }, {})
}
