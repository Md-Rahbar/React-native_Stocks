import{View,Text} from '@/src/components/Themed'
import { Stack, useLocalSearchParams } from 'expo-router';
import React from 'react'
import top5 from '@/assets/data/top5.json'
import WatchlistItem from '../components/WatchlistItem';
import Graph from '../components/Graph';
 
const StockDetails =()=> {
    const{symbol}= useLocalSearchParams();
    
    const stock= top5[symbol];
    if(!stock){
        return<Text>Stock with {symbol} could not be found</Text>
    }
    return(
        <View style={{padding:10}}>
            <Stack.Screen options={{title:stock.symbol,headerBackTitleVisible:false}}/>
           < WatchlistItem stock={stock} />
           <Graph />
        </View>
    );
};

export default StockDetails