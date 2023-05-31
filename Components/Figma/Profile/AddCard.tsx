import { Image, Pressable, ScrollView, Text, View  } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import React from 'react'

const Addcard = () => {
  return (
    <ScrollView>
            <View>
                <Image
                style={{height:300 , width: '100%'}} 
                 source={{uri: 'https://i.pinimg.com/474x/e7/06/b9/e706b9c1e0531b63020524d492545388.jpg'}} />
            </View>
            <View style={{padding:20 }}>
            <View style={{display: 'flex', flexDirection: 'row', width: '100%',paddingBottom:20 }}>
                <Text style={{display: 'flex', flex:1, fontSize: 30, fontWeight: "bold", paddingBottom:10}}>
                    MS Dhoni
                </Text>
                <View style={{height:40, width:40, backgroundColor: '#BBBABA', borderRadius: 30}} />

            </View>
            <View style={{borderWidth:0.7 ,borderColor:'#B8C5DB'}}/>
            <View style={{paddingTop:10, paddingBottom: 10, gap:3}}>
                <Text style={{fontSize: 20, fontWeight:'bold'}}>
                    About
                </Text>
                <Text style={{marginVertical:10}}>
                Mahendra Singh Dhoni commonly known as MS Dhoni, is a former Indian cricketer and captain of the Indian national team in limited-overs formats from 2007...
                </Text>
            </View>
            <View style={{borderWidth:0.7 ,borderColor:'#B8C5DB'}}/>


            <View style={{paddingTop:10, paddingBottom: 10, gap:3, display: 'flex'}}>
            <Text style={{fontSize: 20, fontWeight:'bold'}}>
                Personal details
            </Text>
            <View style={{display: 'flex', flexDirection: 'row', width: '100%' , marginTop:10}}>
                <Text style={{display: 'flex', flex:1}}>
                    Email address:
                </Text>
                <Text style={{fontWeight: 'bold'}}>
                    msdhoni@gmail.com
                </Text>  
            </View>
            <View style={{display: 'flex', flexDirection: 'row', width: '100%', paddingBottom: 10, paddingTop: 10, gap:10}}>
                <Text style={{display: 'flex', flex:1}}>
                    Mobile No:
                </Text>
                <Text style={{fontWeight: 'bold'}}>
                    9108414187
                </Text>   
            </View>
            </View>
        
            <View style={{borderWidth:0.7 ,borderColor:'#B8C5DB'}}/>


            <View style={{display: 'flex', width: '100%', paddingBottom: 10, paddingTop: 10, gap:10}}>
                <Text style={{fontSize: 20, fontWeight:'bold'}}>
                    Company details
                </Text>
                <Text>
                    Company name:
                </Text>

                <View style={{display: 'flex', flexDirection: 'row', width: '100%'}}>
                    <Text style={{display: 'flex', flex:1}}>
                         Department:
                     </Text>
                    <Text style={{fontWeight:'bold'}}>
                         Sports
                    </Text> 
                </View>

                <View style={{display: 'flex', flexDirection: 'row', width: '100%'}}>
                    <Text style={{display: 'flex', flex:1}}>
                         Designation:
                     </Text>
                    <Text style={{fontWeight:'bold'}}>
                         Captian
                    </Text> 
                </View>
                
                <View style={{display: 'flex', flexDirection: 'row', width: '100%'}}>
                    <Text style={{display: 'flex', flex:1}}>
                         Mobile No:
                     </Text>
                    <Text style={{fontWeight:'bold'}}>
                         4567898765
                    </Text> 
                </View>
            </View>
            <View style={{borderWidth:0.7 ,borderColor:'#B8C5DB'}}/>
            
            <View style={{display: 'flex', width: '100%', paddingBottom: 10, paddingTop: 10, gap:10}}>
                <Text style={{fontSize: 20, fontWeight:'bold' , marginTop:10}}>
                    Contacts & Social links
                </Text>

                <View style={{display: 'flex', flexDirection: 'row', width: '100%', backgroundColor:'#D2DDEF', borderRadius:10, justifyContent:'center', alignItems:'center',gap:10,padding:10 }}>
                    <View style={{paddingRight:10}}>
                        <Icon name='call-outline' size={25} color='#0D63F0'/>
                    </View>
                    <View style={{display:'flex',flex:1, gap:15}}>
                        <View style={{display: 'flex', flexDirection: 'row', width: '100%'}}>
                            <Text style={{display: 'flex', flex:1,fontWeight:'bold', color:'#0D63F0'}}>98765432345</Text>
                            <Text style={{color:'#0D63F0'}}>(For work)</Text>  
                        </View>
                        <View style={{display: 'flex', flexDirection: 'row', width: '100%' }}>
                        <Text style={{display: 'flex', flex:1, fontWeight:'bold', color:'#0D63F0'}}>8765434598</Text>
                        <Text style={{color:'#0D63F0'}}>(WhatsApp only)</Text>  
                        </View>
                    </View>

                </View>

                <View style={{ backgroundColor:'#D2DDEF', display:'flex',flexDirection:'row',borderRadius:10, padding:10,}}>
                    <View style={{display:'flex', flex:1}}>
                    <Icon name='link-outline' size={25} color='#0D63F0'/>
                    </View>
                    <Text style={{color:'#0D63F0'}}>(Product web)</Text>
                </View>
                
                <View style={{backgroundColor:'#D2DDEF', display:'flex',flexDirection:'row',borderRadius:10, padding:10,}}>
                     <View style={{display:'flex',flexDirection:'row',flex:1, gap:10}}>
                     <Icon name='logo-linkedin' size={25} color='#0A66C2'/>
                         <Text style={{fontWeight:'bold',color:'#0D63F0'}}>msd07</Text>

                    </View>
                     <Text style={{color:'#0D63F0'}}>(Product page)</Text>
                </View>

            </View>

            <View style={{padding:20}}>
                <Pressable style={{backgroundColor:'#0458F7', justifyContent: 'center', borderRadius: 20}}>
                    <Text style={{textAlign: 'center', fontSize: 25, padding:15, color:"white" }}>share contact</Text>
                </Pressable>
            </View>
            
            </View>



        </ScrollView>
  )
}

export default Addcard;