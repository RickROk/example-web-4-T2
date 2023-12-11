module.exports = {
  css: {
    preprocessorOptions: {
      css: {
        additionalData: `
            @use "~/assets/css/main.css" as *;
          `
      }
    }
  }
}
