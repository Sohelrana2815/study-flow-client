import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();


const {data: users = [],refetch}= useQuery({
  queryKey:['user'],
  queryFn:async()=>{
    const res  = await axiosSecure.get('/users');
    return res.data;
  }
})

  return (
    <div>
      <p className="text-center">Total Users : {users.length}</p>
    </div>
  );
};

export default AllUsers;