// eslint-disable-next-line import/prefer-default-export
export const highlightTag = (strings, ...values) => {
  let str = '';
  strings.forEach((string, index) => {
    if (index < strings.length - 1) {
      str += `${string} <span class='highlight'>${values[index] || ''}</span>`;
    }
  });
  return str.trim();
};
