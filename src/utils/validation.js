let required = (propertyType) => {
    return v => v && v.length > 0 || `Je moet een ${propertyType} invullen!`
}
let minLength = (propertyType, minLength) => {
    return v => v && v.length >= minLength || `${propertyType} moet minimaal ${minLength} tekens lang zijn!`
}
let maxLength = (propertyType, maxLength) => {
    return v => v && v.length <= maxLength || `${propertyType} moet minder dan ${maxLength} tekens lang zijn!`
}
let emailFormat = () => {
    return v => v && /.+@.+/.test(v) || "Moet een email adres zijn!"
}
let uniqueName = (items) => {
    return v => v && !items.some(item => item.name === v) || `${v} bestaat al!`
}
let largerThanZero = (propertyType) => {
    return v => v && parseInt(v) > 0 || `${propertyType} moet groter zijn dan 0`
}
let largerThanValue = (propertyType, otherPropertyType, value) => {
    return v => v && parseInt(v) > value || `${propertyType} moet groter zijn dan ${otherPropertyType}`
}
let smallerThanValue = (propertyType, otherPropertyType, value) => {
    return v => v && parseInt(v) < value || `${propertyType} moet kleiner zijn dan ${otherPropertyType}`
}
export default {
    required,
    minLength,
    maxLength,
    emailFormat,
    uniqueName,
    largerThanZero,
    largerThanValue,
    smallerThanValue
}