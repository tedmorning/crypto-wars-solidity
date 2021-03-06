module.exports = {
    copyPackages: [
      'e11-contracts',
      'zeppelin-solidity',
    ],
    norpc: true,
    skipFiles: [
      'Migrations.sol',
    ],
    testCommand: 'node --max-old-space-size=4096 ../node_modules/.bin/truffle test --network coverage',
};
