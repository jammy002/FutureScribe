import {  useMantineColorScheme } from "@mantine/core";
import useStore from "../store";
import { useDisclosure } from "@mantine/hooks";
import { useEffect } from "react";
import { useAnalytics } from "../hooks/post-hook";
import { toast, Toaster } from "sonner";
import Stats from "../components/Stats";
import Graph from "../components/Graph";



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

         <div className="w-full py-8">
          <p className="py-5 text-base font-medium">
            View Stats for last 28 days</p>
                
            <Graph
            dt={data?.viewStats}
            />   


         </div>


    </div>
  )
}

export default Dashboard;
