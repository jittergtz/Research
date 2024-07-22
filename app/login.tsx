import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { defaultStyles } from '@/constants/Styles'
import { TextInput } from 'react-native-gesture-handler'
import Colors from '@/constants/Colors'
import { Link } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar'


 enum SignInType {
    Phone, Email, Google, Apple
 }

const Page = () => {
const [countryCode, setCountryCode] = useState("+49")
const [phoneNumber, setPhoneNumber] = useState<string>()
const onSignIn  = async (type: SignInType) => {
    if(type === SignInType.Phone){

    }
}


  return (
    <View style={defaultStyles.container}>
     <StatusBar style='dark'/>
      <Text style={defaultStyles.header}>Welcome back</Text>
      <Text style={defaultStyles.descriptionText}>Enter your phone number, associated with your account</Text>
      <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder='Country code'
        placeholderTextColor={Colors.gray}
        value={countryCode}
        />
        <TextInput
        style={[styles.input, {flex: 1,}]}
        placeholder='Phone number'
        placeholderTextColor={Colors.gray}
        keyboardType='numeric'
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        />
      </View>

    
      <TouchableOpacity style={[defaultStyles.pillButton,
      phoneNumber !== "" ? styles.enabled : styles.disabled,
      { marginTop: 20}]}
      onPress={() => onSignIn(SignInType.Phone)}>
        <Text style={defaultStyles.buttonText}>Sign up</Text>
      </TouchableOpacity>


     <View style={{flexDirection: "row", alignItems: "center", marginTop: 30 ,gap: 16}}>
        <View style={{flex: 1, height: StyleSheet.hairlineWidth, backgroundColor: Colors.dark }}></View>
            <Text style={{color:Colors.gray, fontSize: 20}}>or</Text>
        <View style={{flex: 1, height: StyleSheet.hairlineWidth, backgroundColor: Colors.dark }}></View>
     </View>

    <TouchableOpacity style={[defaultStyles.pillButton, {flexDirection: "row", gap: 16, marginTop: 20, backgroundColor: "#fff"}]}
    onPress={() => onSignIn(SignInType.Email)}>
        <Ionicons name="mail" size={24} color={"#000"} />
        <Text style={[defaultStyles.buttonText, {color: "#000"}]}>
            Continue with email
        </Text>
    </TouchableOpacity>

    <TouchableOpacity style={[defaultStyles.pillButton, {flexDirection: "row", gap: 16, marginTop: 20, backgroundColor: "#fff"}]}
    onPress={() => onSignIn(SignInType.Google)}>
        <Ionicons name="logo-google" size={24} color={"#000"} />
        <Text style={[defaultStyles.buttonText, {color: "#000"}]}>
            Continue with email
        </Text>
    </TouchableOpacity>

    <TouchableOpacity style={[defaultStyles.pillButton, {flexDirection: "row", gap: 16, marginTop: 20, backgroundColor: "#fff"}]}
    onPress={() => onSignIn(SignInType.Apple)}>
        <Ionicons name="logo-apple" size={24} color={"#000"} />
        <Text style={[defaultStyles.buttonText, {color: "#000"}]}>
            Continue with email
        </Text>
    </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 40,
    flexDirection: "row", 
  },
  input: {
    backgroundColor: Colors.lightGray,
    padding: 20,
    borderRadius: 16,
    fontSize: 20,
    marginRight: 10},
    enabled: {
     backgroundColor: Colors.primary
    },
    disabled: {
      backgroundColor: Colors.primaryMuted
    }
})

export default Page