import fetchMock from 'jest-fetch-mock'
import { fetchAllCongressmen } from '../../../src/services/bumblebee'
import congressmenFixture from '../../fixtures/congressmenFixture.json'

fetch = fetchMock

describe('bumblebee API tests', () => {
  it('should return all congressmen as object', async () => {
    fetch.mockResponse(JSON.stringify(congressmenFixture))
    const congressmen = await fetchAllCongressmen()
    expect(fetch).toHaveBeenCalledWith('https://bumblebee-da-carreta.herokuapp.com/congressman')
    expect(congressmen).toEqual(congressmenFixture)
  })
})
