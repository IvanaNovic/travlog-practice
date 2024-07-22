export const splitTitle = (title: string, word: string) => {
    const index = title.indexOf(word);
    if (index === -1) return [title]; // If the word is not found, return the whole title as a single element
    return [title.substring(0, index), title.substring(index)];
};
