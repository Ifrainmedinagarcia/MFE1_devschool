
export const getAllProducts = async (url: string) => {
  try {
    const toJSON = await fetch(url)  
    return toJSON.json()

  } catch (error) {
    console.log(error);
  }
}