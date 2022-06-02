module.exports = {
  ci: {
    // ...
    upload: {
      target: 'temporary-public-storage',
    },
    assert: {
      preset: 'lighthouse:recommended',
      assertions: {
        'uses-rel-preconnect' : 'off', 
        'unused-javascript' : 'off', 
        'unused-css-rules' : 'off', 
        'themed-omnibox' : 'off', 
        'splash-screen' : 'off', 
        'service-worker' : 'off', 
        'maskable-icon' : 'off', 
        'link-name' : 'off', 
        'installable-manifest' : 'off', 
        'image-size-responsive' : 'off', 
        'image-alt' : 'off', 
        'font-display' : 'off', 
        'csp-xss' : 'off', 
        'color-contrast' : 'off', 
        'apple-touch-icon' : 'off',
      }, 
    },
    // ...
  },
};
