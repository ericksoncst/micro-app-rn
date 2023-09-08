import React from "react";
import { SafeAreaView, Text } from 'react-native'
import { Federated } from '@callstack/repack/client';


const Account = React.lazy(() => Federated.importModule('account', './App'))

function AccountScreen(props) {
    return (
        <SafeAreaView>
            <React.Suspense
            fallback={<Text>Loading account...</Text>}>
                <Account {...props} />
            </React.Suspense>
        </SafeAreaView>
    )
}

export default AccountScreen