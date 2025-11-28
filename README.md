# Toy ERC20 Token

A minimal ERC20 token project built with Hardhat and OpenZeppelin — perfect for learning, testing, or just having fun on local/test networks.

## Project Overview

This is a simple but fully functional ERC20 token. Upon deployment, it mints a humorous initial supply controlled by the constant `ot`.

Yes, the deployer receives exactly `ot × 10^decimals()` tokens.
Because why not? :p

## Features

- Fully ERC20 compliant
- Built with battle-tested OpenZeppelin Contracts
- 100% test coverage
- Written in TypeScript
- Ready for local Hardhat node or testnets

## Tech Stack

- Hardhat – Development environment
- OpenZeppelin Contracts – Secure & audited library
- TypeScript – Type safety
- Ethers.js – Ethereum interaction
- Chai + hardhat-chai-matchers – Testing

## Prerequisites

- Node.js ≥ 18
- npm / yarn / pnpm

## Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Compile contracts

```bash
npm run compile
# or
npx hardhat compile
```

### 3. Run tests

```bash
npm test
# or
npx hardhat test
```

### 4. Deploy locally

#### Start a local Hardhat node (terminal 1)

```bash
npm run node
# or
npx hardhat node
```

#### Deploy the meme token (terminal 2)

```bash
npm run deploy:local
# or
npx hardhat run scripts/deploy.ts --network localhost
```

Example output:

```
Deploying contracts with account: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
ToyToken deployed to: 0x5FbDB2315678afecb367f032d93F642f64180aa3
Initial supply: 1000 × 10¹⁸ (because ot = 1000)
```

## The Legendary "ot" Constant

In `contracts/ToyToken.sol`:

```solidity
uint256 public constant ot = 1000;

constructor() ERC20("ToyToken", "TOY") {
    _mint(msg.sender, ot * 10 ** decimals());
}
```

This gives the deployer exactly **1000 whole tokens** (1,000 × 10¹⁸ with 18 decimals), which is both readable and extremely memeable.

## Testing

Includes tests for:
- Correct name, symbol, and decimals
- Initial supply equals `ot × 10¹⁸`
- Transfers work as expected

Run with:

```bash
npm test
```

## Security Notes

- This is a toy project — educational use only
- Never use Hardhat's default private keys on mainnet
- Always audit code before mainnet deployment
- Keep your `.env` out of git (already in `.gitignore`)

## License

MIT License

## Useful Links

- [Hardhat Documentation](https://hardhat.org/docs)
- [OpenZeppelin Contracts](https://docs.openzeppelin.com/contracts)
- [ERC20 Standard](https://eips.ethereum.org/EIPS/eip-20)