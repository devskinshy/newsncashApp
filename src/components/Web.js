import React, {forwardRef, useState} from 'react';
import {useEffect} from 'react';
import {ScrollView, StyleSheet, Dimensions, RefreshControl} from 'react-native';
import WebView from 'react-native-webview';
import ListLoading from './list/ListLoading';

const styles = StyleSheet.create({
  view: {flex: 1, height: '100%', position: 'relative'},
  refreshControl: {
    backgroundColor: '#cccccc',
    position: 'absolute',
  },
});

const Web = forwardRef(({uri, handleOnLoadEnd, handleOnMessage}, webRef) => {
  let timer;
  const [isScrolled, setScrolled] = useState(false);
  const [isEnabled, setEnabled] = useState(true);

  const onLoadEnd = () => {
    if (!webRef.current) {
      return;
    }

    // setLoading(true);
    handleOnLoadEnd && handleOnLoadEnd();
  };

  const onMessage = ({nativeEvent: {data}}) => {
    handleOnMessage && handleOnMessage(JSON.parse(data));
  };

  const onRefresh = () => {
    if (!webRef.current) {
      return;
    }
    webRef.current.reload();
  };

  return (
    <ScrollView
      contentContainerStyle={styles.view}
      refreshControl={
        <RefreshControl
          refreshing={false}
          enabled={isEnabled}
          onRefresh={onRefresh}
          styles={styles.refreshControl}
        />
      }>
      <WebView
        onScroll={e => {
          setEnabled(e.nativeEvent.contentOffset.y === 0);
          setScrolled(true);
          clearTimeout(timer);
          timer = setTimeout(() => {
            setScrolled(false);
          }, 1000);
        }}
        ref={webRef}
        source={{uri}}
        startInLoadingState={true}
        renderLoading={() => <ListLoading />}
        onLoadEnd={onLoadEnd}
        onMessage={onMessage}
        nestedScrollEnabled={isScrolled}
      />
    </ScrollView>
  );
});

export default Web;
