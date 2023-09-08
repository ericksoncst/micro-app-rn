const deps = {
    react: {
        /**
         * singleton means that only one version of the module is loaded.
         */
        singleton: true,
        /**
         * eager means that the module is added into the initial bundle and will not be loaded later.
         * All shared module in the host app should be eager. In remote containers it depends on build proposes.
         * If bundle should work as a standalone application, then it should be eager.
         * Here is STANDALONE env variable shows if bundle is standalone and eager should be enabled.
         */
        eager: true,
        singleton: true,
        /**
         * requiredVersion is used to match requested modules in bundle.
         * It's recommended to use the same version as in the host app.
         */
        requiredVersion: '18.2.0',
      },
      'react-native': {
        eager: true,
        singleton: true,
        requiredVersion: '0.72.4',
      },
      '@react-navigation/native-stack': {
        eager: true,
        singleton: true,
        requiredVersion: '^6.9.13'
      },
      '@react-navigation/stack': {
        eager: true,
        singleton: true,
        requiredVersion: '^6.3.17'
      }
}

export {deps}