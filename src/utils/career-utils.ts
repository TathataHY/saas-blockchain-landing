export const getCareerColorFromCareerType = (type: string) => {
  switch (type) {
    case "Contract":
      return "violet";
    case "Part Time":
      return "cyan";
    case "Full Time":
      return "lime";
    default:
      return "fuchsia";
  }
};

export const getCareerColorFromCareerCategory = (category: string) => {
  switch (category) {
    case "Engineering":
      return "lime";
    case "Marketing":
      return "violet";
    case "Product":
      return "cyan";
    default:
      return "fuchsia";
  }
};
