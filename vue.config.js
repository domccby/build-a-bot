module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:8081",
        changeOrigin: true // proxy, dynamically changes the origin header to target
      }
    }
  }
}
