import { Text, View } from "./Themed";
import { StyleSheet,Pressable } from "react-native";
import Colors from "../constants/Colors";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { MonoText } from "./StyledText";
import { Link } from "expo-router";
type Stock = {
    name: string;
    symbol: string;
    close: string;
    percent_change: string;
}

type WatchlistItemProps = {
    stock: Stock;
}

export default function WatchlistItem({ stock }: WatchlistItemProps) {
  const change=Number.parseFloat(stock.percent_change);
    return (
        <Link href={`/${stock.symbol}`} asChild>
            <Pressable style={styles.container}>
        <View style={{flex:1,gap:5}}>
            {/* Left container */}
                <Text style={styles.symbol}> 
                    {stock.symbol}
                    <MaterialCommunityIcons name="dots-horizontal" size={15} color="white" />
                </Text>
                <Text style={{ color: 'gray' }}>{stock.name}</Text>
            </View>

            {/* Right Container */}
            <View style={{alignItems:'flex-end'}}>
                    <MonoText>{Number.parseFloat(stock.close).toFixed(2)}</MonoText>
                    <MonoText style={{color:change>0 ? '#006400':'red'}}>
                        {change>0 ? '+' :''}
                        {change.toFixed(2)} %
                    </MonoText>
        </View>
        </Pressable>
    </Link>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    symbol: {
        fontSize: 15,
        fontWeight: 'bold',
        color: Colors.light.tint,
    },
});
