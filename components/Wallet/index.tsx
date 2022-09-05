import { FunctionComponent, useState, useEffect } from 'react'
import { useWeb3React } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
import { formatEther } from '@ethersproject/units'
import { Button } from '@chakra-ui/react'
import { useEagerConnect } from '../../hooks/useEagerConnect'
import { useInactiveListener } from '../../hooks/useInactiveListener'
import { useAlertContext } from '../../hooks/useAlertContext'
import { injected } from '../../lib/connectors'
import { shortAddress } from '../../utils'
import { Network } from './Network'

const Wallet: FunctionComponent = () => {
  const [balance, setBalance] = useState<string>('?')
  const { active, account, chainId, library, activate } = useWeb3React<Web3Provider>()
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

  useEffect(() => {
    if (account && library)
      library
        .getBalance(account)
        .then((balance) => setBalance(formatEther(balance).slice(0, 5)))
        .catch((e) => {
          setBalance('?')
          if (setAlert) setAlert({ message: e.message, status: 'error' })
          else throw e
        })
  }, [account, library, chainId, setAlert])

  return active ? (
    <div>
      <Network />
      <Button disabled>{balance}</Button>
      <Button disabled>{shortAddress(account as string)}</Button>
    </div>
  ) : (
    <div>
      <Network />
      <Button onClick={connect}>connect</Button>
    </div>
  )
}

export { Wallet }
