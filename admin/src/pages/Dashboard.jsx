import {  useMantineColorScheme } from "@mantine/core";
import useStore from "../store";
import { useDisclosure } from "@mantine/hooks";
import { useEffect } from "react";
import { useAnalytics } from "../hooks/post-hook";
import { toast, Toaster } from "sonner";
import Stats from "../components/Stats";



const Dashboard = () => {

  const {colorScheme} = useMantineColorScheme();
  const {user} = useStore();

  const [visible, {toggle}] = useDisclosure(false);
  const theme = colorScheme === "dark";

  const {data, isPending, mutate}= useAnalytics(toast, toggle, user?.token)


  useEffect(()=> {
    mutate()
  }, []);
  

  return (
     <div className="w-full">
      <Stats dt={data} />
    </div>
  )
}

export default Dashboard;
