import { useLayoutEffect, useState, useEffect } from "react";
import debounce from "lodash/debounce";

const useDevice = (): string => {
  const [device, setDevice] = useState("");
  useEffect(() => {
    setDevice(window.innerWidth < 768 ? "mobile" : "desktop");
  }, []);

  useLayoutEffect(() => {
    const updateSize = (): void => {
      setDevice(window.innerWidth < 768 ? "mobile" : "desktop");
    };
    window.addEventListener("resize", debounce(updateSize, 250));
    // updateSize();
    return (): void => window.removeEventListener("resize", updateSize);
  }, []);

  return device;
};

export default useDevice;
