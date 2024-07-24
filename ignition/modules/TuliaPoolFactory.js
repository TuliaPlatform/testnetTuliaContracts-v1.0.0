const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("TuliaPoolFactory", (m) => {
  const tuliaPoolFactory = m.contract("TuliaPoolFactory", [
    "0x2dE66006A9769438613042ad6DB03293F1E739Bc",
    "0x82B7B9715273f7063AeD2c1b5136e241bc342d34",
    "0x5a27651600F4115FE966b9bb72DB3F28e2bBAb54",
    "0x076f592c1371F41140b45328c1cc7644823E2D8C",
  ]);

  return { tuliaPoolFactory };
});
