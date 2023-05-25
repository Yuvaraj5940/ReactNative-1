/* eslint-disable react-native/no-inline-styles */
import {View, Text, Modal, Pressable, Image, FlatList} from 'react-native';
import React, {useState} from 'react';
import Style from './Style';

const WelcomePage = ({navigation}) => {
  const SignupOptions = [
    {
      title: 'Continue with Google',
      logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAjVBMVEVHcEz////9/f38/Pz////4+fn9/f38/P3v8PH19vb///////87q1n8wAnrSz5HifXqOijsUUMfpUYvfvQwqVhDhvRnm/bg7ur74eDykIrznpj609DI5c/uZUj/78rG2PyzzPKJyJj5zMn/++37xSf81XhqsFCa0KV1v4f0kCGvtTCCyJyXt/hyofZDj9Yia4J9AAAAC3RSTlMAojhxnKGw/RkrfoV/rhcAAAFQSURBVDiNlVPZYoMgENQYRCIgclRNNKlpm/T+/88rl3jmofPEMuPu7LpE0X+wO8RpGh9222wW5wFxtuYntJUsaATzBSCaFV/SBhMryF9dm46xrjn5cMzh8p9KRsuypJSVTgLn/o6stKAa7Gqv9r6/kadMQ/NHX8R1u7f5Dc+aGsK6CbxPYY+dLk9rd12PnYQWz6SjbEJMW03M4Y2Qj2ZjFslg4ZUQcrZXTwMug4nUHDRPXqxAFBpKKfFsovSBwGiCYFFCGKiiEKHEYPLza/T2owpRDSaRa/MmeTXwla4j7AmFQd0kxtIrYKEK9R0G5Uy0HGPM+wrC6i41L+A4avez7kYhuYbO9ess+p8VARv0RuEgue0xB/OFaaX5GEvJsTMTFsYX0ZJ3XQP3rQ8nu7+5tLO1ztZrv3w7YM6DaIUMhCwQbDw9+z4SkKYgQdvsA/wBrYgleUhdXncAAAAASUVORK5CYII=',
    },
    {
      title: 'Continue with Facebook',
      logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAD30lEQVR4AayShW4cMRCGLQgzHArKDK9xor5KnyDMSZmZmZmZRWWuKMy8e3y7U8/KvXG6PlR+6dM3Wtv/tElYulnzHXI918HnvQZ7PNfgGfdvz1XQEJzFtz14B++y+crCO+D2XoG97ssw475swhwuGWSOK26T3zX24luWbZbehTxe1uS+YOiuCzGwOB+3mA2yAvcFU8cO7Mrsf30R3Lz4nfMcL+eglZyNkm3QGXZhJ0snzrOw3nE61uc4zQs4wmKOxC3PaIszZA4/I2On6zSsY8ni4P9Kx6loX/WJMCCOk5G47dCZ+r79HLtxR8LfueN45F318TDEORYiW4TJHBcvbf8QhT/TJoRiJkQME2bCJvRpJnwaM8TbuX24Q/k3wS82VR0JwRwOB8nSjF5xJgRvhgxIEtEj3kngLibHcQzc1YdDetWhICSj8iD5UW8MUsX+PoBGdNzJ/qXqQHBv5f4AVHCEBX4yp1LMG26EIJ2I+2hpFn18J8OsuQi5lXv9MxV7/ZAul35HIY0k7cCduJtV7tN95bt0sNgdt5g1sjR/GrX/+E9+j8DyI35xV7eh6q/cpftY2Q5tDwfSoVxYj5jwf5Yf4qV0j+bknXtY2bbZZxxIh9KtlkERfjaD52QFcgdSvl17xkq3zP4u3TwDSAlZAZ2pgmeZgrtZ6aZpraRrGpR0kuVZFTpXv1eBu1lpx5RW3DEFFu1kmWzSM21AiehC04wWc/uUxorbpn4XtU6CiuLWKcvZ5HVPxN7ZQkZwNytqnnxW1DwBSGETWSabnPsSkjuV4G5W2DC+hwPJyCZdL/22ngLJYt7DihonfAW1Y2BRR5bJJhtvaeL9OFoJ7mZrGiC3sHb8b6vlcdswFATRL2ZCDagAX12H+3DOOWe7A8d2fFQZlsRMXpzu6z8kVnGdPcDgDbRJ5InP/nFB3lFOTMlck1TVuW8gD8wzcRO3FeQfFvfeQUbeQU5M2K0yOGBJXlVjcmaO1HFTsernecPZTd/c3ZQ0CeTM7M+S3L0MNWbpT/a94abql7ebXDrburidECiZa5LsspZUZO+kzNI2Z31r9JPsmlx7M2namzHZG7J1vaQkp6qBff09csYN3FKS6jt5w1mPA2stos8sCb/b6zFzIPMcduOG+kzORjpurUaBtRKRuRwSsz8LqnpWQuaoV8MAu9V3VF/MG9Zi2DQXAxrwUlhSENeZA7aWwyY/+bc1tkKu/hOXxkLwZswHVLlTUlINNW0mjFnswC71W+FtGLOd+9ps+7k2qw/MtEmSrlNZB+c6z5jBrPo3nZNjzXQm1FTrjgSp6dYDakr3oFd9U+9y1lO9tTZT6gAAAABJRU5ErkJggg==',
    },
    {
      title: 'Continue with Appe',
      logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAC5UlEQVR4Aa1XQ3hkQRjc+ynX2OZtbfu+tm3b1nlt27a9O4qNS5xxbdd+cTKvXydT31fJoPuvmvf6/ejw86dBlX6CwwQXCq6t5cLaz/xV4+ld6F8r9NdgsCAjIwf5+UUoLCwBydf8jN+JNQbBddzjDQM+gocErRSyWm2QgWu4lntq9/q01UAfwYKCgmK43W6ognu4lzEE+6oamCboLC0tR3vBGIwlOF2vgZm5uQWoqamBXrhcLpw5cxZ79uxFKxCxrGBMxpYZ6Eu33KAXNDp+/AQEBgbzv8Y6Kxi7+e1ofuAKVS/7zp27KE7i6dNnem5HAbVaM3CYh0YF/PWRkdEUpxHoQe3BPNTcQJCgTc9pT0tLh8VigdPpBLFv3368evVKBC7A16/fkJmZKX06qCXo39jAej67Wnjx4iVGjBiJ0NBwBAeHYsCAgTh48BCuXLmCKVOmIioqBrwS4eGRGDduPMxmMzyBWtRsbMCglWSePXuOkJAwCuhmnz79YLVaPSUrGjDWGQhgCvWEyspKdOrURUk8JiYO799/0Exg1KQ2DQxjHveEO3fuKomTPBcyUJPaNLCQxcQTNm3arGzAYDBABmoK7UU0sE7rAC5dukxJPCgoRPy6DMhATWpLDWzbtl35Cty//0DBgOQW3LhxU9nAsGEj4HA4dN0CySHkwvy6bKfECRMmISsrS34IZY8hMXnyFAZV5rFjx6WPoa5E9PnzZ2XxpKQUlJaWaiUik1IqXrBgkZKB06fPwBOKiv4fwA3Ni5FdK3NVVFSgd+++usRnzJilXIzII7JynJOTAxaa7t17Yt68+bh37z6+fPmKCxcuYvToMejVqzdWrVrNMi0rx4cVGxIFKDQkCi2ZAhRaMklTavWqeF6epCltxuneasvLyurb8lmqg0lfLw4m/dozmh0RtBUV6R/NuJZ7avf6eGs4ZeIwMoVmZrYcTvkZv+MarlUZTlUZIDi8diRfX8uFtZ8FqMb7Bx+2VJbBTrlcAAAAAElFTkSuQmCC',
    },
  ];
  return (
    <View style={{backgroundColor: '#2242DA', flex: 1}}>
      <Text style={Style.welcomePage}>
        Let’s make your first digital business card
      </Text>
      <Image
        source={require('./Ellipse.png')}
        style={{
          height: 65,
          width: 65,
          position: 'absolute',
          top: 130,
          left: 35,
          zIndex: 1,
        }}
      />
      <View
        style={{
          backgroundColor: '#FFFFFF',
          width: 249,
          top: 154,
          height: 337,
          position: 'absolute',
          left: 55,
          borderWidth: 5,
          borderTopRightRadius: 20,
          borderColor: '#CCE5FF',
        }}>
        <Text
          style={{
            backgroundColor: '#54A4EE',
            color: '#FFFFFF',
            fontWeight: '500',
            textAlign: 'center',
            paddingTop: 10,
            width: 130,
            height: 40,
            borderRadius: 20,
            position: 'absolute',
            top: 10,
            left: 40,
          }}>
          Ryan John
        </Text>
        <View
          style={{
            backgroundColor: '#54A4EE36',
            width: 150,
            height: 60,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 20,
            position: 'absolute',
            top: 70,
            left: 60,
          }}>
          <Text>software engineer</Text>
          <Text
            style={{
              alignSelf: 'flex-end',
              paddingRight: 20,
              color: '#2242D8',
              fontWeight: 'bold',
            }}>
            At Google
          </Text>
        </View>
      </View>
      <View style={{flex: 1}}>
        <View
          style={{
            height: 413,
            width: 375,
            backgroundColor: '#FFFFFF',
            alignItems: 'center',
            position: 'absolute',
            bottom: 0,
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
          }}>
          <View
            style={{
              width: 60,
              height: 7,
              backgroundColor: '#E5ECFF',
              position: 'absolute',
              top: 15,
              borderRadius: 42,
            }}
          />
          <Pressable
            style={Style.signUp}
            onPress={() => {
              navigation.navigate('SignUp');
            }}>
            <Text style={Style.signUpText}>Sign up</Text>
          </Pressable>
          <Pressable style={Style.LogIn}>
            <Text style={Style.logInText}>Login to App</Text>
          </Pressable>
          <View style={Style.divBar}>
            <View style={Style.frstLine} />
            <Text style={Style.divText}>or</Text>
            <View style={Style.secLine} />
          </View>
          <View style={{marginTop: 20}}>
            <FlatList
              data={SignupOptions}
              renderItem={({item}) => (
                <Pressable style={Style.otherSignup}>
                  <Image
                    source={{
                      uri: item.logo,
                    }}
                    style={{height: 26, width: 26}}
                  />
                  <Text style={Style.otherSignupText}>{item.title}</Text>
                </Pressable>
              )}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default WelcomePage;
