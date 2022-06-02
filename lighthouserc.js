module.exports = {
  ci: {
    // ...
    collect: {
    	settings: {
              "onlyCategories": ['accessibility', 'best-practices', 'performance'],
              "preset": "desktop"
	},
    },
    upload: {
      target: 'temporary-public-storage',
    },
    assert: {
      
      assertions: {
        "categories:performance": "off",
	"categories:accessibility": "off",
	"categories:best-practices": "off",
      }, 
    },
    // ...
  },
};
