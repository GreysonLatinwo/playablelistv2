/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { SearchBar } from 'react-native-elements';
import Playlist from './Playlist.js'
const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.body}>
          <SearchBar
            placeholder="Search Songs"
          />
        </View>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <Text style={styles.sectionTitle}>Playlist 0xA54B25a1EA558512DEF1adD7b2b301c16051C065</Text>
            <Playlist />
            <Image
              style={styles.tinyLogo}
              source={{
                uri: 'https://i.scdn.co/image/ab67616d0000b273610d7118f18ce95848e43470',
              }}
            />
            <Text style={styles.title}>{'Burn The Hoods\n'}
              <Text style={styles.artist}>
                {'Ski Mask The Slump God'}
              </Text>
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.dark,
    color: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.dark,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  title: {
    flex: 3,
    paddingVertical: 12,
    fontWeight: '400',
    fontSize: 16,
    color: Colors.lighter,
    textAlign: 'center',
  },
  artist: {
    flex: 3,
    paddingVertical: 16,
    fontWeight: '400',
    fontSize: 12,
    color: Colors.lighter,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.lighter,
    textAlign: 'center',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.lighter,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
