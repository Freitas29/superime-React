export function changeValue(e) {
    return {
        type: "FIELD_CHANGED",
        payload: e.target.value
    }
}