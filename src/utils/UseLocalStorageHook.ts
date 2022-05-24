import {useState, useEffect} from "react";

/**
 * {@link React.useState} extended to save to the browsers localStorage.
 * @param key The unique key for the storage item.
 * @param defaultValue Default value for the storage item.
 */
const useLocalStorage = <T>(key: string, defaultValue: T): [value: T, setValue: (value: T) => void] => {
    const [_value, _setValue] = useState<T>(
        localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)!) : defaultValue
    );

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(_value));
    }, [_value, key]);

    return [_value, _setValue];
}

export default useLocalStorage;