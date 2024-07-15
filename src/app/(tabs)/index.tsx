import { StyleSheet,FlatList } from 'react-native';
import { Text, View } from '@/src/components/Themed';
import { Stack } from 'expo-router';
import top5 from '@/assets/data/top5.json';
import WatchlistItem from '@/src/components/WatchlistItem';
export default function TabOneScreen() {
  const stocks=Object.values(top5);
  return (
    <View style={styles.container}>
      <Stack.Screen options={{title:'Watchlist'}} />
      <FlatList data={stocks} renderItem={({item})=> <WatchlistItem stock={item} />}
      contentContainerStyle={{gap: 50, padding: 10}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
 
});
