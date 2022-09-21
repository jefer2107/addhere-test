
export const capitalize = (name: string) => {
    if (!name) {
        return null;
    }

    const preposition = ['e', 'do', 'dos', 'das', 'de', 'du'];
    var words = name.toLowerCase().split(' ');
    for (var a = 0; a < words.length; a++) {
        var w = words[a];
        words[a] = preposition.includes(w.toLowerCase()) ? w.toLowerCase() : w[0].toUpperCase() + w.slice(1);
    }
    return words.join(' ');
}