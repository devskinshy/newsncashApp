import React, {forwardRef} from 'react';
import WebView from 'react-native-webview';

const Web = forwardRef(({uri, handleOnLoadEnd, handleOnMessage}, webRef) => {
  const onLoadEnd = () => {
    if (!webRef.current) {
      return;
    }

    handleOnLoadEnd && handleOnLoadEnd();
  };

  const onMessage = ({nativeEvent: {data}}) => {
    handleOnMessage && handleOnMessage(JSON.parse(data));
  };

  return (
    <WebView
      ref={webRef}
      source={{uri}}
      onLoadEnd={onLoadEnd}
      onMessage={onMessage}
    />
  );
});

export default Web;
