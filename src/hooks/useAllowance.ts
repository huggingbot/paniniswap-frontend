import { useEffect, useState } from 'react'
import BigNumber from 'bignumber.js'
import { useWeb3React } from '@web3-react/core'
import { Contract } from 'web3-eth-contract'
import { getLotteryAddress } from 'utils/addressHelpers'
import { useCake } from './useContract'

// Retrieve lottery allowance
// export const useLotteryAllowance = () => {
//   const [allowance, setAllowance] = useState(new BigNumber(0))
//   const { account } = useWeb3React()
//   const cakeContract = useCake()

//   useEffect(() => {
//     const fetchAllowance = async () => {
//       const res = await cakeContract.methods.allowance(account, getLotteryAddress()).call()
//       setAllowance(new BigNumber(res))
//     }

//     if (account) {
//       fetchAllowance()
//     }
//     const refreshInterval = setInterval(fetchAllowance, 10000)
//     return () => clearInterval(refreshInterval)
//   }, [account, cakeContract])

//   return allowance
// }

// Retrieve IFO allowance
// eslint-disable-next-line import/prefer-default-export
export const useIfoAllowance = (tokenContract: Contract, spenderAddress: string, dependency?: any): BigNumber => {
  const { account } = useWeb3React()
  const [allowance, setAllowance] = useState(new BigNumber(0))

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await tokenContract.methods.allowance(account, spenderAddress).call()
        setAllowance(new BigNumber(res))
      } catch (e) {
        console.error(e)
      }
    }
    fetch()
  }, [account, spenderAddress, tokenContract, dependency])

  return allowance
}
