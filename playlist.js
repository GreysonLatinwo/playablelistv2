/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 */

'use strict';
import Colors from './Colors';
import type { Node } from 'react';
import openURLInBrowser from 'react-native/Libraries/Core/Devtools/openURLInBrowser';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

var playlist = 
    [
        { "songID": 1, "weight": 0, "albumURI": "spotify:album:3PWTw7MPyvU80Z6pDgHUaC", "albumImage": "https://i.scdn.co/image/ab67616d0000b273610d7118f18ce95848e43470", "trackIndex": 1, "trackURI": "spotify:track:34PhB0kHT00utubP3aTau8", "trackName": "Burn The Hoods", "artist": "Ski Mask The Slump God", "misc": "" },
        { "songID": 2, "weight": 0, "albumURI": "spotify:album:7CUmEkXzsnL13LU8XQnlbC", "albumImage": "https://i.scdn.co/image/ab67616d0000b273faf2d138d50adc9b2db7bc47", "trackIndex": 4, "trackURI": "spotify:track:4N7i6RfJXMWfkx9Zr6pzkJ", "trackName": "E-ER (feat. Danny Towers & Lil Yachty)", "artist": "DJ Scheme", "misc": "" },
        { "songID": 3, "weight": 0, "albumURI": "spotify:album:6vWPa9ZBLjjh7jsG4hRskQ", "albumImage": "https://i.scdn.co/image/ab67616d0000b27323fdbe2d9248f013d13a94f5", "trackIndex": 1, "trackURI": "spotify:track:0Eqm7hD828cATBLUx2fJox", "trackName": "Meditate (feat. J.I.D.)", "artist": "EARTHGANG", "misc": "" },
        { "songID": 4, "weight": 0, "albumURI": "spotify:album:2nkto6YNI4rUYTLqEwWJ3o", "albumImage": "https://i.scdn.co/image/ab67616d0000b2738940ac99f49e44f59e6f7fb3", "trackIndex": 5, "trackURI": "spotify:track:21yRtB6B8EMounImAfHRCP", "trackName": "Who Dat Boy (feat. A$AP Rocky)", "artist": "Tyler, The Creator", "misc": "" },
        { "songID": 5, "weight": 10, "albumURI": "spotify:album:3wINP6SbT7TqiaYGo3Lj8f", "albumImage": "https://i.scdn.co/image/ab67616d0000b27334d0138bb75a2cd47adc8690", "trackIndex": 9, "trackURI": "spotify:track:5TsuGEJwkXgipmEWQiajW2", "trackName": "Drown", "artist": "redveil", "misc": "" },
        { "songID": 6, "weight": 11, "albumURI": "spotify:album:2oI6gtIXrvNiL2VEMmj5kY", "albumImage": "https://i.scdn.co/image/ab67616d0000b273f5991f6f1f0de2277bb8d948", "trackIndex": 7, "trackURI": "spotify:track:46Lx5epWOQBA3J86ovnxmV", "trackName": "Workin Out", "artist": "JID", "misc": "" },
        { "songID": 7, "weight": 12, "albumURI": "spotify:album:392p3shh2jkxUxY2VHvlH8", "albumImage": "https://i.scdn.co/image/ab67616d0000b2737aede4855f6d0d738012e2e5", "trackIndex": 7, "trackURI": "spotify:track:0725YWm6Z0TpZ6wrNk64Eb", "trackName": "Super Rich Kids", "artist": "Frank Ocean", "misc": "" },
        { "songID": 8, "weight": 0, "albumURI": "spotify:album:6HB5Nq7lSjvTs3gJom6BXI", "albumImage": "https://i.scdn.co/image/ab67616d0000b273795e7069de7cb188b7c821b4", "trackIndex": 4, "trackURI": "spotify:track:3GXSywNvYLAVUCtjMHkKDh", "trackName": "E. Coli (feat. Earl Sweatshirt)", "artist": "The Alchemist", "misc": "" },
        { "songID": 9, "weight": 0, "albumURI": "spotify:album:5zi7WsKlIiUXv09tbGLKsE", "albumImage": "https://i.scdn.co/image/ab67616d0000b2737005885df706891a3c182a57", "trackIndex": 6, "trackURI": "spotify:track:0fv2KH6hac06J86hBUTcSf", "trackName": "NEW MAGIC WAND", "artist": "Tyler, The Creator", "misc": "" },
        { "songID": 10, "weight": 0, "albumURI": "spotify:album:2Ti79nwTsont5ZHfdxIzAm", "albumImage": "https://i.scdn.co/image/ab67616d0000b273806c160566580d6335d1f16c", "trackIndex": 9, "trackURI": "spotify:track:7CkbRn6S0itJqcqn88AtSV", "trackName": "going down!", "artist": "XXXTENTACION", "misc": "" },
        { "songID": 11, "weight": 1, "albumURI": "spotify:album:600ClrWRsAr7jZ0qjaBLHz", "albumImage": "https://i.scdn.co/image/ab67616d0000b2734c8974d1d37295694d7d4e8f", "trackIndex": 4, "trackURI": "spotify:track:011ZwIM48eD8ee2UBpG8nK", "trackName": "12.38 (feat. 21 Savage, Ink & Kadhja Bonet)", "artist": "Childish Gambino", "misc": "" },
        { "songID": 12, "weight": 2, "albumURI": "spotify:album:76290XdXVF9rPzGdNRWdCh", "albumImage": "https://i.scdn.co/image/ab67616d0000b2734c79d5ec52a6d0302f3add25", "trackIndex": 3, "trackURI": "spotify:track:593W4qZOwwdqF6YnimJjL6", "trackName": "Doves In The Wind (feat. Kendrick Lamar)", "artist": "SZA", "misc": "" },
        { "songID": 13, "weight": 1, "albumURI": "spotify:album:4eLPsYPBmXABThSJ821sqY", "albumImage": "https://i.scdn.co/image/ab67616d0000b2738b52c6b9bc4e43d873869699", "trackIndex": 2, "trackURI": "spotify:track:6HZILIRieu8S0iqY8kIKhj", "trackName": "DNA.", "artist": "Kendrick Lamar", "misc": "" },
        { "songID": 14, "weight": 0, "albumURI": "spotify:album:2vMi9So8GxXiqaT2zJXbQG", "albumImage": "https://i.scdn.co/image/ab67616d0000b273530e4657d123427b8f54f091", "trackIndex": 9, "trackURI": "spotify:track:2PI3qpTqYowwMzOSQRuj73", "trackName": "Weeeeee", "artist": "Trippie Redd", "misc": "" },
        { "songID": 15, "weight": 1, "albumURI": "spotify:album:6qRbGZqJ3aQY8N8bcHc1ug", "albumImage": "https://i.scdn.co/image/ab67616d0000b27392bb8047753d97ff274b2f5f", "trackIndex": 1, "trackURI": "spotify:track:5aXgz1oKK8Q9z9xvTmSnrO", "trackName": "Topanga", "artist": "Trippie Redd", "misc": "" },
        { "songID": 16, "weight": 1, "albumURI": "spotify:album:5zi7WsKlIiUXv09tbGLKsE", "albumImage": "https://i.scdn.co/image/ab67616d0000b2737005885df706891a3c182a57", "trackIndex": 10, "trackURI": "spotify:track:1hz7SRTGUNAtIQ46qiNv2p", "trackName": "GONE, GONE / THANK YOU", "artist": "Tyler, The Creator", "misc": "" },
        { "songID": 17, "weight": 1007, "albumURI": "spotify:album:57oeOi7PIB3LIirXRGvKXO", "albumImage": "https://i.scdn.co/image/ab67616d0000b273855535f2c11d0800f3ee9f81", "trackIndex": 9, "trackURI": "spotify:track:1VhdUYpBM9oMR9DZeScnnB", "trackName": "Red", "artist": "BBY KODIE", "misc": "" },
        { "songID": 18, "weight": 1002, "albumURI": "spotify:album:6JF49ixyHmOgS0Rsda2k42", "albumImage": "https://i.scdn.co/image/ab67616d0000b273986cd6b330f7405b17a604f4", "trackIndex": 3, "trackURI": "spotify:track:2bXNVNDdYvAXxf5f33WHy7", "trackName": "Cilvia Demo", "artist": "Isaiah Rashad", "misc": "" },
        { "songID": 19, "weight": 1004, "albumURI": "spotify:album:40QTqOBBxCEIQlLNdSjFQB", "albumImage": "https://i.scdn.co/image/ab67616d0000b2734893508eb6495df8ddb015e0", "trackIndex": 14, "trackURI": "spotify:track:4oQkcfukOHfKsmeoeXQLWC", "trackName": "Rusty (feat. Domo Genesis & Earl Sweatshirt)", "artist": "Tyler, The Creator", "misc": "" },
        { "songID": 20, "weight": 1006, "albumURI": "spotify:album:63fPXLpTxvDR7LgSOZIaly", "albumImage": "https://i.scdn.co/image/ab67616d0000b273eff5e684bd079becefcae931", "trackIndex": 10, "trackURI": "spotify:track:03Z9Xiu6te6MbMRlICuDGL", "trackName": "Garbage", "artist": "Tyler, The Creator", "misc": "" },
        { "songID": 21, "weight": 1020, "albumURI": "spotify:album:3wINP6SbT7TqiaYGo3Lj8f", "albumImage": "https://i.scdn.co/image/ab67616d0000b27334d0138bb75a2cd47adc8690", "trackIndex": 4, "trackURI": "spotify:track:7GnDGNjkRDiB0NQ2yCf3w2", "trackName": "5500", "artist": "redveil", "misc": "" },
        { "songID": 22, "weight": 2100, "albumURI": "spotify:album:7ibEo7IK9E9mi2sU5rJNDC", "albumImage": "https://i.scdn.co/image/ab67616d0000b2731dd05262c971257279fcaf61", "trackIndex": 15, "trackURI": "spotify:track:67nRofeeMvysUeO4FxB6tL", "trackName": "Sam (Is Dead) (feat. Domo Genesis & Tyler, The Creator)", "artist": "Odd Future", "misc": "" },
        { "songID": 23, "weight": 1000, "albumURI": "spotify:album:40GMAhriYJRO1rsY4YdrZb", "albumImage": "https://i.scdn.co/image/ab67616d0000b2739416ed64daf84936d89e671c", "trackIndex": 4, "trackURI": "spotify:track:3cjF2OFRmip8spwZYQRKxP", "trackName": "Feel No Ways", "artist": "Drake", "misc": "" }
    ]

const Playlist = (): Node => (
    <View style={styles.container}>
        {playlist.map(({ songID, trackName, albumImage, artist }) => {
            return (
                <React.Fragment key={songID}>
                    <View style={styles.separator} />
                    <TouchableOpacity
                        accessibilityRole={'button'}
                        onPress={() => openURLInBrowser(albumImage)}
                        style={styles.linkContainer}>
                        <Text style={styles.link}>{trackName}</Text>
                        <Text style={styles.description}>{artist}</Text>
                    </TouchableOpacity>
                </React.Fragment>
            );
        })}
    </View>
);

const styles = StyleSheet.create({
    container: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    linkContainer: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 8,
    },
    link: {
        flex: 2,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.primary,
    },
    description: {
        flex: 3,
        paddingVertical: 16,
        fontWeight: '400',
        fontSize: 18,
        color: Colors.dark,
    },
    separator: {
        backgroundColor: Colors.light,
        height: 1,
    },
});

export default Playlist;