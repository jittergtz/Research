import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useAssets } from 'expo-asset'
import { ResizeMode, Video } from 'expo-av'
import { Link } from 'expo-router'
import { defaultStyles } from '@/constants/Styles'
import Colors from '@/constants/Colors'

const Page = () => {
 const [assets] = useAssets([require('@/assets/videos/ocean.mp4')])

  return (
    <View style={styles.container}>
      {assets && (
        <Video
        resizeMode={ResizeMode.COVER}
        isMuted
        isLooping
        shouldPlay 
        source={{uri: assets[0].uri }} style={styles.video}/> 
        )} 
        <View style={{marginTop: 80, padding: 20 }}>
            <Text style={styles.header}>
                Research in seconds
                </Text>
        </View>

        <View style={styles.button}>
        <Link href={"/login"} style={[defaultStyles.pillButton, {flex:1, backgroundColor: Colors.dark}]} asChild>
            <TouchableOpacity>
              <Text style={{color: "white", fontSize: 20, fontWeight: "500"}}>Login</Text>
            </TouchableOpacity>
            </Link>
            <Link href={"/signup"} style={[defaultStyles.pillButton, {flex:1, backgroundColor: Colors.lightGray}]} asChild>
            <TouchableOpacity>
              <Text style={{color: "black", fontSize: 20, fontWeight: "500"}}>Sign up</Text>
            </TouchableOpacity>
            </Link>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
    },
    video: {
         width: "100%",
         height: "100%",
         position: "absolute",
        
        },
    header: {
     color: "white",
     fontWeight: "700",
     fontSize: 36,

    },
    button: { 
        color: "white",
        flexDirection: "row",
        justifyContent: "center",
        gap: 10,
        marginBottom: 60,
        padding: 5,

    }
})

export default Page