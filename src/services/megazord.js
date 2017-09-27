const BASE_URL = 'https://bumblebee-da-carreta.herokuapp.com'

export const fetchAllCongressmen = async () => {
  const response = await fetch(`${BASE_URL}/congressman`)
  return response.json()
}
