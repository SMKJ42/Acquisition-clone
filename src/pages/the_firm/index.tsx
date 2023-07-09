import { useRouter } from "next/router";
import { useEffect } from "react";

const TheFirm = () => {
  const router = useRouter();
  useEffect(() => {
    return void router.push("/the_team");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default TheFirm;
