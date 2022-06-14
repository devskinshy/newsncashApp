import React, {forwardRef, useState} from 'react';
import {ScrollView, StyleSheet, Dimensions, RefreshControl} from 'react-native';
import WebView from 'react-native-webview';
import ListLoading from './list/ListLoading';

const styles = StyleSheet.create({
  view: {flex: 1, height: '100%'},
});

const Web = forwardRef(({uri, handleOnLoadEnd, handleOnMessage}, webRef) => {
  const [isEnabled, setEnabled] = useState(false);

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
    // <ListLoading />
    <ScrollView
      contentContainerStyle={styles.view}
      refreshControl={
        <RefreshControl
          // refreshing={refreshing}
          onRefresh={onRefresh}
          refreshing={false}
          enabled={isEnabled}
        />
      }>
      <WebView
        onScroll={e => setEnabled(e.nativeEvent.contentOffset.y === 0)}
        ref={webRef}
        source={{uri}}
        startInLoadingState={true}
        renderLoading={() => <ListLoading />}
        onLoadEnd={onLoadEnd}
        onMessage={onMessage}
      />
    </ScrollView>
  );
});

export default Web;
