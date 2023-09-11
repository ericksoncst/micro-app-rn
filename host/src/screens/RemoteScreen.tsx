import React from "react";
import { SafeAreaView, Text } from 'react-native'
import { Federated } from '@callstack/repack/client';


const Remote = React.lazy(() => Federated.importModule('rbundle', './App'))

function RemoteScreen(props: { navigation: {}, route: {}}) {
    return (
        <SafeAreaView>
            <React.Suspense
            fallback={<Text>Loading Remote...</Text>}>
                <Remote {...props} />
            </React.Suspense>
        </SafeAreaView>
    )
}

export default RemoteScreen