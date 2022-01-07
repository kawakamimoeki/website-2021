module.exports = {
  ci: {
    collect: {
      startServerCommand: "yarn dev",
      url: ["http://localhost:3000/"]
    },
    upload: {
      target: "lhci",
      serverBaseUrl: "https://lhci-moekidev.herokuapp.com",
      token: "de02dce2-36ec-413e-b1c5-39e51d020f71"
    },
    assert: {
      preset: 'lighthouse:recommended'
    }
  }
}
