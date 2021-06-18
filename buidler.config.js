usePlugin('@nomiclabs/buidler-waffle')
usePlugin('@nomiclabs/buidler-ethers')
usePlugin("@nomiclabs/buidler-web3")
usePlugin('@openzeppelin/buidler-upgrades')
require('dotenv').config()

const privateKey = '0x' + process.env.PRIVATE_KEY;
const etherscan = process.env.ETHERSCAN;
const alchemyKey = process.env.ALCHEMY_KEY;

// This is a sample Buidler task. To learn how to create your own go to
// https://buidler.dev/guides/create-task.html
task('accounts', 'Prints the list of accounts', async () => {
  const accounts = await ethers.getSigners()

  for (const account of accounts) {
    console.log(await account.getAddress())
  }
})

// You have to export an object to set up your config
// This object can have the following optional entries:
// defaultNetwork, networks, solc, and paths.
// Go to https://buidler.dev/config/ to learn more
module.exports = {
  defaultNetwork: 'localhost',
  networks: {
    local: {
      url: 'http://localhost:8545',
    },
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/C4hTK_itEZDH3LeatOYN-HRwL2XtqJF2`,
      accounts: [privateKey]
    }
  },
  etherscan: {
    apiKey: etherscan
  },
  solc: {
    version: '0.6.12',
  },
  paths: {
      tests: './test/unit',
  },
}
