export const useApplicationId = () => {
  const applicationId =
    "APP" + Math.floor(1000 + Math.random() * 9000);

  return applicationId;
};