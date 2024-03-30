export function toSnakeCase(str) {
  // Replace any spaces with underscores
  str = str.replace(/\s/g, "_");

  // Convert the string to lowercase
  str = str.toLowerCase();

  // Replace any remaining non-alphanumeric characters with underscores
  str = str.replace(/[^a-z0-9_]/g, "_");

  // Replace consecutive underscores with a single underscore
  str = str.replace(/__+/g, "_");

  // Trim any leading or trailing underscores
  str = str.replace(/^_+|_+$/g, "");

  return str;
}

export function toTitleCase(str) {
  // Split the string into an array of words
  const words = str.toLowerCase().split(" ");

  // Capitalize the first letter of each word
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }

  // Join the words back into a single string
  return words.join(" ");
}
