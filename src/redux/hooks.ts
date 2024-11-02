import { useSelector, useDispatch } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from './store';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


const useDeviceId = () => {
  const [deviceId, setDeviceId] = useState<string>();

  useEffect(() => {
    // Check for an existing device ID in local storage
    let storedDeviceId = localStorage.getItem('device_id');

    // If no ID is found, generate a new one and store it
    if (!storedDeviceId) {
      storedDeviceId = uuidv4();
      localStorage.setItem('device_id', storedDeviceId);
    }

    // Update state with the device ID
    setDeviceId(storedDeviceId);
  }, []);

  return deviceId;
};

export default useDeviceId;
