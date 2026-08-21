type Concat = {
    <T>(left: T[], right: T[]): T[];
    <T>(left: T[]): (right: T[]) => T[];
    (left: string, right: string): string;
    (left: string): (right: string) => string;
};
/**
 * Concatenates two arrays or two strings.
 * @param left - First array/string segment.
 * @param right - Second array/string segment.
 * @returns A combined array/string; throws when argument types differ.
 *
 * @example
 * concat('tikka-', 'js') // 'tikka-js'
 */
declare const concat: Concat;
export default concat;
//# sourceMappingURL=concat.d.ts.map