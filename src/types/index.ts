export interface IData {
  gas?: number
  deposit?: string
  method_name?: string
}

export interface IAction {
  data: IData
  type: string
}

export interface ITransaction {
  id: number
  created_at: string
  updated_at: string
  time: string
  height: number
  hash: string
  block_hash: string
  sender: string
  receiver: string
  gas_burnt: string
  actions: IAction[]
  actions_count: number
  success: boolean
}
