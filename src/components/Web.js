import React, {useRef} from 'react';
import WebView from 'react-native-webview';

const Web = ({uri, initData, handleOnMessage}) => {
  const webRef = useRef(null);

  const onLoadEnd = () => {
    if (!webRef.current) {
      return;
    }

    webRef.current.postMessage(JSON.stringify(initData));
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
};

export default Web;
