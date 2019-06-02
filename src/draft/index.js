import React, {
  useState,
  useReducer,
  useEffect,
  useContext,
  createContext,
} from 'react';
import { Socket } from 'phoenix';

const SocketContext = createContext();

export const SocketProvider = ({ options, children }) => {
  const socket = new Socket('/socket', { params: options });

  useEffect(() => socket.connect(), [options]);

  return (
    <SocketContext.Provider value={socket}>
      { children }
    </SocketContext.Provider>
  );
};

const channelWarning = () => (
  () => console.error(`cannot broadcast before the channel has been joined`)
);

const joinChannel = (socket, topic, dispatch, setBroadcast) => {
  const channel = socket.channel(topic, { client: 'browser' });

  channel.onMessage = (evt, payload) => {
    dispatch({
      evt,
      payload,
    });

    return payload;
  };

  channel
    .join()
    .receive("ok", ({ messages }) => console.log(`joined channel ${messages || ''}`))
    .receive("error", ({ reason }) => console.error(`something broke for reason: ${reason}`));
    
  setBroadcast(() => channel.push.bind(channel));

  return () => channel.leave();
};


export const useChannel = (topic, reducer, initialState) => {
  const socket = useContext(SocketContext);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [broadcast, setBroadcast] = useState(channelWarning);

  useEffect(() => joinChannel(socket, topic, dispatch, setBroadcast), [topic]);

  return [state, broadcast];
};

export const draftReducer = (state, { action, payload }) => {
  switch (action) {
    case 'phx_reply': {
      return {
        ...state,
        joined: true,
      };
    }

    default:
      return state;
  }
};