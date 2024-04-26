function longestSubstring(s) {
    let maxLength = 0;
    let start = 0;
    const seen = {};

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char in seen && seen[char] >= start) {
            start = seen[char] + 1;
        } else {
            maxLength = Math.max(maxLength, i - start + 1);
        }
        seen[char] = i;
    }

    return maxLength;
}

module.exports = { longestSubstring };