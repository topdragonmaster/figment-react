import { FilterOption } from '../types'

export const API_KEY = 'SECRET_API_KEY'
export const GET_TX_ENDPOINT = `http://figment-mock-data.figment.network/near/transactions?api_key=${API_KEY}`
export const REFRESH_INTERVAL = 20000 // 20 seconds
export const FilterOptions = [
  { value: FilterOption.Success, label: 'Success' },
  { value: FilterOption.Failure, label: 'Failure' },
  { value: FilterOption.All, label: 'All' },
]
