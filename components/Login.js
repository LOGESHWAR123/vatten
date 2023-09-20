import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";


export default function Login() {

     const navigation = useNavigation();
  return (
    <View style={{ backgroundColor: '#D5EEFD', flex: 1 }}>
      <Image
        source={require('/vatten/vatten/assets/vattenlogo.png')}
        style={{
          position: 'absolute',
          alignSelf: 'center',
          zIndex: -1,
          width: 170,
          height: 170,
          top: 140, 
        }}
      />
      <Text style={{ alignSelf: 'center', marginTop: 30, fontSize: 20, color: '#049BF6', fontWeight: 'bold' }}>
        Login
      </Text>
      <View
        style={{
          marginTop: 50,
          alignSelf: 'center',
          backgroundColor: 'rgba(228, 245, 255, 0.9)', 
          height: 220,
          width: '80%',
          borderRadius: 20,
          padding: 20, 
        }}
      >
        <TextInput placeholder='Customer ID' style={styles.loginbox} />
        <TextInput placeholder='Password' style={styles.loginbox} />
      </View>
      <View style={{ alignSelf: 'center', marginTop: 30, width: '80%' }}>
        <TouchableOpacity style={{ backgroundColor: '#049BF6', height: 40 }} onPress={() => navigation.navigate('Home')}>
          <Text style={{ textAlign: 'center', marginTop: 10, fontWeight: 'bold', color: 'white' }}>
            Login
          </Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'row', alignItems: 'center', alignSelf: 'center',marginTop:30}}>
        <Text style={{color: 'gray', fontWeight: '600', fontSize: 14}}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')} >
          <Text style={{color:'#57C0FF',fontWeight: '600', fontSize: 14}}> Sign Up</Text>
          </TouchableOpacity>
      </View>
      </View>
      <Image
        source={require('/vatten/vatten/assets/down.png')}
        style={{
          position:'absolute',
          bottom:0
        }}
      />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  loginbox: {
    borderWidth: 1,
    borderColor: '#57C0FF',
    width: '100%', 
    height: 40,
    paddingLeft: 20,
    marginTop: 24,
    paddingHorizontal: 10,
    backgroundColor:'rgba(255, 255, 255, 0.5)'
  },
});
