import {View, Text} from 'react-native';
import styles from './style';

export default function Genres({data}) {
    return(
        <View style={styles.container}>
            <Text style={styles.name}>{data.name}</Text>
        </View>

    )

}