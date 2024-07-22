import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { defaultStyles } from '@/constants/Styles'
import { TextInput } from 'react-native-gesture-handler'
import Colors from '@/constants/Colors'
import { Link } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const Page = () => {
const [countryCode, setCountryCode] = useState("+49")
const [phoneNumber, setPhoneNumber] = useState<string>()
const onSignup = async () => {}


  return (
    <View style={defaultStyles.container}>
      <StatusBar style='dark'/>
      <Text style={defaultStyles.header}>Lets get started</Text>
      <Text style={defaultStyles.descriptionText}>Enter your phone number, We will send you a confirmation code.</Text>
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

      <Link href={"/login"} replace asChild>
      <TouchableOpacity>
        <Text style={defaultStyles.textLink}>Already have an account ?</Text>
      </TouchableOpacity>
      </Link>

      <TouchableOpacity style={[defaultStyles.pillButton,
      phoneNumber !== "" ? styles.enabled : styles.disabled,
      { marginTop: 20}]}
      onPress={onSignup}>
        <Text style={defaultStyles.buttonText}>Sign up</Text>
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