import { Group, Paper, SimpleGrid, Text } from '@mantine/core';
import { IconArrowDownRight, IconArrowUpRight } from '@tabler/icons-react';
import { BsEye, BsPostcardHeart,  } from 'react-icons/bs';
import { FaUser, FaUsersCog } from 'react-icons/fa';
import { formatNumber } from '../utils';

const icons = {
    user : FaUsersCog,
    view: BsEye,
    post: BsPostcardHeart,
    users: FaUser,
}

const Stats = ({dt}) => {

            const data = [
                {
                    title: "TOTAL POST",
                    icon: "post",
                    value: formatNumber(dt?.totalPosts ?? 0),
                    diff: 34,
                },
                {
                    title: "FOLLOWERS",
                    icon: "users",
                    value: formatNumber(dt?.followers ?? 0),
                    diff: -13,
                },
                {
                    title: "TOTAL VIEWS",
                    icon: "view",
                    value: formatNumber(dt?.totalViews ?? 0),
                    diff: 18,
                },
                {
                    title: "TOTAL WRITERS",
                    icon: "user",
                    value: formatNumber(dt?.totalWriters ?? 0),
                    diff: -30,
                },
            ];


   const stats  = data?.map((stat)=>{
    const Icon = icon[stat.icon];
    const DiffIcon = stat.diff > 0 ? IconArrowUpRight : IconArrowDownRight;
       
    return(
        <Paper withBorder p="md" key={stat.title}>
        <Group justify='space-between'>
          <Text className='capitalize text-sm'>{stat.title}</Text>
          <Icon size= "1.4rem" stroke={1.5} />
        </Group>
        </Paper>
    )
    
    




   })  ;     
  return  (
    <SimpleGrid cols={{base: 1, xs: 2, md: 4}}>  {stats} </SimpleGrid>
  )
  
}

export default Stats;
