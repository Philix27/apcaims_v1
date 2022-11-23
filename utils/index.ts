const sortByDate = (a: string, b: string) => {
  return new Date(b).getTime() - new Date(a).getTime();
};

function handleLength(value: string, maxLength: number) {
  if (value.length > maxLength) {
    return value.slice(0, 11);
  }
}

export default { sortByDate, handleLength };
