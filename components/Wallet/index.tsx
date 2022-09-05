import { FunctionComponent } from 'react'
import { useWeb3React } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
import { Button } from '@chakra-ui/react'
import { useEagerConnect } from '../../hooks/useEagerConnect'
import { useInactiveListener } from '../../hooks/useInactiveListener'
import { useAlertContext } from '../../hooks/useAlertContext'
import { injected } from '../../lib/connectors'

const Wallet: FunctionComponent = () => {
  const { activate } = useWeb3React<Web3Provider>()
  const { setAlert } = useAlertContext()
  // after EagerConnect inactivate Listener
  useInactiveListener(useEagerConnect())

  const connect = () => {
    activate(injected, (e) => {
      // if connect wallet is failed, show alert.
      if (setAlert) setAlert({ message: e.message, status: 'error' })
      else throw e
    })
  }

  return <Button onClick={connect}>connect</Button>
}

export { Wallet }
