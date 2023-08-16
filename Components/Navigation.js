import {Button,SafeAreaView,Alert, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import LogIn from '../Screens/LogInScreen';
import Register from '../Screens/RegisterScreen';
import car from '../Screens/CarouselCardItem';
import Women from'../Screens/WomenScreen';
import Home from '../Screens/Home';
import CarouselCardItem from '../Screens/CarouselCardItem';
import CarouselCard from '../Screens/CarusleCard';
import AuthProvider from '../Context/AuthContext';

import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function Navigation() {
  return (
   <AuthProvider>

   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="LogIn" component={LogIn} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Women" component={Women} />
      <Stack.Screen name='CarouselCardItem'component={CarouselCardItem}/>
            <Stack.Screen name='CarusleCard'component={CarouselCard}/>
    </Stack.Navigator>
    </NavigationContainer>
    </AuthProvider>
  );
}
//  const Navigation=()=> {
//     return (
//       <AuthProvider>
//      <NavigationContainer>
//         <Stack.Navigator>
//             <Stack.Screen name='LogIn' component={LogIn}/>
//             <Stack.Screen name='Register' component={Register}/>
//             <Stack.Screen name='Home' component={Home}/>
//             <Stack.Screen name='Women'component={Women}/>
//             <Stack.Screen name='CarouselCardItem'component={CarouselCardItem}/>
//             <Stack.Screen name='CarusleCard'component={CarouselCard}/>
//         </Stack.Navigator>
//      </NavigationContainer>
//      </AuthProvider>
//     );
//   }

  
  export default Navigation;