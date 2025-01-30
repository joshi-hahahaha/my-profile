import { useEffect, useState } from "react";

const useIsPhone = (): boolean => {
  const [isPhone, setIsPhone] = useState<boolean>(false);

  useEffect(() => {
    const checkPhone = () =>
      setIsPhone(window.matchMedia("(max-width: 768px)").matches);

    checkPhone();

    window.addEventListener("resize", checkPhone);
    return () => window.removeEventListener("resize", checkPhone);
  }, []);

  return isPhone;
};

export default useIsPhone;
