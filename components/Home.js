import React, { useRef, useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';


function generateMonthDates(year, month) {
  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0); 
  const dates = [];

  for (let date = firstDayOfMonth; date <= lastDayOfMonth; date.setDate(date.getDate() + 1)) {
    dates.push(new Date(date));
  }

  return dates;
}

export default function Home() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const monthDates = generateMonthDates(currentYear, currentMonth);
  const scrollViewRef = useRef(null);

  useEffect(() => {
    if (scrollViewRef.current) {
      const currentDate = new Date();
      const currentIndex = monthDates.findIndex(date => date.getDate() === currentDate.getDate());

      if (currentIndex !== -1) {
        const xOffset = currentIndex * 43;
        scrollViewRef.current.scrollTo({ x: xOffset, animated: true });
      }
    }
  }, [monthDates]);

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentYear(currentYear + 1);
      setCurrentMonth(0);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentYear(currentYear - 1);
      setCurrentMonth(11);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'
  ];
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  
  return (
    <View style={{ backgroundColor: '#D5EEFD', flex: 1 }}>
      <Image
        source={require('/vatten/vatten/assets/water.png')}
        style={{
          position: 'absolute',
          alignSelf: 'center',
          zIndex: -1,
          width: 500,
          height: 500,
          top: 30,
          opacity: 0.2
        }}
      />
      <View style={{ alignSelf: 'center', flexDirection: "row" }}>
        <Image
          source={require('/vatten/vatten/assets/vattenlogo.png')}
          style={{
            width: 40,
            height: 40,
            marginTop: 10
          }}
        />
        <Text style={{ marginTop: 20, marginLeft: 10, fontWeight: 'bold' }}>We Guarantee Purity!</Text>
      </View>
      <Text style={{ marginLeft: 20, fontWeight: 'bold', fontSize: 20, marginTop: 20 }}>Welcome User</Text>
      <View style={{ flexDirection: 'row', marginLeft: 20, marginTop: 10 }}>
        <View style={{ flexDirection: 'row' }}>
          <Text>{monthNames[currentMonth]}</Text>
          <Text style={{ marginLeft: 20 }}>{currentYear}</Text>
        </View>
        <View style={{flexDirection:'row',marginLeft:130}}>
         <TouchableOpacity style={{}} onPress={prevMonth}>
             <FontAwesomeIcon name="chevron-left" size={20} />
         </TouchableOpacity>
         <TouchableOpacity style={{marginLeft:30}} onPress={nextMonth}>
            <FontAwesomeIcon name="chevron-right" size={20} />
          </TouchableOpacity>
        </View>

      </View>
      <View style={{ marginTop: 10 }}>
        <ScrollView horizontal ref={scrollViewRef}>
          {monthDates.map((date, index) => (
            <TouchableOpacity key={index} style={styles.dateTouchable}>
              <Text>{dayNames[date.getDay()]}</Text>
              <Text
                style={[
                  styles.dateText,
                  date.getDate() === new Date().getDate() ? { color: '#57C0FF' } : null,
                ]}
              >
                {date.getDate()}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <View style={{backgroundColor:'rgba(255, 255, 255, 0.5)',width:'75%',alignSelf:'center',marginTop:30,height:120,borderRadius:30}}>
        
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dateTouchable: {
    paddingHorizontal: 16,
  },
  dateText: {
    fontSize: 18,
  },
});
