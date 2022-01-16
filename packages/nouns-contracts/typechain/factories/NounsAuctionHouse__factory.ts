/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { NounsAuctionHouse } from "../NounsAuctionHouse";

export class NounsAuctionHouse__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<NounsAuctionHouse> {
    return super.deploy(overrides || {}) as Promise<NounsAuctionHouse>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): NounsAuctionHouse {
    return super.attach(address) as NounsAuctionHouse;
  }
  connect(signer: Signer): NounsAuctionHouse__factory {
    return super.connect(signer) as NounsAuctionHouse__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NounsAuctionHouse {
    return new Contract(address, _abi, signerOrProvider) as NounsAuctionHouse;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "nounId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "extended",
        type: "bool",
      },
    ],
    name: "AuctionBid",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "nounId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "startTime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "endTime",
        type: "uint256",
      },
    ],
    name: "AuctionCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "duration",
        type: "uint256",
      },
    ],
    name: "AuctionDurationUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "nounId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "endTime",
        type: "uint256",
      },
    ],
    name: "AuctionExtended",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "minBidIncrementPercentage",
        type: "uint256",
      },
    ],
    name: "AuctionMinBidIncrementPercentageUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "reservePrice",
        type: "uint256",
      },
    ],
    name: "AuctionReservePriceUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "nounId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "winner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "AuctionSettled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "timeBuffer",
        type: "uint256",
      },
    ],
    name: "AuctionTimeBufferUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [],
    name: "auction",
    outputs: [
      {
        internalType: "uint256",
        name: "nounId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "startTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "endTime",
        type: "uint256",
      },
      {
        internalType: "address payable",
        name: "bidder",
        type: "address",
      },
      {
        internalType: "bool",
        name: "settled",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "nounId",
        type: "uint256",
      },
    ],
    name: "createBid",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "duration",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract INounsToken",
        name: "_nouns",
        type: "address",
      },
      {
        internalType: "address",
        name: "_weth",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_timeBuffer",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_reservePrice",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "_minBidIncrementPercentage",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "_duration",
        type: "uint256",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "minBidIncrementPercentage",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nouns",
    outputs: [
      {
        internalType: "contract INounsToken",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "reservePrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_duration",
        type: "uint256",
      },
    ],
    name: "setDuration",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "_minBidIncrementPercentage",
        type: "uint8",
      },
    ],
    name: "setMinBidIncrementPercentage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_reservePrice",
        type: "uint256",
      },
    ],
    name: "setReservePrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_timeBuffer",
        type: "uint256",
      },
    ],
    name: "setTimeBuffer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_trio",
        type: "address",
      },
    ],
    name: "setTrioAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "settleAuction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "settleCurrentAndCreateNewAuction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "timeBuffer",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "trio",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "weth",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405260d480546001600160a01b03191673133960675fdcbe8a7fded6007e200bc60519d5a117905534801561003657600080fd5b50612284806100466000396000f3fe60806040526004361061018b5760003560e01c80637d9f6db5116100d6578063ce9c7c0d1161007f578063f25efffc11610059578063f25efffc146104c8578063f2fde38b146104dd578063f6be71d1146104fd57600080fd5b8063ce9c7c0d1461047c578063db2e1eed1461049c578063ec91f2a4146104b257600080fd5b80638da5cb5b116100b05780638da5cb5b14610410578063a4d0a17e1461043b578063b296024d1461045057600080fd5b80637d9f6db51461033c5780638456cb59146103db57806387f49f54146103f057600080fd5b80633fc8cef31161013857806366ef6efb1161011257806366ef6efb146102e75780637120334b14610307578063715018a61461032757600080fd5b80633fc8cef3146102845780635c975abb146102b1578063659dd2b4146102d457600080fd5b806336ebdb381161016957806336ebdb38146102385780633ccfd60b1461025a5780633f4ba83a1461026f57600080fd5b80630fb5a6b4146101905780631c20be10146101b95780632de45f181461020b575b600080fd5b34801561019c57600080fd5b506101a660ce5481565b6040519081526020015b60405180910390f35b3480156101c557600080fd5b5060d4546101e69073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016101b0565b34801561021757600080fd5b5060c9546101e69073ffffffffffffffffffffffffffffffffffffffff1681565b34801561024457600080fd5b50610258610253366004611fd5565b61051d565b005b34801561026657600080fd5b506102586105f0565b34801561027b57600080fd5b5061025861067c565b34801561029057600080fd5b5060ca546101e69073ffffffffffffffffffffffffffffffffffffffff1681565b3480156102bd57600080fd5b5060335460ff1660405190151581526020016101b0565b6102586102e2366004611fa3565b610721565b3480156102f357600080fd5b50610258610302366004611efa565b610aa5565b34801561031357600080fd5b50610258610322366004611fa3565b610b53565b34801561033357600080fd5b50610258610bef565b34801561034857600080fd5b5060cf5460d05460d15460d25460d354610396949392919073ffffffffffffffffffffffffffffffffffffffff81169074010000000000000000000000000000000000000000900460ff1686565b60408051968752602087019590955293850192909252606084015273ffffffffffffffffffffffffffffffffffffffff166080830152151560a082015260c0016101b0565b3480156103e757600080fd5b50610258610c60565b3480156103fc57600080fd5b5061025861040b366004611f40565b610ccf565b34801561041c57600080fd5b5060975473ffffffffffffffffffffffffffffffffffffffff166101e6565b34801561044757600080fd5b50610258610e8a565b34801561045c57600080fd5b5060cd5461046a9060ff1681565b60405160ff90911681526020016101b0565b34801561048857600080fd5b50610258610497366004611fa3565b610f43565b3480156104a857600080fd5b506101a660cc5481565b3480156104be57600080fd5b506101a660cb5481565b3480156104d457600080fd5b50610258610fdf565b3480156104e957600080fd5b506102586104f8366004611efa565b61109a565b34801561050957600080fd5b50610258610518366004611fa3565b611196565b60975473ffffffffffffffffffffffffffffffffffffffff1633146105895760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b60cd80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660ff83169081179091556040519081527fec5ccd96cc77b6219e9d44143df916af68fc169339ea7de5008ff15eae13450d906020015b60405180910390a150565b60d45473ffffffffffffffffffffffffffffffffffffffff1633146106575760405162461bcd60e51b815260206004820152601660248201527f53656e646572206973206e6f7420746865207472696f000000000000000000006044820152606401610580565b60d45461067a9073ffffffffffffffffffffffffffffffffffffffff1647611232565b565b60975473ffffffffffffffffffffffffffffffffffffffff1633146106e35760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610580565b6106eb611376565b60d1541580610714575060d35474010000000000000000000000000000000000000000900460ff165b1561067a5761067a61143d565b600260655414156107745760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610580565b60026065556040805160c08101825260cf5480825260d054602083015260d1549282019290925260d254606082015260d35473ffffffffffffffffffffffffffffffffffffffff8116608083015274010000000000000000000000000000000000000000900460ff16151560a08201529082146108335760405162461bcd60e51b815260206004820152601760248201527f4e6f756e206e6f7420757020666f722061756374696f6e0000000000000000006044820152606401610580565b806060015142106108865760405162461bcd60e51b815260206004820152600f60248201527f41756374696f6e206578706972656400000000000000000000000000000000006044820152606401610580565b60cc543410156108d85760405162461bcd60e51b815260206004820152601f60248201527f4d7573742073656e64206174206c6561737420726573657276655072696365006044820152606401610580565b60cd5460208201516064916108f29160ff9091169061207e565b6108fc9190612043565b816020015161090b919061202b565b341015610982576040805162461bcd60e51b81526020600482015260248101919091527f4d7573742073656e64206d6f7265207468616e206c617374206269642062792060448201527f6d696e426964496e6372656d656e7450657263656e7461676520616d6f756e746064820152608401610580565b608081015173ffffffffffffffffffffffffffffffffffffffff8116156109b1576109b1818360200151611232565b3460d05560d380547fffffffffffffffffffffffff0000000000000000000000000000000000000000163317905560cb546060830151600091906109f69042906120bb565b1090508015610a175760cb54610a0c904261202b565b6060840181905260d2555b8251604080513381523460208201528315158183015290517f1159164c56f277e6fc99c11731bd380e0347deb969b75523398734c252706ea39181900360600190a28015610a9a57825160608401516040519081527f6e912a3a9105bdd2af817ba5adc14e6c127c1035b5b648faa29ca0d58ab8ff4e9060200160405180910390a25b505060016065555050565b60d45473ffffffffffffffffffffffffffffffffffffffff163314610b0c5760405162461bcd60e51b815260206004820152601660248201527f53656e646572206973206e6f7420746865207472696f000000000000000000006044820152606401610580565b60d480547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b60975473ffffffffffffffffffffffffffffffffffffffff163314610bba5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610580565b60cb8190556040518181527f1b55d9f7002bda4490f467e326f22a4a847629c0f2d1ed421607d318d25b410d906020016105e5565b60975473ffffffffffffffffffffffffffffffffffffffff163314610c565760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610580565b61067a60006115f4565b60975473ffffffffffffffffffffffffffffffffffffffff163314610cc75760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610580565b61067a61166b565b600054610100900460ff16610cea5760005460ff1615610cee565b303b155b610d605760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a65640000000000000000000000000000000000006064820152608401610580565b600054610100900460ff16158015610d9f57600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000166101011790555b610da7611711565b610daf61179e565b610db7611823565b610dbf61166b565b60c9805473ffffffffffffffffffffffffffffffffffffffff808a167fffffffffffffffffffffffff00000000000000000000000000000000000000009283161790925560ca80549289169290911691909117905560cb85905560cc84905560cd805460ff85167fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0090911617905560ce8290558015610e8157600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff1690555b50505050505050565b60335460ff16610edc5760405162461bcd60e51b815260206004820152601460248201527f5061757361626c653a206e6f74207061757365640000000000000000000000006044820152606401610580565b60026065541415610f2f5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610580565b6002606555610f3c6118b0565b6001606555565b60975473ffffffffffffffffffffffffffffffffffffffff163314610faa5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610580565b60cc8190556040518181527f6ab2e127d7fdf53b8f304e59d3aab5bfe97979f52a85479691a6fab27a28a6b2906020016105e5565b600260655414156110325760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610580565b600260655560335460ff161561108a5760405162461bcd60e51b815260206004820152601060248201527f5061757361626c653a20706175736564000000000000000000000000000000006044820152606401610580565b6110926118b0565b610f3c61143d565b60975473ffffffffffffffffffffffffffffffffffffffff1633146111015760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610580565b73ffffffffffffffffffffffffffffffffffffffff811661118a5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610580565b611193816115f4565b50565b60975473ffffffffffffffffffffffffffffffffffffffff1633146111fd5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610580565b60ce8190556040518181527faab6389d8f1c16ba1deb6e9831f5c5442cf4fcf99bf5bfa867460be408a91118906020016105e5565b61123c8282611c32565b6113725760ca60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d0e30db0826040518263ffffffff1660e01b81526004016000604051808303818588803b1580156112aa57600080fd5b505af11580156112be573d6000803e3d6000fd5b505060ca546040517fa9059cbb00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff878116600483015260248201879052909116935063a9059cbb92506044019050602060405180830381600087803b15801561133857600080fd5b505af115801561134c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113709190611f1e565b505b5050565b60335460ff166113c85760405162461bcd60e51b815260206004820152601460248201527f5061757361626c653a206e6f74207061757365640000000000000000000000006044820152606401610580565b603380547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390a1565b60c960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16631249c58b6040518163ffffffff1660e01b8152600401602060405180830381600087803b1580156114a757600080fd5b505af19250505080156114f5575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682019092526114f291810190611fbc565b60015b61153557611501612173565b806308c379a01415611529575061151661218f565b80611521575061152b565b61119361166b565b505b3d6000803e3d6000fd5b60ce544290600090611547908361202b565b6040805160c08101825285815260006020808301829052828401879052606083018590526080830182905260a090920181905260cf87905560d05560d185905560d283905560d380547fffffffffffffffffffffff000000000000000000000000000000000000000000169055815185815290810183905291925084917fd6eddd1118d71820909c1197aa966dbc15ed6f508554252169cc3d5ccac756ca910160405180910390a2505050565b6097805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b60335460ff16156116be5760405162461bcd60e51b815260206004820152601060248201527f5061757361626c653a20706175736564000000000000000000000000000000006044820152606401610580565b603380547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586114133390565b600054610100900460ff1661178e5760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201527f6e697469616c697a696e670000000000000000000000000000000000000000006064820152608401610580565b611796611cbd565b61067a611d3a565b600054610100900460ff1661181b5760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201527f6e697469616c697a696e670000000000000000000000000000000000000000006064820152608401610580565b61067a611de1565b600054610100900460ff166118a05760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201527f6e697469616c697a696e670000000000000000000000000000000000000000006064820152608401610580565b6118a8611cbd565b61067a611e5e565b6040805160c08101825260cf54815260d054602082015260d15491810182905260d254606082015260d35473ffffffffffffffffffffffffffffffffffffffff8116608083015274010000000000000000000000000000000000000000900460ff16151560a0820152906119665760405162461bcd60e51b815260206004820152601460248201527f41756374696f6e206861736e277420626567756e0000000000000000000000006044820152606401610580565b8060a00151156119b85760405162461bcd60e51b815260206004820181905260248201527f41756374696f6e2068617320616c7265616479206265656e20736574746c65646044820152606401610580565b8060600151421015611a0c5760405162461bcd60e51b815260206004820152601860248201527f41756374696f6e206861736e277420636f6d706c6574656400000000000000006044820152606401610580565b60d380547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff1674010000000000000000000000000000000000000000179055608081015173ffffffffffffffffffffffffffffffffffffffff16611b3b5760c95473ffffffffffffffffffffffffffffffffffffffff166323b872dd30611aa860975473ffffffffffffffffffffffffffffffffffffffff1690565b845160405160e085901b7fffffffff0000000000000000000000000000000000000000000000000000000016815273ffffffffffffffffffffffffffffffffffffffff93841660048201529290911660248301526044820152606401600060405180830381600087803b158015611b1e57600080fd5b505af1158015611b32573d6000803e3d6000fd5b50505050611bd5565b60c954608082015182516040517f23b872dd00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff928316602482015260448101919091529116906323b872dd90606401600060405180830381600087803b158015611bbc57600080fd5b505af1158015611bd0573d6000803e3d6000fd5b505050505b805160808201516020808401516040805173ffffffffffffffffffffffffffffffffffffffff9094168452918301527fc9f72b276a388619c6d185d146697036241880c36654b1a3ffdad07c24038d99910160405180910390a250565b60408051600080825260208201909252819073ffffffffffffffffffffffffffffffffffffffff851690617530908590604051611c6f9190611ff0565b600060405180830381858888f193505050503d8060008114611cad576040519150601f19603f3d011682016040523d82523d6000602084013e611cb2565b606091505b509095945050505050565b600054610100900460ff1661067a5760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201527f6e697469616c697a696e670000000000000000000000000000000000000000006064820152608401610580565b600054610100900460ff16611db75760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201527f6e697469616c697a696e670000000000000000000000000000000000000000006064820152608401610580565b603380547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169055565b600054610100900460ff16610f3c5760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201527f6e697469616c697a696e670000000000000000000000000000000000000000006064820152608401610580565b600054610100900460ff16611edb5760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201527f6e697469616c697a696e670000000000000000000000000000000000000000006064820152608401610580565b61067a336115f4565b803560ff81168114611ef557600080fd5b919050565b600060208284031215611f0c57600080fd5b8135611f178161222c565b9392505050565b600060208284031215611f3057600080fd5b81518015158114611f1757600080fd5b60008060008060008060c08789031215611f5957600080fd5b8635611f648161222c565b95506020870135611f748161222c565b94506040870135935060608701359250611f9060808801611ee4565b915060a087013590509295509295509295565b600060208284031215611fb557600080fd5b5035919050565b600060208284031215611fce57600080fd5b5051919050565b600060208284031215611fe757600080fd5b611f1782611ee4565b6000825160005b818110156120115760208186018101518583015201611ff7565b81811115612020576000828501525b509190910192915050565b6000821982111561203e5761203e612144565b500190565b600082612079577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156120b6576120b6612144565b500290565b6000828210156120cd576120cd612144565b500390565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f830116810181811067ffffffffffffffff8211171561213d577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040525050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600060033d111561218c5760046000803e5060005160e01c5b90565b600060443d101561219d5790565b6040517ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc803d016004833e81513d67ffffffffffffffff81602484011181841117156121eb57505050505090565b82850191508151818111156122035750505050505090565b843d870101602082850101111561221d5750505050505090565b611cb2602082860101876120d2565b73ffffffffffffffffffffffffffffffffffffffff8116811461119357600080fdfea2646970667358221220f89c14a7c7e82da94441688ab39e10ea4fc063b2235cfd9d97bdffb889b6e8fe64736f6c63430008060033";
