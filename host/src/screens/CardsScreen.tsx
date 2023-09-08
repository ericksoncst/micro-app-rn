import React from "react";
import { SafeAreaView, Text } from 'react-native'
import { Federated } from '@callstack/repack/client';


const Cards = React.lazy(() => Federated.importModule('cards', './App'))

function CardsScreen(props) {
    return (
        <SafeAreaView>
            <React.Suspense
            fallback={<Text>Loading cards...</Text>}>
                 <Cards {...props} />
            </React.Suspense>
        </SafeAreaView>
    )
}

export default CardsScreen