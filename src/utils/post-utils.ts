export const getPostColorFromCategory = (category: string) => {
  switch (category) {
    case "Innovation":
      return "cyan";
    case "Security":
      return "violet";
    case "Sustainability":
      return "lime";
    default:
      return "fuchsia";
  }
};
