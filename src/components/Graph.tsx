import Colors from '../constants/Colors';
import {View,Text} from './Themed';
import { LineGraph,GraphPoint } from 'react-native-graph';
import timeseries from '@/assets/data/timeseries.json';

const Graph= () =>{

    const points: GraphPoint[]=timeseries.values.map((value)=> ({
        date:new Date(value.datetime),
        value:Number.parseFloat(value.close),
    }));

    console.log(JSON.stringify(points,null,2));
    return(
        <View>
            <Text></Text>
            <LineGraph 
            style={{ width:'100%', height:300}}
            points={points} 
            animated={true} 
            color={Colors.light.tint}
            gradientFillColors={[Colors.light.tint,'#000']}
            />
        </View>
    );
};

export default Graph;