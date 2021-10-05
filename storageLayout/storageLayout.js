storageLayout {
  storage: [
    {
      astId: 2098,
      contract: '@gnosis.pm/safe-contracts/contracts/GnosisSafe.sol:GnosisSafe',
      label: 'singleton',
      offset: 0,
      slot: '0',
      type: 't_address'
    },
    {
      astId: 1149,
      contract: '@gnosis.pm/safe-contracts/contracts/GnosisSafe.sol:GnosisSafe',
      label: 'modules',
      offset: 0,
      slot: '1',
      type: 't_mapping(t_address,t_address)'
    },
    {
      astId: 1508,
      contract: '@gnosis.pm/safe-contracts/contracts/GnosisSafe.sol:GnosisSafe',
      label: 'owners',
      offset: 0,
      slot: '2',
      type: 't_mapping(t_address,t_address)'
    },
    {
      astId: 1510,
      contract: '@gnosis.pm/safe-contracts/contracts/GnosisSafe.sol:GnosisSafe',
      label: 'ownerCount',
      offset: 0,
      slot: '3',
      type: 't_uint256'
    },
    {
      astId: 1512,
      contract: '@gnosis.pm/safe-contracts/contracts/GnosisSafe.sol:GnosisSafe',
      label: 'threshold',
      offset: 0,
      slot: '4',
      type: 't_uint256'
    },
    {
      astId: 82,
      contract: '@gnosis.pm/safe-contracts/contracts/GnosisSafe.sol:GnosisSafe',
      label: 'nonce',
      offset: 0,
      slot: '5',
      type: 't_uint256'
    },
    {
      astId: 84,
      contract: '@gnosis.pm/safe-contracts/contracts/GnosisSafe.sol:GnosisSafe',
      label: '_deprecatedDomainSeparator',
      offset: 0,
      slot: '6',
      type: 't_bytes32'
    },
    {
      astId: 88,
      contract: '@gnosis.pm/safe-contracts/contracts/GnosisSafe.sol:GnosisSafe',
      label: 'signedMessages',
      offset: 0,
      slot: '7',
      type: 't_mapping(t_bytes32,t_uint256)'
    },
    {
      astId: 94,
      contract: '@gnosis.pm/safe-contracts/contracts/GnosisSafe.sol:GnosisSafe',
      label: 'approvedHashes',
      offset: 0,
      slot: '8',
      type: 't_mapping(t_address,t_mapping(t_bytes32,t_uint256))'
    }
  ],
  types: {
    t_address: { encoding: 'inplace', label: 'address', numberOfBytes: '20' },
    t_bytes32: { encoding: 'inplace', label: 'bytes32', numberOfBytes: '32' },
    't_mapping(t_address,t_address)': {
      encoding: 'mapping',
      key: 't_address',
      label: 'mapping(address => address)',
      numberOfBytes: '32',
      value: 't_address'
    },
    't_mapping(t_address,t_mapping(t_bytes32,t_uint256))': {
      encoding: 'mapping',
      key: 't_address',
      label: 'mapping(address => mapping(bytes32 => uint256))',
      numberOfBytes: '32',
      value: 't_mapping(t_bytes32,t_uint256)'
    },
    't_mapping(t_bytes32,t_uint256)': {
      encoding: 'mapping',
      key: 't_bytes32',
      label: 'mapping(bytes32 => uint256)',
      numberOfBytes: '32',
      value: 't_uint256'
    },
    t_uint256: { encoding: 'inplace', label: 'uint256', numberOfBytes: '32' }
  }
}
storageLayout undefined
storageLayout { storage: [], types: null }
storageLayout undefined
storageLayout { storage: [], types: null }
storageLayout undefined
storageLayout { storage: [], types: null }
storageLayout undefined
storageLayout { storage: [], types: null }
storageLayout undefined
storageLayout {
  storage: [
    {
      astId: 1149,
      contract: '@gnosis.pm/safe-contracts/contracts/base/ModuleManager.sol:ModuleManager',
      label: 'modules',
      offset: 0,
      slot: '0',
      type: 't_mapping(t_address,t_address)'
    }
  ],
  types: {
    t_address: { encoding: 'inplace', label: 'address', numberOfBytes: '20' },
    't_mapping(t_address,t_address)': {
      encoding: 'mapping',
      key: 't_address',
      label: 'mapping(address => address)',
      numberOfBytes: '32',
      value: 't_address'
    }
  }
}
storageLayout undefined
storageLayout {
  storage: [
    {
      astId: 1508,
      contract: '@gnosis.pm/safe-contracts/contracts/base/OwnerManager.sol:OwnerManager',
      label: 'owners',
      offset: 0,
      slot: '0',
      type: 't_mapping(t_address,t_address)'
    },
    {
      astId: 1510,
      contract: '@gnosis.pm/safe-contracts/contracts/base/OwnerManager.sol:OwnerManager',
      label: 'ownerCount',
      offset: 0,
      slot: '1',
      type: 't_uint256'
    },
    {
      astId: 1512,
      contract: '@gnosis.pm/safe-contracts/contracts/base/OwnerManager.sol:OwnerManager',
      label: 'threshold',
      offset: 0,
      slot: '2',
      type: 't_uint256'
    }
  ],
  types: {
    t_address: { encoding: 'inplace', label: 'address', numberOfBytes: '20' },
    't_mapping(t_address,t_address)': {
      encoding: 'mapping',
      key: 't_address',
      label: 'mapping(address => address)',
      numberOfBytes: '32',
      value: 't_address'
    },
    t_uint256: { encoding: 'inplace', label: 'uint256', numberOfBytes: '32' }
  }
}
storageLayout undefined
storageLayout { storage: [], types: null }
storageLayout undefined
storageLayout { storage: [], types: null }
storageLayout undefined
storageLayout { storage: [], types: null }
storageLayout undefined
storageLayout { storage: [], types: null }
storageLayout undefined
storageLayout { storage: [], types: null }
storageLayout undefined
storageLayout {
  storage: [
    {
      astId: 2098,
      contract: '@gnosis.pm/safe-contracts/contracts/common/Singleton.sol:Singleton',
      label: 'singleton',
      offset: 0,
      slot: '0',
      type: 't_address'
    }
  ],
  types: {
    t_address: { encoding: 'inplace', label: 'address', numberOfBytes: '20' }
  }
}
storageLayout undefined
storageLayout { storage: [], types: null }
storageLayout undefined
storageLayout { storage: [], types: null }
storageLayout undefined
storageLayout { storage: [], types: null }
storageLayout undefined
storageLayout { storage: [], types: null }
storageLayout undefined
storageLayout {
  storage: [
    {
      astId: 2285,
      contract: '@gnosis.pm/safe-contracts/contracts/proxies/GnosisSafeProxy.sol:GnosisSafeProxy',
      label: 'singleton',
      offset: 0,
      slot: '0',
      type: 't_address'
    }
  ],
  types: {
    t_address: { encoding: 'inplace', label: 'address', numberOfBytes: '20' }
  }
}
storageLayout undefined
storageLayout { storage: [], types: null }
storageLayout undefined
storageLayout { storage: [], types: null }
storageLayout undefined
storageLayout { storage: [], types: null }
storageLayout undefined
storageLayout undefined
storageLayout {
  storage: [
    {
      astId: 538,
      contract: '@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol:OwnableUpgradeable',
      label: '_initialized',
      offset: 0,
      slot: '0',
      type: 't_bool'
    },
    {
      astId: 541,
      contract: '@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol:OwnableUpgradeable',
      label: '_initializing',
      offset: 1,
      slot: '0',
      type: 't_bool'
    },
    {
      astId: 2381,
      contract: '@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol:OwnableUpgradeable',
      label: '__gap',
      offset: 0,
      slot: '1',
      type: 't_array(t_uint256)50_storage'
    },
    {
      astId: 10,
      contract: '@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol:OwnableUpgradeable',
      label: '_owner',
      offset: 0,
      slot: '51',
      type: 't_address'
    },
    {
      astId: 123,
      contract: '@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol:OwnableUpgradeable',
      label: '__gap',
      offset: 0,
      slot: '52',
      type: 't_array(t_uint256)49_storage'
    }
  ],
  types: {
    t_address: { encoding: 'inplace', label: 'address', numberOfBytes: '20' },
    't_array(t_uint256)49_storage': {
      base: 't_uint256',
      encoding: 'inplace',
      label: 'uint256[49]',
      numberOfBytes: '1568'
    },
    't_array(t_uint256)50_storage': {
      base: 't_uint256',
      encoding: 'inplace',
      label: 'uint256[50]',
      numberOfBytes: '1600'
    },
    t_bool: { encoding: 'inplace', label: 'bool', numberOfBytes: '1' },
    t_uint256: { encoding: 'inplace', label: 'uint256', numberOfBytes: '32' }
  }
}
storageLayout undefined
storageLayout {
  storage: [
    {
      astId: 538,
      contract: '@openzeppelin/contracts-upgradeable/proxy/ERC1967/ERC1967UpgradeUpgradeable.sol:ERC1967UpgradeUpgradeable',
      label: '_initialized',
      offset: 0,
      slot: '0',
      type: 't_bool'
    },
    {
      astId: 541,
      contract: '@openzeppelin/contracts-upgradeable/proxy/ERC1967/ERC1967UpgradeUpgradeable.sol:ERC1967UpgradeUpgradeable',
      label: '_initializing',
      offset: 1,
      slot: '0',
      type: 't_bool'
    },
    {
      astId: 521,
      contract: '@openzeppelin/contracts-upgradeable/proxy/ERC1967/ERC1967UpgradeUpgradeable.sol:ERC1967UpgradeUpgradeable',
      label: '__gap',
      offset: 0,
      slot: '1',
      type: 't_array(t_uint256)50_storage'
    }
  ],
  types: {
    't_array(t_uint256)50_storage': {
      base: 't_uint256',
      encoding: 'inplace',
      label: 'uint256[50]',
      numberOfBytes: '1600'
    },
    t_bool: { encoding: 'inplace', label: 'bool', numberOfBytes: '1' },
    t_uint256: { encoding: 'inplace', label: 'uint256', numberOfBytes: '32' }
  }
}
storageLayout undefined
storageLayout { storage: [], types: null }
storageLayout undefined
storageLayout {
  storage: [
    {
      astId: 538,
      contract: '@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol:Initializable',
      label: '_initialized',
      offset: 0,
      slot: '0',
      type: 't_bool'
    },
    {
      astId: 541,
      contract: '@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol:Initializable',
      label: '_initializing',
      offset: 1,
      slot: '0',
      type: 't_bool'
    }
  ],
  types: {
    t_bool: { encoding: 'inplace', label: 'bool', numberOfBytes: '1' }
  }
}
storageLayout undefined
storageLayout {
  storage: [
    {
      astId: 538,
      contract: '@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol:UUPSUpgradeable',
      label: '_initialized',
      offset: 0,
      slot: '0',
      type: 't_bool'
    },
    {
      astId: 541,
      contract: '@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol:UUPSUpgradeable',
      label: '_initializing',
      offset: 1,
      slot: '0',
      type: 't_bool'
    },
    {
      astId: 521,
      contract: '@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol:UUPSUpgradeable',
      label: '__gap',
      offset: 0,
      slot: '1',
      type: 't_array(t_uint256)50_storage'
    },
    {
      astId: 688,
      contract: '@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol:UUPSUpgradeable',
      label: '__gap',
      offset: 0,
      slot: '51',
      type: 't_array(t_uint256)50_storage'
    }
  ],
  types: {
    't_array(t_uint256)50_storage': {
      base: 't_uint256',
      encoding: 'inplace',
      label: 'uint256[50]',
      numberOfBytes: '1600'
    },
    t_bool: { encoding: 'inplace', label: 'bool', numberOfBytes: '1' },
    t_uint256: { encoding: 'inplace', label: 'uint256', numberOfBytes: '32' }
  }
}
storageLayout undefined
storageLayout {
  storage: [
    {
      astId: 538,
      contract: '@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol:ERC721Upgradeable',
      label: '_initialized',
      offset: 0,
      slot: '0',
      type: 't_bool'
    },
    {
      astId: 541,
      contract: '@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol:ERC721Upgradeable',
      label: '_initializing',
      offset: 1,
      slot: '0',
      type: 't_bool'
    },
    {
      astId: 2381,
      contract: '@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol:ERC721Upgradeable',
      label: '__gap',
      offset: 0,
      slot: '1',
      type: 't_array(t_uint256)50_storage'
    },
    {
      astId: 2764,
      contract: '@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol:ERC721Upgradeable',
      label: '__gap',
      offset: 0,
      slot: '51',
      type: 't_array(t_uint256)50_storage'
    },
    {
      astId: 718,
      contract: '@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol:ERC721Upgradeable',
      label: '_name',
      offset: 0,
      slot: '101',
      type: 't_string_storage'
    },
    {
      astId: 720,
      contract: '@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol:ERC721Upgradeable',
      label: '_symbol',
      offset: 0,
      slot: '102',
      type: 't_string_storage'
    },
    {
      astId: 724,
      contract: '@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol:ERC721Upgradeable',
      label: '_owners',
      offset: 0,
      slot: '103',
      type: 't_mapping(t_uint256,t_address)'
    },
    {
      astId: 728,
      contract: '@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol:ERC721Upgradeable',
      label: '_balances',
      offset: 0,
      slot: '104',
      type: 't_mapping(t_address,t_uint256)'
    },
    {
      astId: 732,
      contract: '@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol:ERC721Upgradeable',
      label: '_tokenApprovals',
      offset: 0,
      slot: '105',
      type: 't_mapping(t_uint256,t_address)'
    },
    {
      astId: 738,
      contract: '@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol:ERC721Upgradeable',
      label: '_operatorApprovals',
      offset: 0,
      slot: '106',
      type: 't_mapping(t_address,t_mapping(t_address,t_bool))'
    },
    {
      astId: 1534,
      contract: '@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol:ERC721Upgradeable',
      label: '__gap',
      offset: 0,
      slot: '107',
      type: 't_array(t_uint256)44_storage'
    }
  ],
  types: {
    t_address: { encoding: 'inplace', label: 'address', numberOfBytes: '20' },
    't_array(t_uint256)44_storage': {
      base: 't_uint256',
      encoding: 'inplace',
      label: 'uint256[44]',
      numberOfBytes: '1408'
    },
    't_array(t_uint256)50_storage': {
      base: 't_uint256',
      encoding: 'inplace',
      label: 'uint256[50]',
      numberOfBytes: '1600'
    },
    t_bool: { encoding: 'inplace', label: 'bool', numberOfBytes: '1' },
    't_mapping(t_address,t_bool)': {
      encoding: 'mapping',
      key: 't_address',
      label: 'mapping(address => bool)',
      numberOfBytes: '32',
      value: 't_bool'
    },
    't_mapping(t_address,t_mapping(t_address,t_bool))': {
      encoding: 'mapping',
      key: 't_address',
      label: 'mapping(address => mapping(address => bool))',
      numberOfBytes: '32',
      value: 't_mapping(t_address,t_bool)'
    },
    't_mapping(t_address,t_uint256)': {
      encoding: 'mapping',
      key: 't_address',
      label: 'mapping(address => uint256)',
      numberOfBytes: '32',
      value: 't_uint256'
    },
    't_mapping(t_uint256,t_address)': {
      encoding: 'mapping',
      key: 't_uint256',
      label: 'mapping(uint256 => address)',
      numberOfBytes: '32',
      value: 't_address'
    },
    t_string_storage: { encoding: 'bytes', label: 'string', numberOfBytes: '32' },
    t_uint256: { encoding: 'inplace', label: 'uint256', numberOfBytes: '32' }
  }
}
storageLayout undefined
storageLayout { storage: [], types: null }
storageLayout undefined
storageLayout { storage: [], types: null }
storageLayout undefined
storageLayout {
  storage: [
    {
      astId: 538,
      contract: '@openzeppelin/contracts-upgradeable/token/ERC721/extensions/ERC721EnumerableUpgradeable.sol:ERC721EnumerableUpgradeable',
      label: '_initialized',
      offset: 0,
      slot: '0',
      type: 't_bool'
    },
    {
      astId: 541,
      contract: '@openzeppelin/contracts-upgradeable/token/ERC721/extensions/ERC721EnumerableUpgradeable.sol:ERC721EnumerableUpgradeable',
      label: '_initializing',
      offset: 1,
      slot: '0',
      type: 't_bool'
    },
    {
      astId: 2381,
      contract: '@openzeppelin/contracts-upgradeable/token/ERC721/extensions/ERC721EnumerableUpgradeable.sol:ERC721EnumerableUpgradeable',
      label: '__gap',
      offset: 0,
      slot: '1',
      type: 't_array(t_uint256)50_storage'
    },
    {
      astId: 2764,
      contract: '@openzeppelin/contracts-upgradeable/token/ERC721/extensions/ERC721EnumerableUpgradeable.sol:ERC721EnumerableUpgradeable',
      label: '__gap',
      offset: 0,
      slot: '51',
      type: 't_array(t_uint256)50_storage'
    },
    {
      astId: 718,
      contract: '@openzeppelin/contracts-upgradeable/token/ERC721/extensions/ERC721EnumerableUpgradeable.sol:ERC721EnumerableUpgradeable',
      label: '_name',
      offset: 0,
      slot: '101',
      type: 't_string_storage'
    },
    {
      astId: 720,
      contract: '@openzeppelin/contracts-upgradeable/token/ERC721/extensions/ERC721EnumerableUpgradeable.sol:ERC721EnumerableUpgradeable',
      label: '_symbol',
      offset: 0,
      slot: '102',
      type: 't_string_storage'
    },
    {
      astId: 724,
      contract: '@openzeppelin/contracts-upgradeable/token/ERC721/extensions/ERC721EnumerableUpgradeable.sol:ERC721EnumerableUpgradeable',
      label: '_owners',
      offset: 0,
      slot: '103',
      type: 't_mapping(t_uint256,t_address)'
    },
    {
      astId: 728,
      contract: '@openzeppelin/contracts-upgradeable/token/ERC721/extensions/ERC721EnumerableUpgradeable.sol:ERC721EnumerableUpgradeable',
      label: '_balances',
      offset: 0,
      slot: '104',
      type: 't_mapping(t_address,t_uint256)'
    },
    {
      astId: 732,
      contract: '@openzeppelin/contracts-upgradeable/token/ERC721/extensions/ERC721EnumerableUpgradeable.sol:ERC721EnumerableUpgradeable',
      label: '_tokenApprovals',
      offset: 0,
      slot: '105',
      type: 't_mapping(t_uint256,t_address)'
    },
    {
      astId: 738,
      contract: '@openzeppelin/contracts-upgradeable/token/ERC721/extensions/ERC721EnumerableUpgradeable.sol:ERC721EnumerableUpgradeable',
      label: '_operatorApprovals',
      offset: 0,
      slot: '106',
      type: 't_mapping(t_address,t_mapping(t_address,t_bool))'
    },
    {
      astId: 1534,
      contract: '@openzeppelin/contracts-upgradeable/token/ERC721/extensions/ERC721EnumerableUpgradeable.sol:ERC721EnumerableUpgradeable',
      label: '__gap',
      offset: 0,
      slot: '107',
      type: 't_array(t_uint256)44_storage'
    },
    {
      astId: 1708,
      contract: '@openzeppelin/contracts-upgradeable/token/ERC721/extensions/ERC721EnumerableUpgradeable.sol:ERC721EnumerableUpgradeable',
      label: '_ownedTokens',
      offset: 0,
      slot: '151',
      type: 't_mapping(t_address,t_mapping(t_uint256,t_uint256))'
    },
    {
      astId: 1712,
      contract: '@openzeppelin/contracts-upgradeable/token/ERC721/extensions/ERC721EnumerableUpgradeable.sol:ERC721EnumerableUpgradeable',
      label: '_ownedTokensIndex',
      offset: 0,
      slot: '152',
      type: 't_mapping(t_uint256,t_uint256)'
    },
    {
      astId: 1715,
      contract: '@openzeppelin/contracts-upgradeable/token/ERC721/extensions/ERC721EnumerableUpgradeable.sol:ERC721EnumerableUpgradeable',
      label: '_allTokens',
      offset: 0,
      slot: '153',
      type: 't_array(t_uint256)dyn_storage'
    },
    {
      astId: 1719,
      contract: '@openzeppelin/contracts-upgradeable/token/ERC721/extensions/ERC721EnumerableUpgradeable.sol:ERC721EnumerableUpgradeable',
      label: '_allTokensIndex',
      offset: 0,
      slot: '154',
      type: 't_mapping(t_uint256,t_uint256)'
    },
    {
      astId: 2034,
      contract: '@openzeppelin/contracts-upgradeable/token/ERC721/extensions/ERC721EnumerableUpgradeable.sol:ERC721EnumerableUpgradeable',
      label: '__gap',
      offset: 0,
      slot: '155',
      type: 't_array(t_uint256)46_storage'
    }
  ],
  types: {
    t_address: { encoding: 'inplace', label: 'address', numberOfBytes: '20' },
    't_array(t_uint256)44_storage': {
      base: 't_uint256',
      encoding: 'inplace',
      label: 'uint256[44]',
      numberOfBytes: '1408'
    },
    't_array(t_uint256)46_storage': {
      base: 't_uint256',
      encoding: 'inplace',
      label: 'uint256[46]',
      numberOfBytes: '1472'
    },
    't_array(t_uint256)50_storage': {
      base: 't_uint256',
      encoding: 'inplace',
      label: 'uint256[50]',
      numberOfBytes: '1600'
    },
    't_array(t_uint256)dyn_storage': {
      base: 't_uint256',
      encoding: 'dynamic_array',
      label: 'uint256[]',
      numberOfBytes: '32'
    },
    t_bool: { encoding: 'inplace', label: 'bool', numberOfBytes: '1' },
    't_mapping(t_address,t_bool)': {
      encoding: 'mapping',
      key: 't_address',
      label: 'mapping(address => bool)',
      numberOfBytes: '32',
      value: 't_bool'
    },
    't_mapping(t_address,t_mapping(t_address,t_bool))': {
      encoding: 'mapping',
      key: 't_address',
      label: 'mapping(address => mapping(address => bool))',
      numberOfBytes: '32',
      value: 't_mapping(t_address,t_bool)'
    },
    't_mapping(t_address,t_mapping(t_uint256,t_uint256))': {
      encoding: 'mapping',
      key: 't_address',
      label: 'mapping(address => mapping(uint256 => uint256))',
      numberOfBytes: '32',
      value: 't_mapping(t_uint256,t_uint256)'
    },
    't_mapping(t_address,t_uint256)': {
      encoding: 'mapping',
      key: 't_address',
      label: 'mapping(address => uint256)',
      numberOfBytes: '32',
      value: 't_uint256'
    },
    't_mapping(t_uint256,t_address)': {
      encoding: 'mapping',
      key: 't_uint256',
      label: 'mapping(uint256 => address)',
      numberOfBytes: '32',
      value: 't_address'
    },
    't_mapping(t_uint256,t_uint256)': {
      encoding: 'mapping',
      key: 't_uint256',
      label: 'mapping(uint256 => uint256)',
      numberOfBytes: '32',
      value: 't_uint256'
    },
    t_string_storage: { encoding: 'bytes', label: 'string', numberOfBytes: '32' },
    t_uint256: { encoding: 'inplace', label: 'uint256', numberOfBytes: '32' }
  }
}
storageLayout undefined
storageLayout { storage: [], types: null }
storageLayout undefined
storageLayout { storage: [], types: null }
storageLayout undefined
storageLayout { storage: [], types: null }
storageLayout undefined
storageLayout {
  storage: [
    {
      astId: 538,
      contract: '@openzeppelin/contracts-upgradeable/utils/ContextUpgradeable.sol:ContextUpgradeable',
      label: '_initialized',
      offset: 0,
      slot: '0',
      type: 't_bool'
    },
    {
      astId: 541,
      contract: '@openzeppelin/contracts-upgradeable/utils/ContextUpgradeable.sol:ContextUpgradeable',
      label: '_initializing',
      offset: 1,
      slot: '0',
      type: 't_bool'
    },
    {
      astId: 2381,
      contract: '@openzeppelin/contracts-upgradeable/utils/ContextUpgradeable.sol:ContextUpgradeable',
      label: '__gap',
      offset: 0,
      slot: '1',
      type: 't_array(t_uint256)50_storage'
    }
  ],
  types: {
    't_array(t_uint256)50_storage': {
      base: 't_uint256',
      encoding: 'inplace',
      label: 'uint256[50]',
      numberOfBytes: '1600'
    },
    t_bool: { encoding: 'inplace', label: 'bool', numberOfBytes: '1' },
    t_uint256: { encoding: 'inplace', label: 'uint256', numberOfBytes: '32' }
  }
}
storageLayout undefined
storageLayout { storage: [], types: null }
storageLayout undefined
storageLayout { storage: [], types: null }
storageLayout undefined
storageLayout { storage: [], types: null }
storageLayout undefined
storageLayout {
  storage: [
    {
      astId: 538,
      contract: '@openzeppelin/contracts-upgradeable/utils/introspection/ERC165Upgradeable.sol:ERC165Upgradeable',
      label: '_initialized',
      offset: 0,
      slot: '0',
      type: 't_bool'
    },
    {
      astId: 541,
      contract: '@openzeppelin/contracts-upgradeable/utils/introspection/ERC165Upgradeable.sol:ERC165Upgradeable',
      label: '_initializing',
      offset: 1,
      slot: '0',
      type: 't_bool'
    },
    {
      astId: 2764,
      contract: '@openzeppelin/contracts-upgradeable/utils/introspection/ERC165Upgradeable.sol:ERC165Upgradeable',
      label: '__gap',
      offset: 0,
      slot: '1',
      type: 't_array(t_uint256)50_storage'
    }
  ],
  types: {
    't_array(t_uint256)50_storage': {
      base: 't_uint256',
      encoding: 'inplace',
      label: 'uint256[50]',
      numberOfBytes: '1600'
    },
    t_bool: { encoding: 'inplace', label: 'bool', numberOfBytes: '1' },
    t_uint256: { encoding: 'inplace', label: 'uint256', numberOfBytes: '32' }
  }
}
storageLayout undefined
storageLayout { storage: [], types: null }
storageLayout undefined
storageLayout {
  storage: [
    {
      astId: 2785,
      contract: '@openzeppelin/contracts/access/Ownable.sol:Ownable',
      label: '_owner',
      offset: 0,
      slot: '0',
      type: 't_address'
    }
  ],
  types: {
    t_address: { encoding: 'inplace', label: 'address', numberOfBytes: '20' }
  }
}
storageLayout undefined
storageLayout {
  storage: [
    {
      astId: 2899,
      contract: '@openzeppelin/contracts/security/Pausable.sol:Pausable',
      label: '_paused',
      offset: 0,
      slot: '0',
      type: 't_bool'
    }
  ],
  types: {
    t_bool: { encoding: 'inplace', label: 'bool', numberOfBytes: '1' }
  }
}
storageLayout undefined
storageLayout undefined
storageLayout undefined
storageLayout { storage: [], types: null }
storageLayout undefined
storageLayout { storage: [], types: null }
storageLayout undefined
storageLayout { storage: [], types: null }
storageLayout undefined
storageLayout {
  storage: [
    {
      astId: 2899,
      contract: 'contracts/RewilderDonationCampaign.sol:RewilderDonationCampaign',
      label: '_paused',
      offset: 0,
      slot: '0',
      type: 't_bool'
    },
    {
      astId: 2785,
      contract: 'contracts/RewilderDonationCampaign.sol:RewilderDonationCampaign',
      label: '_owner',
      offset: 1,
      slot: '0',
      type: 't_address'
    },
    {
      astId: 3308,
      contract: 'contracts/RewilderDonationCampaign.sol:RewilderDonationCampaign',
      label: '_nft',
      offset: 0,
      slot: '1',
      type: 't_contract(RewilderNFT)3576'
    },
    {
      astId: 3310,
      contract: 'contracts/RewilderDonationCampaign.sol:RewilderDonationCampaign',
      label: '_wallet',
      offset: 0,
      slot: '2',
      type: 't_address_payable'
    }
  ],
  types: {
    t_address: { encoding: 'inplace', label: 'address', numberOfBytes: '20' },
    t_address_payable: {
      encoding: 'inplace',
      label: 'address payable',
      numberOfBytes: '20'
    },
    t_bool: { encoding: 'inplace', label: 'bool', numberOfBytes: '1' },
    't_contract(RewilderNFT)3576': {
      encoding: 'inplace',
      label: 'contract RewilderNFT',
      numberOfBytes: '20'
    }
  }
}
storageLayout undefined
storageLayout {
  storage: [
    {
      astId: 538,
      contract: 'contracts/RewilderNFT.sol:RewilderNFT',
      label: '_initialized',
      offset: 0,
      slot: '0',
      type: 't_bool'
    },
    {
      astId: 541,
      contract: 'contracts/RewilderNFT.sol:RewilderNFT',
      label: '_initializing',
      offset: 1,
      slot: '0',
      type: 't_bool'
    },
    {
      astId: 2381,
      contract: 'contracts/RewilderNFT.sol:RewilderNFT',
      label: '__gap',
      offset: 0,
      slot: '1',
      type: 't_array(t_uint256)50_storage'
    },
    {
      astId: 2764,
      contract: 'contracts/RewilderNFT.sol:RewilderNFT',
      label: '__gap',
      offset: 0,
      slot: '51',
      type: 't_array(t_uint256)50_storage'
    },
    {
      astId: 718,
      contract: 'contracts/RewilderNFT.sol:RewilderNFT',
      label: '_name',
      offset: 0,
      slot: '101',
      type: 't_string_storage'
    },
    {
      astId: 720,
      contract: 'contracts/RewilderNFT.sol:RewilderNFT',
      label: '_symbol',
      offset: 0,
      slot: '102',
      type: 't_string_storage'
    },
    {
      astId: 724,
      contract: 'contracts/RewilderNFT.sol:RewilderNFT',
      label: '_owners',
      offset: 0,
      slot: '103',
      type: 't_mapping(t_uint256,t_address)'
    },
    {
      astId: 728,
      contract: 'contracts/RewilderNFT.sol:RewilderNFT',
      label: '_balances',
      offset: 0,
      slot: '104',
      type: 't_mapping(t_address,t_uint256)'
    },
    {
      astId: 732,
      contract: 'contracts/RewilderNFT.sol:RewilderNFT',
      label: '_tokenApprovals',
      offset: 0,
      slot: '105',
      type: 't_mapping(t_uint256,t_address)'
    },
    {
      astId: 738,
      contract: 'contracts/RewilderNFT.sol:RewilderNFT',
      label: '_operatorApprovals',
      offset: 0,
      slot: '106',
      type: 't_mapping(t_address,t_mapping(t_address,t_bool))'
    },
    {
      astId: 1534,
      contract: 'contracts/RewilderNFT.sol:RewilderNFT',
      label: '__gap',
      offset: 0,
      slot: '107',
      type: 't_array(t_uint256)44_storage'
    },
    {
      astId: 1708,
      contract: 'contracts/RewilderNFT.sol:RewilderNFT',
      label: '_ownedTokens',
      offset: 0,
      slot: '151',
      type: 't_mapping(t_address,t_mapping(t_uint256,t_uint256))'
    },
    {
      astId: 1712,
      contract: 'contracts/RewilderNFT.sol:RewilderNFT',
      label: '_ownedTokensIndex',
      offset: 0,
      slot: '152',
      type: 't_mapping(t_uint256,t_uint256)'
    },
    {
      astId: 1715,
      contract: 'contracts/RewilderNFT.sol:RewilderNFT',
      label: '_allTokens',
      offset: 0,
      slot: '153',
      type: 't_array(t_uint256)dyn_storage'
    },
    {
      astId: 1719,
      contract: 'contracts/RewilderNFT.sol:RewilderNFT',
      label: '_allTokensIndex',
      offset: 0,
      slot: '154',
      type: 't_mapping(t_uint256,t_uint256)'
    },
    {
      astId: 2034,
      contract: 'contracts/RewilderNFT.sol:RewilderNFT',
      label: '__gap',
      offset: 0,
      slot: '155',
      type: 't_array(t_uint256)46_storage'
    },
    {
      astId: 10,
      contract: 'contracts/RewilderNFT.sol:RewilderNFT',
      label: '_owner',
      offset: 0,
      slot: '201',
      type: 't_address'
    },
    {
      astId: 123,
      contract: 'contracts/RewilderNFT.sol:RewilderNFT',
      label: '__gap',
      offset: 0,
      slot: '202',
      type: 't_array(t_uint256)49_storage'
    },
    {
      astId: 521,
      contract: 'contracts/RewilderNFT.sol:RewilderNFT',
      label: '__gap',
      offset: 0,
      slot: '251',
      type: 't_array(t_uint256)50_storage'
    },
    {
      astId: 688,
      contract: 'contracts/RewilderNFT.sol:RewilderNFT',
      label: '__gap',
      offset: 0,
      slot: '301',
      type: 't_array(t_uint256)50_storage'
    },
    {
      astId: 3460,
      contract: 'contracts/RewilderNFT.sol:RewilderNFT',
      label: '_tokenIdCounter',
      offset: 0,
      slot: '351',
      type: 't_struct(Counter)2388_storage'
    }
  ],
  types: {
    t_address: { encoding: 'inplace', label: 'address', numberOfBytes: '20' },
    't_array(t_uint256)44_storage': {
      base: 't_uint256',
      encoding: 'inplace',
      label: 'uint256[44]',
      numberOfBytes: '1408'
    },
    't_array(t_uint256)46_storage': {
      base: 't_uint256',
      encoding: 'inplace',
      label: 'uint256[46]',
      numberOfBytes: '1472'
    },
    't_array(t_uint256)49_storage': {
      base: 't_uint256',
      encoding: 'inplace',
      label: 'uint256[49]',
      numberOfBytes: '1568'
    },
    't_array(t_uint256)50_storage': {
      base: 't_uint256',
      encoding: 'inplace',
      label: 'uint256[50]',
      numberOfBytes: '1600'
    },
    't_array(t_uint256)dyn_storage': {
      base: 't_uint256',
      encoding: 'dynamic_array',
      label: 'uint256[]',
      numberOfBytes: '32'
    },
    t_bool: { encoding: 'inplace', label: 'bool', numberOfBytes: '1' },
    't_mapping(t_address,t_bool)': {
      encoding: 'mapping',
      key: 't_address',
      label: 'mapping(address => bool)',
      numberOfBytes: '32',
      value: 't_bool'
    },
    't_mapping(t_address,t_mapping(t_address,t_bool))': {
      encoding: 'mapping',
      key: 't_address',
      label: 'mapping(address => mapping(address => bool))',
      numberOfBytes: '32',
      value: 't_mapping(t_address,t_bool)'
    },
    't_mapping(t_address,t_mapping(t_uint256,t_uint256))': {
      encoding: 'mapping',
      key: 't_address',
      label: 'mapping(address => mapping(uint256 => uint256))',
      numberOfBytes: '32',
      value: 't_mapping(t_uint256,t_uint256)'
    },
    't_mapping(t_address,t_uint256)': {
      encoding: 'mapping',
      key: 't_address',
      label: 'mapping(address => uint256)',
      numberOfBytes: '32',
      value: 't_uint256'
    },
    't_mapping(t_uint256,t_address)': {
      encoding: 'mapping',
      key: 't_uint256',
      label: 'mapping(uint256 => address)',
      numberOfBytes: '32',
      value: 't_address'
    },
    't_mapping(t_uint256,t_uint256)': {
      encoding: 'mapping',
      key: 't_uint256',
      label: 'mapping(uint256 => uint256)',
      numberOfBytes: '32',
      value: 't_uint256'
    },
    t_string_storage: { encoding: 'bytes', label: 'string', numberOfBytes: '32' },
    't_struct(Counter)2388_storage': {
      encoding: 'inplace',
      label: 'struct CountersUpgradeable.Counter',
      members: [Array],
      numberOfBytes: '32'
    },
    t_uint256: { encoding: 'inplace', label: 'uint256', numberOfBytes: '32' }
  }
}
storageLayout { storage: [], types: null }
storageLayout undefined
storageLayout undefined
storageLayout {
  storage: [
    {
      astId: 538,
      contract: 'contracts/mocks/MockRewilderNFTv2.sol:MockRewilderNFTv2',
      label: '_initialized',
      offset: 0,
      slot: '0',
      type: 't_bool'
    },
    {
      astId: 541,
      contract: 'contracts/mocks/MockRewilderNFTv2.sol:MockRewilderNFTv2',
      label: '_initializing',
      offset: 1,
      slot: '0',
      type: 't_bool'
    },
    {
      astId: 2381,
      contract: 'contracts/mocks/MockRewilderNFTv2.sol:MockRewilderNFTv2',
      label: '__gap',
      offset: 0,
      slot: '1',
      type: 't_array(t_uint256)50_storage'
    },
    {
      astId: 2764,
      contract: 'contracts/mocks/MockRewilderNFTv2.sol:MockRewilderNFTv2',
      label: '__gap',
      offset: 0,
      slot: '51',
      type: 't_array(t_uint256)50_storage'
    },
    {
      astId: 718,
      contract: 'contracts/mocks/MockRewilderNFTv2.sol:MockRewilderNFTv2',
      label: '_name',
      offset: 0,
      slot: '101',
      type: 't_string_storage'
    },
    {
      astId: 720,
      contract: 'contracts/mocks/MockRewilderNFTv2.sol:MockRewilderNFTv2',
      label: '_symbol',
      offset: 0,
      slot: '102',
      type: 't_string_storage'
    },
    {
      astId: 724,
      contract: 'contracts/mocks/MockRewilderNFTv2.sol:MockRewilderNFTv2',
      label: '_owners',
      offset: 0,
      slot: '103',
      type: 't_mapping(t_uint256,t_address)'
    },
    {
      astId: 728,
      contract: 'contracts/mocks/MockRewilderNFTv2.sol:MockRewilderNFTv2',
      label: '_balances',
      offset: 0,
      slot: '104',
      type: 't_mapping(t_address,t_uint256)'
    },
    {
      astId: 732,
      contract: 'contracts/mocks/MockRewilderNFTv2.sol:MockRewilderNFTv2',
      label: '_tokenApprovals',
      offset: 0,
      slot: '105',
      type: 't_mapping(t_uint256,t_address)'
    },
    {
      astId: 738,
      contract: 'contracts/mocks/MockRewilderNFTv2.sol:MockRewilderNFTv2',
      label: '_operatorApprovals',
      offset: 0,
      slot: '106',
      type: 't_mapping(t_address,t_mapping(t_address,t_bool))'
    },
    {
      astId: 1534,
      contract: 'contracts/mocks/MockRewilderNFTv2.sol:MockRewilderNFTv2',
      label: '__gap',
      offset: 0,
      slot: '107',
      type: 't_array(t_uint256)44_storage'
    },
    {
      astId: 1708,
      contract: 'contracts/mocks/MockRewilderNFTv2.sol:MockRewilderNFTv2',
      label: '_ownedTokens',
      offset: 0,
      slot: '151',
      type: 't_mapping(t_address,t_mapping(t_uint256,t_uint256))'
    },
    {
      astId: 1712,
      contract: 'contracts/mocks/MockRewilderNFTv2.sol:MockRewilderNFTv2',
      label: '_ownedTokensIndex',
      offset: 0,
      slot: '152',
      type: 't_mapping(t_uint256,t_uint256)'
    },
    {
      astId: 1715,
      contract: 'contracts/mocks/MockRewilderNFTv2.sol:MockRewilderNFTv2',
      label: '_allTokens',
      offset: 0,
      slot: '153',
      type: 't_array(t_uint256)dyn_storage'
    },
    {
      astId: 1719,
      contract: 'contracts/mocks/MockRewilderNFTv2.sol:MockRewilderNFTv2',
      label: '_allTokensIndex',
      offset: 0,
      slot: '154',
      type: 't_mapping(t_uint256,t_uint256)'
    },
    {
      astId: 2034,
      contract: 'contracts/mocks/MockRewilderNFTv2.sol:MockRewilderNFTv2',
      label: '__gap',
      offset: 0,
      slot: '155',
      type: 't_array(t_uint256)46_storage'
    },
    {
      astId: 10,
      contract: 'contracts/mocks/MockRewilderNFTv2.sol:MockRewilderNFTv2',
      label: '_owner',
      offset: 0,
      slot: '201',
      type: 't_address'
    },
    {
      astId: 123,
      contract: 'contracts/mocks/MockRewilderNFTv2.sol:MockRewilderNFTv2',
      label: '__gap',
      offset: 0,
      slot: '202',
      type: 't_array(t_uint256)49_storage'
    },
    {
      astId: 521,
      contract: 'contracts/mocks/MockRewilderNFTv2.sol:MockRewilderNFTv2',
      label: '__gap',
      offset: 0,
      slot: '251',
      type: 't_array(t_uint256)50_storage'
    },
    {
      astId: 688,
      contract: 'contracts/mocks/MockRewilderNFTv2.sol:MockRewilderNFTv2',
      label: '__gap',
      offset: 0,
      slot: '301',
      type: 't_array(t_uint256)50_storage'
    },
    {
      astId: 3601,
      contract: 'contracts/mocks/MockRewilderNFTv2.sol:MockRewilderNFTv2',
      label: '_tokenIdCounter',
      offset: 0,
      slot: '351',
      type: 't_struct(Counter)2388_storage'
    }
  ],
  types: {
    t_address: { encoding: 'inplace', label: 'address', numberOfBytes: '20' },
    't_array(t_uint256)44_storage': {
      base: 't_uint256',
      encoding: 'inplace',
      label: 'uint256[44]',
      numberOfBytes: '1408'
    },
    't_array(t_uint256)46_storage': {
      base: 't_uint256',
      encoding: 'inplace',
      label: 'uint256[46]',
      numberOfBytes: '1472'
    },
    't_array(t_uint256)49_storage': {
      base: 't_uint256',
      encoding: 'inplace',
      label: 'uint256[49]',
      numberOfBytes: '1568'
    },
    't_array(t_uint256)50_storage': {
      base: 't_uint256',
      encoding: 'inplace',
      label: 'uint256[50]',
      numberOfBytes: '1600'
    },
    't_array(t_uint256)dyn_storage': {
      base: 't_uint256',
      encoding: 'dynamic_array',
      label: 'uint256[]',
      numberOfBytes: '32'
    },
    t_bool: { encoding: 'inplace', label: 'bool', numberOfBytes: '1' },
    't_mapping(t_address,t_bool)': {
      encoding: 'mapping',
      key: 't_address',
      label: 'mapping(address => bool)',
      numberOfBytes: '32',
      value: 't_bool'
    },
    't_mapping(t_address,t_mapping(t_address,t_bool))': {
      encoding: 'mapping',
      key: 't_address',
      label: 'mapping(address => mapping(address => bool))',
      numberOfBytes: '32',
      value: 't_mapping(t_address,t_bool)'
    },
    't_mapping(t_address,t_mapping(t_uint256,t_uint256))': {
      encoding: 'mapping',
      key: 't_address',
      label: 'mapping(address => mapping(uint256 => uint256))',
      numberOfBytes: '32',
      value: 't_mapping(t_uint256,t_uint256)'
    },
    't_mapping(t_address,t_uint256)': {
      encoding: 'mapping',
      key: 't_address',
      label: 'mapping(address => uint256)',
      numberOfBytes: '32',
      value: 't_uint256'
    },
    't_mapping(t_uint256,t_address)': {
      encoding: 'mapping',
      key: 't_uint256',
      label: 'mapping(uint256 => address)',
      numberOfBytes: '32',
      value: 't_address'
    },
    't_mapping(t_uint256,t_uint256)': {
      encoding: 'mapping',
      key: 't_uint256',
      label: 'mapping(uint256 => uint256)',
      numberOfBytes: '32',
      value: 't_uint256'
    },
    t_string_storage: { encoding: 'bytes', label: 'string', numberOfBytes: '32' },
    't_struct(Counter)2388_storage': {
      encoding: 'inplace',
      label: 'struct CountersUpgradeable.Counter',
      members: [Array],
      numberOfBytes: '32'
    },
    t_uint256: { encoding: 'inplace', label: 'uint256', numberOfBytes: '32' }
  }
}
storageLayout { storage: [], types: null }