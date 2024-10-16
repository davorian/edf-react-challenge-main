// Helper function to get the nested value based on the path without using `any`
function getNestedValue<T>(obj: T, path: string): unknown {
    return path.split('.').reduce<unknown>((value, key) => {
        if (typeof value === 'object' && value !== null && key in value) {
            return (value as Record<string, unknown>)[key]
        }
        return undefined
    }, obj)
}

// Sorting function that handles both string and number types
export const sortOn = <T>(arr: T[] | null, path: string, order: 'ASC' | 'DESC' = 'ASC'): T[]  | null=> {
    if(!arr) return null
    return arr.sort((a, b) => {
        const valueA = getNestedValue(a, path)
        const valueB = getNestedValue(b, path)

        // If either value is undefined, we treat them as equal
        if (valueA === undefined || valueB === undefined) return 0

        // Compare numbers directly if both values are numbers
        if (typeof valueA === 'number' && typeof valueB === 'number') {
            return order === 'ASC' ? valueA - valueB : valueB - valueA
        }

        // Compare strings in a case-insensitive manner if both are strings
        if (typeof valueA === 'string' && typeof valueB === 'string') {
            const strA = valueA.toUpperCase()
            const strB = valueB.toUpperCase()
            if (strA < strB) return order === 'ASC'?  -1 : 1
            if (strA > strB) return order === 'ASC'? 1 : -1
            return 0
        }

        return 0 // If values are not comparable, treat them as equal
    })
}