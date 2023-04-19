import { AppState } from '../AppState.js'
import { useSockets } from '../env.js'
import { SocketHandler } from '../utils/SocketHandler.js'
class SocketService extends SocketHandler {
  constructor() {
    super()
    if (!useSockets) { return }
    this
      .on('IS_TESTED', this.onTested)
      .on('IS_AUTHED', this.onIsAuthed)
  }

  onTested(payload) {
    AppState.socketData = [...AppState.socketData, payload]
  }

  onIsAuthed(payload) {
    AppState.socketData = [...AppState.socketData, payload]
  }
}

export const socketService = new SocketService()
