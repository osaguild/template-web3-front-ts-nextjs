import { InjectedConnector } from '@web3-react/injected-connector'

const chainId = {
  mainnet: 1,
  goerli: 5,
}

const injected = new InjectedConnector({ supportedChainIds: [chainId.mainnet, chainId.goerli] })

export { injected, chainId }
