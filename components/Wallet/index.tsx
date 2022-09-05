import { FunctionComponent } from 'react'
import { useWeb3React } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
import { useEagerConnect } from '../../hooks/useEagerConnect'
import { useInactiveListener } from '../../hooks/useInactiveListener'
import { injected } from '../../lib/connectors'

const Wallet: FunctionComponent = () => {
  const { activate, chainId, account } = useWeb3React<Web3Provider>()
  // after EagerConnect inactivate Listener
  useInactiveListener(useEagerConnect())

  const connect = () => {
    activate(injected, (error) => {
      console.log(error)
    })
  }

  return (
    <div>
      <p>{chainId}</p>
      <p>{account}</p>
      <button onClick={connect}>connect</button>
    </div>
  )
}

export { Wallet }
