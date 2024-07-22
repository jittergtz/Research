import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import { useAssets } from 'expo-asset'
import { ResizeMode, Video } from 'expo-av'
import { Link } from 'expo-router'
import { defaultStyles } from '@/constants/Styles'
import Colors from '@/constants/Colors'
import { StatusBar } from 'expo-status-bar'

const Page = () => {
 const [assets] = useAssets([require('@/assets/videos/ocean.mp4')])

  return (
    <ImageBackground 
    source={require('@/assets/images/research-welcome.jpg')}
    style={styles.backgroundImage}>
    <StatusBar style='light'/>
    <View style={styles.container}>

     
     
        <View style={{marginTop: 200, padding: 20 }}>
            <Text style={styles.header}>
                Research in seconds,
                </Text>
                <Text style={styles.description}>
                Get Companys insights and latest news.
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
    </ImageBackground>

  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: "100%",
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
     fontSize: 56,

    },
    description: {
        fontSize: 24,
        color: "white",
        
    },

    button: { 
        color: "white",
        flexDirection: "row",
        justifyContent: "center",
        gap: 10,
        marginBottom: 60,
        padding: 5,

    },
    backgroundImage: {
      width: "100%",
      height: "100%",
      position: 'absolute',
    }
})

export default Page