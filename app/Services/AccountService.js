import { AppState } from '../AppState.js'
import { Account } from '../Models/Account.js'
import { logger } from '../utils/Logger.js'
import { server } from './AxiosService.js'

class AccountService {
  async getAccount() {
    try {
      const res = await server.get('/account')
      AppState.account = new Account(res.data)
    } catch (err) {
      logger.error(err)
    }
  }

  async editAccount(accountData) {
    const res = await server.put('/account', accountData)
    AppState.account = new Account(res.data)
  }

}

export const accountService = new AccountService()
