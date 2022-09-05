import { FunctionComponent } from 'react'
import { Web3ReactProvider } from '@web3-react/core'
import { ExternalProvider, JsonRpcFetchFunc, Web3Provider } from '@ethersproject/providers'
import { Wallet } from '../components/Wallet'
import { Alert } from '../components/Alert'
import { AlertContext, useAlertProvider } from '../hooks/useAlertContext'
import { ChakraProvider } from '@chakra-ui/react'

const Top: FunctionComponent = () => {
  const getLibrary = (provider: ExternalProvider | JsonRpcFetchFunc) => {
    const library = new Web3Provider(provider)
    library.pollingInterval = 12000
    return library
  }

  return (
    <ChakraProvider>
      <Web3ReactProvider getLibrary={getLibrary}>
        <AlertContext.Provider value={useAlertProvider()}>
          <Alert />
          <Wallet />
        </AlertContext.Provider>
      </Web3ReactProvider>
    </ChakraProvider>
  )
}

export default Top
