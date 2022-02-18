import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    FlatList,
    ScrollView,
    TouchableOpacity

} from 'react-native';
import ButtonAdd from '../components/ButtonAdd';
import { useNavigation } from '@react-navigation/native';
import {greenColor, secondaryDarkColor, yellowColor} from '../constants';
import InputForm from '../components/FormInput';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Checkbox } from 'react-native-paper';

const AddPost = () => {
    const navigation = useNavigation();
    const [checked, setChecked] = React.useState(false);
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>

            <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>


<Image
              style={{width:17,height:17,marginTop:'17%',marginRight:'80%'}}
                source={require("../assets/back.png")}
              
                
              />
</TouchableOpacity>
                <Text style={{ fontSize: 25, position: 'absolute', paddingTop: 5, color: '#088F8F', fontWeight: 'bold' }}> Create Post</Text>
                <View style={{ flex: 2, flexDirection: 'row', padding: '2%', }}>

               
                    <View style={{ flex: 1, alignItems: 'flex-start', paddingTop: 15, marginHorizontal: 15 }}>

               

                    </View>
                    
                </View>
                
                <View style={{ flexDirection: 'row', width: '100%', height: '65%' }}>
              
                    <View style={{ flex: 1 }}>
                    
                        <FlatList
                            horizontal={true}

                            style={{}}
                            data={[



                            ]}
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(item, index) => index.toString() + item.toString()}
                            contentContainerStyle={{ paddingRight: 300 }}
                            ListHeaderComponentStyle={{ justifyContent: 'center' }}

                            renderItem={({ item, index }) => (
                                <View style={{ alignItems: 'center', padding: '2.5%', flexDirection: 'column', justifyContent: 'center' }}>
                                    <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 5 }}>
                                        <Image
                                            source={item.image}
                                        />
                                        <Image
                                            source={require("../assets/Gradient.png")}
                                            style={{ position: "absolute", }}
                                        />
                                    </View>
                                    <Text style={{ fontFamily: "SF-UI-Text-Medium", fontSize: 11, paddingTop: '1.5%' }}>
                                        {item.name}
                                    </Text>
                                </View>
                            )}

                        />
                    </View>

                </View>

            </View>

            

            <ScrollView style={styles.content}>
                <View style={{ height: 450, marginBottom: 10, marginTop: -450 }}>
                    <View style={{ height: 50, justifyContent: 'space-between', flexDirection: 'row' }}>
                      
                     
                    </View>
                 
                    

                </View>


                <View style={styles.baseForm}>
                    <View style={styles.textinput}>
                        <InputForm

                            placeholder={'Title'}

                        />

                        <InputForm

                            placeholder={'Category'}

                        />

                        <InputForm

                            placeholder={'Website'}

                        />
                        <InputForm

                            placeholder={'Select media for post'}

                        />
                        <InputForm

                            placeholder={'Discription'}

                        />


<View style={styles.menuItem}>
<Checkbox
    color={greenColor}
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }}
    />
                               
                                </View>

         
                         <TouchableOpacity onPress={() => alert('clicked')}>

<View style={styles.buttonRegist}>
    <Text style={{ color: '#FFF', fontWeight: 'bold' ,fontSize:15}}>Post Now</Text>
</View>
</TouchableOpacity>
   
   


                    </View>
                </View>

                    



                <View style={{ height: 60 }}></View>
            </ScrollView>



            {/* <FontAwesome5.Button
    name="plus"
    size={22}
    backgroundColor="#fff"
    color="#2e64e5"
    onPress={() => navigation.navigate('CreateBuyer')}
  /> */}
            {/* <ButtonAdd

                title="ADD POST"

            /> */}


        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        height: '10%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        elevation: 2,
    },
    bottomNav: {
        position: "absolute",
        bottom: 0,
        width: '100%',
        height: '7.5%',
        flex: 5,
        flexDirection: 'row',
        elevation: 2,
        backgroundColor: 'white',
        borderTopWidth: 0.2
    },
    content: {
        width: '100%',
        flex: 1,
        paddingHorizontal: 20,
        marginBottom: '2%'
    },
    textinput: {
        paddingHorizontal: 10,
        paddingTop:15
    },
    menuItem: {
        paddingTop:30,
        paddingHorizontal: 30,
        alignItems: 'flex-start',
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 20,
        marginLeft: -25,



    },
    menuItemText: {
        alignItems: 'flex-start',
        color: '#808080',
        paddingTop:5,
        fontWeight: '600',
        fontSize: 15,
        lineHeight: 26,

    },
    buttonRegist: {
        paddingVertical: 15, alignItems: 'center', borderRadius: 20, backgroundColor: '#088F8F', marginTop:     0, marginHorizontal: 70

    },

});

export default AddPost;