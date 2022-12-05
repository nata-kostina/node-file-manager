export const parseArgs = (key) => {
  const args = process.argv.slice(2).join(' ');
  const regexp = new RegExp(`(?<=--${key}=)\\w+`, "gi");
  const matches = args.match(regexp);
  return matches ? matches.pop() : '';
};
