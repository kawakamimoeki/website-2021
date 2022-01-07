module.exports = {
  ci: {
    collect: {
      startServerCommand: "npx http-server ./ --port 8080",
      url: ["http://localhost:8080/"]
    },
    upload: {
      target: "lhci",
      serverBaseUrl: "https://lhci.moekidev.com",
      token: "de02dce2-36ec-413e-b1c5-39e51d020f71"
    },
    assert: {
      preset: 'lighthouse:recommended'
    }
  }
}
