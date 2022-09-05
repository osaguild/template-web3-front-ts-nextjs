import { InjectedConnector } from '@web3-react/injected-connector'
import { networks } from '../const'

const injected = new InjectedConnector({ supportedChainIds: networks.map((network) => network.chainId) })

export { injected }
