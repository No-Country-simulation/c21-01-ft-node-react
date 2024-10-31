export const handleDataSave = (data, dataType) => {
  try {
    const storedData = JSON.parse(localStorage.getItem(dataType)) || [];

    const updateData = [...storedData, ...data];
    localStorage.setItem(dataType, JSON.stringify(updateData));

    return { success: true };
  } catch (error) {
    return { success: false, error };
  }
};
