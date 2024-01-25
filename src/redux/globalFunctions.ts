export const getFirstNWords = (inputString: string, n: number): string => {
    const words = inputString.split(' ');
    return words.slice(0, n).join(' ');
  };