module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    ["@babel/preset-react", { runtime: "automatic" }],
  ],
};

//   parcel is already using babel and parcel has its own configuration and we are
// try to override it, so we have to use the babel.config.js file to override the
// configuration of parcel
//   babel.config.js is the file that allows us to override the configuration of
// babel and parcel
