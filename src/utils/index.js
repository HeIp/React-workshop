export const nameValidator = (name, length = 20) => {
    const valid = name.length > 0 && name.length < length

    return { valid, error: `Name must be between 1 and ${length} characters` }
}

export const ageValidator = (age) => {
    const valid = !isNaN(parseInt(age, 10))
    return { valid, error: 'Age must be a valid number' }
}

export const urlValidator = (name) => {
    const valid = name.length > 20

    return { valid, error: `URL is invalid` }
}