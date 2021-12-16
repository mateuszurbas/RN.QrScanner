module.exports = async () => {
  return {
    verbose: true,
    rootDir: './',
    preset: 'jest-expo',
    setupFiles: ['./jest-setup.js'],
  };
};
