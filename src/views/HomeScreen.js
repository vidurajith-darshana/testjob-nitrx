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
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={{flex: 1, backgroundColor: 'white'}}>

            <View style={styles.header}>
                <Text style={{
                    fontSize: 25,
                    position: 'absolute',
                    paddingTop: 5,
                    color: '#088F8F',
                    fontWeight: 'bold'
                }}> News Feed</Text>
                <View style={{flex: 2, flexDirection: 'row', padding: '2%',}}>


                    <View style={{flex: 1, alignItems: 'flex-start', paddingTop: 15, marginHorizontal: 15}}>

                        <TouchableOpacity>


                            <Image
                                style={{width: 30, height: 30,}}
                                source={require("../assets/menu.png")}
                            />
                        </TouchableOpacity>

                    </View>
                </View>
                <View style={{flexDirection: 'row', width: '100%', height: '65%'}}>

                    <View style={{flex: 1}}>
                        <FlatList
                            horizontal={true}

                            style={{}}
                            data={[]}
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(item, index) => index.toString() + item.toString()}
                            contentContainerStyle={{paddingRight: 300}}
                            ListHeaderComponentStyle={{justifyContent: 'center'}}

                            renderItem={({item, index}) => (
                                <View style={{
                                    alignItems: 'center',
                                    padding: '2.5%',
                                    flexDirection: 'column',
                                    justifyContent: 'center'
                                }}>
                                    <View style={{justifyContent: 'center', alignItems: 'center', marginBottom: 5}}>
                                        <Image
                                            source={item.image}
                                        />
                                        <Image
                                            source={require("../assets/Gradient.png")}
                                            style={{position: "absolute",}}
                                        />
                                    </View>
                                    <Text style={{fontFamily: "SF-UI-Text-Medium", fontSize: 11, paddingTop: '1.5%'}}>
                                        {item.name}
                                    </Text>
                                </View>
                            )}

                        />
                    </View>

                </View>

            </View>

            <ScrollView style={styles.content}>
                <View style={{height: 450, marginBottom: 10, marginTop: 0}}>
                    <View style={{height: 50, justifyContent: 'space-between', flexDirection: 'row'}}>
                        <View style={{flexDirection: 'row'}}>
                            <View style={{justifyContent: 'center', padding: '7.5%'}}>
                                <Image
                                    source={require("../assets/logo.png")}
                                    style={{borderRadius: 200}}
                                />
                            </View>
                            <View style={{justifyContent: 'center'}}>
                                <Text style={{fontFamily: "SF-UI-Text-Medium", fontSize: 12}}>
                                    Pablo Costa
                                </Text>
                                <Text style={{fontFamily: "SF-UI-Text-Regular", fontSize: 11}}>
                                    Mexico
                                </Text>
                            </View>
                        </View>
                        <View style={{justifyContent: 'center', padding: '2%'}}>
                            <Image
                                source={require("../assets/3dots.png")}
                            />
                        </View>
                    </View>
                    <View style={{height: 200, backgroundColor: '#d3d3d3', borderRadius: 30}}>
                        <Image
                            source={require("../assets/image2.png")}
                            style={{
                                width: '100%',
                                height: 200, borderRadius: 10
                            }}
                        />

                    </View>
                    <View style={{height: 100}}>
                        <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
                            <View style={{height: '40%', width: '20%', margin: '2%'}}>
                                <View style={{flexDirection: 'row', flex: 3}}>
                                    <View style={{flex: 1, alignItems: 'center', alignSelf: 'center'}}>
                                        <Image
                                            source={require("../assets/Heartbtm.png")}
                                        />
                                    </View>
                                    <View style={{flex: 1, alignItems: 'center', alignSelf: 'center'}}>
                                        <Image
                                            source={require("../assets/Comment.png")}
                                        />
                                    </View>

                                </View>
                            </View>

                            <View style={{
                                height: '20%',
                                width: '15%',
                                margin: '2%',
                                alignItems: 'flex-end',
                                flexDirection: 'row',
                                marginVertical: 18,
                                marginRight: 50
                            }}>
                                <Text style={{marginTop: -10, fontSize: 17}}>4.2</Text>
                                <Text> </Text>
                                <Image
                                    source={require("../assets/star(1).png")}
                                />
                                <Image
                                    source={require("../assets/star(1).png")}
                                />
                                <Image
                                    source={require("../assets/star(1).png")}
                                />
                                <Image
                                    source={require("../assets/star(1).png")}
                                />


                            </View>
                        </View>
                        <View style={{paddingLeft: '3%'}}>
                            <Text style={{
                                fontFamily: "SF-UI-Text-Bold",
                                fontSize: 12,
                                paddingBottom: '0.5%',
                                marginTop: -20
                            }}>Each template offers guidance on key sections to include, as well as tips for selling
                                the</Text>
                        </View>

                    </View>

                </View>


                <View style={{height: 450, marginBottom: 10, marginTop: -120}}>
                    <View style={{height: 50, justifyContent: 'space-between', flexDirection: 'row'}}>
                        <View style={{flexDirection: 'row'}}>
                            <View style={{justifyContent: 'center', padding: '7.5%'}}>
                                <Image
                                    source={require("../assets/logo.png")}
                                    style={{borderRadius: 200}}
                                />
                            </View>
                            <View style={{justifyContent: 'center'}}>
                                <Text style={{fontFamily: "SF-UI-Text-Medium", fontSize: 12}}>
                                    Jesse Mary
                                </Text>
                                <Text style={{fontFamily: "SF-UI-Text-Regular", fontSize: 11}}>
                                    New York
                                </Text>
                            </View>
                        </View>
                        <View style={{justifyContent: 'center', padding: '2%'}}>
                            <Image
                                source={require("../assets/3dots.png")}
                            />
                        </View>
                    </View>
                    <View style={{height: 200, backgroundColor: '#d3d3d3', borderRadius: 30}}>
                        <Image
                            source={require("../assets/image3.png")}
                            style={{
                                width: '100%',
                                height: 200, borderRadius: 10
                            }}
                        />

                    </View>
                    <View style={{height: 100}}>
                        <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
                            <View style={{height: '40%', width: '20%', margin: '2%'}}>
                                <View style={{flexDirection: 'row', flex: 3}}>
                                    <View style={{flex: 1, alignItems: 'center', alignSelf: 'center'}}>
                                        <Image
                                            source={require("../assets/Heartbtm.png")}
                                        />
                                    </View>
                                    <View style={{flex: 1, alignItems: 'center', alignSelf: 'center'}}>
                                        <Image
                                            source={require("../assets/Comment.png")}
                                        />
                                    </View>

                                </View>
                            </View>
                            <View style={{
                                height: '20%',
                                width: '15%',
                                margin: '2%',
                                alignItems: 'flex-end',
                                flexDirection: 'row',
                                marginVertical: 18,
                                marginRight: 50
                            }}>
                                <Text style={{marginTop: -10, fontSize: 17}}>4.2</Text>
                                <Text> </Text>
                                <Image
                                    source={require("../assets/star(1).png")}
                                />
                                <Image
                                    source={require("../assets/star(1).png")}
                                />
                                <Image
                                    source={require("../assets/star(1).png")}
                                />
                                <Image
                                    source={require("../assets/star(1).png")}
                                />


                            </View>

                        </View>
                        <View style={{paddingLeft: '3%'}}>
                            <Text style={{
                                fontFamily: "SF-UI-Text-Bold",
                                fontSize: 12,
                                paddingBottom: '0.5%',
                                marginTop: -20
                            }}>Each template offers guidance on key sections to include, as well as tips for selling the
                                position and being clear</Text>
                        </View>


                    </View>

                </View>


                <View style={{height: 450, marginBottom: 10, marginTop: -120}}>
                    <View style={{height: 50, justifyContent: 'space-between', flexDirection: 'row'}}>
                        <View style={{flexDirection: 'row'}}>
                            <View style={{justifyContent: 'center', padding: '7.5%'}}>
                                <Image
                                    source={require("../assets/logo.png")}
                                    style={{borderRadius: 200}}
                                />
                            </View>
                            <View style={{justifyContent: 'center'}}>
                                <Text style={{fontFamily: "SF-UI-Text-Medium", fontSize: 12}}>
                                    John Ken
                                </Text>
                                <Text style={{fontFamily: "SF-UI-Text-Regular", fontSize: 11}}>
                                    New York
                                </Text>
                            </View>
                        </View>
                        <View style={{justifyContent: 'center', padding: '2%'}}>
                            <Image
                                source={require("../assets/3dots.png")}
                            />
                        </View>
                    </View>
                    <View style={{height: 200, backgroundColor: '#d3d3d3', borderRadius: 30}}>
                        <Image
                            source={require("../assets/image.png")}
                            style={{
                                width: '100%',
                                height: 200, borderRadius: 10
                            }}
                        />

                    </View>
                    <View style={{height: 100}}>
                        <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
                            <View style={{height: '40%', width: '20%', margin: '2%'}}>
                                <View style={{flexDirection: 'row', flex: 3}}>
                                    <View style={{flex: 1, alignItems: 'center', alignSelf: 'center'}}>
                                        <Image
                                            source={require("../assets/Heartbtm.png")}
                                        />
                                    </View>
                                    <View style={{flex: 1, alignItems: 'center', alignSelf: 'center'}}>
                                        <Image
                                            source={require("../assets/Comment.png")}
                                        />
                                    </View>

                                </View>
                            </View>
                            <View style={{
                                height: '20%',
                                width: '15%',
                                margin: '2%',
                                alignItems: 'flex-end',
                                flexDirection: 'row',
                                marginVertical: 18,
                                marginRight: 50
                            }}>
                                <Text style={{marginTop: -10, fontSize: 17}}>4.7</Text>
                                <Text> </Text>
                                <Image
                                    source={require("../assets/star(1).png")}
                                />
                                <Image
                                    source={require("../assets/star(1).png")}
                                />
                                <Image
                                    source={require("../assets/star(1).png")}
                                />
                                <Image
                                    source={require("../assets/star(1).png")}
                                />

                            </View>
                        </View>
                        <View style={{paddingLeft: '3%'}}>
                            <Text style={{
                                fontFamily: "SF-UI-Text-Bold",
                                fontSize: 12,
                                paddingBottom: '0.5%',
                                marginTop: -20
                            }}>Each template offers guidance on key sections to include, as well as tips for selling
                                the</Text>
                        </View>


                    </View>
                </View>


                <View style={{height: 450, marginBottom: 10, marginTop: -120}}>
                    <View style={{height: 50, justifyContent: 'space-between', flexDirection: 'row'}}>
                        <View style={{flexDirection: 'row'}}>
                            <View style={{justifyContent: 'center', padding: '7.5%'}}>
                                <Image
                                    source={require("../assets/logo.png")}
                                    style={{borderRadius: 200}}
                                />
                            </View>
                            <View style={{justifyContent: 'center'}}>
                                <Text style={{fontFamily: "SF-UI-Text-Medium", fontSize: 12}}>
                                    John Ken
                                </Text>
                                <Text style={{fontFamily: "SF-UI-Text-Regular", fontSize: 11}}>
                                    New York
                                </Text>
                            </View>
                        </View>
                        <View style={{justifyContent: 'center', padding: '2%'}}>
                            <Image
                                source={require("../assets/3dots.png")}
                            />
                        </View>
                    </View>
                    <View style={{height: 200, backgroundColor: '#d3d3d3', borderRadius: 30}}>
                        <Image
                            source={require("../assets/image.png")}
                            style={{
                                width: '100%',
                                height: 200, borderRadius: 10
                            }}
                        />

                    </View>
                    <View style={{height: 100}}>
                        <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
                            <View style={{height: '40%', width: '20%', margin: '2%'}}>
                                <View style={{flexDirection: 'row', flex: 3}}>
                                    <View style={{flex: 1, alignItems: 'center', alignSelf: 'center'}}>
                                        <Image
                                            source={require("../assets/Heartbtm.png")}
                                        />
                                    </View>
                                    <View style={{flex: 1, alignItems: 'center', alignSelf: 'center'}}>
                                        <Image
                                            source={require("../assets/Comment.png")}
                                        />
                                    </View>

                                </View>
                            </View>

                            <View style={{
                                height: '20%',
                                width: '15%',
                                margin: '2%',
                                alignItems: 'flex-end',
                                flexDirection: 'row',
                                marginVertical: 18,
                                marginRight: 50
                            }}>
                                <Text style={{marginTop: -10, fontSize: 17}}>5.0</Text>
                                <Text> </Text>
                                <Image
                                    source={require("../assets/star(1).png")}

                                />
                                <Image
                                    source={require("../assets/star(1).png")}

                                />
                                <Image
                                    source={require("../assets/star(1).png")}

                                />
                                <Image
                                    source={require("../assets/star(1).png")}

                                />


                            </View>
                        </View>
                        <View style={{paddingLeft: '3%'}}>
                            <Text style={{
                                fontFamily: "SF-UI-Text-Bold",
                                fontSize: 12,
                                paddingBottom: '0.5%',
                                marginTop: -20
                            }}>Each template offers guidance on key sections to include, as well as tips for selling
                                the</Text>
                        </View>


                    </View>
                </View>
                <View style={{height: 60}}></View>
            </ScrollView>

            <TouchableOpacity onPress={() => {
                navigation.navigate('AddPost')
            }}>

                <Image
                    style={{width: 40, height: 40, marginBottom: 15, alignSelf: 'center'}}
                    source={require("../assets/plus.png")}
                />
            </TouchableOpacity>

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
    }

});

export default HomeScreen;
